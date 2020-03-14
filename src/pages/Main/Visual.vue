<template>
  <div id="visual_div">
    <div id="visual_inner">
      <img id="visual_img" src="../../assets/img/visual.png" alt="">
      <div id="message">
        <p v-for="(text, i) in $t('main.visual')" :key="i">{{ text }}</p>
      </div>
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
  #visual_inner {
    #visual_img {
      display: inline-block;
      height: auto;
      max-width: 180px;
      @include md {
        max-width: 160px;
        margin-left: 50px;
      }
      @include mini {
        max-width: 140px;
      }
    }
    #message {
      display: inline-block;
      writing-mode: vertical-lr;
      text-align: left;
      @include md {
        writing-mode: inherit;
        margin-left: 40px;
        margin-bottom: 100px;
        font-size: 14px;
        letter-spacing: 4px;
        line-height: 28px;
      }
      @include mini {
        font-size: 12.5px;
        line-height: 12px;
      }
    }
  }
}
</style>
