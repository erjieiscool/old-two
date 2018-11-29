<template>
    <div class="app-login">
        <ul class="head">
            <li></li>
            <li class="font1">会员注册</li>
            <li><router-link to="/login">登录</router-link></li>
        </ul>
        <div class="forms font2">
            <table id="info">
                <tr>
                    <td>手机号</td>
                    <td><input type="text" name="phone" placeholder="请输入手机号"></td>
                </tr>
                <tr>
                    <td>验证码</td>
                    <td><input type="text" name="phone" placeholder="请输入验证码" class="yzm"><span class="mm">获取验证码</span></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="text" name="phone" placeholder="请输入密码"></td>
                </tr>
                <tr>
                    <td>确认密码</td>
                    <td><input type="text" name="phone" placeholder="请输入确认密码"></td>
                </tr>
            </table>
            <p><input type="checkbox" checked>同意<a href="#" style="float:right">爱花居用户协议</a></p>
            <input type="button" value="立即注册" id="btn">           
            
        </div>
    </div>
</template>
<script>

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
    .forms p{
        margin-top:20px;
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
    #info>tr>td>input{
        font-size:0.8rem;
        color:#444444;
        border:none;
        margin:0;
    }
    #info{
        width:100%;
    }
    #info>tr>td:first-child{
        text-align:center;
    }
    #info>tr{
        border-bottom:1px solid #eeeeee;
    }
    input.yzm{
        position:relative;
    }
    span.mm{
        position:absolute;
        top:103px;
        right:20px;
        border:1px solid #eeeeee;
        padding:2px 5px;
    }
</style>