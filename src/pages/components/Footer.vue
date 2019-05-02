<template>
  <div class="footer">
    <div class="footerMain">
      <input class="footerButton" type="button" value="我选好了">
    </div>
  </div>
</template>

<script>
// 本组件对外输出的名字
export default {
  name: 'HomeFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 120px;
  border-top: 1px solid #DDDDDD;
  opacity: 0.98;
  background: #FAFAFA;
}
.footerMain{
  position: fixed;
  bottom: 20px;
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
