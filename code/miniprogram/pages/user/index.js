// pages/user/index.js
// import { get, login, toLogin } from '../../request/index'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        title: "我的创作",
        icon: "icon-wodechuangzuo",
        url: "/pages/creation/index"
      },
      {
        title: "我的收藏",
        icon: "icon-shoucang1",
        url: "/pages/collection/index"
      }
    ],
    reactionList: [{
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
    openId: ""
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
    wx.cloud.callFunction({
      name: "getOpenid"
    }).then(res => {
      console.log(res.result.openid)
      this.setData({
        openId: res.result.openid
      })
      wx.setStorageSync('openId', this.data.openId)
    })
    wx.cloud.callFunction({
      name: "basicInfo",
      data: {
        info: e.detail.value
      }
    }).then(res => {
      console.log(res)
      wx.setStorage({
        key: 'userInfo',
        data: this.data.userInfo,
      });
      if (res.errMsg == "cloud.callFunction:ok") {
        wx.showToast({
          title: '提交成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    })

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
    this.setData({
      openId: wx.getStorageSync('openId') || '',
    })
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo') || '',
      })
    } else {
      wx.cloud.callFunction({
        name: "getUserInfo"
      }).then(res => {
        let arr = res.result;
        this.setData({
          userInfo: arr[arr.length - 1].info,
        })
        console.log(this.data.userInfo);
        wx.setStorage({
          key: 'userInfo',
          data: this.data.userInfo,
        });

      })

    }


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