//index.js
//获取应用实例
//var app = getApp()
Page({
  data:{
    tabHidden:0,
    allorder:[
      {
        orderNumber:"1234569875",
        orderType:"交易成功",
        commodityImg:"http://123.56.228.112:35678/722582f0-cf62-4788-8f64-49a41d8a3307.png",
        CommodityName:"珍珠明目滴眼液",
        Price:22.00,
        originalPrice:21.00,
        TotalPiece:1,
        TotalPrice:"22.00",
        freight:0.00,
        transactionType:0   //0 交易成功  1待付款  2待收货
      },{
        orderNumber: "2234569875",
        orderType: "待付款",
        commodityImg: "http://123.56.228.112:35678/59eec97e-8879-478f-a111-085013781647.png",
        CommodityName: "穿心莲片",
        Price: 18.00,
        originalPrice: 18.50,
        TotalPiece: 1,
        TotalPrice: "18.00",
        freight: 0.00,
        transactionType: 1   //0 交易成功  1待付款  2待收货
      }, {
        orderNumber: "3234569875",
        orderType: "待收货",
        commodityImg: "http://123.56.228.112:35678/312519d0-0d72-4432-8843-ef62ee8b1709.png",
        CommodityName: "阿归养血糖浆",
        Price: 28.00,
        originalPrice: 29.50,
        TotalPiece: 1,
        TotalPrice: "28.00",
        freight: 0.00,
        transactionType: 2   //0 交易成功  1待付款  2待收货
      }

    ]
  }, 
 
  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },

 

  
  onLoad: function (options) {
    //获取url参数，并判断
    console.log(options);
    if (options.Pending){
      this.setData({
        tabHidden: 1
      })
    }else if (options.waitFor) {
      this.setData({
        tabHidden: 2
      })
    }else{
      this.setData({
        tabHidden: 0
      })
    }
   
   // const Pending = this.GetQueryString("Pending");
    
    wx.getStorage({
      key: 'user',
      success: function(res) {
        const courseUuid = options.courseUuid;
        console.log("courseUuid=====" + courseUuid)
      },
    })

    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })

  },

  orderAction(e){
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      tabHidden:index
    })
  },
  delete(e){
    const that = this
    wx.showModal({
      title: '删除提示',
      content: '您确定要删除此订单吗？' ,
      success: function (res) {
        if (res.confirm) {
          const index = e.currentTarget.dataset.index;
          let allorder = that.data.allorder;
          console.log(allorder)
          allorder.splice(index, 1);
          that.setData({
            allorder: allorder
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }      

    })
  }



})
