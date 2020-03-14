<template>
  <div id="skills">
    <PageTemplate title="Skills">
      <div class="skill" v-for="(skill, i) in $t('skills')" :key="i">
        <div class="group">{{ skill.group }}</div>
        <div class="contents" v-for="(content, j) in skill.contents" :key="j">
          <div class="type">{{ content.type }}</div>
          <template v-if="content.detail">
          <ul class="detail" v-for="(list, k) in content.detail" :key="k">
            <li class="list">{{ list }}</li>
          </ul>
          </template>
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
export default {
  name: 'Skills',
  components: {
    PageTemplate
  }
}
</script>

<style lang="scss">
#skills {
  font-size: 13px;
  .skill {
    margin-bottom: 40px;
    .group {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 6px;
      color: $color-sub;
    }
    .contents {
      margin-left: 20px;
      .type {
        line-height: 18px;
      }
      .detail {
        .list {
          line-height: 12px;
        }
      }
    }
  }
}
</style>

