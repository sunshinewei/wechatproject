// pages/drivingtest/drivingtest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      useData:[{id: "1", question: "这个标志是何含义？", answer: "4", item1: "小型车车道", item2: "小型车专用车道"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://v.juhe.cn/jztk/query', //仅为示例，并非真实的接口地址
      data: {
        key: '5412b799275a438f720947c23c99df88',
        subject: '1',
        model: 'c1',
        testType: 'rand',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data);
        // this.useData=res.data;
        that.setData({useData:res.data.result})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})