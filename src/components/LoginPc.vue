<template>
  <div class="login">
    <div class="login-panel">
      <h1 class="logo">辅导员评价管理系统</h1>
      <el-form :model="formRight" label-position="top">
        <el-form-item>
          <el-input v-model="formRight.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formRight.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="long" v-on:click="handleLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        formRight: {}
      }
    },
    methods: {
      changeToReg () {
        this.$router.push('/reg')
      },
      handleLogin () {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .login {
    background-color: #eaeaea;
    width: 100vw;
    height: 100vh;

    .login-panel {
      /*background-color: #fff;*/
      width: 350px;
      padding: 20px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .logo {
        font-size:35px;
        color: rgba(102, 102, 102, 0.5);
        text-align: center;
        margin-bottom: 40px;
      }

      .text {
        font-size: 12px;
        text-align: center;
      }

      .forget {
        margin-top: 15px;
        color: #317ffe;
        cursor: pointer;
      }

      .reg {
        margin-bottom: 15px;
      }

      .long {
        width: 100%;
      }
    }
  }
</style>
