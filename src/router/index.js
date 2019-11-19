import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questionnaire from '../views/Questionnaire'
import Resultat from '../views/Resultat'

Vue.use(VueRouter)

const routes = [
  //route de l'accueil, pour se connecter
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //route pour accéder au questionnaire
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire
  },
  //route pour voir les résultats individuelles
  {
    path: '/my_results',
    name: 'my_results',
    component: Resultat
  },
  //route pour voir tout les résultats
  {
    path: '/all_results',
    name: 'all_results',
    component: Resultat,
    props: { all: true }
  }
]

const router = new VueRouter({
  routes
})

export default router
