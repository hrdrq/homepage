<template>
  <div id="about">
    <PageTemplate title="About">
      <div id="up">
        <div id="picture">
          <img src="../assets/img/about.jpg">
        </div>
        <div id="description">
          <p v-for="(text, i) in $t('about.main')" :key="i">{{ text }}</p>
        </div>
      </div>
      <div id=down>
        <div id="detail">
          <table>
            <tr v-for="([key, value], i) in Object.entries($t('about.detail'))" :key="i">
              <td class="key">{{ key }}</td>
              <td class="value">{{ value }}</td>
            </tr>
          </table>
          <table>
            <tr v-for="([key, value], i) in Object.entries($c('sites'))" :key="i">
              <td class="key">{{ value.name }}</td>
              <td class="value">
                <a :href="value.url" target="_blank">
                  {{ value.id }}
                </a>
                <Copier v-if="i===0" :text="value.id" />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- <div id="this_site"> -->
      <!--   <div id="this_site_title">{{ $t('about.this_site.title' )}}</div> -->
      <!--   <div id="this_site_content" v&#45;html="$t('about.this_site.html')"></div> -->
      <!-- </div> -->
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
import Copier from '../components/Copier.vue'
export default {
  name: 'About',
  components: {
    PageTemplate,
    Copier
  }
}
</script>

<style lang="scss">
#about {
  #up {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 50px;
    text-align: center;
    @include md {
      text-align: left;
    }
    #description {
      display: inline-block;
      text-align: left;
    }
    #picture {
      /* text-align: center; */
      img {
        width: 160px;
      }
    }
  }
  #down {
    @include md {
      display:flex;
      flex-diretion: row;
    }
    #detail {
      margin-top: 40px;
      @include md {
        margin-top: 0;
        /* margin-left: 50px; */
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
  #this_site {
    font-size: 14px;
    margin-top: 40px;
    line-height: 24px;
    #this_site_title {
      font-weight: bold;
    }
    a {
      text-decoration: underline;
      font-weight: bold;
    }
  }
}
</style>
