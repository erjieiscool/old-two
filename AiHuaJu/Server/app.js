const express=require("express");
const pool=require("./pool.js");
const session=require("express-session");
const bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({extended:false}));
//引入跨域模块
const cors=require("cors");
//配置
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true
}))
app.use(express.static(__dirname+"/public"));
app.listen(2000);
app.use(session({
	secret:'128位随机字符串',
	resave:false,
	saveUninitialized:true,
}))

//轮播图
app.get("/imagelist",(req,res)=>{
    var sql=`select * from yd_index_carousel`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })   
})
//首页商品列表
app.get("/laptop",(req,res)=>{
    var sql=`select * from yd_laptop`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//商品轮播图
app.get("/detailImg",(req,res)=>{
    var obj=[
        {id:1,img:"http://127.0.0.1:2000/img/laptop/1_640.jpg"},
        {id:2,img:"http://127.0.0.1:2000/img/laptop/1_641.jpg"},
        {id:3,img:"http://127.0.0.1:2000/img/laptop/1_642.jpg"},
        {id:4,img:"http://127.0.0.1:2000/img/laptop/1_643.jpg"},
        {id:5,img:"http://127.0.0.1:2000/img/laptop/1_644.jpg"},
    ];
    res.send(obj);
})
//商品详情图
app.get("/detailList",(req,res)=>{
    var obj=[
        {id:1,img:"http://127.0.0.1:2000/img/laptop/1_640.jpg"},
        {id:2,img:"http://127.0.0.1:2000/img/laptop/1_641.jpg"},
        {id:3,img:"http://127.0.0.1:2000/img/laptop/1_642.jpg"},
        {id:4,img:"http://127.0.0.1:2000/img/laptop/1_643.jpg"},
        {id:5,img:"http://127.0.0.1:2000/img/laptop/1_644.jpg"},
        {id:6,img:"http://127.0.0.1:2000/img/laptop/bt_1.jpg"},
        {id:7,img:"http://127.0.0.1:2000/img/laptop/bt_2.jpg"},
        {id:8,img:"http://127.0.0.1:2000/img/laptop/bt_3.jpg"},
        {id:9,img:"http://127.0.0.1:2000/img/laptop/bt_4.jpg"},
        {id:10,img:"http://127.0.0.1:2000/img/laptop/bt_5.jpg"},
        {id:11,img:"http://127.0.0.1:2000/img/laptop/bt_6.jpg"},
        {id:12,img:"http://127.0.0.1:2000/img/laptop/bt_7.jpg"},
        {id:13,img:"http://127.0.0.1:2000/img/laptop/bt_8.jpg"},
        {id:14,img:"http://127.0.0.1:2000/img/laptop/bt_9.jpg"},
        {id:15,img:"http://127.0.0.1:2000/img/laptop/bt_11.jpg"},
        {id:16,img:"http://127.0.0.1:2000/img/laptop/bt_12.jpg"},
        {id:17,img:"http://127.0.0.1:2000/img/laptop/bt_13.jpg"},
        {id:18,img:"http://127.0.0.1:2000/img/laptop/bt_14.jpg"},
        {id:19,img:"http://127.0.0.1:2000/img/laptop/bt_15.jpg"},
        {id:20,img:"http://127.0.0.1:2000/img/laptop/aihuaju_pai.jpg"},
        {id:21,img:"http://127.0.0.1:2000/img/laptop/aihuaju_pin.jpg"},
        {id:22,img:"http://127.0.0.1:2000/img/laptop/paibanner_wap.jpg"}
    ];
    res.send(obj);
})
//登录功能
const qs=require("querystring");
app.post("/login",(req,res)=>{
    req.on("data",(buf)=>{
        var str=buf.toString();
        var obj=qs.parse(str);
        var uname=obj.uname;
    })
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var sql=`select * from yd_user where uname=? and upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.writeHead(200);
            var user=result[0];
            res.write(JSON.stringify({ok:1,msg:"登陆成功！",user_id:user["user_id"],uname:user["uname"]}))
        }else{
            res.write(JSON.stringify({
				ok:-1,
				msg:"用户名或密码错误！"
			}))
        }
        res.end();
    })
})
//验证是否登录
app.get("/islogin",(req,res)=>{
    var user_id=req.query.user_id;
    console.log(typeof user_id)
   // res.writeHead(200);
    if(user_id=="null"){
        console.log("null")
        res.write(JSON.stringify({ok:-1}))
		res.end();
    }else{
        var sql=`select * from yd_user where user_id=?`;
        pool.query(sql,[user_id],(err,result)=>{
            if (err) throw err;
            var user=result[0];
            var uname=result[0].uname;
            console.log(user);
            res.write(JSON.stringify({ok:1,uname:user.uname}))
			res.end();
        })
    }
})
//退出
app.get("/signout",(req,res)=>{
    
    res.send('111');
})
//用户注册,检查用户名是否已存在
app.get("/selectUname",(req,res)=>{
    //console.log(req)
    var uname=req.query.uname;
    if(!uname){
        res.send("-1");
        return;
    }
    var sql=`select * from yd_user where uname=?`;
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        //console.log(result)
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    })
})
app.post("/register",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    if(!upwd){
        res.send("-1");
        return;
    }
    var sql=`insert into yd_user values(NULL,?,?,NULL,NULL)`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        res.send("成功");
    })
})
//获取购物车数据
app.get("/cartItem",(req,res)=>{
    var user_id=req.query.user_id;
    var sql=`select *from yd_shopping_cart inner join yd_details on yd_details.pid=yd_shopping_cart.product_id where user_id=?`;
    pool.query(sql,[user_id],(err,result)=>{
        if(err) throw err;
        res.writeHead(200);
        res.write(JSON.stringify(result));
        res.end();
    })
})
//删除购物车商品
app.get("/deleteCart",(req,res)=>{
    var tid=req.query.tid;
    var sql=`delete from yd_shopping_cart where tid=?`;
    pool.query(sql,[tid],(err,result)=>{
        if(err) throw err;
        res.end();
        //res.send("删除成功");
    })
})
//获取商品列表
app.get("/productList",(req,res)=>{
    var bid=req.query.bid;
    var sql=`select * from yd_laptop_list where bid=?`;
    pool.query(sql,[bid],(err,result)=>{
        res.send(result);
        res.end();
    })
})
//商品列表按销量排序
app.get("/count",(req,res)=>{
    var bid=req.query.bid;
    var sql=`select * from yd_laptop_list where bid=? order by count desc`;
    pool.query(sql,[bid],(err,result)=>{
        if(err) throw err;
        res.send(result)
        res.end();
    })
})
//价格排序
app.get("/price",(req,res)=>{
    var bid=req.query.bid;
    var sql=`select * from yd_laptop_list where bid=? order by price desc`;
    pool.query(sql,[bid],(err,result)=>{
        if(err) throw err;
        res.send(result);
        res.end();
    })
})
//
















