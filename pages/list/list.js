//index.js
//获取应用实例
//var app = getApp()
Page({
  data: {
   list:[
     {
       img:'http://123.56.228.112:35678/722582f0-cf62-4788-8f64-49a41d8a3307.png',
       title:'商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品',
       price:'185.00',
       praise:'89.6%'
     }, {
       img: 'http://123.56.228.112:35678/312519d0-0d72-4432-8843-ef62ee8b1709.png',
       title: '中药糖浆',
       price: '185.00',
       praise: '89.6%'
     }
   ]
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

  //页面跳转
  pageJump(){
    wx.navigateTo({
      url: '../detailsPage/detailsPage'
    })
  }  

})
