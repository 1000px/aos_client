import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    curRouterName: '/'
  },
  getters: {
    getCurrentRouter: function (state) {
      return state.curRouterName
    }
  },
  mutations: {
    chgCurrentRouter: function (state, obj) {
      state.curRouterName = obj.name
    }
  }
})

export default store
