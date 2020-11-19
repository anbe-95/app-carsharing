<template>
  <div class="total">
    <div class="description">
      <p>Tesla, model 3</p>
      <p><span>К 761 НА 73</span></p>
      <p><b>Топливо</b> 100%</p>
      <p><b>Доступна с</b> 12.06.2019 12:00</p>
    </div>
    <div class="car">
      <img src="/images/car-card(1).png" alt="pic">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Total',
};
</script>

<style lang="scss" scoped>

.total {
  display: flex;
  justify-content: space-between;
  padding-right: 5%;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      border: 1px solid #999999;
      border-radius: 4px;
    }
  }
}

</style>
