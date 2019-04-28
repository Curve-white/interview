<template>
  <div class="calendar">
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <span class="time day">{{ datetime}}</span>
        <span class="time dayNumber">{{dayNumber}}</span>
      </div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
  </div>
  </div>
</template>

<script>

// 引入swiper组件
import Swiper from 'swiper'

export default {
  name: 'HomeCalendar',
  data () {
    return {
      datetime: this.$moment().format('ddd'),
      dayNumber: this.$moment().format('MM/DD'),
      timeList: [{
        datetime: '',
        dayNumber: ''
      }]
    }
  },
  // 挂载swiper
  mounted () {
    Swiper('.swiper-container', {
      // 设置slider容器同时显示的slider数量
      slidesPerView: 5.5,
      // 调整slide 之间的距离
      spaceBetween: 0,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
// 日历插件的样式
.calendar{
  height: 140px;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-family: PingFangSC-Semibold;
  background: #F4F4F4;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.time{
  // font-family: PingFangSC-Semibold;
  font-size: 36px;
  font-weight: 500;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 36px;
}
.dayNumber{
  margin-top: 10px;
  font-size: 28px;
  line-height: 28px;
}
</style>
