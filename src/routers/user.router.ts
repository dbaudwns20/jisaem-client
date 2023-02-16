import { AuthLevel } from "@/models/enum/auth.level"

export const ModalCreateUser = {
  path: '/user/create',
  name: 'ModalCreateUser',
  component: () => import('../views/user/ModalCreateUser.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/user']
  }
}

export const User = {
  path: '/user',
  name: 'User',
  component: () => import('../views/user/User.vue'),
  meta: {
    needLogin: true
  },
  children: [
    ModalCreateUser
  ]
}

export default [
  User
]
