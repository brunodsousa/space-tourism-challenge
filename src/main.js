import Vue from "vue";
import VueCarousel from "vue-carousel";
import router from "./router";
import App from "./App.vue";
import "./assets/sass/main.scss";

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
