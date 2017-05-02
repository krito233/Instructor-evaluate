<template>
  <div>
    <p class="right">✔</p>
    <p class="succeed">提交成功啦！</p>
    <p>还有一位辅导员？<span class="re-evaluate" v-on:click="reEvaluate">再次评价</span></p>
  </div>
</template>

<script>
  export default {
    methods: {
      reEvaluate() {
        this.$router.push({name: 'evaluate'});
      }
    }
  }
</script>

<style>
  .right {
    font-size: 80px;
    color: #55ae94;
    margin-top: 20%;
    margin-bottom: 10px;
  }

  .succeed {
    font-size: 40px;
    color: #55ae94;
    font-weight: 500;
    font-family: 微软雅黑, serif;
    margin-top: 10px;
  }

  .re-evaluate {
    text-decoration: underline;
    color: #1d90e6;
    cursor: pointer;
  }
</style>
