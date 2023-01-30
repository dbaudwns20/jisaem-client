import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getSessionToken } from '@/stores/store'
import authRouter, { SignInNormal } from './auth.router'
import dashboardRouter, { Dashboard } from './dashboard.router'
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
 * router 이동 시 체크사항
 */
router.beforeEach((to, from, next) => {
  // 없는 페이지인 경우
  // router 의 meta.needLogin 은 필수요소, 없다면 존재하지 않는 컴포넌트 뷰로 취급한다
  if (_.isUndefined(to.meta.needLogin)) {
    utils.message.showErrorToastMsg('존재하지 않는 페이지입니다')
    next(from) // 현재페이지로 이동
    return
  }
  // 비정상접근 방지
  // router 의 meta.accessiblePaths 가 정의되어 있다면 해당 경로의 from 으로 이동되었을 때만 허용한다
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
  // router 의 meta.needLogin 은 필수요소, 참이라면 로컬스토리지에 토큰이 있는지 확인한다
  const isLogin: boolean = getSessionToken() != null
  if (to.meta.needLogin) {
    if (!isLogin) {
      utils.message.showWarningToastMsg('로그인이 필요합니다')
      next(from) // 현재페이지로 이동
    } else {
      next()
    }
  } else {
    // 로그인한 상태에서 url 입력으로 로그인 페이지 이동할 경우 대시보드로 이동 -> 자동로그인 처리
    if (isLogin && to.path === SignInNormal.path) {
      next(Dashboard)
    } else {
      next()
    }
  }
})

export default router
