export const SignInNormal = {
  path: '/sign-in',
  name: 'SignInNormal',
  component: () => import('../views/auth/sign-in/SignInNormal.vue'),
  meta: {
    needLogin: false
  }
}
export const SignInParent = {
  path: '/sign-in-parent',
  name: 'SignInParent',
  component: () => import('../views/auth/sign-in/SignInParent.vue'),
  meta: {
    needLogin: false,
    accessiblePaths: [SignInNormal.path]
  }
}
export const ResetPassword = {
  path: '/reset-password',
  name: 'ResetPassword',
  component: () => import('../views/auth/sign-in/ResetPassword.vue'),
  meta: {
    needLogin: false,
    accessiblePaths: [SignInNormal.path, SignInParent.path]
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
    {
      path: '/profile/change-password',
      name: 'ModalChangePassword',
      component: () => import('../views/auth/profile/ModalChangePassword.vue'),
      meta: {
        needLogin: true
      }
    },
    {
      path: '/profile/change-username',
      name: 'ModalChangeUsername',
      component: () => import('../views/auth/profile/ModalChangeUsername.vue'),
      meta: {
        needLogin: true
      }
    },
  ]
}

export default [
  SignInNormal,
  SignInParent,
  ResetPassword,
  Profile
]
