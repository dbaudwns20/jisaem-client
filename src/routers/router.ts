import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import authRouter from "./authRouter"
import dashboardRouter from "./dashboardRouter"
import classRouter from "./classRouter"

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

export default router
