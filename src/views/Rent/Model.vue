<template>
  <div class="model">
    <div class="filtered">
      <div class="filtered-item" v-for="item in categories" :key="item.id">
        <cs-radio
          :default-value="item.id || ''"
          v-model="filtered"
        >
          {{ item.name }}
        </cs-radio>
      </div>
    </div>
    <div class="cars">
      <CarCard
        v-for="(item) in filteredCars"
        :key="item.id"
        :car="item"
        @click="getCar(item)"
        :class="{ selected: item.id === isActive }"
      />
    </div>
  </div>
</template>

<script>

import CarCard from '@/components/car-card.vue';
import CsRadio from '@/components/elements/cs-radio.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

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
    ...mapState(['categories', 'car']),
    ...mapGetters({
      cars: 'getCars',
    }),
    filteredCars() {
      return this.cars(this.filtered);
    },
    isActive() {
      return this.$store.getters.getCarInfo?.id;
    },
  },

  watch: {
    car() {
      this.$store.commit('reloadStateFromModel');
    },
  },

  created() {
    this.loadCars()
      .then(() => this.loadCategories());
  },

  methods: {
    ...mapActions(['loadCars', 'loadCategories']),
    getCar(car) {
      if (this.isActive === car.id) {
        this.$store.commit('setCar', {});
      } else {
        this.$store.commit('setPrice', car.priceMin);
        this.$store.commit('setCar', car);
      }
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

@media (max-width: 1200px) {
  .model {
    .cars {
      flex-direction: column;
    }
  }
}

@media (max-width: 900px) {
  .model {
    .cars {
      width: 650px;
    }
  }
}

@media (max-width: 600px) {
  .model {
    .filtered {
      flex-direction: column;
    }
  }
}

@media (max-width: 500px) {
  .model {
    .cars {
      width: 500px;
    }
  }
}

@media (max-width: 400px) {
  .model {
    .cars {
      width: 420px;
    }
  }
}

</style>
