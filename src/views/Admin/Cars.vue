<template>
  <div class="cars">
    <h1>Список авто</h1>
    <v-data-table
      v-if="cars"
      :headers="headers"
      :items="cars"
      item-key="name"
      class="elevation-1 cars__table"
      :search="search"
      :custom-filter="filterText"
      @click:row="onClickCar"
    >
      <template v-slot:top>
        <div class="d-flex justify-space-between pa-5">
          <v-text-field
            v-model="search"
            label="Начните вводить данные авто"
            class="mx-4"
            style="max-width: 300px"
          />
          <v-btn
            color="primary"
            dark
            large
            @click="onAdd"
            class="mb-2"
          >
            Добавить
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Cars',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapState('cars', ['cars']),
    headers() {
      return [
        {
          text: 'Марка, модель',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Класс',
          value: 'categoryId.name',
        },
        {
          text: 'Минимальная стоимость',
          value: 'priceMin',
        },
        {
          text: 'Максимальная стоимость',
          value: 'priceMax',
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      loadCars: 'cars/loadCars',
    }),
    filterText(value, search) {
      return value != null && search != null && typeof value === 'string' && value
        .toString()
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1;
    },
    onAdd() {
      this.$router.push({ name: 'Car' });
    },
    onClickCar({ id }) {
      this.$router.push({
        name: 'Car',
        params: { id },
      });
    },
  },
  created() {
    this.loadCars();
  },
};
</script>

<style lang="scss" scoped>
.cars {
  h1 {
    font-size: 29px;
    font-weight: 400;
    color: #3d5170;
    margin-bottom: 28.5px;
  }

  &__table {
    border-radius: 9px;
    color: #3d5170;

    ::v-deep {
      .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td {
        border-bottom: 0 !important;
      }

      .v-data-table__wrapper > table > thead > tr:last-child > th {
        border-bottom: 0 !important;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: -0.377143px;
        color: #3d5170 !important;
      }

      .v-data-footer {
        border-top: 0 !important;
        margin-top: 50px;
        padding-bottom: 10px;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 900px) {
  .cars {
    &__table {
      .v-btn {
        width: 100px;
        height: 35px;
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 600px) {
  .cars {
    &__table {
      .v-btn {
        height: 30px;
        width: 80px;
        font-size: 10px;
      }
    }
  }
}

</style>
