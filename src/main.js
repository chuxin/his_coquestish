// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 在线字体
import 'font-awesome/css/font-awesome.css'
// 引入 css样式初始化插件
import 'normalize.css/normalize.css'
// 引入 axios
import axios from "axios"
import vueAxios from "vue-axios"
// 引入 日期格式化插件
import moment from "moment"

Vue.filter("moment_format", function (value, formatString) {
  formatString = formatString || "YYYY-MM-DD HH:mm:ss";
  return moment(value).format(formatString);  // value可以是普通日期 20170723
});

// 定义一个开关
const mock = true;
if (mock) {
  require('./mock/mock_test/mock2');
}

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(vueAxios, axios); //通过 vue-axios 将 axios 注入Vue对象
axios.defaults.timeout = 5000; // 请求超时
// axios.defaults.baseURL = 'http://localhost:8080'; //请求地址
// 定义一个拦截器
axios.interceptors.response.use(function (response) {
  let res = response.data;
  console.log("哈哈，我这里是拦截器，对返回结果最先做处理，牛不牛逼");
  if (res.status == 0) {
    return res.my_data ? res.my_data : res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/SingleRadio'
  } else {
    alert(res.msg);
  }
});

// console.log(process);
// console.log(process.env.NODE_ENV);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
