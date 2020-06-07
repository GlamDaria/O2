import Vue from "vue";
import Vuex from "vuex";

import itemManager from "./modules/itemManager";
import cartManager from "./modules/cartManager";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    itemManager,
    cartManager
  }
});
