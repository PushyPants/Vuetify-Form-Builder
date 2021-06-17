import Vue from "vue";
import Vuex from "vuex";

import formBuilder from "./modules/formBuilder";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    formBuilder
  }
});
