<template>
  <div class="model">
    <div class="filtered">
      <div class="filtered-item" v-for="(item, index) in values" :key="index">
        <cs-radio :default-value="item.type" v-model="filtered">{{ item.text }}</cs-radio>
      </div>
    </div>
    <div v-if="!preloader" class="cars">
      <CarCard v-for="item in cars" :key="item.id" :car="item"/>
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

import CarCard from '@/components/car-card.vue';
import CsRadio from '@/components/elements/cs-radio.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Model',
  components: {
    CsRadio,
    CarCard,
  },
  data() {
    return {
      filtered: null,
      values: [
        {
          text: 'Все модели',
          type: 0,
        },
        {
          text: 'Эконом',
          type: 1,
        },
        {
          text: 'Премиум',
          type: 2,
        },
      ],
      // cars: [
      //   {
      //     id: 0,
      //     title: 'ELANTRA',
      //     price: '12 000 - 25 000 ₽',
      //     img: '/images/car-card(1).png',
      //   },
      //   {
      //     id: 1,
      //     title: 'i30 N',
      //     price: '10 000 - 32 000 ₽',
      //     img: '/images/car-card(2).png',
      //   },
      //   {
      //     id: 2,
      //     title: 'CRETA',
      //     price: '12 000 - 25 000 ₽',
      //     img: '/images/car-card(3).png',
      //   },
      //   {
      //     id: 3,
      //     title: 'SONATA',
      //     price: '10 000 - 32 000 ₽',
      //     img: '/images/car-card(4).png',
      //   },
      //   {
      //     id: 4,
      //     title: 'ELANTRA',
      //     price: '12 000 - 25 000 ₽',
      //     img: '/images/car-card(1).png',
      //   },
      //   {
      //     id: 5,
      //     title: 'i30 N',
      //     price: '10 000 - 32 000 ₽',
      //     img: '/images/car-card(2).png',
      //   },
      // ],
    };
  },

  computed: {
    ...mapState({
      cars: 'cars',
      preloader: 'preloader',
    }),
  },

  mounted() {
    this.getCars();
  },

  methods: {
    ...mapActions({
      getCars: 'getCars',
    }),
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
