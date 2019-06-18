<template>
  <div class="evaluate-container">
    <h1 class="title">中国石油大学(华东)辅导员考核测评表</h1>
    <div class="form">
      <div class="content">
        <p class="description">请评价您的辅导员: {{instructor.name}}</p>
        <div class="subject" v-for="(item, index) in subject">
          <span class="index"> {{ index + 1 }}、</span>
          <ul>
            <li v-for="content in item.content"> {{ content }} </li>
          </ul>
          <div class="result">
            <p v-for="res in item.result">
              <el-radio class="radio" v-model="radio[index]" :label="res.value"> {{ res.name }} </el-radio>
            </p>
          </div>
        </div>
        <div class="message-container">
          <p>还有什么想对辅导员说的意见和建议？</p>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="意见和建议"
            v-model="textarea">
          </el-input>
        </div>
        <div class="submit-container">
          <el-button type="danger" v-on:click="resetForm">重置</el-button>
          <el-button type="primary" v-on:click="submitEvaluate(1)">提交</el-button>
        </div>
      </div>
    </div>
    <div class="second-form" v-if="instructor.secondInstructorName!==''">
      <div class="content">
        <p class="description">请评价您的另一位辅导员: {{instructor.secondInstructorName}}</p>
        <div class="subject" v-for="(item, index) in subject">
          <span class="index"> {{ index + 1 }}、</span>
          <ul>
            <li v-for="content in item.content"> {{ content }} </li>
          </ul>
          <div class="result">
            <p v-for="res in item.result">
              <el-radio class="radio" v-model="secondRadio[index]" :label="res.value"> {{ res.name }} </el-radio>
            </p>
          </div>
        </div>
        <div class="message-container">
          <p>还有什么想对辅导员说的意见和建议？</p>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="意见和建议"
            v-model="secondTextarea">
          </el-input>
        </div>
        <div class="submit-container">
          <el-button type="danger" v-on:click="resetForm">重置</el-button>
          <el-button type="primary" v-on:click="submitEvaluate(2)">提交</el-button>
        </div>
      </div>
    </div>
    <div class="third-form" v-if="instructor.thirdInstructorName!==''">
      <div class="content">
        <p class="description">请评价您的另一位辅导员: {{instructor.thirdInstructorName}}</p>
        <div class="subject" v-for="(item, index) in subject">
          <span class="index"> {{ index + 1 }}、</span>
          <ul>
            <li v-for="content in item.content"> {{ content }} </li>
          </ul>
          <div class="result">
            <p v-for="res in item.result">
              <el-radio class="radio" v-model="thirdRadio[index]" :label="res.value"> {{ res.name }} </el-radio>
            </p>
          </div>
        </div>
        <div class="message-container">
          <p>还有什么想对辅导员说的意见和建议？</p>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="意见和建议"
            v-model="thirdTextarea">
          </el-input>
        </div>
        <div class="submit-container">
          <el-button type="danger" v-on:click="resetForm">重置</el-button>
          <el-button type="primary" v-on:click="submitEvaluate(3)">提交</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
      中国石油大学（华东） 学工处
    </div>
  </div>
</template>

<script>
  import API from '../config/request'
  export default {
    data () {
      return {
        subject: [
          {
            content: [
              '能否以身作则，为人师表',
              '能否坚持“以人为本”的工作理念，关心爱护学生',
              '是否具备过硬的政治素质和理论水平',
              '工作态度是否踏实认真、勤勉严谨'
            ],
            result: [
              {
                name: '好',
                value: '20'
              },
              {
                name: '较好',
                value: '16'
              },
              {
                name: '一般',
                value: '12'
              },
              {
                name: '较差',
                value: '8'
              }
            ]
          },
          {
            content: [
              '是否经常深入学生宿舍、课堂和班级各项活动，与 学生进行交流，了解学生思想动态',
              '是否经常对学生进行学习和生活方面的指导，帮助 学生解决实际困难',
              '能否探索学生工作的新思路、新方法，积极提出合 理化建议'
            ],
            result: [
              {
                name: '好',
                value: '15'
              },
              {
                name: '较好',
                value: '13'
              },
              {
                name: '一般',
                value: '10'
              },
              {
                name: '较差',
                value: '8'
              }
            ]
          },
          {
            content: [
              '是否经常组织学生开展思想教育，效果如何',
              '能否积极组织开展提高学生素质的活动，效果如何',
              '日常工作中的组织管理能力和工作艺术怎样'
            ],
            result: [
              {
                name: '好',
                value: '15'
              },
              {
                name: '较好',
                value: '13'
              },
              {
                name: '一般',
                value: '10'
              },
              {
                name: '较差',
                value: '8'
              }
            ]
          },
          {
            content: [
              '是否采取得力措施加强班级建设、团支部建设和学 风建设',
              '所带班级学生遵规守纪及文明诚信情况',
              '是否做好安全稳定教育与管理工作，效果如何'
            ],
            result: [
              {
                name: '好',
                value: '15'
              },
              {
                name: '较好',
                value: '13'
              },
              {
                name: '一般',
                value: '10'
              },
              {
                name: '较差',
                value: '8'
              }
            ]
          },
          {
            content: [
              '是否准确掌握贫困生、后进生、心理障碍学生情况， 采取有效措施实施帮扶',
              '是否抓好学生干部和学生党建工作',
              '是否严格教育和查处违纪学生'
            ],
            result: [
              {
                name: '好',
                value: '15'
              },
              {
                name: '较好',
                value: '13'
              },
              {
                name: '一般',
                value: '10'
              },
              {
                name: '较差',
                value: '8'
              }
            ]
          },
          {
            content: [
              '是否认真组织学生综合素质测评、各类奖学金、助 学金、特困补助评定，评优评先和推优工作',
              '在工作中是否坚持公开、公平、公正的原则',
              '各项日常学生事务管理的成效如何',
              '所带学生群体的综合能力及素质提升情况如何'
            ],
            result: [
              {
                name: '好',
                value: '20'
              },
              {
                name: '较好',
                value: '16'
              },
              {
                name: '一般',
                value: '12'
              },
              {
                name: '较差',
                value: '8'
              }
            ]
          }
        ],
        radio: ['', '', '', '', '', ''],
        secondRadio: ['', '', '', '', '', ''],
        thirdRadio: ['', '', '', '', '', ''],
        textarea: '',
        secondTextarea: '',
        thirdTextarea: ''
      }
    },
    computed: {
      token() {
        return this.$store.state.user.token;
      },
      instructor() {
        return this.$store.state.user.instructor;
      }
    },
    mounted() {
      if (this.token === '') {
        this.$router.push({name: 'index'})
      }
    },
    methods: {
      submitEvaluate (flag) {
        // 如果是1，则是评价第一位辅导员，2则是评价第二位辅导员
        if (flag === 1) {
          // 校验是否都选择了
          let sum = 0;
          for (let i = 0; i < this.radio.length; i++) {
            if (this.radio[i] === '') {
              this.$notify.error({title: '提交失败', message: '请确认每一项都选了'});
              return false
            } else {
              sum += parseInt(this.radio[i])
            }
          }

          let postData = {
            token: this.token, score: sum, flag: flag
          };

          if (this.textarea !== '') {
            postData.message = this.textarea;
          }

          this.$http.post(API.submitEvaluate, postData).then(
            (res) => {
              if (res.data.status === 0) {
                this.$notify({title: '提交成功', message: '成功提交对辅导员的评价', type: 'success'});
                if (this.instructor.secondInstructorName === '') {
                  this.$router.push({name: 'succeed'})
                }
              } else {
                this.$notify.error({title: '提交失败', message: '已经评价过，请勿重复评价'});
              }
            },
            () => {
              this.$notify.error({title: '提交失败', message: '请检查网络或填写项是否完整'});
            }
          )

        } else if (flag === 2) {

          // 校验是否都选择了
          let sum = 0;
          for (let i = 0; i < this.secondRadio.length; i++) {
            if (this.secondRadio[i] === '') {
              this.$notify.error({title: '提交失败', message: '请确认每一项都选了'});
              return false
            } else {
              sum += parseInt(this.secondRadio[i])
            }
          }

          let postData = {
            token: this.token, score: sum, flag: flag
          };

          if (this.secondTextarea !== '') {
            postData.message = this.secondTextarea;
          }

          this.$http.post(API.submitEvaluate, postData).then(
            (res) => {
              if (res.data.status === 0) {
                this.$notify({title: '提交成功', message: '成功提交对辅导员的评价', type: 'success'});
                if (this.instructor.thirdInstructorName === ''){
                  this.$router.push({name: 'succeed'})
                }
              } else {
                this.$notify.error({title: '提交失败', message: '已经评价过，请勿重复评价'});
              }
            },
            () => {
              this.$notify.error({title: '提交失败', message: '请检查网络或填写项是否完整'});
            }
          )

        } else if(flag === 3){
          // 校验是否都选择了
          let sum = 0;
          for (let i = 0; i < this.thirdRadio.length; i++) {
            if (this.thirdRadio[i] === '') {
              this.$notify.error({title: '提交失败', message: '请确认每一项都选了'});
              return false
            } else {
              sum += parseInt(this.thirdRadio[i])
            }
          }

          let postData = {
            token: this.token, score: sum, flag: flag
          };

          if (this.thirdTextarea !== '') {
            postData.message = this.thirdTextarea;
          }

          this.$http.post(API.submitEvaluate, postData).then(
            (res) => {
              if (res.data.status === 0) {
                this.$notify({title: '提交成功', message: '成功提交对辅导员的评价', type: 'success'});
                this.$router.push({name: 'succeed'})
              } else {
                this.$notify.error({title: '提交失败', message: '已经评价过，请勿重复评价'});
              }
            },
            () => {
              this.$notify.error({title: '提交失败', message: '请检查网络或填写项是否完整'});
            }
          )
        }
      },
      resetForm() {
        this.radio = ['', '', '', '', '', ''];
        this.textarea = '';
        this.selectedInstructor = [];
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .evaluate-container {
    background-color: #f0f0f1;
  }

  .result .el-radio {
    width: 100%;
  }

  .el-cascader {
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 1;
  }

  .description {
    padding: 20px 30px 0 30px;
    color: red;
    font-size: medium;
  }

  .subject {
    position: relative;
    overflow: hidden;
    margin-top: 20px;
  }

  .index {
    position: absolute;
    top: 10px;
    left: 25px;
  }

  .content {
    width: 100%;
    margin-top: 20px;
    text-align: left;
  }

  .result {
    margin-top: 20px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    width: 92%;
    margin-left: 4%;
  }

  .result p {
    padding: 15px 0 10px 20px;
    border-bottom: 1px solid #ebebeb;
    margin: 0;
  }

  h1, h2 {
    font-weight: normal;
    padding: 0;
    margin: 0;
  }

  ul {
    display: inline-block;
    margin: 0;
    list-style: none;
    padding-left: 40px;
    font-size: 14px;
    color: #000;
  }

  li {
    margin: 10px;
  }

  .title {
    width: 100%;
    height: 70px;
    background-color: #2594f0;
    color: #fff;
    font-size: 18px;
    padding-top: 25px;
    box-sizing: border-box;
    font-weight: 600;
    position: fixed;
    top: 0;
    z-index: 1;
  }

  .form {
    margin-top: 70px;
    font-size: 13px;
    overflow: hidden;
  }

  .second-form {
    font-size: 13px;
    overflow: hidden;
  }

  .third-form {
    font-size: 13px;
    overflow: hidden;
  }

  .message-container {
    margin: 4%;
  }

  .submit-container {
    text-align: center;
  }

  .footer {
    padding: 10px;
    color: gray;
  }
</style>
