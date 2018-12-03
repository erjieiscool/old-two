const express=require("express");
const pool=require("./pool.js");

var app=express();
//引入跨域模块
const cors=require("cors");
//配置
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:2000"],
    credentials:true
}))
app.use(express.static(__dirname+"/public"));
app.listen(2000);

//轮播图
app.get("/imagelist",(req,res)=>{
    //var obj=[];
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
        console.log(result);
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
app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql=`select * from yd_user where uname=? and upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码错误"});
        }else{
            res.send({code:1,msg:"登录成功"});
        }
    })
})






















