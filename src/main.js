import Vue from "vue";
import VueCarousel from "vue-carousel";
import Home from "./views/Home.vue";
import "./assets/sass/main.scss";

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Home),
}).$mount("#app");
