export default [
  {
    path: '/sign_in',
    name: 'SignIn',
    component: () => import('./views/SignIn.vue')
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: () => import('./views/SignUp.vue'),
    children: [
      {
        path: '/sign_up/manager',
        name: 'SignUpManager',
        component: () => import('./views/SignUpManager.vue')
      },
      {
        path: '/sign_up/user',
        name: 'SignUpUser',
        component: () => import('./views/SignUpUser.vue')
      }
    ]
  },
  {
    path: '/reset_password',
    name: 'ResetPassword',
    component: () => import('./views/ResetPassword.vue')
  }
]
