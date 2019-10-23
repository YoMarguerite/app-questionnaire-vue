import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questionnaire from '../views/Questionnaire'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
