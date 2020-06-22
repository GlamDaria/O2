import Vue from "vue";
import Vuex from "vuex";

import appState from "./modules/appState";
import itemManager from "./modules/itemManager";
import cartManager from "./modules/cartManager";
import authManager from "./modules/authManager";
import historyManager from "./modules/historyManager";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    itemManager,
    cartManager,
    authManager,
    historyManager
  }
});
