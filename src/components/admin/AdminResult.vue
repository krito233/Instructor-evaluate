<template>
  <div class="result-container">
    <p>计算量较大，请等待数据加载，勿频繁刷新。</p>
    <div class="table-container">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="academy"
          label="学院"
          sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable>
        </el-table-column>
        <el-table-column
          prop="score"
          label="分数"
          sortable>
        </el-table-column>
        <el-table-column
          prop="voteRate"
          label="评价率"
          sortable>
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template scope="scope">
            <el-button v-on:click="handleTableClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
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
      this.init();
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
      },
      handleTableClick(row) {
        this.$router.push({name: 'adminDetail', params: {id: row.number}})
      },
      init() {
        if (this.$store.state.app.init) {
          this.loadData();
        } else {
          this.$store.watch(function (state) {
            return state.app.init;
          }, () => {
            if (this.$store.state.app.init) {
              this.loadData();
            }
          })
        }
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
