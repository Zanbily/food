import { createRouter, createWebHashHistory } from 'vue-router'
// import { Store } from 'vuex'
import store from '../store/index'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    const user = store.getters.loggedIn
    if (user) {
      next()
    } else {
      next({ name: 'Auth' })
    }
  } else {
    next()
  }
})

export default router
