import Vue from 'vue'
import Router from 'vue-router'
 import denglu from '@/view/denglu/denglu'
 import  zhuce from '@/view/zhuce/zhuce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/zhuce',   
      name: 'zhuce',
      component: zhuce 
    }
  ]
})
