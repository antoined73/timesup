import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import projectsModule from './modules/projects.js'

const store = new Vuex.Store({
   modules : {
        projects : projectsModule
   }
})

export default store;