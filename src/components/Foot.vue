<template>
  <div id="foot">
    <IconTotop id="totop" />
  </div>
</template>

<script>
import IconTotop from '../svgs/totop.vue'
export default {
  name: 'Foot',
  components: {
    IconTotop
  }
}
</script>

<style scoped lang="scss">
#foot {
  text-align: center;
  #totop {
    width: 22px;
    fill: #bcbcbc;
    cursor: pointer;
  }
}
</style>
