// pages/effciency/effciency.js
var app = getApp()
// 获取日期
var getDate = function () {
  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var date = today.getDay();
  switch(date){
    case 1: date = '一'; break;
    case 2: date = '二'; break;
    case 3: date = '三'; break;
    case 4: date = '四'; break;
    case 5: date = '五'; break;
    case 6: date = '六'; break;
    case 7: date = '七'; break;
  }
  var todayText = month + "月" + day + "日 周"+date;
  return todayText;
}
/* ---------- */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slogan:"",
    postName:"WYNAN",
    likenum:0,
    bannerImage:"",
    postImage:"",
    date:""
  },
  // 导航条点击事件
  navClick: function(event){
    if(event.target.id=='dream'){
      wx.redirectTo({
        url: '../dream/dream',
      })
    }
    else if(event.target.id=='me'){
      wx.redirectTo({
        url: '../me/me',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置日期
    var dd = getDate();
    this.setData({
      date: dd
    })
    // 获取头部图片
    var that = this;
    wx.getStorage({
      key: 'banner',
      success: function(res) {
        console.log(res)
        that.setData({
          slogan: res.data.banner_motto,
          likenum: res.data.banner_point,
          bannerImage: res.data.banner_image,
          postName: res.data.banner_username,
          postImage: res.data.banner_userimage
        })
      },
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