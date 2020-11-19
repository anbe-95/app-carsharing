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
        <input type="datetime-local" value="from" name="date" >
      </label>
      <label>
        По
        <input type="datetime-local" value="to" name="date">
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
  flex-direction: column;

  .colors {
    margin-bottom: 32px;

    p {
      font-size: 14px;
      font-weight: 300;
      padding-bottom: 16px;
    }

    label {
      color: #999999;
      font-size: 14px;
      padding-right: 16px;
    }
  }

  .date {
    p {
      padding-bottom: 16px;
    }

    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .tariff {
    p {
      padding-bottom: 16px;
    }

    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 32px;

    label {
      color: #999999;
    }
  }

  .service {
    p {
      padding-bottom: 16px;
    }

    font-size: 14px;
    display: flex;
    flex-direction: column;

    label {
      color: #999999;
    }
  }
}

</style>
