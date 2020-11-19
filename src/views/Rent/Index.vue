<template>
  <div class="rent">
    <div class="block">
      <div class="block__content">
        <burger-menu class="burger_button"/>
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
          <cs-autocomplete :items="cityList"/>
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
          <h4>Цена: от 8000-12000 ₽</h4>
          <cs-button text="Выбрать модель"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CsAutocomplete from '@/components/elements/cs-autocomplete.vue';
import CsButton from '@/components/elements/cs-button.vue';
import BurgerMenu from '@/components/burger-menu.vue';

export default {
  name: 'Rent',
  components: {
    BurgerMenu,
    CsButton,
    CsAutocomplete,
  },
  data() {
    return {
      isVisible: true,
      cityList: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний-Новгород', 'Самара', 'Чебоксары', 'Ульяновск', 'Саранск'],
    };
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
  },
};

</script>

<style lang="scss" scoped>

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

        a {
          text-decoration: none;
          color: #999999;
        }

        .router-link-active {
          color: #0EC261;
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

</style>
