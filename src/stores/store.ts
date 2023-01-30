import { createStore } from 'vuex'
import PersistedState from "vuex-persistedstate"
import SessionStore from "@/stores/session.store"
import UserStore from "@/stores/user.store"

import _ from 'lodash'

const store = createStore({
  modules: {
    sessionStore: SessionStore,
    userStore: UserStore
  },
  plugins: [
    PersistedState({
      // 로그인 정보 유지
      paths: ['sessionStore'],
    }),
  ]
})
export default store

/**
 * LocalStorage 저장된 토큰 가져오기
 */
export function getSessionToken(): string {
  const token = JSON.parse(window.localStorage.getItem('vuex') as string)?.sessionStore?.token
  return _.isUndefined(token) ? null : token
}
