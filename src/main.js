// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
// import axios from 'axios'
import api from './api/index'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import store from './vuex/index' // 引入store
import $com from './utils/comment'

import 'normalize.css'
import '../static/css/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import box from '@/components/box/index' // 全局注册box组件
import myTitle from '@/components/title/index' // 全局注册title

Vue.config.productionTip = false
Vue.prototype.echarts = echarts
Vue.prototype.$ = $com
// Vue.prototype.$http = axios
Vue.prototype.$api = api
// window.$com = $com
window.log = console.log

Vue.use(ElementUI)
Vue.use(box) // 全局使用box组件
Vue.use(myTitle)
Vue.use($com)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store, // 全局注入store
  components: { App },
  template: '<App/>'
})
