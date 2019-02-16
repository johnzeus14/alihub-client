import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth.js'
import comment from './modules/auth.js'
import password from './modules/auth.js'
import post from './modules/auth.js'
import profile from './modules/auth.js'
import signup from './modules/auth.js'



Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
  		auth,
  		comment,
  		password,
  		post,
  		profile,
  		signup,



  }
})
