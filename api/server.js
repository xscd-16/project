const express=require("express");
const app=express();
const tools=require("./tools");
const db=require("./db")
const bodyParser = require("body-parser");
app.use(bodyParser.json())

const TIMEOUT=10;

app.get("/logo",async function(req,res){
    const phoneId = req.query.phoneId;
    // console.log(phoneId)
    const code = tools.getRandom(100000,999999);
    // 根据手机号查找之前是否发送过短信
    // console.log(code)
    const info = await db.findOne("phoneCode",{phoneId})
    // console.log(info)
    if(info){
        // console.log(11111111111223)
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
            tools.json(res,-1,"时间未过期还差"+Number.parseInt((1000*5-Date.now()+info.sendTime)/1000)+"秒")
        }
    }else{
        // console.log(111)
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
//登录
app.post("/logoin",async function (req,res) {
    /*
    * 1、接收参数  phoneId code
    * 2、根据参数去短信集合当中进行查找
    *   1、找到数据
    *         1、判断用户是否存在
    *            1、存在
    *               更新最后登陆时间
    *            2、不存在
    *               创建一个用户。
    *   2、未找到数据
    *       请输入正确的验证码*/
    const {phoneId,code} = req.body;
    const info = await db.findOne("phoneCode",{
        phoneId:String(phoneId),
        code:Number(code)
        // 判断发送时间是否有效
    })
    // console.log(info)
    if(info){
        if(Date.now()-info.sendTime<1000*TIMEOUT){
            const user = await db.findOne("userList",{
                phoneId
            })
            if(user){
                await db.updateOne("userList",{phoneId},{$set:{lastTime:Date.now()}});
                res.json({
                    ok:1,
                    phoneId,
                    token: tools.enCode({
                        phoneId
                    }),
                    msg:"登陆成功"
                })
            }else{
                await db.insertOne("userList",{phoneId,regTime:Date.now(),gold:1000,lastTime:Date.now()});
                res.json({
                    ok:1,
                    phoneId,
                    token: tools.enCode({
                        phoneId
                    }),
                    msg:"登陆成功"
                })
            }
        }else{
            tools.json(res,-2,"请重新发送验证码")
        }
        
    }else{
        tools.json(res,-1,"请输入正确的验证码")
    }
})



app.listen(8080,function(){
    console.log("success")
})