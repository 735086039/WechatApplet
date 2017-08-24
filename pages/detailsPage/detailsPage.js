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
    evaluate:[
      {
        user:"dbs***9",
        time:"2018-08-22",
        content:"产品非常好，一如既往的好，无法言喻的好，好到不能再好，已经词穷~"
      },{
        user: "ccs***0",
        time: "2018-08-23",
        content: "还是熟悉的味道，还是原来的配方。你猜这是什么？"
      },{
        user: "ccs***0",
        time: "2018-08-24",
        content: "购买的c6tc，非常好，白天拍摄的录像很清晰，晚上的红外拍摄也不错。性价比不错。"
      },{
        user: "ccs***0",
        time: "2018-08-25",
        content: "大家不要买京东会员，简直巨坑！！欺侮人！！愤怒中！买了以后领不到youhui券，打电电给客服全部统一台词不处理问题，只会和我们说官话，还说因为我以前享受过youhui了，你家京东是一锤子买-卖？老客户不能享受youhui？客服只会反复说领券是概率问题，那么我一张领不到的属于什么概率啊？还说让我原价购买，你199减100的券，别人花100，你意思让我花199？还说以前能领券是新注册用户会给youhui，建议我重新注册！说可以取消这个号的实名认证，你以为我随便换手机号是不是？那我办的会员你给退不？硬是说我的号没被黑，没任何问题，我第一没有代买，第二基本没拒收过，就是拿我家里人号同样抢了youhui券然后家人号都变黑号，我朋友号随便领youhui券，我的什么都领不了谁家没两个手机？我办了两年会员，现在任何youhui券领不到问客观不承认京东会黑号，会员就是坑钱的，老客户黑，新客户才能领券，大家以后都别办会员，因为需要总换号！东西大部分都提高价格，只有领券才能真的youhui，很多都是都可以半价！领不到券，不懂的就只能买原价，我直老老实实买东西，结果坑客户，损害消费者权益，已经决定去投诉，投诉"
      }
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
  },

  deleNuber(){
    this.setData({
      number:this.data.number-1
    })
  },

  addNumber(){
    this.setData({
      number: this.data.number + 1
    })

  },
  delete(){
    if (this.data.number>1){
      this.deleNuber();
    }
  },
  add(){
    this.addNumber();
  },

  //加入购物车按钮
  addShopping(){
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
  }

})
 