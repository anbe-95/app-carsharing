import ordersService from '@/services/orders.service';

const state = {
  orders: null,
  total: 0,
  orderStatuses: null,
  newOrdersCount: 0,
};

const mutations = {
  setOrders: (state, { orders, total }) => {
    state.orders = orders;
    state.total = total;
  },
  setOrderStatuses: (state, statuses) => state.orderStatuses = statuses,
  setNewOrdersCount: (state, count) => state.newOrdersCount = count,
  updateOrder: (state, order) => {
    const ind = state.orders.findIndex((item) => item.id === order.id);
    state.orders.splice(ind, 1, order);
  },
};

const actions = {
  async loadOrders({ commit }, params) {
    const { data, count } = await ordersService.getOrders(params);
    commit('setOrders', { orders: data, total: count });
  },

  async updateOrder({ commit }, { id, data }) {
    const response = await ordersService.updateOrder(id, data);
    commit('updateOrder', response.data);
  },

  async loadOrderStatuses({ commit }) {
    const { data } = await ordersService.getOrderStatuses();
    commit('setOrderStatuses', data);
  },

  async loadNewOrdersCount({ commit, dispatch, state }) {
    if (!state.orderStatuses) {
      await dispatch('loadOrderStatuses');
    }
    const newStatus = state.orderStatuses.find((item) => item.name === 'new');
    const { count } = await ordersService.getOrders({ orderStatusId: newStatus.id });
    commit('setNewOrdersCount', count);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
