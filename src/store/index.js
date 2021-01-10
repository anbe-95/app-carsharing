import Vue from 'vue';
import Vuex from 'vuex';
import clientService from '@/services/client.service';
import dayjs from 'dayjs';
import auth from '@/store/auth';
import cars from '@/store/cars';
import orders from '@/store/oders';

require('dayjs/locale/ru');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Need for drive',
    clientCars: null,
    preloader: false,
    categories: [{
      name: 'Все авто',
    }],
    cities: null,
    points: [],
    point: '',
    city: '',
    order: {},
    rate: [],
    car: null,
    dateFrom: null,
    dateTo: null,
    color: '',
    price: null,
    tariff: null,
    additionalList: [],
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    startDate: null,
  },
  getters: {
    getCars: (state) => (value) => (value
      ? state.clientCars.filter((item) => item.categoryId.id === value)
      : state.clientCars),

    getStartDate: (state) => dayjs(state.dateFrom).locale('ru_RU').format('DD.MM.YYYY HH:mm'),

    getPoints: (state) => (value) => (value
      ? state.points
        .filter((item) => item.cityId.name === value)
        .map((item) => ({
          name: item.address,
          id: item.id,
        }))
      : []),
    // eslint-disable-next-line max-len
    isOrderDone: (state, getters) => state.car && state.dateFrom && state.dateTo && state.price && (state.price < state.car.priceMax && state.price > state.car.priceMin) && state.tariff && state.point && state.city && state.color && getters.getDuration,
    getCarInfo: (state) => state.car,
    getCurrentPrice: (state) => state.price,
    getDuration: (state) => {
      if (!(state.dateFrom && state.dateTo) || (state.dateFrom > state.dateTo)) {
        return false;
      }
      const start = dayjs(state.dateFrom);
      const end = dayjs(state.dateTo);
      const delta = end.diff(start, 'minute');
      const hours = Math.floor((delta % 1440) / 60);
      const minutes = Math.floor((delta % 1440) % 60);
      const days = Math.floor(delta / 1440);
      let result = '';
      if (minutes && !days && !hours) {
        result = `${minutes} мин.`;
      } else if (!minutes && days && hours) {
        result = `${days} д ${hours} ч.`;
      } else if (!minutes && !days && hours) {
        result = `${hours} ч.`;
      } else if (days && !minutes && !hours) {
        result = `${days} д.`;
      } else if (days && minutes && hours) {
        result = `${days} д. ${hours} ч. ${minutes} мин.`;
      } else {
        result = false;
      }
      return result;
    },
    getColor: (state) => state.color,
  },
  mutations: {
    reloadStateFromLocation(state) {
      state.car = null;
      state.color = null;
      state.tariff = null;
      state.dateFrom = null;
      state.dateTo = null;
      state.additionalList = [];
    },
    reloadStateFromModel(state) {
      state.color = null;
      state.tariff = null;
      state.dateFrom = null;
      state.dateTo = null;
      state.additionalList = [];
    },
    changeAdditional(state, { key, value }) {
      state[key] = value;
    },
    setPrice(state, price) {
      state.price = price;
    },
    setTariffCar(state, tariff) {
      state.tariff = tariff;
      const start = dayjs(state.dateFrom);
      const end = dayjs(state.dateTo);
      const delta = end.diff(start, 'minute') || 0;
      const days = Math.floor(delta / 1440);
      const weeks = Math.floor(delta / (1440 * 7));
      const countDaysTariff = days ? days * tariff.price : days + tariff.price;
      const countWeeksTariff = weeks ? weeks * tariff.price : weeks + tariff.price;
      switch (tariff.rateTypeId.unit) {
        case 'мин':
          state.price = delta * tariff.price;
          break;
        case 'сутки':
          state.price = countDaysTariff;
          break;
        case '7 дней':
          state.price = countWeeksTariff;
          break;
        default: state.price = 0;
      }
    },
    setResultPrice(state, price) {
      state.price = price;
    },
    setColorCar(state, color) {
      state.color = color;
    },
    setRate(state, rate) {
      state.rate = rate;
    },
    setCar(state, car) {
      state.car = car;
      state.order.car = car;
    },
    setCars(state, cars) {
      state.clientCars = cars;
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
    setCity(state, city) {
      state.city = city;
      state.order.city = { ...state.cities.filter((item) => item.name === city) };
    },
    setPoint(state, point) {
      state.point = point;
      state.order.point = { ...state.points.filter((item) => item.address === point) };
    },
    setDateFrom: (state, date) => { state.dateFrom = date; },
    setDateTo: (state, date) => { state.dateTo = date; },
    setColor: (state, color) => { state.color = color; },
    setAdditional: (state, additional) => state.additionalList = additional,
  },
  actions: {
    loadCars: async ({ state, commit }) => {
      if (state.clientCars) {
        return;
      }
      const { data } = await clientService.getCars();
      commit('setCars', data);
    },
    async loadCities(state) {
      if (state.cities) {
        return;
      }
      const { data } = await clientService.getCities();
      state.commit('setCities', data);
    },
    loadCategories: async ({ state, commit }) => {
      if (state.categories.length > 2) {
        return;
      }
      const { data } = await clientService.getCategories();
      commit('setCategories', data);
    },
    async loadPoints({ state, commit }) {
      if (state.points.length) {
        return;
      }
      const { data } = await clientService.getPoints();
      commit('setPoints', data);
    },
    loadCarById: async ({ commit }, id) => {
      const { data } = await clientService.getCarById(id);
      commit('setCar', data);
    },
    loadRate: async ({ commit }) => {
      const { data } = await clientService.getRate();
      commit('setRate', data);
    },
  },
  modules: {
    auth,
    cars,
    orders,
  },
});
