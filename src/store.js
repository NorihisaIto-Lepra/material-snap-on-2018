import Vue from 'vue'
import Vuex from 'vuex'

import {navigation} from './store/navigation/';
import {sample} from './store/sample/';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation,
    sample,
  },
  /*
  state: {
    displayFixedButton: false,
    nextPage: '',
  },
  mutations: {
  },
  actions: {
  }
*/
})
