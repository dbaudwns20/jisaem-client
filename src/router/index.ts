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
        component: () => import('../views/auth/ModalSignUpManager.vue'),
        meta: {
          modalTitle: "회원가입"
        }
      },
      {
        path: '/sign_up/user',
        name: 'ModalSignUpUser',
        component: () => import('../views/auth/ModalSignUpUser.vue')
      }
    ]
  },
  {
    path: '/reset_password',
    name: 'ResetPassword',
    component: () => import('../views/auth/ResetPassword.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
