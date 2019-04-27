<template>
  <div class="home">
    <home-header></home-header>
    <home-calendar></home-calendar>
    <home-main></home-main>
    <home-footer></home-footer>
  </div>
</template>

<script>
// 引入局部组件
import HomeHeader from './components/Header'
import HomeMain from './components/Main'
import HomeFooter from './components/Footer'
import HomeCalendar from './components/Calendar'

export default {
  name: 'Home',
  // 声明局部组件
  components: {
    HomeHeader,
    HomeFooter,
    HomeCalendar,
    HomeMain
  }
}
</script>

<style scoped>
  .home{
    /* 设置为flex弹性布局 */
    display: flex;
    flex-direction: column;
  }
</style>
