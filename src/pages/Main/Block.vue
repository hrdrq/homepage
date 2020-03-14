<template>
  <div class="block">
    <p class="subtitle fancy"><span>{{ title }}</span></p>
    <!-- <h2 class="title">{{ title }}</h2> -->
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
  overflow: hidden;
  h1 {
    position: relative;
    font-size: 30px;
    z-index: 1;
    overflow: hidden;
    text-align: center;
}

  .title {
    text-align: center;
    line-height: 1.0;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 40px;
    letter-spacing: 0.05em;
    /* h1 { */
      position: relative;
    /*   font-size: 30px; */
      z-index: 1;
      overflow: hidden;
    /*   text-align: center; */
    /* } */
    &::before, &::after {
      /* position: absolute; */
      /* top: 51%; */
      /* overflow: hidden; */
      /* width: 50%; */
      /* height: 1px; */
      /* content: '\a0'; */
      /* background-color: red; */
      content: "";
  position: absolute;
  height: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  top: 0;
  width: 600px;
    }
    &::before {
      /* margin-left: -50%; */
      /* text-align: right; */
      right: 100%;
  margin-right: 15px;
    }
    &::after {
      left: 100%;
  margin-left: 15px;
    }
  }
  @include lg {
    max-width: 920px;
    margin: auto;
  }
  .fancy {
    /* font-family: 'Lato', sans-serif; */
    font-family: "Open Sans",sans-serif;
    font-weight: 100;
    letter-spacing: 0.05em;
    margin: 60px 0;
    font-size: 26px;
    line-height: 0.2;
    text-align: center;
    color: $color-title;
  }
  .fancy span {
    display: inline-block;
    position: relative;  
  }
  .fancy span:before,
  .fancy span:after {
    content: "";
    position: absolute;
    height: 0px;
    border-bottom: 0.5px solid $color-title;
    border-top: 0.5px solid $color-title;
    top: 0;
    width: 600px;
  }
  .fancy span:before {
    right: 100%;
    margin-right: 28px;
  }
  .fancy span:after {
    left: 100%;
    margin-left: 28px;
  }
}
</style>
