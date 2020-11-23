<template>
  <div class="home">
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
      <div class="main__content">
        <div class="header">
          <cs-burger class="burger_button"/>
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
          <cs-button
            text="Забронировать"
            @click="goToRent"
          />
        </div>
        <div class="footer">
          <span>© 2016-2019 "{{ title }}"</span>
          <a href="tel:+74952342244">8 (495) 234-22-44</a>
        </div>
      </div>
      <cs-carousel
        :carousel_data="sliderItems"
      />
    </div>
  </div>
</template>

<script>
import CsAutocomplete from '@/components/elements/cs-autocomplete.vue';
import CsButton from '@/components/elements/cs-button.vue';
import CsBurger from '@/components/cs-burger.vue';
import CsCarousel from '@/components/cs-carousel.vue';

export default {
  name: 'HelloWorld',
  components: {
    CsCarousel,
    CsBurger,
    CsButton,
    CsAutocomplete,
  },
  data() {
    return {
      sliderItems: [
        {
          buttonClass: 'slider-button_green',
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          img: '1.png',
        },
        {
          buttonClass: 'slider-button_blue',
          title: 'Страховка',
          text: 'Полная страховка автомобиля',
          img: '2.png',
        },
        {
          buttonClass: 'slider-button_red',
          title: 'Бензин',
          text: 'Полный бак на любой заправке города за наш счёт',
          img: '3.png',
        },
        {
          buttonClass: 'slider-button_pink',
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
    width: 100%;
    display: flex;

    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 32px;
      width: 100%;

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

}

@media (max-width: 900px) {
  .wrapper {
    display: none;
  }
}

@media (max-width: 600px) {

  .home {
    .block {
      display: none;
    }

    .main {
      &__content {
        padding: 0;

        .header {
          padding: 16px;
          display: flex;
          justify-content: space-between;

          .burger_button {
            display: block;
          }
          &__name {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
        }
        .body {
          h1 {
            padding: 0 16px;
            font-size: 32px;
          }
          p {
            margin: 0;
            padding: 16px;
            font-size: 18px;
          }
          .cs-button {
            width: 100%;
            border-radius: 0;
          }
        }
        .footer {
          padding: 16px;
          height: 72px;
          background-color: #151B1F;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          a {
            color: #0EC261;
          }
          p {
            color: #EEEEEE;
          }
        }
      }
    }
  }
}

</style>
