<template>
  <div class="location">
    <div class="selection">
      <div class="selection__city">
        <p>Город</p>
        <city/>
      </div>
      <div class="selection__point">
        <p>Пункт выдачи</p>
        <city/>
      </div>
    </div>
    <div class="map">
      <p>Выбрать на карте:
        <img src=../../assets/images/map.jpg alt="Карта"/>
      </p>
    </div>
  </div>
</template>

<script>
import City from '@/components/elements/City.vue';

export default {
  name: 'Location',
  components: {
    City,
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
      padding-bottom: 10px;
    }

    &__point {
      display: flex;
    }

    p {
      padding-right: 15px;
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
