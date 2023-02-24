import { AuthLevel } from "@/models/auth/auth.level"

export const Label = {
  path: '/label',
  name: 'Label',
  component: () => import('../views/label/Label.vue'),
  meta: {
    needLogin: true,
    accessibleAuths: [AuthLevel.AUTH_LEVEL_MANAGER, AuthLevel.AUTH_LEVEL_SUPER, AuthLevel.AUTH_LEVEL_TEACHER]
  }
}

export default [
  Label
]
