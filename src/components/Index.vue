<template>
  <div class="welcome-container">
    <h1>欢迎使用辅导员评价系统</h1>
    <p>请登录</p>
    <a href="">易班登录</a>
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
  .welcome-container {
    margin-top: 100px;

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
