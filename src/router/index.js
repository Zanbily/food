import { createRouter, createWebHashHistory } from 'vue-router'
// import { Store } from 'vuex'
import store from '../store/index'
import Recipes from '../views/Recipes.vue'
import Auth from '../views/Auth.vue'
import NewItem from '../components/NewItem.vue'
import Detail from '../components/Detail.vue'
import Edit from '../components/Edit.vue'
import ShoppingList from '../views/ShoppingList.vue'

const routes = [
  {
    path: '/',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        name: 'NewItem',
        path: 'New',
        component: NewItem
      },
      {
        name: 'Detail',
        path: 'Detail/:index',
        component: Detail
      },
      {
        name: 'Edit',
        path: 'Edit/:index',
        component: Edit
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/shoppingList',
    name: 'ShoppingList',
    component: ShoppingList
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
