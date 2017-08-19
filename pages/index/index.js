//index.js
//获取应用实例
//var app = getApp()

var order = ['red', 'yellow', 'blue', 'green', 'red']

Page({
  data: {
    motto: 'list列表渲染',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://123.56.125.232/u/cms/www/201706/091923208tsl.png',
      'http://123.56.125.232/u/cms/www/201705/20103127f27d.png',
      'http://123.56.125.232/u/cms/www/201705/20103019r16f.png'
    ],
    medicine:[
      'http://123.56.125.232/u/cms/www/201705/20103856w60k.png',
      'http://123.56.125.232/u/cms/www/201705/20104334eta4.png',
      'http://123.56.125.232/u/cms/www/201705/20104201ldet.png',
      'http://123.56.125.232/u/cms/www/201705/20104019dz89.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    
    //横向滚动
    toView: 'red',
    scrollLeft:100,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },

  //横向滚动的监听
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollLeft: this.data.scrollLeft + 10
    })
  }

})
