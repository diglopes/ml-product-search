import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "iphone",
    itemsFound: {}
  },
  mutations: {
    SET_SEARCH_TERM(state, payload) {
      state.searchTerm = payload;
    },
    SET_ITEMS_FOUND(state, payload) {
      state.itemsFound = payload;
    }
  },
  actions: {}
});
