import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "iphone",
    itemsFound: {},
    categories: [],
    query: "iphone",
    loading: true
  },
  mutations: {
    SET_SEARCH_TERM(state, payload) {
      state.searchTerm = payload;
    },
    SET_ITEMS_FOUND(state, payload) {
      state.itemsFound = payload;
    },
    SET_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    SET_QUERY(state, payload) {
      state.query = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {}
});
