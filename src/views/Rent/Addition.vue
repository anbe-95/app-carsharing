<template>
  <div class="addition">
    <div class="colors">
      <p>Цвет</p>
      <label>
        <input checked type="radio" value="all" name="colors">
        Любой
      </label>
      <label>
        <input type="radio" value="red" name="colors">
        Красный
      </label>
      <label>
        <input type="radio" value="blue" name="colors">
        Голубой
      </label>
    </div>
    <div class="date">
      <p>Дата аренды</p>
      <label>
        C
        <input type="date" value="from" name="date">
      </label>
      <label>
        По
        <input type="date" value="to" name="date">
      </label>
    </div>
    <div class="tariff">
      <p>Тариф</p>
      <label>
        <input type="radio" value="minute" name="tariff">
        Поминутно, 7 ₽/мин
      </label>
      <label>
        <input type="radio" value="day" name="tariff">
        На сутки, 1999 ₽/сутки
      </label>
    </div>
    <div class="service">
      <p>Доп. услуги</p>
      <label>
        <input type="checkbox" value="fullTank" name="service">
        Полный бак, 500₽
      </label>
      <label>
        <input type="checkbox" value="babyChair" name="service">
        Детское кресло, 200₽
      </label>
      <label>
        <input type="checkbox" value="rightHand" name="service">
        Правый руль, 1600₽
      </label>
      <label>
        <input type="checkbox" value="rightHand" name="service">
        Правый руль, 1600₽
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Addition',
};

</script>

<style lang="scss" scoped>

.addition {
  display: flex;
  height: 100vh;
  flex-direction: column;

  p {
    margin-bottom: 5px;
  }

  .tariff, .service, .date {
    display: flex;
    flex-direction: column;
    margin-top: 2%;
  }

  label {
    padding-right: 10px;
  }
}

</style>
