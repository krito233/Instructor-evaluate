<template>
  <div class="welcome-container">
    <h1>欢迎使用辅导员评价系统</h1>
    <p>本系统支持账户密码登录或易班登录，账户为学号，密码为身份证后6位，学号或身份证中有的字母大写。评价过程中如无必要请勿刷新页面。</p>
    <a v-on:click="goYibanAuth">易班登录</a>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="50px" class="login-form">
      <el-form-item label="账户" prop="user">
        <el-input v-model="loginForm.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import API from '../config/request';
  import config from '../config/config';
  export default {
    name: 'hello',
    data () {
      let validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入学号'));
        } else {
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          pass: '',
          user: ''
        },
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          user: [
            {validator: validateUser, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let promise = self.$http.post(API.login, {number: self.loginForm.user, password: self.loginForm.pass});
            self.$store.dispatch('doLogin', promise).then(
              () => {this.$router.push('evaluate')},
              () => {self.$notify.error({title: '登录错误', message: '账户或密码错误'});}
            );
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goYibanAuth() {
        window.location.href = 'https://openapi.yiban.cn/oauth/authorize?client_id=' + config.APPID + '&redirect_uri=' + config.redirectUrl + '&display=html';
      }
    }
  }
</script>

<style lang="less" scoped>
  .welcome-container {
    margin-top: 100px;

    p {
      padding: 0 20px;
      text-align: left;
    }

    h1 {
      font-weight: normal;
    }

    a {
      color: #42b983;
    }

    .login-form {
      margin: 20px 30px 20px 20px;
    }
  }
</style>
