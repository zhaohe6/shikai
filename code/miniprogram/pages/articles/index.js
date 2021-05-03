// pages/publish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articalId: '',
    teamList: [],
    articalInfo: {},
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async getArticalInfo (openId) {
    await wx.cloud.callFunction({
      name: "getAuthor",
      data:{
        info:openId
      }
    }).then(res => {
      //console.log(res)
      let arr = res.result;
      this.setData({
        userInfo: arr[arr.length - 1].info,
      })
      console.log(this.data.userInfo);
    })
  },
  onLoad: function (options) {
    console.log(options);
    const that = this;
    this.setData({
      articalId: options._id,
      teamList: wx.getStorageSync("teamList"),
      userInfo: wx.getStorageSync("userInfo")
    })
    this.data.teamList.forEach(element => {
      if (element._id == options._id) {
        that.setData({
          articalInfo: element
        })
      }
    });
    this.getArticalInfo(this.data.articalInfo.openId)
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