import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contacts from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },            // Default page
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contacts', name: 'Contacts', component: Contacts },

  // Optional: redirect /home to /
  { path: '/home', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

