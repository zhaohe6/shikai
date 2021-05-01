// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyRoom:[{
      "name":"gujiguji的自习室",
      "number":"134"
    },
    {
      "name":"gujiguji的自习室",
      "number":"134"
    },
    {
      "name":"gujiguji的自习室",
      "number":"134"
    }
  ],
    recommandRoom:[{
      "name":"gujiguji的自习室",
      "number":"134"
    },
    {
      "name":"gujiguji的自习室",
      "number":"134"
    },
    {
      "name":"gujiguji的自习室",
      "number":"134"
    }
  ],
  },
  popup(e) {
    const position = e.currentTarget.dataset.position
    let customStyle = ''
    let duration = this.data.duration
    switch(position) {
      case 'top':
      case 'bottom': 
        customStyle = 'height: 30%;'
        break
      case 'right':
        break
    }
    this.setData({
      position,
      show: true,
      customStyle,
      duration
    })
  },
  
  exit() {
    this.setData({show: false})
    // wx.navigateBack()
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