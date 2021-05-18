// pages/creation/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articalList: [{
        title:"你好我是标题你好我是标题你好我是标题你好我是标题",
        words: "跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试",
        image: "https://pic.rmb.bdstatic.com/db1348e415994c2184f3f343aad5532e.jpeg",
        readNum: "120",
        comment: "12",
        like: "3",
        time: "2021-4-16"
      },
      {
        title:"你好我是标题",
        words: "跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试",
        image: "https://pic.rmb.bdstatic.com/db1348e415994c2184f3f343aad5532e.jpeg",
        readNum: "120",
        comment: "12",
        like: "3",
        time: "2021-4-16"
      },
      {
        title:"你好我是标题",
        words: "跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试跨专业考试",
        image: "https://pic.rmb.bdstatic.com/db1348e415994c2184f3f343aad5532e.jpeg",
        readNum: "120",
        comment: "12",
        like: "3",
        time: "2021-4-16"
      },
    ]
  },
  async getMyCreation(event) {
    const res = await wx.cloud.callFunction({
      name: "getMyCreation",
      data: {
        openId: wx.getStorageSync("openId")
      }
    })
    console.log(res);
    this.setData({
      articalList:res.result.resArr.data
    })
    
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
    this.getMyCreation();
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
    this.getMyCreation();
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