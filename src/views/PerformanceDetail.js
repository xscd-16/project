import React from "react";
import { connect } from "react-redux";
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast, ActivityIndicator } from 'antd-mobile';
import homeAction from "../store/actionCreator/home/index";
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
class PerformanceDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
            animating: true,
        };
    }
    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }
    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
    }));

    showActionSheet = () => {
        const BUTTONS = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            // title: 'title',
            message: 'I am description, description, description',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }

    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
            options: this.dataList,
            // title: 'title',
            message: 'I am description, description, description',
        },
            (buttonIndex) => {
                this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
                // also support Promise
                return new Promise((resolve) => {
                    Toast.info('closed after 1000ms');
                    setTimeout(resolve, 1000);
                });
            });
    }

    showShareActionSheetMulpitleLine = () => {
        const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
        ActionSheet.showShareActionSheetWithOptions({
            options: data,
            message: 'I am description, description, description',
        },
            (buttonIndex, rowIndex) => {
                this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
            });
    }

    showActionSheetBadge = () => {
        const BUTTONS = ['Operation1', 'Operation2', 'Operation3', 'Operation4', 'Operation5', 'Delete', 'Cancel'];
        const BADGES = [{
            index: 1,
            dot: true,
        }, {
            index: 2,
            text: 3100,
        }, {
            index: 3,
            text: '推荐',
        }, {
            index: 4,
            text: '···',
        }];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            badges: BADGES,
            // title: 'title',
            message: 'I am description, description, description',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }
    showToast = () => {
        this.setState({ animating: !this.state.animating });
    }
    render() {
        return (
            <div className="PerformanceDetail">
                {
                    !this.state.animating ?
                        <WingBlank >
                            <div className="toast-container">
                                <WhiteSpace size="xl" />
                                <div className="toast-example">
                                    <ActivityIndicator
                                        toast
                                        text="Loading..."
                                        animating={this.state.animating}
                                    />
                                </div>
                            </div>
                        </WingBlank> :
                        ""
                }

                {/* 头部背景 */}
                <div className="header">
                    <p className="head">
                        <span className="iconfont icon-fanhui" onClick={() => this.props.history.go(-1)}></span>
                        <span className="titleCon">演出详情</span>
                        <span className="iconfont icon-fenxiang" onClick={this.showShareActionSheetMulpitleLine}></span>
                        <span className="iconfont icon-zhuye"
                            onClick={() => this.props.history.push("/")}></span>
                    </p>
                    <div style={{ padding: "0 1rem", height: "11rem", display: "flex", justifyContent: "spaceAround" }}>
                        {
                            this.props.performanceDetail.static_data.pic ?
                                <img
                                    style={{ height: "9rem", width: "7rem", marginTop: "1rem", borderRadius: ".3rem" }}
                                    src={this.props.performanceDetail.static_data.pic} alt="演出图片" /> :
                                ""
                        }
                        <div className="performance-info"
                            style={{ position: "relative", height: "9rem", flex: 1, marginTop: "1rem", padding: "0 1rem" }}>
                            {
                                this.props.performanceDetail.static_data.show_name ?
                                    <h4 style={{ fontSize: "1rem", fontWeight: "bold", position: "absolute", top: ".8rem", color: "#fff", lineHeight: "1.4rem" }}>
                                        {this.props.performanceDetail.static_data.show_name}
                                    </h4> :
                                    ""
                            }
                            {
                                this.props.performanceDetail.static_data.price_range ?
                                    <div style={{ fontSize: "1.2rem", position: "absolute", bottom: ".4rem", fontWeight: "bold", color: "#fff" }}>
                                        {"￥" + this.props.performanceDetail.static_data.price_range}
                                    </div> :
                                    ""
                            }
                        </div>
                    </div>
                </div>

                <div style={{ position: "absolute", top: 0, width: "100 %", height: "14rem", background: " url(" + this.props.performanceDetail.static_data.pic + ")", filter: "blur(10px)" }}></div>
                {/* 演出详情*/}
                <div className="main1"
                    style={{ position: "relative", height: "11rem", paddingTop: "1rem", background: "#fff", padding: "0 1rem" }}
                >
                    {
                        this.props.performanceDetail.item_list.length < 2 ?
                            <div className="timeCon"
                                style={{
                                    height: "2rem",
                                    lineHeight: "2rem"
                                }}>
                                <span style={{
                                    fontWeight: "bold",
                                    fontSize: "1rem"
                                }}>{this.props.performanceDetail.item_list[0].project_time}</span>
                                <span>{this.props.performanceDetail.item_list[0].session_time}</span>
                                <span className="iconfont icon-icon1"
                                    style={{
                                        display: "inlineBlock",
                                        height: "1rem",
                                        width: "1rem"
                                    }}></span>
                            </div> :
                            <div className="timeCon" style={{
                                height: "2rem",
                                lineHeight: "2rem",

                            }}>
                                <span style={{
                                    fontWeight: "bold",
                                    fontSize: "1rem"
                                }}>
                                    {this.props.performanceDetail.item_list[0].project_time.substr(0, 9) + "-" + this.props.performanceDetail.item_list[this.props.performanceDetail.item_list.length - 1].project_time.substr(5, 5)}
                                </span>
                                <span className="iconfont icon-icon1"
                                    style={{
                                        display: "inlineBlock",
                                        height: "1rem",
                                        width: "1rem"
                                    }}></span>
                            </div>
                    }
                    <div className="whereCon"
                        style={{
                            marginTop: "1rem",
                            height: "3rem",
                            position: "relative"
                        }}
                    >
                        <p style={{
                            fontWeight: "bold",
                            fontSize: "1rem",
                            height: "1.5rem",
                            lineHeight: "1.5rem"
                        }}>
                            {this.props.performanceDetail.static_data.city.city_name + " | " + this.props.performanceDetail.static_data.venue.venue_name}
                        </p>
                        <p style={{
                            fontSize: ".8rem",
                            height: "1.5rem",
                            lineHeight: "1.5rem"

                        }}>
                            {this.props.performanceDetail.static_data.venue.venue_address}
                        </p>
                        <span
                            className="iconfont icon-dingwei"
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.4rem",
                                position: "absolute",
                                right: "0rem",
                                top: ".5rem",
                                color: "orange",
                                borderRadius: "50%",
                                height: "2rem",
                                width: "2rem"
                            }}>

                        </span>
                    </div>
                    <div className="vipCon"
                        style={{
                            background: "#ddd",
                            marginTop: "1rem",
                            height: "3rem",
                            borderRadius: ".3rem",
                            color: "#f5dea9",
                            position: "relative",
                            backgroundImage: "linear-gradient(-4deg,#1e1e1e,#464542)"
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#000",
                                fontSize: ".6rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                left: ".8rem",
                                padding: "0 .3rem",
                                borderRadius: ".1rem",
                                backgroundImage: "linear-gradient(0deg,#f5dea9,#f8d583)"
                            }}
                        >
                            橙PLUS卡
                        </span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#f5dea9",
                                fontSize: ".9rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                left: "4.6rem",
                                padding: "0 .3rem"
                            }}
                        >
                            开通送¥100 最高省28元
                        </span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#f5dea9",
                                fontSize: ".7rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                right: "2rem",
                                padding: "0 .3rem"
                            }}
                        >
                            立即开卡
                        </span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#f5dea9",
                                fontSize: "1.2rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                right: ".2rem",
                                padding: "0 .3rem"
                            }}
                            className="iconfont icon-icon1">
                        </span>
                    </div>
                </div>
                {/* VIP */}
                <div className="main2"
                    style={{
                        position: "relative",
                        height: "12rem",
                        marginTop: "1rem",
                        padding: "0 1rem",
                        display: "flex",
                        flexDirection: "column",
                        background: "#fbfbfb"
                    }}
                >
                    <div className="main2-item"
                        style={{ borderBottom: "1px solid #ccc" }}>
                        <span className="span1">领券：</span>
                        <span style={{
                            fontSize: ".8rem",
                            position: "absolute",
                            left: "5rem"
                        }}>
                            满四百减一百二
                        </span>
                        <span className="iconfont icon-shenglvehao"
                            style={{
                                position: "absolute",
                                right: "1rem",
                                color: "#000"
                            }}
                        ></span>
                    </div>
                    <div className="main2-item"
                        style={{ borderBottom: "1px solid #ccc" }}>
                        <span className="span1">VIP+:</span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                fontSize: ".8rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                color: "#000",
                                left: "5rem",
                                padding: "0 .3rem"
                            }}>
                            V+会员享
                        </span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#ff6743",
                                fontSize: ".9rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                left: "9rem",
                                padding: "0 .3rem"
                            }}
                        >国内免邮 + 双倍积分</span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#888",
                                fontSize: "1rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                right: ".4rem",
                                padding: "0 .3rem"
                            }}
                            className="iconfont icon-icon1">
                        </span>
                    </div>
                    <div className="main2-item"
                        style={{ borderBottom: "1px solid #ccc" }}>
                        <span className="span1">入场:</span>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                fontSize: ".8rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                color: "#000",
                                left: "5rem",
                                padding: "0 .3rem"
                            }}
                        >一人一票（儿童全票）</span>
                    </div>
                    <div className="main2-item">
                        <span className="span1"
                            style={{ marginRight: "2rem" }}
                        >支持:</span>
                        {
                            this.props.performanceDetail.static_data.support.list.map((v, i) => (
                                <span key={i}
                                    style={{
                                        display: "inline-block",
                                        marginTop: "1rem",
                                        height: "1rem",
                                        fontSize: ".8rem",
                                        lineHeight: "1rem",
                                        color: "#888",
                                        padding: "0 .3rem"
                                    }}
                                >
                                    {v}
                                    {
                                        i === this.props.performanceDetail.static_data.support.list.length - 1 ? "" : " | "}
                                </span>
                            ))
                        }
                    </div>
                </div>
                {/* 演出介绍 */}
                {/* <div className="main3" >
                    <h3 style={{
                        height: "1rem",
                        fontSize: "1.2rem",
                        lineHeight: "1rem",
                        fontWeight: "bold",
                        padding: "1rem 0 1.4rem 1rem"

                    }}>演出介绍</h3>
                    <div dangerouslySetInnerHTML={{ __html: this.props.performanceDetail.static_data.show_desc.desc }}
                        style={{
                            marginTop: "1rem",
                            fontSize: ".9rem",
                            padding: "0 .9rem"

                        }}
                    ></div>
                </div> */}
                {/* 温馨提醒 */}
                <div className="main4"
                    style={{
                        background: "#fff",
                        marginTop: "1rem"
                    }}>
                    <div
                        style={{
                            height: "1rem",
                            position: "relative",

                        }}
                    >
                        <h3 style={{
                            height: "1rem",
                            fontSize: "1.2rem",
                            lineHeight: "1rem",
                            fontWeight: "bold",
                            padding: "1rem 0 1.4rem 1rem",
                            position: "absolute",
                            left: ".4rem",

                        }}>温馨提醒</h3>
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                height: "1rem",
                                color: "#888",
                                fontSize: "1rem",
                                lineHeight: "1rem",
                                position: "absolute",
                                right: ".4rem",
                                padding: "0 .3rem"
                            }}
                            className="iconfont icon-icon1">
                        </span>
                    </div>
                    <ul
                        style={{
                            display: "flex",
                            marginTop: "2rem",
                            fontSize: ".9rem",
                            padding: "0 .9rem",
                            height: "2rem",
                            width: "100%",
                            lineHeight: "2rem"


                        }}
                    >
                        <li>配送说明</li>
                        <li>订票说明</li>
                        <li>确认订单</li>
                        <li>购票提醒</li>
                    </ul>
                </div>
                {/* 相关推荐 */}
                <div className="main5"
                    style={{
                        background: "#fff",
                        marginTop: "1rem",
                        position: "relative"
                    }}>
                    <h3 style={{
                        height: "1rem",
                        fontSize: "1.2rem",
                        lineHeight: "1rem",
                        fontWeight: "bold",
                        padding: "1rem 0 1.4rem 1rem"
                    }}>相关推荐</h3>
                    <div className="AboutRecommend">
                        {
                            this.props.aboutRecommend.length <= 3 ?
                                this.props.aboutRecommend.map(item => (
                                    <div className="recommendItem" key={item.schedular_id}
                                        onClick={() => this.props.history.push({ pathname: "/performanceDetail", state: { schedular_id: item.schedular_id } })}>
                                        <img src={item.pic} alt="演出图片" />
                                        <div className="item-info">
                                            {
                                                item.show_time_bottom.length < 1 ?
                                                    (
                                                        <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                                            <h5 style={{ fontSize: "1rem", position: "absolute", top: ".4rem" }}>
                                                                {item.start_show_time.substr(0, 4) + "." + item.show_time_top}
                                                            </h5>
                                                            <h5 style={{ fontSize: "1rem", position: "absolute", top: "2rem" }}>{item.name}</h5>
                                                            <p style={{ fontSize: ".8rem", position: "absolute", bottom: "2rem" }}>{item.city_name}{" | "}{item.venue_name}</p>
                                                            <div style={{ position: "absolute", bottom: ".4rem" }}>
                                                                <span style={{ fontSize: "1rem", color: "orange" }}>
                                                                    ￥{item.min_price}元
                                                        </span>
                                                                <span style={{ fontSize: ".8rem" }}>{" 起"}</span>
                                                            </div>
                                                        </div>
                                                    ) :
                                                    (
                                                        <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                                            <h5 style={{ fontSize: "1rem", position: "absolute", top: ".4rem" }}>
                                                                {item.start_show_time.substr(0, 10)}
                                                                <span style={{ fontSize: ".8rem", fontWeight: "normal" }}>
                                                                    {" "}
                                                                    {item.show_time_bottom + " " + item.start_show_time.substr(12, 5)}
                                                                </span>
                                                            </h5>
                                                            <h5 style={{ fontSize: "1rem", position: "absolute", top: "2rem" }}>{item.name}</h5>
                                                            <p style={{ fontSize: ".8rem", position: "absolute", bottom: "2rem" }}>{item.city_name}{" | "}{item.venue_name}</p>
                                                            <div style={{ position: "absolute", bottom: ".4rem" }}>
                                                                <span style={{ fontSize: "1rem", color: "orange" }}>
                                                                    ￥{item.min_price}元
                                                        </span>
                                                                <span style={{ fontSize: ".8rem" }}>{" 起"}</span>
                                                            </div>
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    </div>
                                )) :
                                <div>
                                    {
                                        this.props.aboutRecommend.slice(0, 3).map(item => (
                                            <div className="recommendItem" key={item.schedular_id}
                                                onClick={() => this.props.history.push({ pathname: "/performanceDetail", state: { schedular_id: item.schedular_id } })}>
                                                <img src={item.pic} alt="演出图片" />
                                                <div className="item-info">
                                                    {
                                                        item.show_time_bottom.length < 1 ?
                                                            (
                                                                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: ".4rem" }}>
                                                                        {item.start_show_time.substr(0, 4) + "." + item.show_time_top}
                                                                    </h5>
                                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: "2rem" }}>{item.name}</h5>
                                                                    <p style={{ fontSize: ".8rem", position: "absolute", bottom: "2rem" }}>{item.city_name}{" | "}{item.venue_name}</p>
                                                                    <div style={{ position: "absolute", bottom: ".4rem" }}>
                                                                        <span style={{ fontSize: "1rem", color: "orange" }}>
                                                                            ￥{item.min_price}元
                                                        </span>
                                                                        <span style={{ fontSize: ".8rem" }}>{" 起"}</span>
                                                                    </div>
                                                                </div>
                                                            ) :
                                                            (
                                                                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: ".4rem" }}>
                                                                        {item.start_show_time.substr(0, 10)}
                                                                        <span style={{ fontSize: ".8rem", fontWeight: "normal" }}>
                                                                            {" "}
                                                                            {item.show_time_bottom + " " + item.start_show_time.substr(12, 5)}
                                                                        </span>
                                                                    </h5>
                                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: "2rem" }}>{item.name}</h5>
                                                                    <p style={{ fontSize: ".8rem", position: "absolute", bottom: "2rem" }}>{item.city_name}{" | "}{item.venue_name}</p>
                                                                    <div style={{ position: "absolute", bottom: ".4rem" }}>
                                                                        <span style={{ fontSize: "1rem", color: "orange" }}>
                                                                            ￥{item.min_price}元
                                                        </span>
                                                                        <span style={{ fontSize: ".8rem" }}>{" 起"}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div>
                                        <span
                                            style={{
                                                display: "block",
                                                width: "10rem",
                                                height: "2.4rem",
                                                border: "1px solid #ff6743",
                                                borderRadius: ".3rem",
                                                lineHeight: "2.4rem",
                                                textAlign: "center",
                                                marginLeft: "6rem",
                                                color: "#ff6743",
                                                position: "relative"
                                            }}
                                        >
                                            查看更多演出
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    marginTop: ".7rem",
                                                    height: "1rem",
                                                    color: "#ff6743",
                                                    fontSize: "1rem",
                                                    lineHeight: "1rem",
                                                    position: "absolute",
                                                    right: ".4rem",
                                                    padding: "0 .3rem"
                                                }}
                                                className="iconfont icon-icon1">
                                            </span>
                                        </span>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                {/* 底部选座购买及客服*/}
                <div className="main5"
                    style={{
                        background: "#fff",
                        marginTop: "1rem",
                        height: "4rem",
                        display: "flex",
                        justifyContent: "spaceBetween",
                        alignItems: "center",
                        padding: "0 1rem",
                    }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "#888"
                        }}
                    >
                        <span className="iconfont icon-kefu"
                            style={{
                                fontSize: "1.4rem",
                                marginLeft: ".4rem"

                            }}
                        ></span>
                        <span
                            style={{
                                fontSize: ".6rem",
                                textAlign: "center"
                            }}
                        >
                            客服
                        </span>
                    </div>
                    <span
                        style={{
                            flex: 1,
                            height: "2.6rem",
                            backgroundImage: "linear-gradient(50deg,#ff9a34,#ff4d4a)",
                            borderRadius: "1.3rem",
                            textAlign: "center",
                            lineHeight: "2.6rem",
                            fontWeight: "bold",
                            color: "#fff",
                            marginLeft: "1rem"
                        }}
                    >
                        选座购买
                    </span>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        await this.props.getPerformanceDetail.call(this, this.props.location.state.schedular_id);
        await this.props.getAboutRecommend.call(this, this.props.location.state.cate_parent_id);
        this.setState({ animating: !this.state.animating });
    }
}
function mapStateToProps(state) {
    return {
        performanceDetail: state.home.performanceDetail,
        aboutRecommend: state.home.aboutRecommend
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async getPerformanceDetail(schedular_id) {
            await dispatch(homeAction.getPerformanceDetail.call(this, schedular_id));
            console.log(this.props.performanceDetail);
        },
        async getAboutRecommend(cate_parent_id) {
            await dispatch(homeAction.getAboutRecommend.call(this, cate_parent_id));
            console.log(this.props.aboutRecommend);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PerformanceDetail);
