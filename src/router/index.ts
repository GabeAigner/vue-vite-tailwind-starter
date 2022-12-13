import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldView from '../views/HelloWorldView.vue'

const routes = [
  {
    path: '/',
    name: 'helloWorld',
    component: HelloWorldView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
