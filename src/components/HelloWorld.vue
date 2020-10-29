<template>
  <div class="home">
    <div class="block">
      <Navigation/>
      <select name="lang" class="block__lang" v-model="defaultLang">
        <option
          v-for="(item, i) in langList"
          :key="i"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <div class="main">
      <div class="main__content">
        <div class="header">
          <Navigation class="header__nav"/>
          <div class="header__name">
            <h2><span class="msg">{{ msg }}</span></h2>
            <input placeholder="Введите город" type="text" list="city">
            <datalist id="city" class="header__city">
              <option
                v-for="(item, i) in cityList"
                :key="i"
              >
                {{ item }}
              </option>
            </datalist>
          </div>
        </div>
        <div class="body">
          <h1>Каршеринг <span class="msg">{{ msg }}</span></h1>
          <p>Поминутная аренда авто твоего города</p>
          <v-btn
            color="#0EC261"
          >Забронировать
          </v-btn>
        </div>
        <div class="footer">
          <p class="footer__info">2016-2019 "{{ msg }}"</p>
          <p class="footer__number">8 (495) 234-22-44</p>
        </div>
      </div>
    </div>
    <carousel/>
  </div>
</template>

<script>
import carousel from '@/components/carousel.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      defaultLang: 'Eng',
      langList: ['Rus', 'Eng', 'Deu', 'Fra', 'Spa', 'Ita'],
      cityList: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний-Новгород', 'Самара', 'Чебоксары', 'Ульяновск', 'Саранск'],
    };
  },
  components: {
    Navigation,
    carousel,
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">

.home {
  display: flex;
  height: 100vh;

  .block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    width: 5%;

    .nav_container {
      margin-top: 34px;
    }

    &__lang {
      color: #0EC261;
      padding: 0 5px 37px 5px;
    }
  }

  .msg {
    color: #0EC261;
  }

  .main {
    min-width: 45%;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100%;
      padding: 5%;

      .header {
        height: 10%;
        width: 100%;

        &__nav {
          display: none;
        }

        &__name {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
      }

      .body {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: 70px;
          display: flex;
          flex-wrap: wrap;
          line-height: 1;
        }

        p {
          font-size: 26px;
          color: #999999;
          margin-top: 5%;
        }

        .v-btn {
          width: 35%;
          margin-top: 7%;
          text-transform: none;
          &__content {
            color: white;
          }
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media (max-width: 768px), (max-height: 811px) {

  .v-carousel {
    display: none;
  }
}

@media (max-width: 320px) and (max-height: 568px) {

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

          p {
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

          &__number {
            color: #0EC261;
          }
        }
      }
    }
  }

  .v-carousel {
    display: none;
  }
}

@media (max-width: 568px) and (max-height: 320px) {
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
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        }

        .body {
          h1 {
            span {
              padding-left: 10px
            }

            padding: 0 2.5% 0 2.5%;
            font-size: 32px;
          }

          p {
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

          &__number {
            color: #0EC261;
          }
        }
      }
    }
  }

  .v-carousel {
    display: none;
  }
}

</style>
