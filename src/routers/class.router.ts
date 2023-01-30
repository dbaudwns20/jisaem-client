export const Class = {
  path: '/class',
  name: 'Class',
  component: () => import('../views/class/Class.vue'),
  meta: {
    needLogin: true
  }
}

export default [
  Class
]
