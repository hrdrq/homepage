<template>
  <div id="homepage">
    <Head />
    <router-view />
    <Foot />
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'Homepage',
  components: {
    Head,
    Foot
  }
}
</script>

<style lang="scss">
body {
  /* color: white; */
  /* background: black; */
  color: $color-front;
  margin: 0;
  font-family: Helvetica, '游ゴシック', 'Yu Gothic', YuGothic, HiraKakuProN-W3, 'メイリオ', Meiryo, sans-serif;
  /* line-height: 1.9; */
  a {
    color: inherit;
    text-decoration: inherit;
  }
  img {
    vertical-align: bottom;
  }
}
</style>
