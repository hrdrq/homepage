<template>
  <div id="main">
    <Visual />
    <Block title="Skills">
      <Cell title="C/C++" :list="['Boost', 'Qt', 'CppUTest']" :icon="icon_cpp" />
      <Cell title="Python" :list="['Numpy', 'Pandas', 'Numba', 'Tornado', 'Qt', 'Boost.Python']" :icon="icon_python" />
      <Cell class="last" title="Ruby" :list="['Rails', 'Rspec']" :icon="icon_ruby" />
      <Cell title="Javascript" :list="['Vue.js', 'Angular.js', 'jQuery']" :icon="icon_javascript" />
      <Cell title="Database" :list="['MySQL', 'MongoDB', 'Treasure Data']" :icon="icon_database" />
      <Cell class="last" title="AWS" :list="['EC2', 'S3', 'RDS', 'Lambda', 'API Gateway']" :icon="icon_aws" />
    </Block>

    <Block title="Experience">
      <Cell title="Crypto Currency" :list="['engineer']" :icon="icon_bitcoin" />
      <Cell title="E Commerce" :list="['engineer']" :icon="icon_ecommerce" />
      <Cell class="last" title="Surveillance" :list="['engineer']" :icon="icon_surveillance" />
    </Block>

    <Block title="Languages">
      <Cell title="English" :text="'Business level\nToeic 900'" />
      <Cell title="Japanese" :text="'Business level\nJLPT N1'" />
      <Cell class="last" title="Chinese" text="Native" />
    </Block>

    <Block title="Education" class="school">
      <div class="school_inner">
        <div class="school_header">
          <span class="school_logo">
            <img src="../assets/img/ntu.png" alt="">
          </span>
          <span class="school_name">
            <div>National Taiwan University,</div>
            <div>Department of Electrical Engineering</div>
          </span>
        </div>
        <ul>
          <li>Top University in Taiwan</li>
          <li>72nd University in QS World University Rankings® 2019</li>
          <li>Top Science/Engineering department in Taiwan</li>
        </ul>
      </div>
    </BLock>
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
