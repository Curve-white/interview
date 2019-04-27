<template>
  <div class="calendar">
    <swiper>
      <!-- slides -->
      <swiper-slide class="time">
        <span class="timeInfo day">今天</span>
        <span class="timeInfo dayNumber">3/30</span>
      </swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <swiper-slide>I'm Slide 9</swiper-slide>
      <swiper-slide>I'm Slide 10</swiper-slide>
      <swiper-slide>I'm Slide 11</swiper-slide>
      <swiper-slide>I'm Slide 12</swiper-slide>
      <swiper-slide>I'm Slide 13</swiper-slide>
      <swiper-slide>I'm Slide 14</swiper-slide>
      <swiper-slide>I'm Slide 15</swiper-slide>
  </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeCalendar',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // 分页器挂载到swiper-pagination类对应的元素上
        pagination: '.swiper-pagination',
        loop: true, // 开启轮播图前后循环模式
        freeMode: true,
        slidesPerView: 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 日历插件的样式
.calendar{
  height: 140px;
  background: yellow;
}
.time{
  width: 136px;
  background: red;
}
.timeInfo{
  font-family: PingFangSC-Semibold;
  font-size: 36px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 36px;
}
.dayNumber{
  font-size: 28px;
  line-height: 28px;
}
</style>
