/**
 * Created by lhy95 on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/user'
import createLogger from 'vuex/src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
