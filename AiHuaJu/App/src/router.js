import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//引入自定义的组件
import testContainer from "./components/testContainer.vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import loginContainer from "./components/user/loginContainer.vue"
import registerContainer from "./components/user/registerContainer.vue"
import cartContainer from "./components/user/cartContainer.vue"
import detailsContainer from "./components/list/detailsContainer.vue"
import userContainer from "./components/user/userContainer"
Vue.use(Router)
//配置访问自定义组件路经
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:"/test",component:testContainer},
    {path:"/home",component:HomeContainer},
    {path:"/login",component:loginContainer},
    {path:"/register",component:registerContainer},
    {path:"/cart",component:cartContainer},
    {path:"/details",component:detailsContainer},
    {path:"/home/user",component:userContainer}
  ]
})
