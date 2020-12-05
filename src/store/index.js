import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '../services/api.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Need for drive',
    cars: null,
    preloader: false,
    categories: [{
      name: 'Все авто',
    }],
    cities: null,
    points: null,
    rate: [],
    car: null,
    color: null,
    tariff: null,
    addList: [
      {
        text: 'Полный бак',
        price: 500,
        type: 0,
      },
      {
        text: 'Детское кресло',
        price: 200,
        type: 1,
      },
      {
        text: 'Правый руль',
        price: 1600,
        type: 2,
      },
    ],
  },
  getters: {
    getCars: (state) => (value) => (value
      ? state.cars.filter((item) => item.categoryId.id === value)
      : state.cars),

    getPoints: (state) => (value) => (value
      ? state.points.filter((item) => item.cityId.name === value)
      : state.points),
  },
  mutations: {
    setTariffCar(state, tariff) {
      state.tariff = tariff;
    },
    setColorCar(state, color) {
      state.color = color;
    },
    setRate(state, rate) {
      state.rate = rate;
    },
    setCar(state, car) {
      state.car = car;
    },
    setCars(state, cars) {
      state.cars = cars;
    },
    setPreloader(state, preloader) {
      state.preloader = preloader;
    },
    setCategories(state, categories) {
      state.categories = state.categories.concat(categories);
    },
    setCities(state, cities) {
      state.cities = cities;
    },
    setPoints(state, points) {
      state.points = points;
    },
  },
  actions: {
    loadCarById({ commit }, id) {
      ApiService.get(`db/car/${id}`)
        .then(
          (response) => {
            commit('setCar', response.data.data);
          },
        );
    },
    loadRate({ state, commit }) {
      if (state.rate.length) {
        return;
      }
      ApiService.get('db/rate')
        .then(
          (response) => {
            commit('setRate', response.data.data);
          },
        );
    },
    loadCars({ state, commit }) {
      if (state.cars) {
        return;
      }
      commit('setPreloader', true);
      ApiService.get('db/car')
        .then(
          (response) => {
            commit('setCars', response.data.data);
            commit('setPreloader', false);
          },
        );
    },
    loadCities(state) {
      if (state.cities) {
        return;
      }
      state.commit('setPreloader', true);
      ApiService.get('db/city')
        .then(
          (response) => {
            state.commit('setCities', response.data.data);
            state.commit('setPreloader', false);
          },
        );
    },
    loadCategories: ({ state, commit }) => {
      if (state.categories.length > 2) {
        return;
      }
      ApiService.get('db/category')
        .then((response) => commit('setCategories', response.data.data));
    },
    loadPoints: ({ state, commit }) => {
      if (state.points) {
        return;
      }
      ApiService.get('db/point')
        .then((response) => commit('setPoints', response.data.data));
    },
  },
  modules: {},
});
