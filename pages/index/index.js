//index.js
//获取应用实例
const app = getApp()

Page({

  data:{
   latitude:0,
    longitude:0
  },

 add(){
  let plugin = requirePlugin("subway");
  let key = 'XVOBZ-IQ53D-62A4O-HPXHA-6BUQ7-EBB6P';//使用在腾讯位置服务申请的key;
  let referer = '生活工具'; //调用插件的app的名称
  wx.navigateTo({
      url: 'plugin://subway/index?key=' + key + '&referer=' + referer
    });
 },

 line(){

  wx.getLocation({
    type:'wgs84'
  });
  let plugin = requirePlugin('routePlan');
  let key = 'XVOBZ-IQ53D-62A4O-HPXHA-6BUQ7-EBB6P';//使用在腾讯位置服务申请的key;
  let referer = '生活工具'; //调用插件的app的名称
  let endPoint = JSON.stringify({  //终点
      'name': '吉野家(北京西站北口店)',
      'latitude': 39.89631551,
      'longitude': 116.323459711
  });
  wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
  });
 },

 addPoint(){
  let key = 'XVOBZ-IQ53D-62A4O-HPXHA-6BUQ7-EBB6P';//使用在腾讯位置服务申请的key;
  let referer = '生活工具'; //调用插件的app的名称

  wx.getLocation({
    type:'wgs84',
    success(res){
      const location = JSON.stringify({
        latitude: res.latitude,
        longitude: res.longitude
      });
      const category = '生活服务,娱乐休闲';  
      wx.navigateTo({
        url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
      });
    }
  })
  
 }


  


    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }


})
