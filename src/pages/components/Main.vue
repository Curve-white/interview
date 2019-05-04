<template>
  <div class="main">
    <div class="selectButton">
      <!-- :class="{active: shows == true}" 绑定一个class，名字是active， 显示为shows -->
      <input class="selectTime allday" :class="{allActive: shows1 == true}" type="buttom" value="全天可面试" @click="getAllday()">
      <input class="selectTime forenoon" :class="{foreActive: shows2 == true}" type="buttom" value="上午可面试" @click="getForenoon()">
      <input class="selectTime afternoon" :class="{afterActive: shows3 == true}" type="buttom" value="下午可面试"  @click="getAfternoon()">
    </div>
    <div class="eachHour">
      <div class="perHour"
        :class="isactive == index ? 'perActive': ''"
        v-for="(item, index) in allHoursList"
        :key="index"
        @click="getPerHour(index)"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment'

// 本组件对外输出的名字
export default {
  name: 'HomeMain',
  data () {
    return {
      allHoursList: [],
      // 定义shows 为false ，就是不显示
      index: '',
      shows1: false,
      shows2: false,
      shows3: false,
      isactive: -1
    }
  },
  mounted () {
    this.allHoursList = this.getAllHours()
  },
  methods: {
    getAllHours: function () {
      let allHours = []
      for (var i = Date.parse('2000/01/01 08:00'); i < Date.parse('2000/01/01 21:31'); i += 1800000) {
        allHours.push(moment(i).format('HH:mm'))
      }
      return allHours
    },
    // 点击事件的方法， 点击时对 shows 取反
    getAllday: function () {
      this.shows1 = !this.shows1
    },
    getForenoon: function () {
      this.shows2 = !this.shows2
    },
    getAfternoon: function () {
      this.shows3 = !this.shows3
    },
    getPerHour: function (index) {
      this.isactive = index
      this.shows = !this.shows
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  /* 设置为flex弹性布局 */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1086px;
}

// 以下为选择按钮的样式
.selectButton{
  display: flex;
  align-items: center;
  height: 126px;
}
.selectTime{
  margin: 0 8px;
  height: 68px;
  text-align: center;
  font-size: 28p;
  border: 1px solid #DDDDDD;
  border-radius: 8px;
}
.allday{
  width: 286px;
}
// 对active样式
.allActive{
  color: white;
  background: #22B241;
}
.foreActive{
  color: white;
  background: #22B241;
}
.afterActive{
  color: white;
  background: #22B241;
}

.forenoon, .afternoon{
  width: 176px;
}
.eachHour{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.perHour{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 113px;
  color: #BBBBBB;
  background: #EEEEEE;
  border: 1px solid #DDDDDD;
  border-radius: 8px 0 0 0;
}
.perActive{
  color: white;
  background: #22B241;
}

</style>
