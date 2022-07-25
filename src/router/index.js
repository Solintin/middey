import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";

import dashboard from "@/views/dashboard.vue";
// import store from "@/store";

// const routeGuard = (to, from, next) => {
//   const { isLoggedIn } = store.getters.data;
//   console.log(isLoggedIn);
//   if (
//     to.matched.some((record) => record.meta.requiresClientLogin) &&
//     isLoggedIn
//   ) {
//     next();
//   } else {
//     next("/");
//   }
// };
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
