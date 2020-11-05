<template>
  <div class="model">
    <div class="filtered">
      <label>
        <input type="radio" value="allModel" name="filtered">
        Все модели
      </label>
      <label>
        <input type="radio" value="economy" name="filtered">
        Эконом
      </label>
      <label>
        <input type="radio" value="premium" name="filtered">
        Премиум
      </label>
    </div>
    <div class="cars">
      <img src="../../assets/images/tesla-car.jpg" alt="pic">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Model',
};

</script>

<style lang="scss" scoped>

.model {
  label {
    padding-right: 10px;
  }

  .cars {
    margin-top: 5%;

    img {
      border: 1px solid #EEEEEE;
    }
  }
}

</style>
