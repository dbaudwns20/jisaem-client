export const Class = {
  path: '/class',
  name: 'Class'
}

export default [
  {
    path: Class.path,
    name: Class.name,
    component: () => import('../views/class/Class.vue')
  }
]
