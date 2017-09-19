Page({
  /**
   * 页面的初始数据
   */
  data: {
    aaron: [
      "/img/imges/1.jpg",
      "/img/imges/2.jpg",
      "/img/imges/3.png",
      "/img/imges/4.png",
      "/img/imges/5.png"
    ],
    name:"关于矢量",
    name_English:"All About Us",
    us:"联系我们",
    us_English:"Connect Us",
    boutique:[],
    list: [
      { src: "/img/imges/service2.png", name: "小程序定制" },
      { src: "/img/imges/service1.png", name: "小程序名片开发" },
      { src: "/img/imges/service3.png", name: "网站维护" },
      { src: "/img/imges/service4.png", name: "网站定制" }
    ]
  },
  clk:function(){
    wx.makePhoneCall({
      phoneNumber: '18608989950'
    })
  },
  toAbout:function(){
    wx.switchTab({
      url: '../regard/regard'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var boutique=[
        {
          head:"精品案例",
          el:"EXCELLENT WORKS",
          cont:[
            { img: "/img/imges/9.png", name: "海南矢量"},
            { img: "/img/imges/10.png", name: "阿特斯托"},
            { img: "/img/imges/11.png", name: "东京商城"},
            { img: "/img/imges/12.png", name: "超级课程格子"},
          ]
        },
      ];
    this.setData({
      boutique: boutique
    });
  }
})