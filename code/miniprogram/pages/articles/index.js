// pages/publish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articalId: '',
    teamList: [],
    articalInfo: {},
    userInfo: {},
    discuss: [],
    articalAuthor: {},
    likeFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async getArticalInfo(openId) {
    await wx.cloud.callFunction({
      name: "getAuthor",
      data: {
        info: openId
      }
    }).then(res => {
      //console.log(res)
      let arr = res.result;
      this.setData({
        articalAuthor: arr[arr.length - 1].info,
      })
      console.log(this.data.userInfo);
    })
  },
  async collect () {
    this.setData({
      collectFlag : !this.data.collectFlag,
      "articalInfo.like": this.data.articalInfo.like+1
    })
    const data = await wx.cloud.callFunction({
      name: "onloadLike",
      data: {
        articalId:this.data.articalId,
        openId:wx.getStorageSync("openId")
      }
    })
    console.log(data)
    
  },
  async formSubmit(event) {
    let that = this;
    console.log(event)
    if(event.detail.value.input.length==0){
      wx.showToast({
        title: '输入数据出错',
        icon: 'error',
        duration: 2000
      })
      return
    }
    const res = await wx.cloud.callFunction({
      name: "uploadDiscuss",
      data: {
        id: this.data.articalId,
        info: this.data.userInfo,
        discuss: event.detail.value.input
      }
    })
    console.log(res)
    let info = {
      info: this.data.userInfo,
      discuss: event.detail.value.input
    }
    try{
      await wx.cloud.callFunction({
        name: "getCommunityPost"
      }).then(res => {
        //console.log(res.result.data);
        this.setData({
          teamList: res.result.data
        })
        this.data.teamList.forEach(function (value, index) {
          //console.log(value)
          if (value.image) {
            wx.cloud.downloadFile({
              fileID: value.image[0]
            }).then(res => {
              //console.log(res)
              that.setData({
                ['teamList[' + index + '].image']: res.tempFilePath,
              })
            })
          }
        })
        wx.setStorageSync("teamList", this.data.teamList);
      })
      await this.setData({
        teamList: wx.getStorageSync("teamList"),
      })
      let tag = 0;
      await this.data.teamList.forEach(element => {
        if (element._id == this.data.articalId) {
          tag = 1;
          console.log(this.data.teamList)
          that.setData({
            articalInfo: element
          })
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000
          })
        }
      });
    }
    catch{
      wx.showToast({
        title: '网络出错发布失败',
        icon: 'error',
        duration: 2000
      })
    }


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
      if (element._id == this.data.articalId) {
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
    wx.cloud.callFunction({
      name: "unloadVisit",
      data: {
        articalId: this.data.articalId,
      }
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