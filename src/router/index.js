import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: 'welcome',
      component: () => import("@/layouts/main-layout/"),
      children: [
        {
          path: 'welcome',
          component: () => import("@/layouts/welcome-page-layout/")
        },
      ]
    },
  ]
})
