<template>
  <div class="main">
    <div class="selectButton">
      <input class="selectTime allday" :class="{active: shows == 1}" type="buttom" value="全天可面试" @click="getAllday()">
      <input class="selectTime forenoon" type="buttom" value="上午可面试">
      <input class="selectTime afternoon" type="buttom" value="下午可面试">
    </div>
    <div class="eachHour">
      <div class="perHour" v-for="(item, key) in allHoursList" :key="key">{{item}}</div>
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
      shows: false
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
    getAllday: function () {
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
.active{
  color: white;
  background: #22B241;
}
.forenoon, .afternoon{
  width: 176px;
}
.forenoon{
  color: white;
  background: #22B241;
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
  height: 113px;;
  background: #EEEEEE;
  border: 1px solid #DDDDDD;
  border-radius: 8px 0 0 0;

}

</style>
