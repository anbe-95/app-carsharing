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
          <h2 class="header__name"><span class="msg">{{ msg }}</span></h2>
          <select name="city" class="header__city">
            <option
              v-for="(item, i) in cityList"
              :key="i"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="body">
          <h1>Каршеринг <span class="msg">{{ msg }}</span></h1>
          <p>Поминутная аренда авто твоего города</p>
          <v-btn
            elevation="2"
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
    }

    .header {
      display: flex;
      justify-content: space-between;
      height: 10%;
      width: 100%;
    }

    .body {
      display: inline-flex;
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
        margin-top: 30px;
      }

      .v-btn {
        width: 250px;
        margin-top: 60px;
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

</style>
