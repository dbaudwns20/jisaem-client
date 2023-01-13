import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import authRouter from "@/modules/auth/router"
import dashboardRouter from "@/modules/dashboard/router"

const baseRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/sign_in'
  }
]

const routes: Array<RouteRecordRaw> = baseRouter
  .concat(authRouter)
  .concat(dashboardRouter)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
