import Vue from "vue";
import Vuex from "vuex";

import ItemManager from "./modules/ItemManager";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ItemManager
  }
});
