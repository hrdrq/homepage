<template>
  <div id="visual_div">
    <img id="visual_img" src="../../assets/img/visual.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Visual'
}
</script>

<style scoped lang="scss">
#visual_div {
  text-align: center;
  background: #dad9d6;
  #visual_img {
    vertical-align: bottom;
    height: auto;
    width: 100%;
    max-width: 500px;
    @include md {
      max-width: 400px;
    }
  }
}
</style>
