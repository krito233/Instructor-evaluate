<template>
  <div class="hello">
    <h1 class="title">中国石油大学(华东)辅导员考核测评表(学生)</h1>
    <div class="form">
      <el-cascader
        placeholder="试试搜索：指南"
        :options="options"
        filterable
        change-on-select
      ></el-cascader>
      <div class="content">
        <div class="subject" v-for="(item, index) in subject">
          <span class="index"> {{ index + 1 }}、</span>
          <ul>
            <li v-for="content in item.content"> {{ content }} </li>
          </ul>
          <div class="result">
            <p v-for="res in item.result">
              <el-radio class="radio" v-model="radio" :label="res.value"> {{ res.name }} </el-radio>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
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
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-cascader {
    width: 100%;
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
    margin-top: 40px;
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
  }

  .form {
    background-color: #f0f0f1;
    font-size: 13px;
    overflow: hidden;
  }
</style>
