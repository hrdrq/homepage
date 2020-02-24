<template>
  <div id="about">
    <PageTemplate title="About">
      <div id="up">
        <p v-for="(text, i) in $t('about.main')" :key="i">{{ text }}</p>
      </div>
      <div id=down>
        <div id="picture">
          <img src="../assets/img/about.jpg">
        </div>
        <div id="detail">
          <table>
            <tr v-for="([key, value], i) in Object.entries($t('about.detail'))" :key="i">
              <td class="key">{{ key }}</td>
              <td class="value">{{ value }}</td>
            </tr>
          </table>
          <table>
            <tr v-for="([key, value], i) in Object.entries($t('about.links'))" :key="i">
              <td class="key">{{ key }}</td>
              <td class="value">
                <a :href="value.url" target="_blank">
                  {{ value.name }}
                </a>
              </td>
            </tr>
          </table>
        </div>
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

<style lang="scss">
#about {
  #up {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 50px;
  }
  #down {
    @include md {
      display:flex;
      flex-diretion: row;
    }
    #picture {
      text-align: center;
      img {
        width: 160px;
      }
    }
    #detail {
      margin-top: 40px;
      @include md {
        margin-top: 0;
        margin-left: 50px;
      }
      width: 100%;
      table {
        min-width: 100%;
        /* table-layout: fixed; */
        margin: 0 0 20px 0;
        font-size: 13px;
        td {
          vertical-align: top;
        }
        .key {
          width: 20%;
          font-weight: bold;
          &:after {
            content: " :"
          }
        }
        .value {
          width: 80%;
        }
      }
    }
  }
}
</style>
