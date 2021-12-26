import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    status: {},
  },
  actions: {
    async getData({ commit }, data) {
      const { city, type } = data;
      commit('getStatus', data);
      if (type === '') return;
      const res = await api.get(`/${type}/${city !== '' ? city : ''}?%24format=JSON`);
      commit('getData', res);
    },
  },
  mutations: {
    getData(state, data) {
      state.data = data;
    },
    getStatus(state, data) {
      state.status = data;
    },
  },
  modules: {
  },
});
