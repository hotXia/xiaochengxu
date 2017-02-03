//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false,  // loading
        item: [{
            title:"在杭州上美国人的橄榄球课",
            priceNow:"$25/次",
            priceOld:"$100/次",
            restPeople:18,
            position:"黄龙黑鲨橄榄球学院",
            produce:"sdlgjsdlkgjsldkjglsdkjglsdkjglsdkjgsldkjgsldkjgsldkgjsasdfsadfsdfsdfdd",
            src:"https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg?imageView2/0/q/80/w/9999/h/300/format/jpg"
        },{
            title:"在杭州上美国人的篮球课",
            priceNow:"$25/次",
            priceOld:"$100/次",
            restPeople:10,
            position:"黄龙黑鲨橄榄球学院",
            produce:"sdlgjsdlkgjsldkjglsdkjglsdkjglsdkjgsldkjgsldkjgsldkgjs",
            src:"https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg?imageView2/0/q/80/w/9999/h/300/format/jpg"
        },{
            title:"在杭州上美国人的棒球课",
            priceNow:"$25/次",
            priceOld:"$100/次",
            restPeople:8,
            position:"黄龙黑鲨橄榄球学院",
            produce:"sdlgjsdlkgjsldkjglsdkjglsdkjglsdkjgsldkjgsldkjgsldkgjs",
            src:"https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg?imageView2/0/q/80/w/9999/h/300/format/jpg"
        },{
            title:"在杭州上美国人的棒球课",
            priceNow:"$25/次",
            priceOld:"$100/次",
            restPeople:0,
            position:"黄龙黑鲨橄榄球学院",
            produce:"sdlgjsdlkgjsldkjglsdkjglsdkjglsdkjgsldkjgsldkjgsldkgjs",
            src:"https://qnmob.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg?imageView2/0/q/80/w/9999/h/300/format/jpg"
        }]
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    images: res.data
                })
            }
        })

    }
})
