import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: []
  },
  mutations: {
    addUser(state, user) {
      state.userList.push(user)
    },
    deleteUser(state, user) {
      const index = state.userList.indexOf(user);
      if (index !== -1)
        state.userList.splice(index, 1);
    }
  },
  actions: {
  },
  getters: {
    getUserList: state => state.userList
  },
  modules: {
  }
})
