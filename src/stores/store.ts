import {createStore} from 'vuex'
import PersistedState from "vuex-persistedstate"
import SessionStore from "@/stores/session.store"

const store = createStore({
  modules: {
    sessionStore: SessionStore
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
 * sessionStore 저장된 토큰 가져오기
 */
export function getSessionToken(): string {
  return store.getters["sessionStore/token"]
}
