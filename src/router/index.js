import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questions from '../views/Questions.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  }
]

const router = new VueRouter({
  routes
})

export default router
