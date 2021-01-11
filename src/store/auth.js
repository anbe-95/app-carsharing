import authService from '@/services/auth.service';

const state = {
  tokens: {
    access: null,
    refresh: null,
  },
  userId: null,
};

const mutations = {
  setTokens: (state, tokens) => state.tokens = tokens,
  setUserId: (state, userId) => state.userId = userId,
};

const getters = {
  isAuth: (state) => !!state.userId,
};

const actions = {
  async login({ commit, getters }, { username, password }) {
    try {
      // eslint-disable-next-line camelcase
      const { access_token, refresh_token, user_id } = await authService.login(username, password);
      commit(
        'setTokens',
        {
          access: access_token,
          refresh: refresh_token,
        },
      );
      commit('setUserId', user_id);

      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);

      return getters.isAuth;
    } catch (e) {
      return false;
    }
  },

  logout({ commit }) {
    commit('setUserId', null);
    commit(
      'setTokens',
      {
        access: null,
        refresh: null,
      },
    );
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  async checkAuth({
    commit,
    getters,
  }) {
    if (getters.isAuth) return true;
    try {
      const { id } = await authService.check();
      commit('setTokens', {
        access: localStorage.getItem('accessToken'),
        refresh: localStorage.getItem('refreshToken'),
      });
      commit('setUserId', id);
      return getters.isAuth;
    } catch (e) {
      return false;
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
