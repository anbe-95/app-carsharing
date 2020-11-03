<template>
  <div class="addition">
    <div class="block">
      <div class="block__content">
        <Navigation/>
        <Language/>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="header__up">
          <h1 style="color: #0EC261">Need for drive</h1>
          <city/>
        </div>
        <div class="header__down">
          <router-link to="/location">Местоположение</router-link>
          <img src="./../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/location/model">Модель</router-link>
          <img src="./../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/location/model/addition" style="color: #0EC261">
            Дополнительно
          </router-link>
          <img src="./../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/location/model/addition/total">Итого</router-link>
        </div>
      </div>
      <div class="body">
        <div class="body__left">
          <div class="colors">
            <p>Цвет</p>
            <label>
              <input checked type="radio" value="allModel" name="colors">
              Любой
            </label>
            <label>
              <input type="radio" value="economy" name="colors">
              Красный
            </label>
            <label>
              <input type="radio" value="premium" name="colors">
              Голубой
            </label>
          </div>
          <div class="date">
            <p>Цвет</p>
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
        <div class="body__right">
          <h3>Ваш заказ:</h3>
          <p>Пункт выдачи........Ульяновск</p>
          <p>Модель.......Hyndai, i30n</p>
          <p>Цвет.......Любой</p>
          <p>Длительность аренды.......24ч</p>
          <p>Тариф.......на сутки</p>
          <p>Полный бак.......да</p>
          <h4>Цена: от 16000 ₽</h4>
          <v-btn block to="/location/model/total">Итого</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import City from '@/components/City.vue';
import Language from '@/components/Language.vue';

export default {
  name: 'Addition',
  components: {
    Navigation,
    City,
    Language,
  },
};

</script>

<style lang="scss" scoped>

.addition {
  display: flex;
  height: 100vh;

  .block {
    display: flex;
    background-color: black;
    width: 2.5%;

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }
  }

  .main {
    width: 97.5%;
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      flex-direction: column;

      &__up {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        padding: 2.5%;
      }

      &__down {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #EEEEEE;
        padding-left: 2.5%;

        a {
          text-decoration: none;
          color: #999999;
        }

        img {
          transform: rotate(180deg);
          height: 8px;
          width: 6px;
          margin: 0 10px;
        }
      }
    }

    .body {
      display: flex;
      justify-content: space-between;
      height: 100%;

      &__left {
        width: 70%;
        border-right: 1px solid #EEEEEE;
        padding: 2.5%;

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

      &__right {
        width: 30%;
        padding: 2.5%;

        h3 {
          text-align: right;
          margin-top: 20px;
        }

        p {
          margin-top: 20px;
        }

        h4 {
          margin-top: 20px;
        }

        .v-btn {
          background-color: #0EC261;
          color: white;
          height: 48px;
          text-transform: none;
          width: 287px;
          margin-top: 20px;
        }
      }
    }
  }
}

</style>
