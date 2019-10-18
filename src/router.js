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
            breadcrumb : []
          }
        },
        {
          path: "dashboard",
          components: {
            default : IndexController
          },
          meta : {
            showTitle : true,
            title : "Dashboard",
            showBreadcrumb : true,
            breadcrumb : [
              { name : 'Home', link : "/" },
              { name : 'Dashboard' }
            ]
          }
        },
        {
          path: "engage",
          components: {
            default :  IndexController
          },
          meta : {
            showTitle : true,
            title : "Engage",
            showBreadcrumb : true,
            breadcrumb : [
              { name : 'Home', link : "/" },
              { name : 'Engange' }
            ]
          }
        },
        {
          path: "messages",
          components: {
            default :  IndexController
          },
          meta : {
            showTitle : true,
            title : "Messages",
            showBreadcrumb : true,
            breadcrumb : [
              { name : 'Home', link : "/" },
              { name : 'Messages' }
            ]
          }
        },
        {
          path: "settings",
          components: {
            default :  IndexController
          },
          meta : {
            showTitle : true,
            title : "Settings",
            showBreadcrumb : true,
            breadcrumb : [
              { name : 'Home', link : "/" },
              { name : 'Settings' }
            ]
          }
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
