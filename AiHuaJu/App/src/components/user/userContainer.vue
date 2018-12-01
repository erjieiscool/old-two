<template>
    <div class="app-user">
        <div class="list">
            <div id="user">
                <div><img src="http://127.0.0.1:2000/img/user.gif"></div>
                <p class="userName">欢迎你：{{name}}</p>
            </div>
            <ul>
                <li>
                <a>我的订单<span>查看全部订单&gt;</span>
                </a>
                </li>
            </ul>
            <ul class="shop">
                <li><a href="#"><img src="http://127.0.0.1:2000/img/shou.png">待付款</a></li>
                <li><a href="#"><img src="http://127.0.0.1:2000/img/dai.png">待收货</a></li>
                <li><a href="#"><img src="http://127.0.0.1:2000/img/ping.png">待评价</a></li>
                <li><a href="#"><img src="http://127.0.0.1:2000/img/tui.png">退款/退货</a></li>
            </ul>
        </div>
        <div class="list">
            <ul>
                <li><a href="#">我的红包<span>&gt;</span></a></li>
                <li><a href="#">我的余额<span>&gt;</span></a></li>
                <li><a href="#">收花人地址<span>&gt;</span></a></li>
                <li><a href="#">我的资料<span>&gt;</span></a></li>
            </ul>
        </div>
        <div class="list">
            <ul>
                <li><a href="#">售后服务<span>&gt;</span></a></li>
                <li><a href="#">400电话<span>&gt;</span></a></li>
                <li><a href="#">投诉建议<span>&gt;</span></a></li>
                <li><a href="#">关于我们<span>&gt;</span></a></li>
                <li  @click="signout"><a href="#">退出<span>&gt;</span></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default{
      data(){return{
          name:""
      }},
      methods:{
          isLogin(){
              var user_id=sessionStorage.getItem("user_id");
              var uname=sessionStorage.getItem("uname");
              if(!user_id){
                  this.$router.push("/login");
              }else{
                  this.name=uname;
              }
          },
          signout(){
              var user_id=sessionStorage.getItem("user_id");
              var url="signout?user_id="+user_id;
              this.$http.get(url).then(result=>{
                  sessionStorage.setItem("user_id","");
                  sessionStorage.setItem("user_name","");
                  this.$router.push("/home");
              })
          }
      },
      created() {
          this.isLogin();
      },
  }
</script>
<style>
    .app-user{
        margin-bottom:100px;
    }
    .app-user>div{
        background:#fff;
        margin-top:15px;
    }
    .app-user>div a{
        color:#444444;
        font-size:14px;
        display:inline-block;
        padding:8px 15px;
        border-bottom:1px solid #eeeeee;
        width:100%;
    }
    div.list span{
        float:right;
        color:#c0c0c0;
    }
    div.list img{
        width:15px;
        height:15px;
    }
    ul.shop{
        display:flex;
        justify-content:space-around;
    }
    ul.shop img{
        width:26px;
        height:26px;
        display:block;
        margin-left:10px;
    }
    #user{
        background:url("http://127.0.0.1:2000/img/header.jpg");
        width:100%;
        height:220px;
    }
    #user>div{
        width:80px;
        margin:0 auto;
        padding-top:50px;
        border-radius:5px !important;
    }
    #user>div>img{
        width:80px;
        height:80px;
        border-radius:50%;
    }
    .userName{
        color:#fff;
        font-size:16px;
        font-weight:bold;
        margin-left:120px;
        margin-top:10px;
    }
</style>