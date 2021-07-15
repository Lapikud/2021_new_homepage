import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import App from '@/App/App.vue'

const routes = [
  {
    path: '/:lang?/',
    name: 'Main',
    components: {
      default: App
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
