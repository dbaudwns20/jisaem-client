import { AuthLevel } from "@/models/auth/auth.level"

export const SignInNormal = {
  path: '/sign-in',
  name: 'SignInNormal',
  component: () => import('../views/auth/signIn/SignInNormal.vue'),
  meta: {
    needLogin: false
  }
}

export const SignInParent = {
  path: '/sign-in-parent',
  name: 'SignInParent',
  component: () => import('../views/auth/signIn/SignInParent.vue'),
  meta: {
    needLogin: false
  }
}

export const ModalChangePassword = {
  path: '/profile/change-password',
  name: 'ModalChangePassword',
  component: () => import('../views/auth/profile/ModalChangePassword.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/profile']
  }
}

export const ModalChangeUsername = {
  path: '/profile/change-username',
  name: 'ModalChangeUsername',
  component: () => import('../views/auth/profile/ModalChangeUsername.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/profile'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  }
}

export const Profile = {
  path: '/profile',
  name: 'Profile',
  component: () => import('../views/auth/profile/Profile.vue'),
  meta: {
    needLogin: true
  },
  children: [
    ModalChangePassword,
    ModalChangeUsername
  ]
}

export default [
  SignInNormal,
  SignInParent,
  Profile
]
