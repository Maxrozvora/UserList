import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [],
    searchValue: ''
  },
  mutations: {
    addUser(state, user) {
      state.userList.unshift(user)
    },
    deleteUser(state, user) {
      const index = state.userList.indexOf(user);
      if (index !== -1)
        state.userList.splice(index, 1);
    },

    setUser(state, data) {
      state.userList = data
    },

    setSearchValue(state, value) {
      state.searchValue = value
    }
  },
  actions: {
    async getUsers({commit}) {
      const result = await axios.get('http://jsonplaceholder.typicode.com/users/')
      commit('setUser', result.data)
    }
  },
  getters: {
    getUserList: state => {
      return state.userList.filter(user => user.username.toLowerCase().includes(state.searchValue.toLowerCase()))
    }
  },
  modules: {
  }
})
