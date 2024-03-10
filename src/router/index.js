import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Auth/Login.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductIndex from '../views/product/Index.vue'
import ProductShow from '../views/product/Show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductIndex
    },
    {
      path: '/product/:id/:title',
      name: 'ProductShow',
      component: ProductShow
    },
  ]
})

export default router
