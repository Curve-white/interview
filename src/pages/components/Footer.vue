<template>
  <div class="footer">
    <input class="footerButton" type="button" value="我选好了">
  </div>
</template>

<script>
// 本组件对外输出的名字
export default {
  name: 'HomeFooter'
}
</script>

<style lang="scss" scoped>
$color:blue;
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.footerButton{
  width: 630px;
  height: 80px;
  font-size: 32px;
  color: white;
  background: #FF8833;
  border-radius: 8px;
}

</style>
