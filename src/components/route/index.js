import { createRouter, createWebHistory } from 'vue-router'
import Google from "../Google.vue"
import GoogleSearched from "../GoogleSearched.vue"

const routes = [
  {
    path: '/',
    name: 'Google',
    component: Google,
  },
  {
    path: '/GoogleSearched',
    name: 'GoogleSearched',
    component: GoogleSearched,
    //props: (route) => ({ searchTerm: route.params.searchTerm })
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
