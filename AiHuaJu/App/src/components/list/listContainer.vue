<template>
    <div class="app-list">
        <div class="title">
            <ul class="good-attr">
                <li @click="productList(i+1)" v-for="(item,i) in bid" :key="item.id">{{item.hua}}</li>
            </ul>
            <ul class="good-list">
                <li @click="productList(id)">综合排序<span></span></li>
                <li @click="byCount(id)">销量<span></span></li>
                <li @click="byprice(id)">价格<span></span></li>
                <li @click="getNew(id)">新品<span></span></li>
                <li>分类</li>
            </ul>
        </div>
        <div class="products">
            <ul class="product-list">
                <li class="product-item" v-for="item in list" :key="item.pid">
                    <router-link to="/details">
                        <div class="item-pic">
                            <span class="hottags">{{item.title}}</span>
                            <img :src="item.img">
                        </div>
                        <p class="say">{{item.style}}</p>
                        <p class="item-price"><span>优惠价:￥{{item.price.toFixed(2)}}<span></span></span><span>￥{{item.oldprice}}</span></p>
                        <p class="item-total" style="color:#555555;"><span>{{item.count}}人付款</span><span>优惠{{(item.oldprice-item.price).toFixed(2)}}元</span></p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){return{
            bid:[{id:1,hua:"爱情鲜花"},{id:2,hua:"生日鲜花"},{id:3,hua:"友情鲜花"},{id:4,hua:"周年纪念"},{id:5,hua:"更多"}],
            list:[],
            id:''
        }},
        methods:{
            productList(i){
                this.$http.get("productList?bid="+i).then(result=>{
                    this.list=result.body;
                    this.id=i;
                    //console.log("id"+this.id);
                })
            },
            byCount(id){
                this.$http.get("count?bid="+id).then(result=>{
                    //console.log(result.body)
                    this.list=result.body;
                })
            },
            //按价格排序
           byprice(id){
               this.$http.get("price?bid="+id).then(result=>{
                   this.list=result.body;
               })
           },
           //获取新品
            getNew(id){
                this.$http.get("productList?bid="+id).then(result=>{
                    var obj=[];
                    for(var i=1;i<result.body.length;i++){
                        var title=result.body[i].title;
                        if(title=="新品"){
                            //console.log(title);
                            obj.push(result.body[i]);
                        }
                        
                    }
                    console.log(obj);
                })
            }
        },
        created(){
            this.productList(1);
        }
    }
</script>
<style scoped>
    .title{
        position:fixed;
        z-index:15;
        width:100%;
    }
    .title>ul{
        display:flex;
        justify-content:space-around;
        padding:10px 0;
    }
    .good-attr{
         background:#FE2960;
         color:#fff;
        font-size:14px;
    }
    .good-list{
        background:#fff;
        color:#aaa;
        font-size:14px;
    }
    .good-list span{
        display:inline-block;
        border:5px solid transparent;
        border-top-color:#FE2960;
        position:relative;
        top:3px;
        left:3px;
    }
    .products{
        position:relative;
        top:82px;
    }
</style>