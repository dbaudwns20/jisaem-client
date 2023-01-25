const userStore = {
  namespaced : true,
  state: {
    name: '',
    token: '',
    authLevel: 0
  },
  getters: {
    name: (state: any) => state.name,
    token: (state: any) => state.token,
    authLevel: (state: any) => state.authLevel,
  },
  mutations: {
    signUp: (state: any, payload: any) => {
      state.name = payload.name
      state.authLevel = payload.authLevel
      state.token = payload.token
    },
  },
}

export default userStore
