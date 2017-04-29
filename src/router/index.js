import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Evaluate from '../components/Evaluate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: Evaluate
    }
  ]
})
