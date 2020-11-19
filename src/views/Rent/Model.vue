<template>
  <div class="model">
    <div class="filtered">
      <div v-for="(item, index) in values" :key="index">
        <label>
          <input class="radio" type="radio" :value="item.type" v-model="filtered">
          <span>{{ item.text }}</span>
        </label>
      </div>
    </div>
    <div class="cars">
      <CarCard v-for="item in cars" :key="item.id" :car="item"/>
    </div>
  </div>
</template>

<script>

import CarCard from '@/components/car-card.vue';

export default {
  name: 'Model',
  components: {
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
      cars: [
        {
          id: 0,
          title: 'ELANTRA',
          price: '12 000 - 25 000 ₽',
          img: '/images/car-card(1).png',
        },
        {
          id: 1,
          title: 'i30 N',
          price: '10 000 - 32 000 ₽',
          img: '/images/car-card(2).png',
        },
        {
          id: 2,
          title: 'CRETA',
          price: '12 000 - 25 000 ₽',
          img: '/images/car-card(3).png',
        },
        {
          id: 3,
          title: 'SONATA',
          price: '10 000 - 32 000 ₽',
          img: '/images/car-card(4).png',
        },
        {
          id: 4,
          title: 'ELANTRA',
          price: '12 000 - 25 000 ₽',
          img: '/images/car-card(1).png',
        },
        {
          id: 5,
          title: 'i30 N',
          price: '10 000 - 32 000 ₽',
          img: '/images/car-card(2).png',
        },
      ],
    };
  },
};

</script>

<style lang="scss" scoped>

.model {
  .filtered {
    display: flex;
    margin-bottom: 48px;

    label {
      margin-right: 10px;
      color: #999999;
      font-size: 14px;
      span {
        padding-left: 5px;
      }
    }
  }
  .cars {
    display: flex;
    flex-wrap: wrap;
    width: 736px;
  }
}

</style>
