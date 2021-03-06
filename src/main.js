import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Vuex from "vuex";
import { store } from "./store/store";

Vue.use(Vuex);

const opts = {
  icons: {
    iconfont: "mdi"
  }
};
Vue.use(Vuetify);

new Vue({
  store,
  vuetify: new Vuetify(opts),
  render: (h) => h(App)
}).$mount("#app");
