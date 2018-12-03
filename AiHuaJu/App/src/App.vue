<template>
 <div class="app-container">
    <router-view></router-view>
    <!--3.底部导航栏-->
    <nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" href="#tabbar">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<router-link class="mui-tab-item" to="">
			<span class="mui-icon mui-icon-email"></span>
			<span class="mui-tab-label">分类</span>
		</router-link>
		<router-link to="/cart" class="mui-tab-item" href="#tabbar-with-contact">
			<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                <span class="mui-badge"></span>
            </span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<a class="mui-tab-item" href="#" @click="getMe">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">我的</span>
		</a>
	</nav>
 </div>
</template>
<script>
    export default{
        data(){return{

        }},
        methods:{
            getMe(){
                var user_id=sessionStorage.getItem("user_id");
                if(user_id){
                    this.$router.push("/home/user");
                }else{
                    this.$router.push("/login");
                }
            }
        }
    }
</script>
<style>
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

    .mui-bar-tab .mui-tab-item-tao.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-tao {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-tao .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
    font-size:11px;
    display:block;
    overflow:hidden;
    text-overflow:ellipsis;

    }
</style>
