import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/";
import store from "./store/store";
import db from "./store/idb";
// import "roboto-fontface/css/roboto/roboto-fontface.css";
import "font-awesome/css/font-awesome.css";

Vue.prototype.$db = db;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
