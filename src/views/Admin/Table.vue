<template>
  <div class="table">
    <h1>Список авто</h1>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Начните вводить данные авто"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      search: '',
      desserts: [
        {
          name: 'Hyundai',
          model: 'Elantra',
          typeCar: 'Седан',
          classCar: 'Эконом',
          year: 2017,
          cost: '12 000 - 25 000',
        },
        {
          name: 'Hyundai',
          model: 'i30N',
          typeCar: 'Хэтчбек',
          classCar: 'Премиум',
          year: 2019,
          cost: '10 000 - 32 000',
        },
        {
          name: 'Hyundai',
          model: 'Creta',
          typeCar: 'Кроссовер',
          classCar: 'Эконом',
          year: 2018,
          cost: '12 000 - 25 000',
        },
        {
          name: 'Hyundai',
          model: 'Sonata',
          typeCar: 'Седан',
          classCar: 'Премиум',
          year: 2020,
          cost: '10 000 - 32 000',
        },
        {
          name: 'Hyundai',
          model: 'Elantra',
          typeCar: 'Седан',
          classCar: 'Эконом',
          year: 2017,
          cost: '12 000 - 25 000',
        },
        {
          name: 'Hyundai',
          model: 'i30N',
          typeCar: 'Хэтчбек',
          classCar: 'Премиум',
          year: 2019,
          cost: '10 000 - 32 000',
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'Марка',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Модель',
          value: 'model',
        },
        {
          text: 'Тип авто',
          value: 'typeCar',
        },
        {
          text: 'Класс',
          value: 'classCar',
        },
        {
          text: 'Год выпуска',
          value: 'year',
        },
        {
          text: 'Стоимость',
          value: 'cost',
        },
      ];
    },
  },
  methods: {
    filterText(value, search) {
      return value != null && search != null && typeof value === 'string' && value
        .toString().toLowerCase().indexOf(search) !== -1;
    },
  },
};
</script>

<style lang="scss" scoped>

.table {
  h1 {
    font-size: 29px;
    font-weight: 400;
    color: #3D5170;
    margin-bottom: 28.5px;
  }
}

</style>
