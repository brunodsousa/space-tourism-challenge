import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import "./assets/sass/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Home),
}).$mount("#app");
