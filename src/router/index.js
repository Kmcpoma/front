import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from '../modules/home/router'
import authRoutes from '../modules/auth/router'
import eventsRoutes from '../modules/events/router'

const routes = [
  ...homeRoutes,
  ...authRoutes,
  ...eventsRoutes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/',
    redirect: '/event/event',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Bicentenario de Bolivia 2025'
  next()
})

export default router
