import { AuthLevel } from "@/models/auth/auth.level"

export const ModalCreateUser = {
  path: '/user/create',
  name: 'ModalCreateUser',
  component: () => import('../views/user/ModalCreateUser.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  }
}

export const ModalEditUser = {
  path: '/user/edit',
  name: 'ModalEditUser',
  component: () => import('../views/user/ModalEditUser.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  props: {
    userId: '',
    userAuthLevel: 0
  }
}

export const ModalCreateParent = {
  path: '/user/create-parent',
  name: 'ModalCreateParent',
  component: () => import('../views/user/ModalCreateParent.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  props: {
    userId: ''
  }
}

export const ModalEditParent = {
  path: '/user/edit-parent',
  name: 'ModalEditParent',
  component: () => import('../views/user/ModalEditParent.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  props: {
    userId: '',
    userParentInfo: {}
  }
}

export const ModalUpdatePassword = {
  path: '/user/update-password',
  name: 'ModalUpdatePassword',
  component: () => import('../views/user/ModalUpdatePassword.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  props: {
    userId: '',
    isParent: false
  }
}

export const ModalManageUserLabel = {
  path: '/user/manage-user-labels',
  name: 'ModalMangeUserLabel',
  component: () => import('../views/user/ModalManageUserLabel.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  props: {
    userId: '',
    labelList: []
  }
}

export const User = {
  path: '/user',
  name: 'User',
  component: () => import('../views/user/User.vue'),
  meta: {
    needLogin: true,
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  children: [
    ModalCreateUser,
    ModalCreateParent,
    ModalManageUserLabel,
    ModalEditUser,
    ModalEditParent,
    ModalUpdatePassword
  ]
}

export default [
  User
]
