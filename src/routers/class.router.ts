import { AuthLevel } from "@/models/auth/auth.level"

export const ModalCreateClass = {
  path: '/class/create',
  name: 'ModalCreateClass',
  component: () => import('../views/class/ModalCreateClass.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/class'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  }
}

export const ModalManageClassLabel = {
  path: '/class/manage-class-labels',
  name: 'ModalManageClassLabel',
  component: () => import('../views/class/ModalManageClassLabel.vue'),
  meta: {
    needLogin: true,
    accessiblePaths: ['/class'],
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  },
  props: {
    classId: '',
    labelList: []
  }
}

export const Class = {
  path: '/class',
  name: 'Class',
  component: () => import('../views/class/Class.vue'),
  meta: {
    needLogin: true
  },
  children: [
    ModalCreateClass,
    ModalManageClassLabel
  ]
}

export default [
  Class
]
