/**
 * Created by lhy95 on 2017/4/6.
 */
import * as types from '../mutation-types'

const state = {
  token: ''
}

// getters
const getters = {
  token: state => state.token
}

// actions
const actions = {
  doLogin (context, promise) {
    return new Promise((resolve, inject) => {
      promise.then(
        (res) => {
          if (res.data.status === 0) {
            context.commit(types.SET_TOKEN, {token: res.data.data});
            resolve();
          }
          else {
            inject();
          }
        },
        (res) => {
          inject();
        }
      )
    })
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
