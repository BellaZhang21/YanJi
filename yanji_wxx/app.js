//app.js
App({

  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    var that = this;
    var openId = (wx.getStorageSync('openId'))   //之后可以从本地存储取openid    
    wx.login({
      success: function (res) {
        console.log(res.code)
        if (res.code) {
          wx.getUserInfo({
            withCredentials: true,
            success: function (res_user) {
              that.globalData.userInfo = res_user.userInfo;
              console.log(that.globalData.userInfo)
              wx.request({
                //后台接口地址
                url: 'http://yanji.cn/api/sendcode',
                data: {
                  code: res.code,                             // code  必须给  
                  encryptedData: res_user.encryptedData,      //密文串  必须给
                  iv: res_user.iv                             //加密初始量 必给
                },
                method: 'GET',
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  wx.setStorageSync('openId', res.data.openId);      //拿到openid  存入session
                }
              })
            },
            fail: function () {
              wx.showModal({
                title: '警告通知',
                content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
                success: function (res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success: (res) => {
                        if (res.authSetting["scope.userInfo"]) {       ////如果用户重新同意了授权登录
                          wx.login({
                            success: function (res_login) {
                              if (res_login.code) {
                                wx.getUserInfo({
                                  withCredentials: true,
                                  success: function (res_user) {
                                    wx.request({
                                      url: 'http://yanji.alove.cn/api/sendcode',
                                      data: {
                                        code: res_login.code,
                                        encryptedData: res_user.encryptedData,
                                        iv: res_user.iv
                                      },
                                      method: 'GET',
                                      header: {
                                        'content-type': 'application/json'
                                      },
                                      success: function (res) {
                                        wx.setStorageSync('openId', res.data.openId);
                                      }
                                    })
                                  }
                                })
                              }
                            }
                          });
                        }
                      }, fail: function (res) {

                      }
                    })

                  }
                }
              })
            }, complete: function (res) {

            }
          })
        }
      }
    })
    // 获取头部图片
    var that = this;
    wx.request({
      url: 'http://yanji.aloveu.cn/api/efficency/head',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        wx.setStorage({
          key: 'banner',
          data: res.data[0],
        })

      }
    })
  },

  globalData: {
    userInfo: null
  }
})