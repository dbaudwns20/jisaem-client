export const Dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('../views/dashboard/Dashboard.vue'),
  meta: {
    needLogin: true
  }
}

export default [
  Dashboard
]
