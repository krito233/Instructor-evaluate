/**
 * Created by lhy95 on 2017/4/6.
 */
import * as types from '../mutation-types'

const state = {
  token: ''
}

// getters
const getters = {

}

// actions
const actions = {
  doLogin (context, promise) {
    promise.then(
      (res) => {
        console.log('收到了');
        console.log(res);
      }
    )
  }
}

// mutations
const mutations = {
  [types.SET_TOKEN] (state, {token}) {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
