// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

    latitude: 29.562187,
    longitude: 106.552651,
    markers: [{
      id: 1,
      latitude: 29.587758,
      longitude: 106.502969,
    },{
      id: 2,
      latitude: 29.586485,
      longitude: 106.50323,
    },{
      id: 3,
      latitude: 29.585657,
      longitude: 106.504174,
    },{
      id: 4,
      latitude: 29.585569,
      longitude: 106.503717,
    },{
      id: 5,
      latitude: 29.584563,
      longitude: 106.503615,
    },{
      id: 6,
      latitude: 29.579274,
      longitude: 106.511663,
    },{
      id: 7,
      latitude: 29.377363,
      longitude: 106.520534,
    }],
  
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
