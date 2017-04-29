import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Evaluate from '../components/Evaluate.vue'
import LoginPc from '../components/LoginPc.vue'
import SubmitSucceed from '../components/SubmitSucceed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: Evaluate
    },
    {
      path: '/loginPc',
      component: LoginPc
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: SubmitSucceed
    }
  ]
})
