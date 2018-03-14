import Vue from 'vue'
import Vuex from 'vuex'
// 导入state/mutations等,单独写在一个文件中,防止内容过多造成冗余
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createLogger from 'vuex/dist/logger' // 修改日志

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production' // 开发环境中为true，否则为false

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
})