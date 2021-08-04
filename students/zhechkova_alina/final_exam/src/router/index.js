import Vue from "vue";
import VueRouter from "vue-router";
import BeetrootMain from '../components/BeetrootMain.vue'
import BeetrootMen from "../components/BeetrootMen.vue";
import BeetrootWomen from "../components/BeetrootWomen.vue";
import BeetrootAll from "../components/BeetrootAll.vue";
import BeetrootSale from "../components/BeetrootSale.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Timex",
    component: BeetrootMain,
  },
  {
    path: "/men",
    name: "Men",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BeetrootMen,
  },
  {
    path: "/sale",
    name: "Sale",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BeetrootSale,
  },
  {
    path: "/women",
    name: "Women",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BeetrootWomen,
  },
  {
    path: "/all",
    name: "All",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BeetrootAll,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
