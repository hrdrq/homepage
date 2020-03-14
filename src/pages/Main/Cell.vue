<template>
  <div class="cell">
    <AWrapper :href="url" target="_blank">
      <div class="left">
        <div v-if="icon" class="icon">
          <component :is="icon"></component>
        </div>
      </div>
      <div class="right" :class="[{ center: !icon }]">
        <h2 v-if="title" :class="[{ center: !icon }, 'title']">{{ title }}</h2>
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
    </AWrapper>
  </div>
</template>

<script>
import AWrapper from '../../components/AWrapper.vue'
export default {
  name: 'Cell',
  props: ['title', 'text', 'icon', 'image', 'list', 'url'],
  components: {
    AWrapper
  }
}
</script>

<style scoped lang="scss">
.cell {
  margin-bottom: 30px;
  /* display: inline-block; */
  /* width: 100%; */
  /* overflow: scroll; */
  @include md {
    box-sizing: border-box;
    display: inline-block;
    width: calc( 100% / 3 );
    /* margin-right: 5%; */
    margin-bottom: 60px;
    vertical-align: top;
    // &.last {
    //   margin-right: 0;
    // }
  }
  text-align: center;
  .left {
    display: inline-block;
    vertical-align: top;
    .icon {
      margin-top: 40px;
      margin-left: 20px;
      svg {
        width: 50px;
        height: 50px;
        fill: $color-icon;
        @include md {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .right {
    display: inline-block;
    width: 200px;
    &.center {
      width: 100%;
    }
    /* max-width: 280px; */
    /* word-break: break-all; */
    @include md {
      width: calc(100% - 70px);
    }
    /* width: calc(100% / 3); */
    /* width: calc(100% - 70px); */
    .title {
      text-align: left;
      margin-left: 20px;
      margin-bottom: 12px;
      line-height: 1.0;
      font-size: 20px;
      color: $color-title;
      /* font-weight: bold; */
      font-weight: normal;
      letter-spacing: 0.1em;
      color: $color-sub;
      &.center {
        text-align: center;
        margin-left: 0;
        color: $color-front;
      }
    }
    .list {
      /* text-align: center; */
      text-align: left;
      ul {
        display: inline-block;
        text-align: left;
        /* width: 50%; */
        /* max-width: 140px; */
        letter-spacing: 0.1em;
        /* margin-left: 45px; */
      }
    }
    .image img{
      width: 280px;
      @include md {
        width: 100%;
        max-width: 260px;
      }
    }
  }
}
</style>
