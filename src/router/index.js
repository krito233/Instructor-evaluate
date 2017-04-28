import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Evaluate from '@/components/Evaluate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/evaluate',
      component: Evaluate
    }
  ]
})
