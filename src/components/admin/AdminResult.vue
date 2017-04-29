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
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        let self = this
        this.$http.get(API.showEvaluate).then(
          (res) => {
            self.tableData = res.data
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .result-container {

    .table-container {
      padding: 20px 60px;
    }
  }
</style>
