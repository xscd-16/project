export default{
    num: [],//热门精选初始状态
    getTourRecommendList:[],//这个是巡回演出初始状态
    num: [],
    // 为你推荐
    recommendList: [],
    // 演出详情
    performanceDetail: {
        static_data: {
            pic: "",
            show_name: "",
            price_range: "",
            venue: {},
            city: {},
            support: {
                list:[]
            },
            show_desc: {
              
            }
        },
        item_list: [
            {
                project_time: "",
                session_time:""
            }
        ]
    },
    // 相关推荐
    aboutRecommend: [],
    //演唱会
    floorShowList:[],
    floorShowContent:{},

    //演出页面的  列表数据
    YanChuContent:{
        list:[]
    },
    YanChuNav:{
        NavList:[]
    },
    navList:[],
    carouselList:[]
}