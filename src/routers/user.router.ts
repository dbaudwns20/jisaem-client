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
  path: '/user/edit/:id/:authLevel',
  name: 'ModalEditUser',
  component: () => import('../views/user/ModalEditUser.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  }
}

export const ModalCreateParent = {
  path: '/user/:id/create-parent',
  name: 'ModalCreateParent',
  component: () => import('../views/user/ModalCreateParent.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
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
  props: {userId: '', labelList: []}
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
    ModalEditUser
  ]
}

export default [
  User
]
