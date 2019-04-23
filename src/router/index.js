import Vue from 'vue'
import Router from 'vue-router'
// 引入同目录下 pages 文件夹下的 Home.vue
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
