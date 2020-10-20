import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Order from '@/views/order.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
