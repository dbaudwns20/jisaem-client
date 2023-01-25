const sessionStore = {
  namespaced : true,
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
    },
    signOut: (state: any) => {
      state.name = null
      state.authLevel = null
      state.authLevel = null
    }
  },
}

export default sessionStore
