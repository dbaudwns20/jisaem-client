const userStore = {
  namespaced: true,
  state: {
    user: {
      uid: null,
      createdAt: null,
      updatedAt: null,
      authLevel: 0,
      username: null,
      name: null,
      phone: null,
      email: null,
      userLabel: {},
      studentInfo: {},
      parentInfo: {}
    },
  },
  getters: {
    user: (state: any) => state.user
  },
  mutations: {
    setUser: (state: any, payload: any) => {
      state.user['uid'] = payload.uid
      state.user['createdAt'] = payload.createdAt
      state.user['updatedAt'] = payload.updatedAt
      state.user['authLevel'] = payload.authLevel
      state.user['username'] = payload.username
      state.user['name'] = payload.name
      state.user['phone'] = payload.phone
      state.user['email'] = payload.email
      state.user['userLabel'] = payload.userLabel
      state.user['studentInfo'] = payload.studentInfo
      state.user['parentInfo'] = payload.parentInfo
    }
  }
}

export default userStore
