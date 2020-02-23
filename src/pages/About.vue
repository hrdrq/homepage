<template>
  <div id="about">
    <PageTemplate title="About">
      <div id="main">
        <p v-for="(text, i) in $t('about.main')" :key="i">{{ text }}</p>
      </div>
      <div id="detail">
        <img src="../assets/img/about.jpg">
        <dl>
          <template v-for="([key, value], i) in Object.entries($t('about.detail'))">
            <dt :key="'dt' + i">{{ key }}</dt>
            <dd :key="'dd' + i">{{ value }}</dd>
          </template>
        </dl>
        <dl>
          <template v-for="([key, value], i) in Object.entries($t('about.links'))">
            <dt :key="'dt' + i">{{ key }}</dt>
            <dd :key="'dd' + i"><a :href="value.url" target="_blank">{{ value.name }}</a></dd>
          </template>
        </dl>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
export default {
  name: 'About',
  components: {
    PageTemplate
  }
}
</script>
