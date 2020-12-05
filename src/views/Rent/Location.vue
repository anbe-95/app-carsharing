<template>
  <div class="location">
    <div class="selection">
      <div class="selection__city">
        <p>Город</p>
        <cs-autocomplete v-model="cityValue" :items="cities"/>
      </div>
      <div class="selection__point" v-if="cityValue">
        <p>Пункт выдачи</p>
        <cs-autocomplete v-model="pointValue" :items="filteredPoints"/>
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
import { mapState, mapGetters, mapActions } from 'vuex';

import CsAutocomplete from '../../components/elements/cs-autocomplete.vue';

export default {
  name: 'Location',
  components: {
    CsAutocomplete,
  },
  data() {
    return {
      pointValue: '',
      cityValue: '',
    };
  },
  computed: {
    ...mapState({
      cities: 'cities',
    }),
    ...mapGetters({
      points: 'getPoints',
    }),
    filteredPoints() {
      return this.points(this.cityValue);
    },
  },
  created() {
    this.loadCities();
    this.loadPoints();
  },
  methods: {
    ...mapActions({
      loadCities: 'loadCities',
      loadPoints: 'loadPoints',
    }),
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

@media (max-width: 1200px) {
  .location {
    .map {
      img {
        width: 600px;
        height: auto;
      }
    }
  }
}

@media (max-width: 900px) {
  .location {
    .map {
      img {
        width: 450px;
        height: auto;
      }
    }
  }
}

@media (max-width: 600px) {
  .location {
    .map {
      img {
        width: 300px;
        height: auto;
      }
    }
  }
}

</style>
