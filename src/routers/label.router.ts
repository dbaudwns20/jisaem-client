import { AuthLevel } from "@/models/enum/auth.level"

export const Label = {
  path: '/label',
  name: 'Label',
  component: () => import('../views/label/Label.vue'),
  meta: {
    needLogin: true
  }
}

export default [
  Label
]
