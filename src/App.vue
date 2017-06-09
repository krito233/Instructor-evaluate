<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import * as types from './store/mutation-types'
  export default {
    name: 'app',
    mounted () {
      this.readDataFromLocalStorage();
    },
    methods: {
      readDataFromLocalStorage() {
        if (localStorage.getItem('adminToken') !== null) {
          this.$store.commit(types.SET_ADMIN_TOKEN, {token: localStorage.getItem('adminToken')});
        }
        this.$store.commit(types.INIT_APPLICATION);
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 微软雅黑,serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
</style>
