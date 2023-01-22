import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import Product from "../views/Product.vue";
import Errorpage from "../views/Erorrpage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  //Erorr page
  {
    path: "/:catchAll(.*)",
    name: "erorrpage",
    component: Errorpage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
