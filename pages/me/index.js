//index.js
Page({
  data: { 
    thumb: '',
    nickname: '',   
    imgUrls:'http://myzh-ucenter.oss-cn-beijing.aliyuncs.com//2017/07/22/file1500685045182664758.jpg' ,
    Pending:1,
    waitFor:2 
  },

  onLaunch: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },


  onLoad() { 
    this.onLaunch();

    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName,         
        })
      }
    })
    
  },


  //调用原生收货地址
  address:function(){
   console.log("66666");
   if (wx.chooseAddress){
     wx.chooseAddress({
       success: function (res) {
         console.log(res.userName)
         console.log(res.postalCode)
         console.log(res.provinceName)
         console.log(res.cityName)
         console.log(res.countyName)
         console.log(res.detailInfo)
         console.log(res.nationalCode)
         console.log(res.telNumber)
       }
      //  fail: function (err) {
      //    console.log(JSON.stringify(err))
      //    wx.showModal({
      //      title:'失败',
      //      content:'调取原生地址失败'
      //    })
      //  }
     })

   }else{
     wx.showModal({
       title: '提示',
       content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
     })
   }
   
  },

  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '时易互联小程序',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  //优惠券
  Coupon(){
    // wx.showModal({
    //   title: '提示',
    //   content: '优惠券功能暂未开通！'
    // })
    wx.showToast({
      title: '优惠券暂未开通',     
      duration: 2000
    })
  }
  
})
