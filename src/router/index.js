import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/Product")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart")
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Rigistration")
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History")
  },
  {
    path: "/admin",
    name: "AdminHome",
    component: () => import("../views/Admin/index")
  },
  {
    path: "/admin/items",
    name: "AdminProductList",
    component: () => import("../views/Admin/index")
  },
  {
    path: "/admin/items/:id",
    name: "AdminEditProduct",
    component: () => import("../views/Admin/AdminProduct/AdminProductEdit")
  },
  {
    path: "/admin/add",
    name: "AdminAddProduct",
    component: () => import("../views/Admin/index")
  },
  {
    path: "/admin/orders",
    name: "AdminOrderList",
    component: () => import("../views/Admin/index")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
