//about.js
//获取应用实例

const app = getApp()
let wxparse = require("../../wxParse/wxParse.js");
Page({
  data: {
    img: '../../img/yue.png',
    title:'广州粤天企业管理顾问有限公司',
    intre:'广州粤天企业管理顾问有限公司（简称粤天科技）是在我国构建“创新型国家”总方针背景下成立的综合科技服务机构，是省、市科技创新服务体系的重要组成成员之一，是广东省内实力较强的科技咨询公司之一。<p>粤天科技的团队成员在科技项目申报工作，特别是高新技术项目申报工作有着丰富的实战经验，已经成功帮助上百家企业顺利申报国家高新技术企业认定、高新技术产品认定、创新基金等一系列的科技项目及资金补贴！</p>',
    contab:'联系方式',
    address:'广州市海珠区新港西路135号',
    mobile:'020-28566552',
    email:'145556966666@qq.com'
  },
  onLoad: function () {
    wxparse.wxParse('intre', 'html', this.data.intre, this, 5)

  }

})
