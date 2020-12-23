<template>
  <div class="table">
    <h1>Список авто</h1>
    <v-btn color="primary" dark class="mb-2" @click="onAdd">Добавить</v-btn>
    <v-data-table
      v-if="cars"
      :headers="headers"
      :items="cars"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterText"
      @click:row="onClickCar"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Начните вводить данные авто"
          class="mx-4"
        />
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

.table {
  h1 {
    font-size: 29px;
    font-weight: 400;
    color: #3d5170;
    margin-bottom: 28.5px;
  }
}

</style>
