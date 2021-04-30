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
        url: "/pages/creation/index"
      },
      {
        title: "我的收藏",
        icon: "icon-shoucang1",
        url: "/pages/collection/index"
      },
      {
        title: "浏览记录",
        icon: "icon-liulanjilu1",
        url: "/pages/looked/index"
      }
    ],
    reactionList:[
      {
        title: "关于我们",
        icon: "icon-xiazai",
        url: "/pages/about_us/index"
      },
      {
        title: "常见问题",
        icon: "icon-xiazai",
        url: "/pages/help/index"
      }
    ],
    userInfo: {},
    openId:""
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
// 这里的是云函数
//     wx.cloud.callFunction({
//       name: "getUserInfo"
//     }).then(res =>{
//       let arr =res.result;
//       this.setData({
//         userInfo:arr[arr.length-1].info,
//       })
//       wx.setStorage({
//         key: 'userInfo',
//         data: this.data.userInfo.info,
//       });
        
//     })

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