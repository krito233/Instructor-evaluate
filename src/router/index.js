import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import YibanAuth from '../components/YibanAuth.vue'
import Evaluate from '../components/Evaluate.vue'
import LoginPc from '../components/LoginPc.vue'
import AdminMain from '../components/AdminMain.vue'
import AdminResult from '../components/admin/AdminResult.vue'
import AdminUpload from '../components/admin/AdminUpload.vue'
import AdminLogout from '../components/admin/AdminLogout.vue'
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
      path: '/yiban',
      name: 'yibanAuth',
      component: YibanAuth
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
      redirect: '/admin/main/result',
      name: 'adminMain',
      component: AdminMain,
      children: [
        {
          path: 'result',
          name: 'adminResult',
          component: AdminResult
        },
        {
          path: 'upload',
          name: 'adminUpload',
          component: AdminUpload
        },
        {
          path: 'logout',
          name: 'adminLogout',
          component: AdminLogout
        }
      ]
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: SubmitSucceed
    }
  ]
})
