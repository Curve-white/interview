<template>
  <div class="main">
    <div class="selectButton">
      <!-- :class="{active: shows == true}" 绑定一个class，名字是active， 显示为shows -->
      <input class="selectTime allday"
        :class="{allActive: shows1 == true}"
        type="buttom"
        value="全天可面试"
        @click="getAllday()"
      >
      <input class="selectTime forenoon"
        :class="{foreActive: shows2 == true}"
        type="buttom"
        value="上午可面试"
        @click="getForenoon()"
      >
      <input class="selectTime afternoon"
        :class="{afterActive: shows3 == true}"
        type="buttom"
        value="下午可面试"
        @click="getAfternoon()"
      >
    </div>
    <div class="eachHour">
      <div class="perHour"
        :class="{perActive: selectedList.includes(index)}"
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
      shows1: false,
      shows2: false,
      shows3: false,
      selectedList: [] // 选中的选项
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
    getPerHour: function (index) { // 点击单个选项触发的函数
    // includes() 判断是否包含某一元素，返回true 或false，表示是否包含元素
      if (this.selectedList.includes(index)) {
        // filter() 用于把array 的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是 true 还是false 决定保留还是丢弃该元素：生成新的数组
        this.selectedList = this.selectedList.filter(item => {
          // 当 filter() 为假false时删除元素
          return item !== index
        })
      } else {
        // filter() 为真true时当index push到数组里面
        this.selectedList.push(index)
      }
      // 当 selectedList的个数等于allHoursList个数的时候，shows1为 true
      if (this.selectedList.length === this.allHoursList.length) {
        this.shows1 = true
      } else {
        this.shows1 = false
      }
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
