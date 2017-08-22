//index.js
//获取应用实例
//var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    xingqImg:[
      'https://img.alicdn.com/imgextra/i4/1776456424/TB2FLrTAbJmpuFjSZFwXXaE4VXa-1776456424.jpg_790x10000Q30.jpg',
      'https://img.alicdn.com/imgextra/i3/1776456424/TB2WRRCvY0kpuFjy0FjXXcBbVXa-1776456424.jpg_790x10000Q30.jpg',
      'https://img.alicdn.com/imgextra/i1/1776456424/TB2Jlecv3FkpuFjSspnXXb4qFXa-1776456424.jpg_790x10000Q30.jpg_.webp',
      'https://img.alicdn.com/imgextra/i1/1776456424/TB2Jlecv3FkpuFjSspnXXb4qFXa-1776456424.jpg_790x10000Q30.jpg_.webp',
      'https://img.alicdn.com/imgextra/i2/1776456424/TB2qBc6Am8mpuFjSZFMXXaxpVXa-1776456424.jpg_790x10000Q30.jpg_.webp'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    commodity:"商品名称，商品信息",
    curIndex:0,
    number:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }

  

})
