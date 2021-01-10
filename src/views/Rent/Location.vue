<template>
  <div class="location">
    <div class="selection">
      <div class="selection__city">
        <p>Город</p>
        <cs-autocomplete
          v-model="cityValue"
          :items="cities"
          :default-value="city"
          @input="setGlobalCity(cityValue)"
        >
          <i class="icon-exit" v-if="cityValue" @click="clearCity"></i>
        </cs-autocomplete>
      </div>
      <div class="selection__point" v-if="cityValue && filteredPoints.length">
        <p>Пункт выдачи</p>
        <cs-autocomplete
          v-model="pointValue"
          :items="filteredPoints"
          :default-value="point"
          placeholder="Выберете пункт"
          @input="setPoint"
        >
          <i class="icon-exit" v-if="pointValue" @click="clearPoint"></i>
        </cs-autocomplete>
      </div>
    </div>
    <div class="map" v-if="filteredPoints.length">
      <p>Выбрать на карте:</p>
      <yandex-map :settings="mapSettings" :coords="coords" :controls="[]" zoom="10">
        <ymap-marker :coords="coords" marker-id="123" />
      </yandex-map>
    </div>
  </div>
</template>

<script>
import CsAutocomplete from '@/components/elements/cs-autocomplete.vue';

import { yandexMap, ymapMarker } from 'vue-yandex-maps';

import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';

export default {
  name: 'Location',
  components: {
    CsAutocomplete,
    yandexMap,
    ymapMarker,
  },
  data() {
    return {
      mapSettings: {
        apiKey: process.env.VUE_APP_YANDEX_API_KEY,
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1',
      },
      coords: [
        0,
        0,
      ],
    };
  },
  computed: {
    ...mapState(['point', 'city', 'cities']),
    ...mapGetters({
      points: 'getPoints',
    }),
    filteredPoints() {
      return this.points(this.cityValue || '');
    },
    cityValue: {
      get() {
        return this.city;
      },
      set(value) {
        this.points(value);
        this.setCity(value);
      },
    },
    pointValue: {
      get() {
        return this.point;
      },
      set(value) {
        this.setPoint(value);
      },
    },
  },
  created() {
    this.loadCities();
    this.loadPoints();
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(((position) => {
        this.coords = [position.coords.latitude, position.coords.longitude];
      }));
    }
  },
  watch: {
    cityValue() {
      this.reloadStateFromLocation();
    },
    pointValue() {
      this.reloadStateFromLocation();
    },
  },
  methods: {
    ...mapMutations(['setCity', 'setPoint', 'setCar', 'reloadStateFromLocation']),
    ...mapActions(['loadCities', 'loadPoints']),
    setGlobalCity(value) {
      this.setCity(value);
    },
    clearCity() {
      this.setCity('');
      this.setPoint('');
    },
    clearPoint() {
      this.setPoint('');
    },
  },
};

</script>

<style lang="scss">
.location {
  .selection {
    display: inline-flex;
    flex-direction: column;

    &__city {
      align-self: flex-end;
    }

    &__point, &__city {
      display: flex;
      input {
        font-weight: 300;
        font-size: 16px;
        border-bottom: 1px solid #999999;
        &::-webkit-calendar-picker-indicator {
          display: none;
        }
      }
    }

    p {
      padding-right: 15px;
      font-size: 16px;
      font-weight: 300;
    }
  }

  .map {
    padding-top: 40px;
    width: 100%;
    height: 100%;

    .ymap-container {
      padding-top: 5px;
      width: 700px;
      height: 350px;
    }
  }
}

@media (max-width: 1200px) {
  .location {
    .map {
      .ymap-container {
        width: 500px;
        height: 300px;
      }
    }
  }
}

@media (max-width: 900px) {
  .location {
    .map {
      .ymap-container {
        width: 300px;
        height: 250px;
      }
    }
  }
}

@media (max-width: 600px) {
  .location {
    .selection {
      &__point, &__city {
        input {
          font-size: 12px;
        }
      }

      p {
        font-size: 12px;
      }
    }
    .map {
      .ymap-container {
        width: 250px;
        height: 150px;
      }
    }
  }
}

@media (max-width: 400px) {
  .location {
    .selection {
      &__point, &__city {
        input {
          font-size: 8px;
        }
      }

      p {
        font-size: 8px;
      }
    }
    .map {
      .ymap-container {
        width: 200px;
        height: 125px;
      }
    }
  }
}

</style>
