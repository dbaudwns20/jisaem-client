import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/sign_in',
    name: 'SignIn',
    component: () => import('../views/auth/SignIn.vue')
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: () => import('../views/auth/SignUp.vue'),
    children: [
      {
        path: '/sign_up/manager',
        name: 'ModalSignUpManager',
        component: () => import('../views/auth/ModalSignUpManager.vue')
      },
      {
        path: '/sign_up/user',
        name: 'ModalSignUpUser',
        component: () => import('../views/auth/ModalSignUpUser.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
