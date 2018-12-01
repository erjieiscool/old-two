import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//引入组件
import {Header,Swipe,SwipeItem} from "mint-ui";

//注册
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
import MintUI from "mint-ui";

//引入vue-resource,ajax请求
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root="http://127.0.0.1:2000/";

Vue.http.options.emulateJSON=true

//3.创建过滤器
// Vue.filter("Filter",function(val){
//   retyrn"";
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
