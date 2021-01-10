<template>
  <div class="total">
    <div class="description">
      <p>{{ car.name }}</p>
      <p><span>{{ car.number }}</span></p>
      <p><b>Топливо:</b> {{ car.tank }}% </p>
      <p><b>Доступна с</b> {{ $store.getters.getStartDate }}</p>
    </div>
    <div class="car">
      <img :src="`${car.thumbnail.path}`" alt="car.pic"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Total',
  computed: {
    ...mapState(['car', 'startDate']),
  },
};
</script>

<style lang="scss" scoped>

.total {
  display: flex;
  justify-content: space-between;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      border: 1px solid #999999;
      border-radius: 4px;
      padding: 5px;
    }
  }

  .car {
    img {
      width: 256px;
      height: 116px;
    }
  }
}

@media (max-width: 1000px) {
  .total {
    flex-direction: column-reverse;
  }
}

@media (max-width: 400px) {
  .total {
    .car {
      img {
        width: 200px;
        height: 85px;
      }
    }
  }
}

</style>
