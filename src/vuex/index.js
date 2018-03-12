import Vue from 'vue'
import Vuex from 'vuex'
// 导入state/mutations等,单独写在一个文件中,防止内容过多造成冗余
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})