<template>
  <div class="model">
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
          <router-link to="/location/model" style="color: #0EC261">Модель</router-link>
          <img src="./../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/location/model/addition">Дополнительно</router-link>
          <img src="./../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/location/model/addition/total">Итого</router-link>
        </div>
      </div>
      <div class="body">
        <div class="body__left">
          <div class="filtered">
            <p>Все модели</p>
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
            <img src="../assets/images/tesla-car.jpg" alt="pic">
          </div>
        </div>
        <div class="body__right">
          <h3>Ваш заказ:</h3>
          <p>Пункт выдачи........Ульяновск</p>
          <p>Модель.......Hyndai, i30n</p>
          <h4>Цена: от 10000-32000 ₽</h4>
          <v-btn block to="/location/model/addition">Дополнительно</v-btn>
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
  name: 'Model',
  components: {
    Navigation,
    City,
    Language,
  },
};

</script>

<style lang="scss" scoped>

.model {
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

        label {
          padding-right: 10px;
        }

        .cars {
          margin-top: 5%;
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
