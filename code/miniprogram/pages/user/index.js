// pages/user/index.js
// import { get, login, toLogin } from '../../request/index'
const app = getApp() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        title: "我的创作",
        icon: "icon-wodechuangzuo",
        url: "/pages/my_buy_list/index"
      },
      {
        title: "我的收藏",
        icon: "icon-shoucang1",
        url: "/pages/collect/index"
      },
      {
        title: "浏览记录",
        icon: "icon-liulanjilu1",
        url: "/pages/addaddress/index"
      }
    ],
    reactionList:[
      {
        title: "关于我们",
        icon: "icon-xiazai",
        url: "/pages/my_buy_list/index"
      },
      {
        title: "检查更新",
        icon: "icon-xiazai",
        url: "/pages/my_buy_list/index"
      },
      {
        title: "客服热线",
        icon: "icon-xiazai",
        url: "/pages/my_buy_list/index"
      }
    ],
    // avator: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png',
    // allcheck: false,
    // userInfo: {},
    // Listids: [],
    openId:""
  },
  goTo (event) {
    // console.log(event)
    // wx.navigateTo({
    //   url: this.data.listData[event.currentTarget.id].url
    // });
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   openId :  app.globalData.userInfo.openid || '',
    //   avator:app.globalData.userInfo.avatarUrl || '',
    //   userInfo:app.globalData.userInfo
    // })
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
    //console.log(wx.getStorageSync('openId') )
    this.setData({
      openId : wx.getStorageSync('openId') || '',
    })
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
    // this.setData({
    //   openId :  app.globalData.userInfo.openid || '',
    //   avator:app.globalData.userInfo.avatarUrl || '',
    //   userInfo:app.globalData.userInfo
    // })
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