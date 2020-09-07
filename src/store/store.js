import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import wordsModule from './modules/words.js'

const store = new Vuex.Store({
   modules : {
        projects : wordsModule
   }
})

export default store;