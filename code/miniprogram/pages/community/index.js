// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    teamList: [{
        nickName: "清华大学考研小组",
        tipList: [{
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, ]
      },
      {
        nickName: "北京大学",
        tipList: [{
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, ]
      },
      {
        nickName: "东华大学",
        tipList: [{
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, {
          nickName: "昵称",
          content: "内容",
          readNum: "32",
          comment: "12",
          like: "34",
          time: "2021-4-17"
        }, ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
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
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error')
      }, 1000)
    })
  },
  uploadError(e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
    console.log('upload success', e.detail)
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