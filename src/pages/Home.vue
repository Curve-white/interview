<template>
  <div class="home">
    <home-header></home-header>
    <home-main></home-main>
    <home-footer></home-footer>
  </div>
</template>

<script>
// 引入局部组件
import HomeHeader from './components/Header'
import HomeFooter from './components/Footer'
import HomeMain from './components/Main'

export default {
  name: 'Home',
  // 声明局部组件
  components: {
    HomeHeader,
    HomeFooter,
    HomeMain
  }
}
</script>

<style scoped>

</style>
