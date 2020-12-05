<template>
  <div class="model">
    <div class="filtered">
      <div class="filtered-item" v-for="item in categories" :key="item.id">
        <cs-radio
          :default-value="item.id"
          v-model="filtered"
        >
          {{ item.name }}
        </cs-radio>
      </div>
    </div>
    <div v-if="!preloader" class="cars">
      <CarCard v-for="item in filteredCars" :key="item.id" :car="item" @click="getCarById"/>
    </div>
    <div v-else class="cars">
      <v-progress-circular
        indeterminate
        color="green"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

import CarCard from '../../components/car-card.vue';
import CsRadio from '../../components/elements/cs-radio.vue';

export default {
  name: 'Model',
  components: {
    CsRadio,
    CarCard,
  },
  data() {
    return {
      filtered: '',
    };
  },

  computed: {
    ...mapState({
      preloader: 'preloader',
      categories: 'categories',
      car: 'car',
    }),
    ...mapGetters({
      cars: 'getCars',
    }),
    filteredCars() {
      return this.cars(this.filtered);
    },
  },

  created() {
    this.loadCars();
    this.loadCategories();
  },

  methods: {
    ...mapActions({
      loadCategories: 'loadCategories',
      loadCars: 'loadCars',
      loadCarById: 'loadCarById',
    }),
    getCarById(id) {
      this.loadCarById(id);
    },
  },
};

</script>

<style lang="scss" scoped>

.model {
  .filtered {
    display: flex;
    margin-bottom: 48px;

    &-item {
      width: 120px;
    }
  }

  .cars {
    display: flex;
    flex-wrap: wrap;
    width: 736px;
  }
}

</style>
