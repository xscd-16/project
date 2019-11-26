const express=require("express");
const app=express();
const tools=require("./tools");
const db=require("./db")
const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.get("/logo",function(req,res){
    const phoneId = req.query.phoneId;
    const code = tools.getRandom(100000,999999);
    // 根据手机号查找之前是否发送过短信
    const info = await db.findOne("phoneCode",{phoneId})
    if(info){
        if(Date.now()-info.sendTime>1000*5){
            await db.updateOne("phoneCode",{phoneId},{
                $set:{
                    code,
                    sendTime:Date.now()
                }
            })
            res.json({
                ok:1,
                code,
                msg:"发送成功"
            })
        }else{
            tools.json(res,-1,"时间未过期还差"+Number.parseInt((1000*60*3-Date.now()+info.sendTime)/1000)+"秒")
        }
    }else{
        await db.insertOne("phoneCode",{
            phoneId,
            code,
            sendTime:Date.now()
        })
        res.json({
            ok:1,
            code,
            msg:"发送成功"
        })
    }
})

app.listen(8080,function(){
    console.log("success")
})