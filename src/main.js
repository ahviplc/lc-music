import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css';

//导入element
import '@/plugins/element.js'
//导入过滤器
import '@/plugins/filter.js'
//导入全局样式
import '@/assets/css/global.css'
//引入自定义图标
import '@/assets/font_cloudMusic/iconfont.css'

//解决跨域
// import { VueJsonp } from 'vue-jsonp'
// Vue.use(VueJsonp)

// 引入axios 自已又加工处理的那个【src/utils/axios.js】
import axios from "./utils/axios";
Vue.prototype.$http = axios

// 引入vuescroll
// import vuescroll from "vuescroll";
// 引入vuescroll样式
// import "vuescroll/dist/vuescroll.css";
// Vue.use(vuescroll); //使用

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
