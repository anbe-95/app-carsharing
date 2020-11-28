import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '@/services/api.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Need for drive',
    cars: [],
    preloader: false,
    cities: [],
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars;
    },
    setCities(state, cities) {
      state.cities = cities;
    },
    setPreloader(state, preloader) {
      state.preloader = preloader;
    },
  },
  actions: {
    getCars(state) {
      state.commit('setPreloader', true);
      ApiService.get('db/car')
        .then(
          (response) => {
            state.commit('setCars', response.data.data);
            state.commit('setPreloader', false);
          },
        );
    },
    getCities(state) {
      state.commit('setPreloader', true);
      ApiService.get('db/city')
        .then(
          (response) => {
            state.commit('setCities', response.data.data);
            state.commit('setPreloader', false);
          },
        );
    },
  },
  modules: {},
});
