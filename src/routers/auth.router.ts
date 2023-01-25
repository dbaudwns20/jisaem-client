export const SignIn = {
  path: '/sign-in',
  name: 'SignIn',
  component: () => import('../views/auth/SignIn.vue')
}
export const Profile = {
  path: '/profile',
  name: 'Profile',
  component: () => import('../views/auth/Profile.vue'),
  children: [
    {
      path: '/profile/confirm-password',
      name: 'ModalConfirmPassword',
      component: () => import('../views/auth/ModalConfirmPassword.vue')
    },
  ]
}

export default [
  SignIn,
  Profile
]
