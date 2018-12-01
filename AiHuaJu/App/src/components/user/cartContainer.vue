<template>
    <div class="app-cart">
        <p class="card">购物车(1)</p>
        <div class="cart">
            <ul class="cartInfo" v-for="(item,i) in product" :key="item.tid">
                <li class="item-pic">
                    <input type="checkbox" checked>
                    <div>
                        <a href="#"><img :src="item.sm"></a>
                    </div>
                </li>
                <li class="item-info">
                    <div>
                        <h5 style="color:#000;">爱的小确信</h5>
                        <p>鲜花枝数：支</p>
                        <p>花材：{{item.main}}</p>
                        <p>￥{{item.price.toFixed(2)}}</p>
                    </div>
                </li>
                <li class="item-btn">
                    <button class="lgt" @click="deleteCart(i)"></button>
                    <div id="divBtn">
                        <button data-tid="1" @click="cartSub(i)">-</button>
                        <input type="text" maxlength="3" v-model="item.count">
                        <button @click="cartAdd(i)">+</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default{
        data(){return{
            product:[],
        }},
        methods:{
            cartItem(){
                var user_id=sessionStorage.getItem("user_id");
                console.log(user_id);
                if(user_id){
                    this.$http.get("cartItem?user_id="+user_id).then(result=>{
                        console.log(result.body);
                        if(result.body.length>0){
                            this.product=result.body;
                        }else{
                            Toast("您还未添加任何商品");
                        }
                    })
                }else{
                    Toast("请先登录");
                }
            },
            cartAdd(i){
                if(this.product[i].count<=998){
                   this.product[i].count++;
                }
            },
            cartSub(i){
                if(this.product[i].count>0){
                    this.product[i].count--;
                }
            },
            deleteCart(i){
                var tid=this.product[i].tid;
                console.log(tid);
                this.$http.get("deleteCart?tid="+tid).then(result=>{
                    alert("确定删除商品")
                })
            }
        },
        created(){
            this.cartItem();
        }
    }
</script>
<style >
    p.card{
        font-size:16px;
        color:#000;
        text-align:center;
        padding:8px 0;
        margin:0;
    }
    div.cart{
        background:#fff;
    }
    ul.cartInfo{
        display:flex;
        width:100%;
        border-bottom:1px solid #eeeeee;
        padding:15px 5px 1px;
    }
    li.item-pic{
        width:25%;
        display:flex;
    }
    li.item-pic>div{
        border:1px solid #eeeeee;
        width:4.2rem;
        height:4.2rem;
        border-radius:3px;
        padding:4px;
    }
    li.item-pic>div img{
        width:100%;
        height:100%;
        border-radius:3px;
    }
    li.item-pic input{
        position:relative;
        top:25px;
        margin-right:4px;
    }
    li.item-info{
        width:50%;
    }
    li.item-info>div>p,li.item-info>div>h5{
        font-size:12px;
        margin:0;
    }
    li.item-btn{
        width:20%;
    }
    li.item-btn>div{display:flex;}
    li.item-btn>button{
        background:url("http://127.0.0.1:2000/img/lgt.png") no-repeat;
        height:20px;
        border:none; 
        position:relative;
        left:80%;
    }
    li.item-btn>div>button,li.item-btn>div>input{
        width:25px;
        height:25px;
        padding:0;
        text-align:center;
    }
</style>