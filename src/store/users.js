import Axios from "axios"

export default {
  state: {
    users: [],
    loading: true
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    }
  },
  actions: {
    getUsers({ commit, state }) {
      Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        commit('setUsers', response.data)
        state.loading = false
      }).catch((error) => console.log('Something wen`t wrong!', error))
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    usersLoading(state) {
      return state.loading
    }
  },
}
