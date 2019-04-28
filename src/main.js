// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  引入初始化CSS文件
import '../static/reset.css'
// 引入iconfont
import './assets/icon/iconfont.css'
import 'lib-flexible'
// 引入 Swiper 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入 moment 日期组件
import moment from 'moment/moment'
// 日期组件格式为中文
moment.locale('zh-cn')
Vue.prototype.$moment = moment

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
