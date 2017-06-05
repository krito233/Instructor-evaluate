<template>
  <div class="result-container">
    <div class="table-container">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="academy"
          label="学院">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="score"
          label="分数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    computed: {
      adminToken() {
        return this.$store.state.user.adminToken;
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        let self = this;
        this.$http.get(API.showEvaluate, {params: {token: self.adminToken}}).then(
          (res) => {
            if (res.data.status === 0) {
              self.tableData = res.data.data
            } else if (res.data.status === 1) {
              // 登录异常
              this.$store.dispatch('adminLogout');
              this.$router.push({name: 'adminLogin'})
            }
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .result-container {

    .table-container {
      display: inline-block;
      padding: 40px 60px;
      min-width: 800px;
      max-width: 1200px;
    }
  }
</style>
