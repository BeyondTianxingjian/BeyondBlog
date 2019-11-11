import Vue from 'vue'
import Vuex from 'vuex'
import tokenStorage from './tokenStorage'
import user from './user'
import configuration from './configuration'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { },
  modules: { tokenStorage, user, configuration },
  getters
})

export default store
