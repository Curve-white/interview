<template>
  <div class="calendar">
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 循环输出日期 -->
      <div class="swiper-slide" v-for="(item,key) in DayList" :key="key">
        <span class="time day">{{ item.week}}</span>
        <span class="time dayNumber">{{item.date}}</span>
      </div>
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
      // 将DayList初始化
      DayList: []
    }
  },
  // 挂载swiper
  mounted () {
    Swiper('.swiper-container', {
      // 设置slider容器同时显示的slider数量
      slidesPerView: 5.5,
      // 调整slide 之间的距离
      spaceBetween: 0,
      freeMode: true,
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    })
    // 将GetDayList 赋值给 DayList
    this.DayList = this.GetDayList()
  },

  methods: {
    // 定义一个方法，获取到30天
    GetDayList: function () {
      let DayList = []
      for (var i = 0; i < 30; i++) {
        DayList.push({
          week: this.$moment().add(i, 'days').format('ddd'),
          date: this.$moment().add(i, 'days').format('MM/DD'),
          today: this.$moment().add(i, 'days').format('YYYY/MM/DD')
        })
      }
      DayList[0].week = '今天'
      DayList[1].week = '明天'
      return DayList
    }
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
  font-family: PingFangSC-Semibold;
  font-size: 36px;
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
