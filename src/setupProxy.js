const proxy = require("http-proxy-middleware");
module.exports  = function (app) {
    app.use("/m",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/m":""
        }
    }))
    app.use("/p",proxy({
        target:"http://127.0.0.1:8080",
        changeOrigin:true,
        pathRewrite:{
            "^/p":""
        }
    }))
    // app.get("/lala",function (req,res) {
    //     res.json({
    //         ok:2,
    //         res:"面试是快乐的，工作是辛苦的。好诗啊好诗。"
    //     })
    // })
}