import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store, { getSessionToken } from '@/stores/store'
import authRouter, { SignInNormal, SignInParent } from './auth.router'
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
  // 로그인이 필요한 페이지인지 체크
  const isLogin: boolean = getSessionToken() != null

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
    for (const path of paths) {
      if (from.path === path) {
        isAccessible = true
        break
      }
    }
    if (!isAccessible) {
      utils.message.showErrorToastMsg('허용되지 않은 접근입니다')
      next(from) // 현재페이지로 이동
      return
    }
  }
  // 권한체크
  // 로그인이 되어있는 상태에서 router 의 meta.accessibleAuths 가 정의되어 있다면 정의된 권한만 접근할 수 있다
  if (isLogin && !_.isUndefined(to.meta.accessibleAuths)) {
    let isAccessible: boolean = false
    const auths: string[] = to.meta.accessibleAuths as string[]
    const myAuth = store.getters["sessionStore/authLevel"]
    for (const auth of auths) {
      if (myAuth === auth) {
        isAccessible = true
        break
      }
    }
    if (!isAccessible) {
      utils.message.showErrorToastMsg('권한이 불충분합니다')
      next(from) // 현재페이지로 이동
      return
    }
  }
  // router 의 meta.needLogin 은 필수요소, 참이라면 로컬스토리지에 토큰이 있는지 확인한다
  if (to.meta.needLogin) {
    if (!isLogin) {
      utils.message.showWarningToastMsg('로그인이 필요합니다')
      next(from) // 현재페이지로 이동
    } else {
      next()
    }
  } else {
    // 로그인한 상태에서 url 입력으로 로그인 페이지 이동할 때 토큰이 존재한다면 대시보드로 이동 -> 자동로그인 처리
    if (isLogin && (to.path === SignInNormal.path || to.path === SignInParent.path)) {
      next(Dashboard)
    } else {
      next()
    }
  }
})

export default router
