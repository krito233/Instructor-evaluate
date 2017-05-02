/**
 * Created by lhy95 on 2017/4/28.
 */

// 全栈工程师本地调试用
// const baseUrl = 'http://localhost:8086';

// 前端工程师测试用
// const baseUrl = 'http://easy-mock.com/mock/590080f6875d7232a38b1e80/evaluate/';

// 线上地址
const baseUrl = 'http://yb.upc.edu.cn:8087';

const API = {
  login: baseUrl + '/instructor/login',
  submitEvaluate: baseUrl + '/instructor/submitEvaluate',
  getInstructor: baseUrl + '/instructor/getInstructor',
  yibanAuth: baseUrl + '/instructor/loginbyyiban',

  adminLogin: baseUrl + '/instructor/admin/login',
  showEvaluate: baseUrl + '/instructor/showEvaluate',
  uploadInstructors: baseUrl + '/instructor/uploadInstructor'
};

module.exports = API;
