import Vue from 'vue';
import Vuex from 'vuex';

import Posts from './posts';
import Users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Posts,
    Users
  },
});
