<template>
  <div class="car-card">
    <p>{{ car.title }}</p>
    <span>{{ car.price }}</span>
    <img :src="car.img" alt="car.pic"/>
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
  height: 224px;
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
    width: 256px;
    height: 116px;
  }
}
.car-card:hover {
  border: 1px solid black;
}

.car-card:active {
  border: 1px solid #0EC261;
}

</style>
