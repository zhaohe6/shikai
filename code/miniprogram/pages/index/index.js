Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId:'',
  },
  formSubmit(e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    console.log(e)
//这里的是云函数
    // wx.cloud.callFunction({
    //   name: "getOpenid"
    // }).then(res =>{
    //   console.log(res.result.openid)
    //   this.setData({
    //     openId:res.result.openid
    //   })
    //   wx.setStorageSync('openId',this.data.openId )
    // })
    // wx.cloud.callFunction({
    //   name: "basicInfo",
    //   data: {
    //     info: e.detail.value
    //   }
    // }).then(res => {
    //   console.log(res)
    //   if (res.errMsg == "cloud.callFunction:ok") {
    //     wx.showToast({
    //       title: '提交成功',
    //       icon: 'succes',
    //       duration: 1000,
    //       mask: true
    //     })
    //   }
    // })

  },
  goToMain() {
    wx.switchTab({
      url: '../main/main',
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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