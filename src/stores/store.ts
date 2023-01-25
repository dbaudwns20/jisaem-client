import { createStore } from 'vuex'
import PersistedState from "vuex-persistedstate"
import UserStore from "@/stores/user.store"

export default createStore({
  modules: {
    userStore: UserStore
  },
  plugins: [
    PersistedState({
      //주목! : 여기에 쓴 모듈만 저장됩니다.
      paths: ['userStore'],
    }),
  ]
})
