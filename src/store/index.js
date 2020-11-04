import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        email: 'ibrahim@gmail.com',
        password: '123456'
      }
    ],
    loggedIn: false
  },
  mutations: {
    newUser: (state, user) => (state.users.push(user)),
    logInorOut: (state, inOrOut) => (state.loggedIn = inOrOut)
  },
  getters: {
    allUsers: (state) => state.users,
    loggedIn: (state) => state.loggedIn
  },
  actions: {
    async addUser ({
      commit
    }, user) {
      commit('newUser', user)
    },
    async logInorOut ({
      commit
    }, inOrOut) {
      commit('logInorOut', inOrOut)
    }
  },
  modules: {
  }
})
