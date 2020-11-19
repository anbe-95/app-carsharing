<template>
  <div class="location">
    <div class="selection">
      <div class="selection__city">
        <p>Город</p>
        <cs-autocomplete :items="cityList"/>
      </div>
      <div class="selection__point">
        <p>Пункт выдачи</p>
        <cs-autocomplete :items="cityList"/>
      </div>
    </div>
    <div class="map">
      <p>Выбрать на карте:
        <img src=../../assets/images/map.png alt="map"/>
      </p>
    </div>
  </div>
</template>

<script>
import CsAutocomplete from '@/components/elements/cs-autocomplete.vue';

export default {
  name: 'Location',
  components: {
    CsAutocomplete,
  },
  data() {
    return {
      cityList: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний-Новгород', 'Самара', 'Чебоксары', 'Ульяновск', 'Саранск'],
    };
  },
};

</script>

<style lang="scss" scoped>

.location {
  .selection {
    display: inline-flex;
    flex-direction: column;

    &__city {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 10px;
    }

    &__point {
      display: flex;
      align-items: center;
    }

    p {
      padding-right: 15px;
      font-size: 14px;
    }
  }

  .map {
    padding-top: 40px;

    img {
      padding-top: 5px;
      width: 736px;
      height: 352px;
    }
  }
}

</style>
