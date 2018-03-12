import Vue from 'vue'
import Router from 'vue-router'
import bmap from '@/components/map'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/bmap',
      name: 'bmap',
      component: bmap
    }
  ]
})
