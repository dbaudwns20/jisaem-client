import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import authRouter from "./auth.router"
import dashboardRouter from "./dashboard.router"
import classRouter from "./class.router"

import store from "@/stores/store"

const baseRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/sign_in'
  }
]

const routes: Array<RouteRecordRaw> = baseRouter
  .concat(authRouter)
  .concat(dashboardRouter)
  .concat(classRouter)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === "SignIn") {
    next()
    return
  }
  const isLogin = store.getters["userStore/token"] != ''
  if (!isLogin) {
    alert("로그인 하세요!")
    next({path: "/"})
  } else {
    next()
  }
})

export default router
