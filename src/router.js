import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import HomeView from './components/views/HomeView.vue'
import ProjectView from './components/views/ProjectView.vue'
import WorkView from './components/views/WorkView.vue'
import ContactView from './components/views/ContactView.vue'
import ErrorView from './components/views/ErrorView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/work', component: WorkView },
  { path: '/work/:projectId', component: ProjectView },
  { path: '/contact', component: ContactView },
  { path: '*', component: ErrorView }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;