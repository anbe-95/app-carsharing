import carsService from '@/services/cars.service';

const state = {
  cars: null,
};

const getters = {
  // getCars: (state) => (params) => {
  //   return state.cars && params
  //     ? state.cars.filter(car => {
  //       if (params.name) {
  //         return car.name.includes(params.name);
  //       }
  //     })
  //     : state.cars;
  // },
};

const mutations = {
  setCars: (state, cars) => state.cars = cars,
};

const actions = {
  async loadCars({ state, commit }) {
    const { data } = await carsService.getCars();
    commit('setCars', data);
    return state.cars;
  },

  async loadCar(ctx, id) {
    const { data } = await carsService.getCar(id);
    return data;
  },

  async createCar(ctx, data) {
    const { data: { id } } = await carsService.createCar(data);
    return id;
  },

  async updateCar(ctx, { id, formData }) {
    const { data: result } = await carsService.updateCar(id, formData);
    return result;
  },

  async deleteCar(ctx, id) {
    return carsService.deleteCar(id);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
