// pages/me/me.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgUrl: "http://pic3.16pic.com/00/52/03/16pic_5203046_b.jpg",
    avatarUrl:"../../img/avatar.jpg",
    nickName:"Wyman",
    schoolName:"华南师范大学"
  },
  // 导航条点击事件
  navClick: function (event) {
    if (event.target.id == 'efficiency') {
      wx.redirectTo({
        url: '../efficiency/efficiency',
      })
    }
    else if (event.target.id == 'dream') {
      wx.redirectTo({
        url: '../dream/dream',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = app.globalData.userInfo;
    console.log(app.globalData)
    this.setData({
      avatarUrl: userInfo.avatarUrl,
      nickName: userInfo.nickname
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