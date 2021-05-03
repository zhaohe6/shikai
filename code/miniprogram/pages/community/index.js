// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    teamList: [{
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, {
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, {
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, {
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, {
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, {
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, {
      name: "昵称",
      content: "内容",
      readNum: "32",
      comment: "12",
      like: "34",
      time: "2021-4-17"
    }, ],
    message: {},
    position: '',
    show: false,
    customStyle: '',
    duration: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let myDate = new Date();
    let time = myDate.toLocaleString();
    console.log(time)


    let that = this;
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
    wx.cloud.callFunction({
      name: "getCommunityPost"
    }).then(res => {
      //console.log(res.result.data);
      this.setData({
        teamList: res.result.data
      })
      // for (let i in this.teamList.image) {

      // }
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
      wx.setStorageSync("teamList",this.data.teamList);
    
    })
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  formSubmit(e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000,
      mask: true
    })
    let myDate = new Date();
    let time = myDate.toLocaleString();
    console.log(time)
    //console.log(e)
    this.setData({
      "message.name": e.detail.value.name,
      "message.content": e.detail.value.content,
      "message.time": time,
      "message.like": 0,
      "message.read": 0
    })
    for (let i in this.data.message) {
      if (this.data.message[i].length == 0 && i != "image") {
        wx.showToast({
          title: '输入有误发布失败',
          icon: 'loading',
          duration: 500,
          mask: true
        })
        return 0
      }
    }
    //这里的是云函数
    console.log(this.data.message)
    wx.cloud.callFunction({
      name: "uploadPost",
      data: {
        message: this.data.message
      }
    }).then(res => {
      console.log("success")
      wx.cloud.callFunction({
        name: "getCommunityPost"
      }).then(res => {
        console.log(res.result.data);
        this.setData({
          teamList: res.result.data
        })
      })
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },

  uplaodFile(files) {
    console.log('upload files', files)
    return new Promise((resolve, reject) => {
      const tempFilePaths = files.tempFilePaths;
      const that = this;
      const object = {};
      for (var i = 0; i < tempFilePaths.length; i++) {
        let filePath = '',
          cloudPath = ''
        filePath = tempFilePaths[i]
        cloudPath = 'post-image-' + new Date().getTime() + '-' + i + filePath.match(/\.[^.]+?$/)[0]
        //console.log(filePath)
        //console.log(cloudPath)
        const upload_task = wx.cloud.uploadFile({
          filePath,
          cloudPath,
          success: function (res) {
            //console.log(res)
            if (res.statusCode === 200 || res.statusCode === 204 || res.statusCode === 205) {
              const url = res.fileID
              that.data.files.push(url)
              if (that.data.files.length === tempFilePaths.length) {
                object.urls = that.data.files;
                resolve(object) //这就是判断是不是最后一张
              }
            } else {
              reject('error')
            }
          },
          fail: function (err) {
            console.log(err)
          },
          conplete: () => {

          }
        })
      }
    })
  },
  uploadError(e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
    console.log('upload success', e.detail)
    this.setData({
      "message.image": e.detail.urls
    })
  },
  popup(e) {
    const position = e.currentTarget.dataset.position
    let customStyle = ''
    let duration = this.data.duration
    switch (position) {
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
    this.setData({
      show: false
    })
    // wx.navigateBack()
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