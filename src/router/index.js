import Vue from 'vue'
import Router from 'vue-router'
 import denglu from '@/view/denglu/denglu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'denglu',
      component: denglu
    }
  ]
})
