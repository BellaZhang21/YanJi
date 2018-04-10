// pages/dream/dream.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:{},
    avatarUrl:"",
    name:""
  },
  // 导航条点击事件
  navClick: function (event) {
    if (event.target.id == 'efficiency') {
      wx.redirectTo({
        url: '../efficiency/efficiency',
      })
    }
    else if (event.target.id == 'me') {
      wx.redirectTo({
        url: '../me/me',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取头部图片
    wx.getStorage({
      key: 'banner',
      success: function (res) {
        console.log(res.data)
        that.setData({
          banner:res.data
        })
      },
    })
    console.log(app.globalData.userInfo.avatarUrl)
    // 获取个人信息
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl,
      name: app.globalData.userInfo.nickName
    })
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