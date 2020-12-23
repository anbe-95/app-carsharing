import ordersService from '@/services/orders.service';

const state = {
  orders: null,
  total: 0,
};

const mutations = {
  setOrders: (state, { orders, total }) => {
    state.orders = orders;
    state.total = total;
  },
};

const actions = {
  async loadOrders({ commit }, params) {
    const { data, count } = await ordersService.getOrders(params);
    commit('setOrders', { orders: data, total: count });
  },

  updateOrder(ctx, { id, data }) {
    return ordersService.updateOrder(id, data);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
