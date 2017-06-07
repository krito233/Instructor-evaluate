<template>
  <div class="main-container">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
    },
    methods: {
      handleSelect(key) {
        switch (key) {
          case 'result':
            this.$router.push('/admin/main/result');
            break;
          case 'upload':
            this.$router.push('/admin/main/upload');
            break;
        }
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
      },
      init() {
        if (this.$store.state.app.init) {
          this.confirmLogin();
        } else {
          this.$store.watch(function (state) {
            return state.app.init;
          }, () => {
            if (this.$store.state.app.init) {
              this.confirmLogin();
            }
          })
        }
      }
    }
  }
</script>

<style>

</style>
