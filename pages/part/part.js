Page({

  /**
   * 页面的初始数据
   */
  data: {
    mold: [
      "/img/imges/6.png",
      "/img/imges/7.png",
      "/img/imges/8.png",
      "/img/imges/4.png",
      "/img/imges/5.png"
    ],
    list:[],
    id:0,
    arr: ["海南矢量", "阿特斯托", "东京商城", "超级课程格子",]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    var list=[
      {
        title: "小程序介绍", time: "发布时间：2017-06-09\n", content: "妈妈厨是一款美食小程序，可用于在线订餐。\n主要有厨房. . . ."
      },
      {
        title: "主要功能点", time: "", content: "头条BANNER、同城专人配送、每周优惠\n热卖鲜花推荐、商品搜索、商品分类浏览、\n商品列表、鲜花物语、优惠劵"
      }
    ];
    this.setData({
      list: list,
      id: options.id
    });
  }
})