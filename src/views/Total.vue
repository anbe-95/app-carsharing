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
          <router-link to="/location/model/addition">Дополнительно</router-link>
          <img src="./../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/location/model/addition/total" style="color: #0EC261">
            Итого
          </router-link>
        </div>
      </div>
      <div class="body">
        <div class="body__left">
          <div class="description">
            <p>Tesla, model 3</p>
            <p><span>К 761 НА 73</span></p>
            <p><b>Топливо</b> 100%</p>
            <p><b>Доступна с</b> 12.06.2019 12:00</p>
          </div>
          <div class="car">
            <img src="../assets/images/tesla-car.jpg" alt="pic">
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
          <v-btn input-value="" @click="check('Подвердите заказ')" block>Заказать</v-btn>
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
  name: 'Total',
  methods: {
    check(message) {
      return alert(message);
    },
  },
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
        display: flex;
        justify-content: space-between;

        .description {
          display: flex;
          flex-direction: column;

          span {
            border: 1px solid #999999;
            border-radius: 4px;
          }
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
