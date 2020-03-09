<template>
  <div id="main">
    <Visual />
    <Block title="Skills">
      <Cell title="C/C++" :list="$c('main.skills.cpp')" :icon="icon_cpp" />
      <Cell title="Python" :list="$c('main.skills.python')" :icon="icon_python" />
      <Cell class="last" title="Ruby" :list="$c('main.skills.ruby')" :icon="icon_ruby" />
      <Cell title="Javascript" :list="$c('main.skills.javascript')" :icon="icon_javascript" />
      <Cell title="Database" :list="$c('main.skills.database')" :icon="icon_database" />
      <Cell class="last" title="AWS" :list="$c('main.skills.aws')" :icon="icon_aws" />
    </Block>

    <Block title="Experience">
      <Cell :title="$t('main.experience.crypto.name')"
            :list="$t('main.experience.crypto.list')"
            :icon="icon_bitcoin" />
      <Cell :title="$t('main.experience.ec.name')"
            :list="$t('main.experience.ec.list')"
            :icon="icon_ecommerce" />
      <Cell class="last" :title="$t('main.experience.surveillance.name')"
            :list="$t('main.experience.surveillance.list')"
            :icon="icon_surveillance" />
    </Block>

    <Block title="Languages">
      <Cell :title="$t('main.languages.english.name')"
            :text="$t('main.languages.english.text')" />
      <Cell :title="$t('main.languages.japanese.name')"
            :text="$t('main.languages.japanese.text')" />
      <Cell class="last" :title="$t('main.languages.chinese.name')"
            :text="$t('main.languages.chinese.text')" />
    </Block>

    <Block title="Education" class="school">
      <div class="school_inner">
        <a :href="$t('main.education.wiki')" target="_blank">
          <div class="school_header">
              <span class="school_logo">
                <img src="../assets/img/ntu.png" alt="">
              </span>
              <span class="school_name">
                <div>{{ $t('main.education.school_name') }},</div>
                <div>{{ $t('main.education.department_name') }}</div>
              </span>
          </div>
        </a>
        <ul>
          <li v-for="(des, i) in $t('main.education.descriptions')" :key="i">
            {{ des }}
          </li>
        </ul>
      </div>
    </BLock>

    <Block title="Personal Works" class="personal_work">
      <Cell :title="$t('main.personal_works.dictionary')"
            :image="require('../assets/img/dictionary.png')"
            url="https://github.com/hrdrq/dictionaryUI" />
      <Cell :title="$t('main.personal_works.price')"
            :image="require('../assets/img/crypto_price.png')"
            url="https://github.com/hrdrq/crypto_currencies_price" />
      <Cell class="last" :title="$t('main.personal_works.darvish')"
            :image="require('../assets/img/darvish.png')"
            url="https://github.com/hrdrq/darvish" />
      <Cell :title="$t('main.personal_works.reading')"
            :image="require('../assets/img/reading.png')"
            url="https://github.com/hrdrq/reading_tool" />
      <Cell :title="$t('main.personal_works.price_search')"
            :image="require('../assets/img/price_search.png')"
            url="https://github.com/hrdrq/price_search" />
      <Cell class="last" :title="$t('main.personal_works.ui')"
            :image="require('../assets/img/curses.gif')"
            url="https://github.com/hrdrq/curses_sample" />
    </Block>
  </div>
</template>

<script>
import Visual from './Main/Visual.vue'
import Block from './Main/Block.vue'
import Cell from './Main/Cell.vue'
import IconCpp from '../svgs/cpp.vue'
import IconPython from '../svgs/python.vue'
import IconRuby from '../svgs/ruby.vue'
import IconJavascript from '../svgs/javascript.vue'
import IconDatabase from '../svgs/database.vue'
import IconAWS from '../svgs/aws.vue'
import IconSurveillance from '../svgs/surveillance.vue'
import IconEcommerce from '../svgs/ecommerce.vue'
import IconBitcoin from '../svgs/bitcoin.vue'
export default {
  name: 'Main',
  components: {
    Visual,
    Block,
    Cell
  },
  data() {
    return {
      icon_cpp: IconCpp,
      icon_python: IconPython,
      icon_ruby: IconRuby,
      icon_javascript: IconJavascript,
      icon_database: IconDatabase,
      icon_aws: IconAWS,
      icon_surveillance: IconSurveillance,
      icon_ecommerce: IconEcommerce,
      icon_bitcoin: IconBitcoin,
    }
  }
}
</script>

<style scoped lang="scss">
#main {
  .school {
    text-align: center;
    .school_inner {
      display: inline-block;
      width: 100%;
      max-width: 470px;
      @include md {
        max-width: 600px;
      }
      .school_header {
        margin-top: 15px;
        @include md {
          display: flex;
          align-items:center;
          margin-left: 60px;
        }
        .school_logo img{
          width: 60px;
          margin-right: 12px;
        }
        .school_name {
          display: block;
          margin-top: 20px;
          @include md {
            margin-top: 0;
            text-align: left;
          }
          font-size: 22px;
          letter-spacing: 0.1em;
        }
      }
      ul {
        text-align: left;
        letter-spacing: 0.08em;
        line-height: 1.6em;
        @include md {
          margin: 25px 0 80px 50px;
        }
      }
    }
  }
}
</style>
