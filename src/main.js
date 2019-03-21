import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "font-awesome/css/font-awesome.css";
import db from './idb';

Vue.config.productionTip = false;
console.log(db)

new Vue({
  router,
  store,
  db,
  render: h => h(App)
}).$mount("#app");
