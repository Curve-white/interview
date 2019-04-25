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
    <div class="title">
      <span class="iconfont icon-x"></span>
      <span class="titleInfo">选择可面试时间</span>
      <span class="iconfont icon-more"></span>
    </div>
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
// 状态栏样式
.statusBar{
  // 设置为flex布局
  display: flex;
  // 两端对齐，项目之间间隔相等
  justify-content: space-between;
  align-items: center;
  height: 40px;
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
  font-size: 36px;
}
// title样式
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  font-size: 40px;
  font-weight: bold;
}
.icon-x, .icon-more{
  margin: 0 35px;
  font-size: 35px;
}
.icon-more{
  font-size: 45px;
}
</style>
