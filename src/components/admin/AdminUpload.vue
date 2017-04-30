<template>
  <div class="upload-container">
    <h1>请上传辅导员Excel表格</h1>
    <p>请使用xls格式（office97-2003），默认sheet命叫“Sheet1”,三列内容：学院/工号/姓名，可参考下实例表格</p>
    <a href="/static/example.xls">示例表格</a>
    <p>注意：上传新的表单会删除之前的数据，请不要随时随意上传</p>
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
        let self = this;
        let formData = new FormData(document.getElementById('uploadInstructors'));
        formData.append('token', this.token);
        this.$http.post(API.uploadInstructors, formData).then(
          (res) => {
            if (res.data.status === 0) {
              self.$notify({title: '上传成功', message: '请转至查看结果页查看新的辅导员列表', type: 'success'});
            }
            self.$notify.error({title: '上传失败', message: '请确认自己的管理员身份，刷新页面重试'});
          },
        () => {self.$notify.error({title: '上传失败', message: '请确认自己的网络，若多次失败，请联系开发者'});}
        )
      }
    }
  }
</script>

<style>

</style>
