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
    app.use("/l",proxy({
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/l":""
        }
    }))
}