export default [
  {
    path: '/sign_in',
    name: 'SignIn',
    component: () => import('../views/auth/SignIn.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/auth/Profile.vue'),
    children: [
      {
        path: '/profile/confirm_password',
        name: 'ModalConfirmPassword',
        component: () => import('../views/auth/ModalConfirmPassword.vue')
      },
    ]
  },
]
