<template>
  <div id="experience">
    <PageTemplate title="Experience">
      <div id="work" class="type">
        <div class="type_title">{{ $t('experience.work.key') }}</div>
        <div class="info">
          <div class="company" v-for="(val, i) in $t('experience.work.value')" :key="i">
            <div class="name">
              <a :href="val.url" target="_blank">{{ val.company }}</a>
            </div>
            <div class="period">{{ val.period }}</div>
            <div class="contents">
              <div class="content" v-for="(content, j) in val.contents" :key="j">
                  <div class="content_name">{{ content.name }}</div>
                  <ul v-if="content.detail">
                    <li v-for="(d, k) in content.detail" :key="k">{{ d }}</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="personal" class="type">
        <div class="type_title">{{ $t('experience.personal.key') }}</div>
        <div class="info">
          <div class="project" v-for="(val, i) in $t('experience.personal.value')" :key="i">
            <div class="name">
              <a :href="val.url" target="_blank">{{ val.name }}</a>
            </div>
            <div class="contents">
              <div class="content_name" v-for="(d, k) in val.detail" :key="k">{{ d }}</div>
            <!-- <ul class="detail"> -->
            <!--   <li v&#45;for="(d, k) in val.detail" :key="k">{{ d }}</li> -->
            <!-- </ul> -->
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
export default {
  name: 'Experience',
  components: {
    PageTemplate
  }
}
</script>

<style lang="scss">
#experience {
  font-size: 13px;
  a {
    text-decoration: underline;
  }
  .type {
    margin-bottom: 40px;
    .type_title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 6px;
      color: $color-sub;
    }
    .info {
      margin-left: 20px;
      // .company {
        .name {
          font-size: 14px;
          font-weight: bold;
          margin-right: 10px;
        }
        .company .name {
          float: left;
        }
        .period {
          font-size: 12px;
          padding-top: 2px;
        }
        .contents {
          clear: both;
          margin-left: 26px;
          margin-top: 8px;
          .content_name {
            display:list-item; 
            list-style-type: disc;
          }
          ul {
            padding-left: 16px;
            margin-top: 2px;
            li {
              list-style-type: circle;
            }
          }
        }
      /* } */
      // .type {
      //   line-height: 18px;
      // }
      // .detail {
      //   .list {
      //     line-height: 12px;
      //   }
      // }
    }
  }
}
</style>

