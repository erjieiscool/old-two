<template>
    <div style="margin-bottom:150px;" id="app-detail">
        <!--轮播图-->
        <mt-swipe :auto="3000" >
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>            
        </mt-swipe>
        <div class="details">
            <p class="details-name">携手永恒-9朵白玫瑰，搭配白色桔梗，情人草，白色相思梅，绿叶</p>
            <div class="huayu">
                <p>适合对象：恋人，朋友</p>
                <p>适合用途：爱情鲜花，生日鲜花</p>
            </div>
            <p class="price"><span class="price">￥189.00</span><span>￥242.00</span><span>7.8折</span><span>销量：18916</span></p>
            <p class="details-name">优惠套餐</p>
            <p class="say"><span>92%</span>的女性期待 同时收到鲜花和巧克力</p>
            <div id="reache-list">
                <ul>
                    <li>
                        <div>
                            <div>
                                <a href="#"><img src="http://127.0.0.1:2000/img/laptop/sm/1_224.jpg"></a>
                                <p>携手永恒</p>
                                <p class="price1">￥189.00</p>
                            </div>
                            <div class="jia">+</div>
                        </div>
                        <div>
                            <div>
                                <a href="#"><img src="http://127.0.0.1:2000/img/laptop/sm/1_225.jpg"></a>
                                <p>费列罗8粒</p>
                                <p class="price1">￥118.00</p>
                            </div>
                            <div class="jia">=</div>
                        </div>
                        <div>
                            <p><span class="price2">￥266</span>组合价</p>
                            <p>优惠41元</p>
                            <p>12956人已付款</p>
                            <button class="btn">立即购买</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <a href="#"><img src="http://127.0.0.1:2000/img/laptop/sm/1_224.jpg"></a>
                                <p>携手永恒</p>
                                <p class="price1">￥189.00</p>
                            </div>
                            <div class="jia">+</div>
                        </div>
                        <div>
                            <div>
                                <a href="#"><img src="http://127.0.0.1:2000/img/laptop/sm/1_225.jpg"></a>
                                <p>费列罗8粒</p>
                                <p class="price1">￥118.00</p>
                            </div>
                            <div class="jia">=</div>
                        </div>
                        <div>
                            <p><span class="price2">￥266</span>组合价</p>
                            <p>优惠41元</p>
                            <p>12956人已付款</p>
                            <button class="btn">立即购买</button>
                        </div>
                    </li>
                </ul> 
            </div>
            <div>
                <table  class="table-item">
                    <tr>
                        <td>增加搭配</td>
                        <td style="color:#ccc;float:right;line-height:50px;">让您的礼物与众不同&gt;</td>
                    </tr>
                    <tr>
                        <td>配送至</td>
                        <td style="color:#444444;">全国<span style="color:red;margin-left:10px;">有货</span></td>
                    </tr>
                    <tr>
                        <td>款式</td>
                        <td>
                            <ul class="item-style">
                                <li>
                                    <img src="http://127.0.0.1:2000/img/laptop/sm/1_220.jpg">
                                    <span>逝水年华-9支香槟玫瑰，搭配桔梗，勿忘我</span>
                                </li>
                                <li>
                                    <img src="http://127.0.0.1:2000/img/laptop/sm/1_221.jpg">
                                    <span>逝水年华-9支支香槟玫瑰，搭配桔梗，勿忘我</span>
                                </li>
                                <li>
                                    <img src="http://127.0.0.1:2000/img/laptop/sm/1_222.jpg">
                                    <span>逝水年华-9支支香槟玫瑰，搭配桔梗，勿忘我</span>
                                </li><li>
                                    <img src="http://127.0.0.1:2000/img/laptop/sm/1_223.jpg">
                                    <span>逝水年华-9支支香槟玫瑰，搭配桔梗，勿忘我</span>
                                </li>
                                <li>
                                    <img src="http://127.0.0.1:2000/img/laptop/sm/1_224.jpg">
                                    <span>逝水年华-9支支香槟玫瑰，搭配桔梗，勿忘我</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>数量</td>
                        <td class="item-btn">
                           <button>-</button>
                           <input type="text" value="1" style="width:20px;height:33px;">
                           <button>+</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <table id="service">
            <tr>
                <td><a href=""><img src="http://127.0.0.1:2000/img/laptop/gchao.png">1000家门店</a></td>
                <td><a href=""><img src="http://127.0.0.1:2000/img/laptop/gjun.png">超模冠军代言</a></td>
                <td><a href=""><img src="http://127.0.0.1:2000/img/laptop/gjun.png">超女赞助商</a></td>
            </tr>
            <tr>
                <td><a href=""><img src="http://127.0.0.1:2000/img/laptop/jrongy.png">实拍图好评</a></td>
                <td><a href=""><img src="http://127.0.0.1:2000/img/laptop/jpin.png">急速售后处理</a></td>
                <td><a href=""><img src="http://127.0.0.1:2000/img/laptop/jsshcl.png">可见实拍图</a></td>
            </tr>
        </table>
        <p class="used">商品详情</p>
        <table class="product-item">
            <tr>
                <td>适合对象</td>
                <td>恋人，朋友</td>
            </tr>
            <tr>
                <td>用途</td>
                <td>爱情鲜花，生日鲜花</td>
            </tr>
            <tr>
                <td>花材</td>
                <td>白玫瑰</td>
            </tr>
            <tr>
                <td>枝数</td>
                <td>9枝</td>
            </tr>
            <tr>
                <td>颜色</td>
                <td>白色</td>
            </tr>
            <tr>
                <td>类别</td>
                <td>花束</td>
            </tr>
        </table>
        <table class="product-item hidden">
            <tr>
                <td>商品话语</td>
                <td>永恒不变则是爱情最美的约定</td>
            </tr>
            <tr>
                <td>商品包装</td>
                <td>白色雾面纸内衬，蓝色雾面纸外包，精美花语</td>
            </tr>
            <tr>
                <td>附送赠品</td>
                <td>免费送贺卡，代写您的祝福。（下单时填写留言栏）</td>
            </tr>
            <tr>
                <td>其他说明</td>
                <td>因各地花艺师不同，在搭配上与图片可能不完全一致，但我们保证花材新鲜与说明一致，谢谢！</td>
            </tr>
            <tr>
                <td>主花材</td>
                <td>9朵白玫瑰</td>
            </tr>
            <tr>
                <td>搭配花材</td>
                <td>白色桔梗，情人草，白色相思梅，绿叶</td>
            </tr>
        </table>
        <button class="open">展开<img src="http://127.0.0.1:2000/img/open.jpg"></button>
        <p class="used">品牌展示BRAND</p>
        <video src="http://127.0.0.1:2000/x.mp4" controls style="width:100%;"></video>
        <p class="used">商品图片IMAGE</p>
        <div class="pic">
            <a href="#" v-for="item in detailList" :key="item.id"><img :src="item.img"></a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){return {
            list:[],
            detailList:[]
        }},
        methods:{
            getImage(){
                var url="http://127.0.0.1:2000/detailImg";
                this.$http.get(url).then(result=>{
                    this.list=result.body;
                })
            },
            getdetailList(){
                var url="http://127.0.0.1:2000/detailList";
                this.$http.get(url).then(result=>{
                    this.detailList=result.body;
                    console.log(this.detailList)
                })
            }
        },
        created(){
            this.getImage();
            this.getdetailList();
        }
    }
</script>
<style>
    #app-detail .mint-swipe{
        height:310px;
    }
    #app-detail .mint-swipe img{
        width:100%;
    }
    *{
        padding:0;
        margin:0;
    }
    .details{
        background:#fff;
        padding:0 12px;
    }
    .details-name{
        color:#000;
        font-size:15px;
        padding-top:12px;
    }
    div.huayu{
        background:#eeeeee;
        padding:5px 0;
    }
    /*价格*/
    p.price{
        padding:10px 0;
        border-bottom:1px solid #eeeeee;
    }
    p.price>span:first-child{
        font-size:20px;
        color:red;
        font-weight:bold;
        margin-right:10px;
    }
    p.price>span:nth-child(2){
        font-size:15px;
        text-decoration:line-through;
    }
    p.price>span:nth-child(3){
        width:30px;
        height:20px;
        background:red;
        padding:2px 4px;
        color:#fff;
        margin-left:10px;
    }
    p.price>span:last-child{
        position:relative;
        right:-60px;
    }
    .say{
        border-bottom:1px solid #eeeeee;
        padding-bottom:7px;
        margin-bottom:0;
    }
    .say>span{
        color:red;
    }
    /*套餐*/
    #reache-list ul li{
        display:flex;
        flex-wrap:wrap;
        border-bottom:1px solid #eeeeee;
        padding:20px 0 25px;
    }
    #reache-list li>div{
        width:33%;
        position:relative;
    }
    #reache-list li>div>div img{
        width:50%;
    }
    div.jia{
        position:absolute;
        font-size:50px;
        color:#bbb;
        top:25px;
        left:70px;
    }
    .price1{
        color:red;
    }
    .price2{
        color:red;
        font-size:18px;
        font-weight:bold;
    }
    .btn{
        border:1px solid red;
        color:red;
        font-size:16px;
    }
    /*table*/
    .table-item{
        color:#8f8f94;
        font-size:14px;
        width:100%;
    }
    .table-item>tr{
        border-bottom:1px solid #eeeeee;
        height:50px;
    }
    .table-item>tr>td:first-child{
        width:20%;
    }
    .item-style{
        padding:15px 0;
    }
    .item-style>li{
        width:95%;
        height:50px;
        font-size:12px;
        border:1px solid #eeeeee;
        background:#f5f5f5;
        padding:4px 0;
        margin:5px 0;
    }
    .item-style>li>img{
        width:40px;
        height:40px;  
    }
    .item-style>li span{
        overflow:hidden;
    }
    .item-btn{
        line-height:50px;
    }
    .item-btn>button{
        margin-top:9px;
    }
    #service{
        font-size:0.9rem;
        width:100%;
        text-align:center;
        height:80px;
    }
    #service a{
        color:#333;
    }
    #service img{
        width:16px;
        height:16px;
        position:relative;
        top:4px;
        margin-right:3px;
    }
    .product-item{
        width:100%;
        font-size:0.8rem;
    }
    
    .product-item>tr>td{
        padding:8px 6px 0 12px;
    }
    .product-item>tr>td:first-child{
        color:#888;
        width:25%;
    }
    .open{
        width:100%;
        margin-top:8px;
    }
    .open>img{
        width:12px;
        margin-left:5px;
    }
    .used{
        background:#fff;
        padding:10px;
        margin:0;
    }
    div.pic img{
        width:100%;
    }
</style>