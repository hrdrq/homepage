<template>
  <div class="page">
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
.page {
  margin: 0 20px;
  @include md {
    max-width: 960px;
    margin: 0 40px;
  }
  @include lg {
    margin: 0 auto;
  }
  .title {
    text-align: center;
    margin: 50px 0 40px 0;
    font-size: 40px;
    line-height: 1.0;
    /* font-family: 'Lato', sans-serif; */
    /* font-weight: 100; */
    font-family: "Open Sans",sans-serif;
    font-weight: 300;
    letter-spacing: 0.05em;
    @include md {
      text-align: left;
      /* font-size: 46px; */
      font-size: 36px;
    }
  }
}
</style>
