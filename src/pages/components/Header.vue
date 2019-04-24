<template>
  <div class="header">
    <div class="statusBar">
      <div>
        <span class="iconfont icon-xinhao"></span>
        <span class="iconfont icon-wangluoxinhao"></span>
      </div>
      <span class="time">9:41 AM</span>
      <div class="statusBar-right">
        <span>80%</span>
        <span class="iconfont icon-80dianliang"></span>
      </div>
    </div>
    <div class="title">选择可面试时间</div>
  </div>
</template>

<script>
// 本组件对外输出的名字
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
.header {
  height: 128px;
  background: #EDEDED;
}
.statusBar{
  // 设置为flex布局
  display: flex;
  // 两端对齐，项目之间间隔相等
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.title{
  height: 88px;
}
.icon-xinhao, .icon-wangluoxinhao{
  margin-left: 3px;
}
.icon-wangluoxinhao{
  font-size: 30px;
}
.statusBar-right{
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-80dianliang{
  margin-right: 3px;
  font-size: 35px;
}
</style>
