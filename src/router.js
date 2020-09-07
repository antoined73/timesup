import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import HomeView from './components/views/HomeView.vue'
import WordsView from './components/views/WordsView.vue'
import GameView from './components/views/GameView.vue'
import RulesView from './components/views/RulesView.vue'
import ErrorView from './components/views/ErrorView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/game', component: GameView },
  { path: '/words', component: WordsView },
  { path: '/rules', component: RulesView },
  { path: '*', component: ErrorView }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;