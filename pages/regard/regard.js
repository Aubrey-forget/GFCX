Page({
  /**
   * 页面的初始数据
   */
  data: {
    aaron: [
      "/img/imges/18.jpg",
      "/img/imges/19.jpg",
      "/img/imges/0.png",
      "/img/imges/1.jpg",
      "/img/imges/2.jpg"
    ],
    markers: [{
      // iconPath: '/img/location.png',
      id: 0,
      latitude: 31.296100,
      longitude: 120.669500,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 120.669500,
        latitude: 31.296100
      }, {
          longitude: 120.669500,
          latitude: 31.296100
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
  },
  chagae:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度  
      success: function (res) {
        // var latitude = res.latitude
        // var longitude = res.longitude
        var latitude = 31.296100
        var longitude = 120.669500
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: "苏州国际科技园三期八楼",
          scale: 16
        })
      }
    }) 
  },
  regionchange(e) {
    // console.log(e.type)
  },
  markertap(e) {
    // console.log(e.markerId)
  },
  controltap(e) {
    // console.log(e.controlId)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },


})