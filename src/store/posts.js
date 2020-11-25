import Axios from 'axios'

export default {
  state: {
    posts: [],
    comments: [],
    loading: true,
    currentPost: null
  },
  mutations: {
    setPosts(state, payload) {
      if (state.posts.length === 0) {
        state.posts = payload
      }
    },
    setComments(state, payload) {
      state.comments = payload
    },
    addNewPost(state, payload) {
      state.posts.push(payload)
    },
    setCurrentPost(state, payload) {
      state.currentPost = payload
    }
  },
  actions: {
    getPosts({ commit, state }) {
      state.loading = true
      return Axios('https://jsonplaceholder.typicode.com/posts').then((response) => {
        commit('setPosts', response.data)
        state.loading = false
      }).catch((error) => console.log('Something wen`t wrong!', error));
    },
    getComments({ commit, state }, payload) {
      if (payload) {
        state.loading = true
        return Axios(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`).then((response) => {
          commit('setComments', response.data)
          state.loading = false
        }).catch((error) => console.log('Something wen`t wrong!', error))
      }
      if (!payload) {
        state.loading = false
      }
    },
    addNewPost({ commit }, payload) {
      commit('addNewPost', payload)
    },
    getPostInfo({ commit, state }, payload) {
      if (payload) {
        state.loading = true
        return Axios(`https://jsonplaceholder.typicode.com/posts/${payload}`).then((response) => {
          commit('setCurrentPost', response.data)
          state.loading = false
        }).catch((error) => console.log('Something wen`t wrong!', error))
      }
      if (!payload) {
        state.loading = false
      }
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    comments(state) {
      return state.comments
    },
    loading(state) {
      return state.loading
    },
    getCurrentPost(state) {
      return state.currentPost
    }
  },
};
