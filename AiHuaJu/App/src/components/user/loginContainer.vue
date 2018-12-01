<template>
    <div class="app-login">
        <ul class="head">
            <li></li>
            <li class="font1">会员登录</li>
            <li><router-link to="/register">注册</router-link></li>
        </ul>
        <div class="forms font2">
            <p><span>账&nbsp;&nbsp;&nbsp;户：</span><input type="text" name="uname" placeholder="请输入用户名" class="font2" style="width:80%;margin:0;" v-model="unameval"></p>
            <p><span>密&nbsp;&nbsp;&nbsp;码：</span><input type="password" name="upwd" placeholder="请输入登录密码" class="font2" style="width:80%;" v-model="upwdval"></p>
            <p><input type="checkbox" checked>七天自动登录<a href="#" style="float:right">忘记密码？</a></p>
            <input type="button" value="登录" id="btn" @click="userLogin">           
            <div class="line">
                <p class="font2">其他登录方式</p>
            </div>
            <ul class="wb">
                <li><a href="#"><img src="http://127.0.0.1:2000/img/weibo.png"></a></li>
                <li><a href="#"><img src="http://127.0.0.1:2000/img/qq.png"></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default{
        data(){return{
            unameval:"",
            upwdval:""
        }},
        methods:{
            userLogin(){
                var uname=this.unameval;
                var upwd=this.upwdval;          
                this.$http.post("http://127.0.0.1:2000/login",{uname:uname,upwd:upwd},{emulateJSON:true}).then(result=>{ 
                        if(result.body.ok==1){
                            sessionStorage.setItem("user_id",result.body.user_id);
                            sessionStorage.setItem("uname",result.body.uname);
                            Toast(result.body.msg);
                            this.$router.push("/home/user");
                        }else{
                            Toast(result.body.msg)
                        }
                })
            }
        }
    }
</script>
<style>
    *{
        padding:0;
        margin:0;
        list-style:none;
    }
    .app-container{
        padding:0 !important;
    }
    .forms{
        background:#fff;
        padding:8px 30px 0;
    }
    .forms span{
        color:#444444;
    }
    .forms p{
        margin:0;
        padding:0;
    }
    .font1{
        color:#000;
        font-size:1rem;
    }
    .font2{
        color:#747474;
        font-size:0.8rem;
    }
    .head{
        display:flex;
        justify-content:space-between;
        padding:12px 8px;
    }
    #btn{
        width:100%;
        background:#eeeeee;
        border:none;
        height:35px;
        margin:15px 0 30px;
    }
    .line{
        position:relative;
        width:100%;
        border-top:1px solid #dbdbdb;
        margin-bottom:20px;
    }
    .line p{
        position:absolute;
        background:#fff;
        width:35%;
        top:-30px;
        text-align:center;
        left:32%;
    }
    ul.wb{
        display:flex;
        margin:0 auto;
        width:70%;
        justify-content:space-around;
    }
</style>