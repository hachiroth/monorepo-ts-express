import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

const isSupportViewTransition = typeof document.startViewTransition === 'function'

router.beforeResolve((to, from, next) => {
  if (isSupportViewTransition) {
    document.startViewTransition(() => next())
  }
  else {
    next()
  }
})

export default router
