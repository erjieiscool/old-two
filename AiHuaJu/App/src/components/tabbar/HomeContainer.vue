<template>
    <div id="app-home">
        <mt-header fixed title="爱花居">
            <div>
                <img src="">
                <input type="text" placeholder="如：女友送什么鲜花">
            </div>
        </mt-header>
        <!--轮播图-->
        <mt-swipe :auto="3000" >
            <mt-swipe-item v-for="item in list" :key="item.Lid">
                <img :src="item.img">
            </mt-swipe-item>            
        </mt-swipe>
        <!--服务分类-->
        <div class="advert">
            <ul>
                <li>超模冠军代言</li>
                <li>2小时送花</li>
                <li>1160家品牌连锁店</li>
                <li>超级女声赞助商</li>
            </ul>
        </div>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9 bgk">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb1.png">
		            <div class="mui-media-body">蜜恋之花</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb2.png"></span></span>
		            <div class="mui-media-body">生日之花</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb3.png">
		            <div class="mui-media-body">精品鲜花</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb4.png">
		            <div class="mui-media-body">全部鲜花</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb5.png">
		            <div class="mui-media-body">开业大吉</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb6.png">
		            <div class="mui-media-body">蛋糕系列</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb7.png">
		            <div class="mui-media-body">礼品</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/tb8.png">
		            <div class="mui-media-body">全部分类</div>
                </a>
            </li>
		</ul>
        <!--按关系分类-->
        <div class="nav-list bgk">
            <div class="nav-container">
                <ul class="img-md">
                    <li class="img-md-item">
                        <a href="#">
                            <img src="../../img/index_tu1.jpg">
                        </a>
                        <div class="box">
                            <div>
                                <a href="#">送恋人</a>
                                <a href="#">妻子</a>
                            </div>
                            <div>
                                <a href="#">送女友</a>
                                <a href="#">爱人</a>
                            </div>
                        </div>
                    </li>
                    <li class="img-md-item b-left">
                        <a href="#">
                            <img src="../../img/index_tu1.jpg">
                        </a>
                        <div class="box">
                            <div>
                                <a href="#">送知己</a>
                                <a href="#">闺蜜</a>
                            </div>
                            <div>
                                <a href="#">送同学</a>
                                <a href="#">同事</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="img-md">
                    <li class="img-md-item">
                        <a href="#">
                            <img src="../../img/index_tu1.jpg">
                        </a>
                        <div class="box">
                            <div>
                                <a href="#">送长辈</a>
                                <a href="#">老师</a>
                            </div>
                            <div>
                                <a href="#">送领导</a>
                                <a href="#">父母</a>
                            </div>
                        </div>
                    </li>
                    <li class="img-md-item b-left">
                        <a href="#">
                            <img src="../../img/index_tu1.jpg">
                        </a>
                        <div class="box">
                            <div>
                                <a href="#">康乃馨</a>
                                <a href="#">玫瑰</a>
                            </div>
                            <div>
                                <a href="#">向日葵</a>
                                <a href="#">百合</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <a>
                <img src="../../img/aihuaju214.jpg" style="width:100%;">
            </a>
        </div>
        <!--7.8折特惠-->
        <div class="more bgk">
            <img src="../../img/new_disc68.png"><span>7.8折特惠</span>
            <a href="#" style="text-align:right;">更多&gt;</a>
        </div>
        <!--7.8折优惠商品列表-->
        <div class="products">
            <ul class="product-list">
                <li class="product-item" v-for="item in laptop.slice(0,6)" :key="item.pid">
                    <a href="#">
                        <div class="item-pic">
                            <span class="hottags">7.8折</span>
                            <img :src="item.img">
                        </div>
                        <p class="say">{{item.style}}</p>
                        <p class="item-price"><span>优惠价:￥<span>{{item.price}}</span></span><span>￥{{item.oldprice}}</span></p>
                        <p class="item-total" style="color:#555555;"><span>{{item.count}}人付款</span><span>优惠{{(item.oldprice-item.price).toFixed(2)}}元</span></p>
                    </a>
                </li>
            </ul>
        </div>
        <!--服务-->
        <div class="service">
            <a href="#">
                <img src="../../img/wap_shop.jpg" style="width:100%;">
            </a>
        </div>
        <!--火爆热销-->
        <div class="service2">
            <div></div>
            <div><h4>火爆热销</h4></div>
        </div>
        <div class="line-bar">
            <ul class="line-font">
                <li>
                    <a href="#">爱情鲜花</a>
                </li>
                <li>
                    <a href="#">生日鲜花</a>
                </li>
                <li>
                    <a href="#">友情鲜花</a>
                </li>
                <li>
                    <a href="#">红玫瑰</a>
                </li>
                <li>
                    <a href="#">康乃馨</a>
                </li>
                <li>
                    <a href="#">百合花</a>
                </li>
            </ul>
        </div>
        <!--火爆热销商品-->
        <div class="products">
            <ul class="product-list">
                <li class="product-item" v-for="item in laptop.slice(6,12)" :key="item.pid">
                    <a href="">
                        <div class="item-pic">
                            <span class="hottags">热销</span>
                            <img :src="item.img">
                        </div>
                        <p class="say">{{item.style}}</p>
                        <p class="item-price"><span>优惠价:￥<span>{{item.price}}</span></span><span>￥{{item.oldprice}}</span></p>
                        <p class="item-total" style="color:#555555;"><span>{{item.count}}人付款</span><span>优惠{{(item.oldprice-item.price).toFixed(2)}}元</span></p>
                    </a>
                </li>
            </ul>
        </div>
        <!--恋人鲜花-->
        <div class="service2">
            <div></div>
            <div><h4>恋人鲜花</h4></div>
        </div>
        <div class="line-bar">
            <ul class="line-font">
                <li>
                    <a href="#">送女友</a>
                </li>
                <li>
                    <a href="#">送妻子</a>
                </li>
                <li>
                    <a href="#">热恋</a>
                </li>
                <li>
                    <a href="#">求婚</a>
                </li>
                <li>
                    <a href="#">追求</a>
                </li>
                <li>
                    <a href="#">告白</a>
                </li>
            </ul>
        </div>
        <!--恋人鲜花商品-->
        <div class="products">
            <ul class="product-list">
                <li class="product-item" v-for="item in laptop.slice(12,18)" :key="item.pid">
                    <a href="">
                        <div class="item-pic">
                            <span class="hottags">热销</span>
                            <img :src="item.img">
                        </div>
                        <p class="say">{{item.style}}</p>
                        <p class="item-price"><span>优惠价:￥<span>{{item.price}}</span></span><span>￥{{item.oldprice}}</span></p>
                        <p class="item-total" style="color:#555555;"><span>{{item.count}}人付款</span><span>优惠{{(item.oldprice-item.price).toFixed(2)}}元</span></p>
                    </a>
                </li>
            </ul>
        </div>
        <!--新品上架-->
        <div class="service2">
            <div></div>
            <div><h4>新品上架</h4></div>
        </div>
        <div class="line-bar">
            <ul class="line-font">
                <li>
                    <a href="#">韩式花束</a>
                </li>
                <li>
                    <a href="#">超大花束</a>
                </li>
                <li>
                    <a href="#">精品混搭</a>
                </li>
                <li>
                    <a href="#">本周新款</a>
                </li>
                <li>
                    <a href="#">当季新款</a>
                </li>
                <li>
                    <a href="#">高端鲜花</a>
                </li>
            </ul>
        </div>
        <!--新品上架商品-->
        <div class="products">
            <ul class="product-list">
                <li class="product-item" v-for="item in laptop.slice(18,24)" :key="item.pid">
                    <a href="">
                        <div class="item-pic">
                            <span class="hottags" style="background-color:#2CB436;">新品</span>
                            <img :src="item.img">
                        </div>
                        <p class="say">{{item.style}}</p>
                        <p class="item-price"><span>优惠价:￥<span>{{item.price}}</span></span><span>￥{{item.oldprice}}</span></p>
                        <p class="item-total" style="color:#555555;"><span>{{item.count}}人付款</span><span>优惠{{(item.oldprice-item.price).toFixed(2)}}元</span></p>
                    </a>
                </li>
            </ul>
        </div>
        <!--生日鲜花-->
        <div class="service2">
            <div></div>
            <div><h4>生日鲜花</h4></div>
        </div>
        <div class="line-bar">
            <ul class="line-font">
                <li>
                    <a href="#">送恋人</a>
                </li>
                <li>
                    <a href="#">送闺蜜</a>
                </li>
                <li>
                    <a href="#">寿星</a>
                </li>
                <li>
                    <a href="#">送好友</a>
                </li>
                <li>
                    <a href="#">送长辈</a>
                </li>
                <li>
                    <a href="#">送同事</a>
                </li>
            </ul>
        </div>
        <!--生日鲜花商品-->
        <div class="products">
            <ul class="product-list">
                <li class="product-item" v-for="item in laptop.slice(24)" :key="item.pid">
                    <a href="">
                        <div class="item-pic">
                            <img :src="item.img">
                        </div>
                        <p class="say">{{item.style}}</p>
                        <p class="item-price"><span>优惠价:￥<span>{{item.price}}</span></span><span>￥{{item.oldprice}}</span></p>
                        <p class="item-total" style="color:#555555;"><span>{{item.count}}人付款</span><span>优惠{{(item.oldprice-item.price).toFixed(2)}}元</span></p>
                    </a>
                </li>
            </ul>
        </div>
        <!--为您精选-->
        <div class="more bgk">
            <img src="../../img/dtb_2.png"><span>为您精选</span>
            <a href="#" style="text-align:right;">更多&gt;</a>
        </div>
        <div class="nacouth" id="selected">
            <div>
                <a href="#">
                    <img src="../../img/na03.jpg">
                </a>
            </div>
            <div>
                <p>
                    <a href="#">
                        <img src="../../img/na02.jpg">
                    </a>
                </p>
                <p>
                    <a href="#">
                        <img src="../../img/na01.jpg"  id="a1">
                    </a>
                </p>
            </div>
        </div>
        <!--热门分类-->
        <div class="more bgk">
            <span style="line-height:34px; margin-left:5px;">热门分类</span>
        </div>
        <div>
            <table class="foot bgk">
                <tr>
                    <td><a href="#"><img src="../../img/use.png" alt=""><p>按用途订花</p></a></td>
                    <td><a href="#"><img src="../../img/flowers.png" alt=""><p>按花材订花</p></a></td>
                    <td><a href="#"><img src="../../img/price.png" alt=""><p>按价格订花</p></a></td>
                </tr>
                <tr>
                    <td><a href="#"><img src="../../img/number.png" alt=""><p>按枝数订花</p></a></td>
                    <td><a href="#"><img src="../../img/object.png" alt=""><p>按对象订花</p></a></td>
                    <td><a href="#"><img src="../../img/category.png" alt=""><p>按类别订花</p></a></td>
                </tr>
            </table>
        </div>
        <ul class="line-font bgk change">
            <li><router-link to="/login">登录</router-link></li>
            <li><router-link to="/register">注册</router-link></li>
            <li><a href="#">电脑版</a></li>
            <li><a href="#">反馈</a></li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
               list:[],
               laptop:[],
            }
        },
        methods:{
            getImage(){
                var url="http://127.0.0.1:2000/imagelist";
                this.$http.get(url).then(result=>{
                    this.list=result.body;
                })
            },
            getLaptop(){
                var url="http://127.0.0.1:2000/laptop";
                this.$http.get(url).then(result=>{
                    this.laptop=result.body;
                })
            }
        },        
        created(){
            this.getImage();
            this.getLaptop()
        }
    }
</script>
<style>
    *,p{
        padding:0;
        margin:0;
    }
    #app-home .mint-swipe img{
        width:100%;
    }  
    #app-home>.mint-swipe{
        height:144px;
    }
    .mui-table-view .mui-table-view-cell img{
        width:45px;
        height:45px;
    }
    #app-home .mui-table-view .mui-table-view-cell div{
        font-size:13px;
    }
    #app-home .mui-table-view .mui-table-view-cell{
        padding:0;
        width:92px;
    } 
    div.advert{
        background:#f5f5f5;
    }
    div.advert ul{
        display:flex;
        font-size:12px;
        padding:7px 0;
        margin-top:0;
        margin-bottom:0;
        font-weight:200;
    
    }
    div.advert ul li{
        margin-left:15px;
    }
    /*通用背景色*/
    .bgk{
        background:#fff;
    }
    /*分类li通用字体*/
    .line-font>li>a{
        font-size:0.8rem;
        color:#333333;
    }
    /*按关系分类 */
    ul.img-md{
        display:flex;
        list-style:none;
        margin-top:5px;
    }
    ul.img-md .img-md-item{
        width:50%;
        padding-top:3px;
        border-bottom:1px solid #f2f2f2;
    }
    .img-md-item img{
        width:69px;
        height:63px;
    }
    .img-md-item div.box{
        display:inline-block;
        position:relative;
        top:-13px;
    }
    div.box a{
        color:#555555;
        font-size:0.6rem;
        margin-left:16px;
    }
    /*li通用左边框*/
    .b-left{
        border-left:1px solid #f2f2f2;
    }
    /*more */
    .more{
        height:34px;
        width:100%;
        font-size:14px;
    }
    .more span{
        font-weight:bold;
    }
    .more a{
        float:right;
        line-height:34px;
        padding-right:3px;
        color:#555555;
    }
    .more img{
        width:22px;
        height:22px;
        margin:0 5px;
        position:relative;
        top:5px;
    }
    /*商品列表项 */
    .product-list{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    li.product-item{
        background:#fff;
        border-radius:7px;
        width:49%;
        margin-bottom:0.6rem;
    }
    .product-item .item-pic{
        width:183px;
        height:183px;
        position:relative;
        margin-bottom:8px;
    }
    .product-item .item-pic span.hottags{
        display:inline-block;
        width:1.6rem;
        height:2.7rem;
        font-size:14px;
        color:#fff;
        font-weight:bold;
        text-align:center;
        background:#ff538a;
        position:absolute;
        left:150px;
        border-radius:0 0 10px 10px;
    }
    .product-item .item-pic img{
        width:183px;
        height:183px;
        border-radius:7px 7px 0 0;
    }
    .product-item>a>p{
        margin-bottom:5px;
        padding-left:3px;
        font-size:0.8rem;
    }
    .product-item>a>p.say{
        color:#000;
    }
    p.item-price>span:first-child{
        color:red;
    }
    p.item-price>span:first-child>span{
        font-weight:bold;
        font-size:0.9rem;
        margin-right:25px;
    }
    p.item-price>span:last-child{
        text-decoration:line-through;
    }
    p.item-total>span:last-child{
        float:right;
        margin-right:5px;
    }
    .service{
        border-top:1px solid #e3e3e3;
        border-bottom:1px solid #e3e3e3;
        padding:15px 0;
    }
    .service2{
        padding-top:30px;
    }
    .service2>div{
        margin:0 auto;
    }
    .service2>div:first-child{
        width:80%;
        border-top:1px solid #dedede;
    }
    .service2>div:last-child{
        width:90px;
        background:#efeff4;
        position:relative;
        top:-15px;
    }
    .service2>div>h4{
       font-size:14px;
       text-align:center;
       color:#333;
    }
    .line-bar>ul{
        display:flex;
        flex-wrap:wrap;
        list-style:none;
        justify-content:space-around;
    }
    .line-bar>ul>li{
        background:#fafafa;
        width:27%;
        height:25px;
        text-align:center;
        line-height:25px;
        border-radius:6px;
        margin-bottom:15px;
    }
    /*为您精选*/
    #selected{
        display:flex;
        padding-bottom:8px;
        border-bottom:1px solid #dedede;
    }
    #selected>div{
        width:50%;
    }
    #selected>div p{
        padding:0;
        margin:0;
    }
    #selected>div img{
        width:100%;
    }
    #a1{
        position:relative;
        top:-5px;
    }
    table.foot{
        width:100%;
        height:200px;
        text-align:center;
    }
    table.foot td{
        border:1px solid #dedede;
    }
    table.foot td p{
         color:#4b4b4b;
    }
    table.foot img{
        width:49px;
        height:49px;
    }
    .change{
        display:flex;
        justify-content:space-around;
        list-style:none;
        padding:5px  0;
        margin-bottom:50px;
    }
</style>