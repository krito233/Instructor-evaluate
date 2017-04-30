<template>
  <div class="main-container">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true"
             @select="handleSelect">
      <el-menu-item index="result">查看结果</el-menu-item>
      <el-menu-item index="upload">上传数据</el-menu-item>
      <el-menu-item style="float: right" index="logout">退出</el-menu-item>
    </el-menu>

    <div class="main-router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'result'
      };
    },
    computed: {
      adminToken() {
        return this.$store.state.user.adminToken;
      }
    },
    mounted() {
      this.activeIndex = this.getCurrentActiveIndex();

      // 是否管理员 是否已登录
      this.confirmLogin();
    },
    methods: {
      handleSelect(key, keyPath) {
//        console.log(key, keyPath);
      },
      getCurrentActiveIndex() {
        switch (this.$route.path) {
          case '/admin/main/result':
            return 'result';
          case '/admin/main/upload':
            return 'upload';
        }
      },
      confirmLogin() {
        if (this.adminToken === '') {
          this.$router.push({name: 'adminLogin'});
        }
      }
    }
  }
</script>

<style>

</style>
