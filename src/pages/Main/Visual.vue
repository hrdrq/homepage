<template>
  <div id="visual_div">
    <img id="visual_img" src="../../assets/img/visual.png" alt="">
    <div id="message">
      <p v-for="(text, i) in $t('main.visual')" :key="i">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Visual'
}
</script>

<style scoped lang="scss">
#visual_div {
  position: relative;
  text-align: center;
  background: #edecec;
  #visual_img {
    vertical-align: bottom;
    height: auto;
    width: 100%;
    max-width: 200px;
    margin-left: 40%;
    @include md {
      max-width: 160px;
      margin-left: 550px;
    }
  }
  #message {
    position: absolute;
    top: 40px;
    right: 380px;
    writing-mode: vertical-rl;
    text-align: left;
    @include md {
      writing-mode: inherit;
      top: 40px;
      left: 120px;
    }
  }
}
</style>
