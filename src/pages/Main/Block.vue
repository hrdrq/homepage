<template>
  <div class="block">
    <h2 class="title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.block {
  margin-buttom: 60px;
  .title {
    text-align: center;
    line-height: 1.0;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 40px;
    letter-spacing: 0.05em;
  }
}
</style>
