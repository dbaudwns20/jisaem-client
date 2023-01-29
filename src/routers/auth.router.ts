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
      path: '/profile/change-password',
      name: 'ModalChangePassword',
      component: () => import('../views/auth/ModalChangePassword.vue')
    },
    {
      path: '/profile/change-username',
      name: 'ModalChangeUsername',
      component: () => import('../views/auth/ModalChangeUsername.vue')
    },
  ]
}

export default [
  SignIn,
  Profile
]
