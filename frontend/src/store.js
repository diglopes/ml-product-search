import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsFound: {},
    categories: [],
    loading: true,
    searchTerm: ""
  },
  mutations: {
    SET_ITEMS_FOUND(state, payload) {
      state.itemsFound = Object.assign({}, state.itemsFound, payload);
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    SET_SEARCH_TERM(state, payload) {
      state.searchTerm = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async FEATCH_DATA(context, searchTerm) {
      context.commit("SET_LOADING", true);
      context.commit("SET_SEARCH_TERM", "");

      const { data } = await api.get(`/products?q=${searchTerm}`);

      context.commit("SET_ITEMS_FOUND", data.items);
      context.commit("SET_CATEGORIES", data.categories);
      context.commit("SET_LOADING", false);

      document.title = `Mercado Livre | ${
        context.state.categories[context.state.categories.length - 1]
      }`;
    }
  }
});
