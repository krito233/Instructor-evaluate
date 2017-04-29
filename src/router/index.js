import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Evaluate from '../components/Evaluate.vue'
import LoginPc from '../components/LoginPc.vue'
import AdminMain from '../components/AdminMain.vue'

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
      path: '/admin',
      name: 'adminLogin',
      component: LoginPc
    },
    {
      path: '/admin/main',
      name: 'adminMain',
      component: AdminMain
    }
  ]
})
