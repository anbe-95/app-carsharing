<template>
  <div class="car-card" @click="$emit('click', car)">
    <p>{{ car.name }}</p>
    <span>{{ car.priceMin + ' - ' + car.priceMax }} ₽</span>
    <img :src="`${car.thumbnail.path}`" alt="car.pic"/>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    car: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>

.car-card {
  width: 50%;
  height: 250px;
  padding: 16px;
  border: 1px solid #EEEEEE;

  p {
    font-size: 18px;
  }

  span {
    color: #999999;
    font-size: 14px;
  }

  img {
    width: 100%;
  }

  &.selected {
    border: 1px solid #0EC261;
  }

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
}

</style>
