<template>
  <div class="auth-container">
    授权获取中，请耐心等待。
  </div>
</template>

<script>
  import API from '../config/request';
  import * as types from '../store/mutation-types';
  import config from '../config/config';

  export default {
    mounted() {
      this.getToken();
    },
    methods: {
      getToken() {
        let self = this;
        this.$http.post(API.yibanAuth, {
          verify_request: this.$route.query.verify_request,
          yb_uid: this.$route.query.yb_uid
        }).then(
          (res) => {
            if (res.data.status === 1) {
              // 未授权，引导到授权页
              window.location.href = 'https://openapi.yiban.cn/oauth/authorize?client_id=' + config.APPID + '&redirect_uri=' + config.redirectUrl + '&display=html';
            } else if (res.data.status === 2 || res.data.status === 500) {
              // 接口故障，弹出提示
              self.$notify.error({
                title: '授权获取错误',
                message: '接口故障，请联系开发者，三秒后为您跳转回首页'
              });
              setTimeout(function () {
                self.$router.push({name: 'index'});
              }, 3000);
            } else if (res.data.status === 0) {
              // 授权正常
              self.$store.commit(types.SET_TOKEN, {token: res.data.data});
            }
          }
        )
      }
    }
  }
</script>

<style>

</style>
