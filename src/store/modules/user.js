/**
 * Created by lhy95 on 2017/4/6.
 */
import * as types from '../mutation-types'

const state = {
  token: '',
  adminToken: '',
  instructor: {
    name: '',
    secondInstructorName: ''
  }
}

// getters
const getters = {
  token: state => state.token,
  adminToken: state => state.adminToken,
  instructor: state => state.instructor
}

// actions
const actions = {
  doLogin (context, promise) {
    return new Promise((resolve, inject) => {
      promise.then(
        (res) => {
          if (res.data.status === 0) {
            context.commit(types.SET_TOKEN, {token: res.data.data});
            context.commit(types.SET_INSTRUCTOR, res.data);
            resolve();
          }
          else {
            inject();
          }
        },
        () => {
          inject();
        }
      )
    })
  },
  adminLogin (context, promise) {
    return new Promise((resolve, inject) => {
      promise.then(
        (res) => {
          if (res.data.status === 0) {
            localStorage.setItem('adminToken', res.data.data);
            context.commit(types.SET_ADMIN_TOKEN, {token: res.data.data});
            resolve();
          }
          else {
            inject();
          }
        },
        () => {
          inject();
        }
      )
    })
  },
  adminLogout (context) {
    localStorage.removeItem('adminToken');
    context.commit(types.ADMIN_LOGOUT);
    return true;
  }
}

// mutations
const mutations = {
  [types.SET_TOKEN] (state, {token}) {
    state.token = token
  },
  [types.SET_ADMIN_TOKEN] (state, {token}) {
    state.adminToken = token
  },
  [types.ADMIN_LOGOUT] (state) {
    state.adminToken = ''
  },
  [types.SET_INSTRUCTOR] (state, data) {
    state.instructor.name = data.instructorName;
    if (data.hasSecond) {
      state.instructor.secondInstructorName = data.secondInstructorName;
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
