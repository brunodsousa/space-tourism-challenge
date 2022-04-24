import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import Crew from "../views/Crew.vue";
import Technology from "../views/Technology.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/destination",
    name: "destination",
    component: Destination,
  },
  {
    path: "/crew",
    name: "crew",
    component: Crew,
  },
  {
    path: "/technology",
    name: "technology",
    component: Technology,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
