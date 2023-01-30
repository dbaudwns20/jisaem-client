import AuthGrpcService from "@/services/auth.grpc.service"
import router from "@/routers/router"

const sessionStore = {
  namespaced: true,
  state: {
    name: null,
    token: null,
    authLevel: 0
  },
  getters: {
    name: (state: any) => state.name,
    token: (state: any) => state.token,
    authLevel: (state: any) => state.authLevel,
  },
  mutations: {
    signIn: (state: any, payload: any) => {
      state.name = payload.name
      state.authLevel = payload.authLevel
      state.token = payload.token
    }
  },
  actions: {
    async signOut() {
      await AuthGrpcService.signOut()
      await window.localStorage.removeItem('vuex')
      await router.push('/')
    }
  }
}

export default sessionStore
