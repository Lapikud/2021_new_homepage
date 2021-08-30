import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import AboutUs from '@/views/AboutUs/AboutUs.vue'
import Contact from '@/views/Contact/Contact.vue'
import Stream from '@/views/Stream/Stream.vue'
import Calendar from '@/views/Calendar/Calendar.vue'
import Join from '@/views/Join/Join.vue'
import Helpdesk from '@/views/Helpdesk/Helpdesk.vue'
import Projects from '@/views/Projects/Projects.vue'
import JoinForm from '@/views/JoinForm/JoinForm.vue'

const routes = [
  {
    path: '/',
    name: 'Esileht',
    component: Home
  },
  {
    path: '/lapikutest',
    name: 'Lapikutest',
    component: AboutUs
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Contact
  },
  {
    path: '/striim',
    name: 'Striim,',
    component: Stream
  },
  {
    path: '/kalender',
    name: 'Kalender,',
    component: Calendar
  },
  {
    path: '/liitu',
    name: 'Liitu,',
    component: Join
  },
  {
    path: '/helpdesk',
    name: 'Helpdesk,',
    component: Helpdesk
  },
  {
    path: '/projektid',
    name: 'Projektid,',
    component: Projects
  },
  {
    path: '/liituforms',
    name: 'Liitu Form,',
    component: JoinForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
