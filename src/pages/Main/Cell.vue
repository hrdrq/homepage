<template>
  <div class="cell">
    <h2 v-if="title" class="title">{{ title }}</h2>
    <div v-if="icon" class="icon">
      <component :is="icon"></component>
    </div>
    <div v-if="image" class="image">
      <img :src="image" alt="">
    </div>
    <div v-if="text" class="text"><pre>{{ text }}</pre></div>
    <div v-if="list" class="list">
      <ul>
        <li v-for="(value, key) in list" :key="key">{{ value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['title', 'text', 'icon', 'image', 'list']
}
</script>

<style scoped lang="scss">
.cell {
  @include md {
    box-sizing: border-box;
    display: inline-block;
    width: 30%;
    margin-right: 5%;
    margin-bottom: 60px;
    vertical-align: top;
    &.last {
      margin-right: 0;
    }
  }
  text-align: center;
  .title {
    margin-bottom: 12px;
    line-height: 1.0;
    font-size: 22px;
    color: $color-title;
    font-weight: normal;
    letter-spacing: 0.1em;
  }
  .icon {
    svg {
      width: 50px;
      height: 50px;
      fill: $color-icon;
      @include md {
        width: 100px;
        height: 100px;
      }
    }
  }
  .list {
    text-align: center;
    ul {
      display: inline-block;
      text-align: left;
      width: 50%;
      max-width: 140px;
      letter-spacing: 0.1em;
      margin-left: 45px;
    }
  }
  .image img{
    width: 280px;
    @include md {
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
