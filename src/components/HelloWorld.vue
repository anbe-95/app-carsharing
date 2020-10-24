<template>
  <div class="home">
    <div class="block">
      <select class="block__link">
        <option>Бургер меню</option>
      </select>
      <select name="lang" class="block__lang" v-model="defaultLang">
        <option
          v-for="i in langList"
        >{{ i }}
        </option>
      </select>
    </div>
    <div class="main">
      <div class="header">
        <h2 class="header__name">{{ msg }}</h2>
        <select name="city" class="header__city">
          <option v-for="i in cityList">{{i}}</option>
        </select>
      </div>
      <div class="body">
        <h1>Каршеринг {{ msg }}</h1>
        <p>Поминутная аренда авто твоего города</p>
        <v-btn
          elevation="2"
          color="#0EC261"
        >Забронировать</v-btn>
      </div>
      <div class="footer">
        <p class="footer__info">2016-2019 "{{ msg }}"</p>
        <p class="footer__number">8(495)234-22-44</p>
      </div>
    </div>
    <carousel/>
  </div>
</template>

<script>
import carousel from '@/components/carousel.vue';

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
    carousel,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.home {
  display: flex;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 50%;
}

.v-carousel {
  width: 50%;
  .v-window__next {
    right: 0px;
  }
}

.block {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  height: 100vh;
  width: 64px;

  .block__lang {
    color: #0EC261;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
}

.body {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .v-btn {
    &__content {
      color: white;
    }
  }
}

.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}

</style>
