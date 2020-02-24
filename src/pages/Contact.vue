<template>
  <div id="contact">
    <PageTemplate title="Contact">
      <div id="text">{{ $t('contact.text') }}</div>
      <table>
        <tr v-for="([key, value], i) in Object.entries($c('sites'))" :key="i">
          <template v-if="to_show(key)">
          <td class="key">{{ value.name }}</td>
          <td class="value">
            <a :href="value.url" target="_blank">
              {{ value.id }}
            </a>
            <Copier v-if="i===0" :text="value.id" />
          </td>
          </template>
        </tr>
      </table>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
import Copier from '../components/Copier.vue'
export default {
  name: 'Contact',
  methods: {
    to_show(key) {
      let allow = ['email', 'linkedin', 'hackerrank']
      return allow.includes(key)
    }
  },
  components: {
    PageTemplate,
    Copier
  }
}
</script>

<style lang="scss">
#contact {
  #text {
    font-size: 14px;
  }
  table {
    margin-top: 40px;
    font-size: 16px;
    tr {
      line-height: 24px;
      .key {
        width: 106px;
        font-weight: bold;
        &:after {
          content: " :"
        }
      }
      a {
        text-decoration: underline;
      }
    }
  }
}
</style>

