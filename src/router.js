import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import IndexHome from "./views/sub/IndexHome.vue";
import IndexController from "./views/sub/IndexController.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        {
          path: "",
          component: IndexHome,
          meta : {
            showTitle : true,
            title : "Home",
            showBreadcrumb : false,
            breadcrumb : [
              { name : 'Home' }
            ]
          }
        },
        {
          path: "controller",
          component: IndexController,
          meta : {
            showTitle : true,
            title : "Controller",
            showBreadcrumb : true,
            breadcrumb : [
              { name : 'Home' },
              { name : 'Controller' }
            ]
          }
        },
        {
          path: "engage"
        }
      ]
    },
    {
      path: "/signin",
      name: "signin"
    },
    {
      path: "/signup",
      name: "signup"
    }
  ]
});
