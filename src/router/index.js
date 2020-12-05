import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/index.vue'
import Order from '@/views/order.vue'
import Shop from '@/views/shop.vue'
import Category from '@/views/category.vue'
import Dish from '@/views/dish.vue'
import Desk from '@/views/desk.vue'
import Chart from '@/views/chart.vue'
import Profile from '@/views/profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // component: Index
      redirect: '/order'
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/dish',
      name: 'dish',
      component: Dish
    },
    {
      path: '/desk',
      name: 'desk',
      component: Desk
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
