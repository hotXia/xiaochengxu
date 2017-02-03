Page({
    data: {
        hot: 'top-hoverd-btn',
        flag:false,
        flag1:true,
        flag2:false,
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
    onLaunch: function(){
        console.log('douban Launching ...');
    },
    onLoad: function () {
        var that = this
        //调用应用实例的方法获取全局数据
        for(var i=0;i<this.data.item.length;i++){
            if(this.data.item[i].restPeople==0){
                this.data.item[i].restPeople = "已报满"
            }else if(this.data.item[i].restPeople<10){
                this.data.item[i].restPeople = "剩余"+this.data.item[i].restPeople+"人"
            }else if(this.data.item[i].restPeople>=10){
                this.data.item[i].restPeople = "报名中"
            }
        }
    },
    chooseHomeWork: function(event) {  
      if(!this.flag){
        this.flag = true;
        this.setData({
            flag:true
        });
      }else{
        this.flag = false;
        this.setData({
            flag:false
        });
      }
    },
    toHot: function(){
        console.log('hot');
        this.updateBtnStatus('hot');
        this.updateFlag1();
    },
    toFilm: function(){
        console.log('film');
        this.updateBtnStatus('film');
        this.updateFlag2();
    },
    toReadBook: function(){
        console.log('readbook');
        this.updateBtnStatus('book');
    },
    toTelv: function(){
        console.log('telv');
        this.updateBtnStatus('telv');
    },
    updateFlag1: function(){
        this.setData({
            flag1:true,
            flag2:false
        });
    },
    updateFlag2: function(){
        this.setData({
            flag1:false,
            flag2:true
        });
    },
    updateBtnStatus: function(k){
        this.setData({
            hot: this.getHoverd('hot', k),
            film: this.getHoverd('film', k),
            book: this.getHoverd('book', k),
            telv: this.getHoverd('telv', k),
            active: this.getHoverd('active', k),
            music: this.getHoverd('music', k),
            other: this.getHoverd('other', k),
            other1: this.getHoverd('other1', k),
        });
    },
    getHoverd: function(src, dest){
        return (src === dest ?  'top-hoverd-btn' : '');
    }
});