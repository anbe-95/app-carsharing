<template>
  <div class="rent">
    <div class="block">
      <div class="block__content">
        <cs-burger class="burger_button"/>
        <div class="language" @click="isVisible = !isVisible">
          <p v-show="isVisible">Eng</p>
          <p v-show="!isVisible">Rus</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="header__up">
          <a href="/">{{ title }}</a>
          <cs-autocomplete :items="cities"/>
        </div>
        <div class="header__down">
          <router-link to="/rent/location">Местоположение</router-link>
          <img src="../../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/rent/model">Модель</router-link>
          <img src="../../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/rent/addition">Дополнительно</router-link>
          <img src="../../assets/images/icon-arrow.svg" alt="icon">
          <router-link to="/rent/total">Итого</router-link>
        </div>
      </div>
      <div class="body">
        <div class="body__left">
          <router-view></router-view>
        </div>
        <div class="body__right">
          <h3>Ваш заказ:</h3>
          <p>Пункт выдачи........Ульяновск</p>
          <p v-if="car">Модель....{{ car.name }}</p>
          <p v-if="color">Цвет....{{ color }}</p>
          <p>Длительность аренды</p>
          <p v-if="tariff">Тариф...{{ tariff }}</p>
          <p v-for="item in addList" :key="item.type">{{ item.text }}....Да</p>
          <h4 v-if="car">Цена: от {{ car.priceMin }}-{{ car.priceMax }} ₽</h4>
          <cs-button @click="isVerification = !isVerification" text="Выбрать модель"/>
        </div>
      </div>
    </div>
    <div class="modal-window" :class="{ verification : isVerification }">
      <div class="content">
        <p>Подтвердить заказ</p>
        <button class="success">Подтвердить</button>
        <button class="cancel" @click="isVerification = !isVerification">Вернуться</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import CsAutocomplete from '../../components/elements/cs-autocomplete.vue';
import CsButton from '../../components/elements/cs-button.vue';
import CsBurger from '../../components/cs-burger.vue';

export default {
  name: 'Rent',
  components: {
    CsBurger,
    CsButton,
    CsAutocomplete,
  },
  data() {
    return {
      isVisible: false,
      isVerification: false,
    };
  },
  computed: {
    ...mapState(['cities', 'car', 'color', 'title', 'tariff', 'addList']),
  },
  mounted() {
    this.getCities();
  },
  methods: {
    ...mapActions({
      getCities: 'loadCities',
    }),
    goToRent() {
      this.$router.push('rent');
    },
  },
};

</script>

<style lang="scss" scoped>

.modal-window {
  display: none;
  position: absolute;
  opacity: 0.9;
  background: white;
  z-index: 3;
  min-width: 100%;
  min-height: 100vh;
  .content {
    position: absolute;
    width: 405px;
    height: 157px;
    left: 35%;
    top: 35%;
    p {
      padding-left: 70px;
      font-size: 24px;
      margin-bottom: 32px;
    }
    button {
      height: 48px;
      background-blend-mode: darken;
      color: white;
      &.success {
        background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%);
        border-radius: 8px;
        margin-right: 16px;
        width: 177px;
      }
      &.cancel {
        background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%);
        border-radius: 4px;
        width: 164px;
      }
      &:hover {
        filter: brightness(80%);
      }
      &:active {
        filter: brightness(60%);
      }
    }
  }

  &.verification {
    display: block;
  }
}

.rent {
  display: flex;
  height: 100%;

  .block {
    background-color: #151B1F;
    width: 64px;

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .burger_button {
        position: fixed;
        top: 44px;
        z-index: 1;
      }

      .language {
        z-index: 1;
        color: #0EC261;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 16px;
        position: fixed;

        &:hover {
          color: white;
          cursor: url("../../assets/images/pointer.svg"), pointer;
          border: 1px solid white;
          border-radius: 50%;
        }

        &:active {
          color: #0EC261;
        }
      }
    }
  }

  .main {
    width: calc(100% - 64px);
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      flex-direction: column;

      &__up {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        padding: 32px 64px;

        a {
          font-size: 30px;
          font-weight: bold;
          text-decoration: none;
          color: #0EC261;
        }
      }

      &__down {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #EEEEEE;
        padding-left: 64px;
        font-size: 14px;
        font-weight: 700;

        a {
          text-decoration: none;
          color: #999999;

          &.router-link-active {
            color: #0EC261;
          }
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
        padding: 32px 64px;
      }

      &__right {
        width: 30%;
        padding: 32px 64px;

        h3 {
          text-align: right;
          margin-top: 20px;
          font-size: 18px;
        }

        p {
          font-size: 14px;
          margin-top: 20px;
        }

        h4 {
          font-size: 16px;
          margin-top: 20px;
        }

        .v-btn {
          font-size: 18px;
          height: 48px;
          text-transform: none;
          margin-top: 20px;
          color: white;
          background-color: #EEEEEE;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .rent {
    .block {
      display: none;
    }
  }
}

</style>
