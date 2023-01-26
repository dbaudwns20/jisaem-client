import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getSessionToken } from '@/stores/store'
import authRouter, { SignIn } from './auth.router'
import dashboardRouter from './dashboard.router'
import classRouter from './class.router'
import Message from "@/utils/message";

const baseRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: SignIn.path
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

/**
 * 토큰여부를 확인하여 페이지 라우팅, 없는 경우 로그인 페이지로 리다이렉트
 */
router.beforeEach((to, from, next) => {
  if (to.name === SignIn.name) {
    next()
    return
  }
  const isLogin: boolean = getSessionToken() != null
  if (!isLogin) {
    Message.showWarningToastMsg('로그인이 필요합니다.')
    next({path: "/"})
  } else {
    next()
  }
})

export default router
