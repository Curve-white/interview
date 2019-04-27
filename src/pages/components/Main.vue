<template>
  <div class="main">
    <div class="selectButton">
      <input class="selectTime allday" type="buttom" value="全天可面试">
      <input class="selectTime forenoon" type="buttom" value="上午可面试">
      <input class="selectTime afternoon" type="buttom" value="下午可面试">
    </div>
    <div class="eachHour">时间段</div>
  </div>
</template>

<script>
// 本组件对外输出的名字
export default {
  name: 'HomeMain'
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
.forenoon, .afternoon{
  width: 176px;
}
.forenoon{
  color: white;
  background: #22B241;
}

</style>
