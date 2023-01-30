import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getSessionToken } from '@/stores/store'
import authRouter, { SignInNormal } from './auth.router'
import dashboardRouter from './dashboard.router'
import classRouter from './class.router'
import utils from "@/utils/utils"

import _ from 'lodash'

const baseRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: SignInNormal.path
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
 * 접근하는 라우터에 접근할 수 있는지 체크
 * 토큰여부를 확인하여 페이지 라우팅, 없는 경우 로그인 페이지로 리다이렉트
 */
router.beforeEach((to, from, next) => {
  // router.meta.accessiblePaths 에 정의된 경로만 이동되도록
  if (!_.isUndefined(to.meta.accessiblePaths)) {
    let isAccessible: boolean = false
    const paths: string[] = to.meta.accessiblePaths as string[]
    paths.forEach((path) => {
      if (from.path === path) {
        isAccessible = true
      }
    })
    if (!isAccessible) {
      utils.message.showErrorToastMsg('비정상적인 접근입니다')
      next(from) // 현재페이지로 이동
      return
    }
  }
  // 로그인이 필요한 페이지인지 체크
  if (to.meta.needLogin) {
    const isLogin: boolean = getSessionToken() != null
    if (!isLogin) {
      utils.message.showWarningToastMsg('로그인이 필요합니다')
      next(from) // 현재페이지로 이동
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
