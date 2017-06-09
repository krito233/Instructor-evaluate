<template>
  <div class="detail-container">
    <el-button type="primary" v-on:click="backToResult">返回列表</el-button>
    <div class="table-container">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="studentNumber"
          label="学号"
          sortable>
        </el-table-column>
        <el-table-column
          prop="score"
          label="分数"
          sortable>
        </el-table-column>
        <el-table-column
          prop="message"
          label="建议或意见"
          sortable>
        </el-table-column>
      </el-table>
    </div>
    <div class="no-vote-list">
      <p>未评价学生学号：<span v-for="item in noVoteList">{{item}} , </span></p>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        tableData: [],
        noVoteList: []
      }
    },
    created() {
      this.init();
    },
    methods: {
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
      },
      loadData() {
        let postData = {
          token: this.$store.state.user.adminToken,
          number: this.$route.params.id
        };
        this.$http.post(API.evaluateDetail, postData).then(
          (res) => {
            if (res.data.status === 0) {
              this.tableData = res.data.data;
              this.noVoteList = res.data.noVoteList;
            }
          }
        )
      },
      backToResult() {
        this.$router.push('/admin/main/result');
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail-container {
    padding: 20px;

    .table-container {
      margin: 20px 20%;
    }

    .no-vote-list {
      margin: 20px 20%;
    }
  }
</style>
