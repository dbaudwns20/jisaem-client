export const Dashboard = {
  path: '/dashboard',
  name: 'Dashboard'
}

export default [
  {
    path: Dashboard.path,
    name: Dashboard.name,
    component: () => import('../views/dashboard/Dashboard.vue')
  }
]
