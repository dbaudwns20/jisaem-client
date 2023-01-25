export const SignIn = {
  path: '/sign-in',
  name: 'SignIn'
}
export const Profile = {
  path: '/profile',
  name: 'Profile',
  // children
  ModalConfirmPassword: {
    path: '/profile/confirm-password',
    name: 'ModalConfirmPassword'
  }
}

export default [
  {
    path: SignIn.path,
    name: SignIn.name,
    component: () => import('../views/auth/SignIn.vue')
  },
  {
    path: Profile.path,
    name: Profile.name,
    component: () => import('../views/auth/Profile.vue'),
    children: [
      {
        path: Profile.ModalConfirmPassword.path,
        name: Profile.ModalConfirmPassword.name,
        component: () => import('../views/auth/ModalConfirmPassword.vue')
      },
    ]
  },
]
