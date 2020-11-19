<template>
  <div class="home">
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
      <div class="main__content">
        <div class="header">
          <burger-menu class="burger_button"/>
          <div class="header__name">
            <a href="/">{{ title }}</a>
            <div class="city">
              <img src="../assets/images/vector.svg" alt="icon">
              <cs-autocomplete :items="cityList"/>
            </div>
          </div>
        </div>
        <div class="body">
          <h1>Каршеринг<br><span>{{ title }}</span></h1>
          <p>Поминутная аренда авто твоего города</p>
          <cs-button text="Забронировать" @click="goToRent"/>
        </div>
        <div class="footer">
          <span>© 2016-2019 "{{ title }}"</span>
          <a href="tel:+74952342244">8 (495) 234-22-44</a>
        </div>
      </div>
    </div>
    <cs-carousel
      :carousel_data="sliderItems"
    />
  </div>
</template>

<script>
import CsAutocomplete from '@/components/elements/cs-autocomplete.vue';
import CsButton from '@/components/elements/cs-button.vue';
import BurgerMenu from '@/components/burger-menu.vue';
import CsCarousel from '@/components/cs-carousel.vue';

export default {
  name: 'HelloWorld',
  components: {
    CsCarousel,
    BurgerMenu,
    CsButton,
    CsAutocomplete,
  },
  data() {
    return {
      sliderItems: [
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          img: '1.png',
        },
        {
          title: 'Страховка',
          text: 'Полная страховка автомобиля',
          img: '2.png',
        },
        {
          title: 'Бензин',
          text: 'Полный бак на любой заправке города за наш счёт',
          img: '3.png',
        },
        {
          title: 'Обслуживание',
          text: 'Автомобиль проходит еженедельное ТО',
          img: '4.png',
        },
      ],
      isVisible: true,
      cityList: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний-Новгород', 'Самара', 'Чебоксары', 'Ульяновск', 'Саранск'],
    };
  },
  methods: {
    goToRent() {
      this.$router.push('rent');
    },
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
  },
};
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  height: 100vh;

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
          cursor: url("../assets/images/pointer.svg"), pointer;
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
    width: calc(100% - 732px);

    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 32px;

      .header {

        .burger_button {
          display: none;
        }

        &__name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          a {
            font-size: 30px;
            text-decoration: none;
            color: #0EC261;
            font-weight: bold;
          }

          .city {
            display: flex;
          }
        }
      }

      .body {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: 70px;
          line-height: 1;
          font-weight: bold;

          span {
            color: #0EC261
          }
        }

        p {
          font-size: 26px;
          color: #999999;
          margin-top: 5%;
          font-weight: 300;
        }

        button {
          margin-top: 7%;

          &:hover {
            cursor: url("../assets/images/pointer.svg"), pointer;
          }
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;

        span {
          color: #999999;
          font-size: 13px;
        }

        a {
          text-decoration: none;
          color: black;
          font-size: 13px;
        }

        a:hover, a:active {
          color: #0EC261;
        }
      }
    }
  }

  .cs-carousel {
  }
}

@media (max-width: 960px) {
  .v-carousel {
    display: none;
  }
}

@media (max-width: 600px) {

  .home {
    .block {
      display: none;
    }

    .main {
      min-width: 100%;

      &__content {
        padding: 0;

        .header {
          padding: 1%;
          display: flex;
          justify-content: space-between;

          &__nav {
            display: block;
          }

          &__name {
            width: 60%;
            display: flex;
            flex-wrap: wrap;
          }
        }

        .body {
          h1 {
            padding: 0 2.5% 0 2.5%;
            font-size: 32px;
            line-height: 1.25;
          }

          span {
            padding: 0 2.5% 0 2.5%;
            font-size: 18px;
          }

          .v-btn {
            width: 100%;
            height: 50px;
          }
        }

        .footer {
          font-size: 13px;
          padding: 2.5%;
          height: 72px;
          background-color: black;
          color: white;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          justify-content: space-around;

          a {
            color: #0EC261;
          }
        }
      }
    }
  }

  .cs-carousel {
    display: none;
  }
}

</style>
