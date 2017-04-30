<template>
  <div class="upload-container">
    <h1>请上传辅导员Excel表格</h1>
    <p>请使用xls格式（office97-2003），默认sheet命叫“Sheet1”,三列内容：学院/工号/姓名，可参考下实例表格</p>
    <a href="/static/example.xls">示例表格</a>
    <form id="uploadInstructors" name="upload">
      <input type="file" name="file">
    </form>
    <el-button type="primary" v-on:click="uploadInstructors">提交</el-button>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    computed: {
      token() {
        return this.$store.state.user.adminToken;
      }
    },
    mounted() {

    },
    methods: {
      uploadInstructors() {
        let formData = new FormData(document.getElementById('uploadInstructors'));
        formData.append('token', this.token);
        this.$http.post(API.uploadInstructors, formData).then(
          (res) => {
              console.log(res);
          }
        )
      }
    }
  }
</script>

<style>

</style>
