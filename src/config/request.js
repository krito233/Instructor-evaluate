/**
 * Created by lhy95 on 2017/4/28.
 */

// const baseUrl = 'http://localhost:8086';
const baseUrl = 'http://easy-mock.com/mock/590080f6875d7232a38b1e80/evaluate/';

const API = {
  login: baseUrl + '/instructor/login',
  submitEvaluate: baseUrl + '/instructor/submitEvaluate',
  getInstructor: baseUrl + '/instructor/getInstructor'
};

module.exports = API;
