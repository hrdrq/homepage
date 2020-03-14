<template>
  <header>
    <div id="language_selector" >
      <LanguageSelector id="language_selector" />
    </div>
    <div id="logo"><router-link to="/">Munehiro (Tsung-Po)</router-link></div>
    <div id="bar">
      <Menu id="header_menu" />
      <ul class="social_btn">
        <!-- <a href="linkedin"><img class="icon" src="../assets/img/linkedin.svg" /></a> -->
        <a :href="$c('sites.linkedin.url')" target="_blank" :title="$c('sites.linkedin.name')">
          <IconLinkedin class="icon" />
        </a>
        <a :href="$c('sites.github.url')" target="_blank" :title="$c('sites.github.name')">
          <IconGithub class="icon" />
        </a>
        <a :href="$c('sites.atcoder.url')" target="_blank" :title="$c('sites.atcoder.name')">
          <img class="icon" src="../assets/img/atcoder.png" />
        </a>
        <a :href="$c('sites.hackerrank.url')" target="_blank" :title="$c('sites.hackerrank.name')">
          <IconHackerrank class="icon" />
        </a>
        <a :href="$c('sites.qiita.url')" target="_blank" :title="$c('sites.qiita.name')">
          <img class="icon" src="../assets/img/qiita.png" />
        </a>
      </ul>
    </div>
  </header>
</template>

<script>
import Menu from '../components/Menu.vue'
import IconLinkedin from '../svgs/linkedin.vue'
import IconGithub from '../svgs/github.vue'
import IconHackerrank from '../svgs/hackerrank.vue'
import LanguageSelector from '../components/LanguageSelector.vue'
export default {
  name: 'Header',
  components: {
    Menu,
    IconLinkedin,
    IconGithub,
    IconHackerrank,
    LanguageSelector
  }
}
</script>

<style scoped lang="scss">
header {
  @include md {
    position: relative;
    max-width: 960px;
    height: 190px;
    margin: 0 auto;
  };
  #logo {
    /* color: $color-sub; */
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin: 0 0 25px 0;
    padding-left: 15px;
    text-align: center;
    @include md {
      font-size: 32px;
      letter-spacing: 2.6px;
      padding-top: 50px;
      /* position: absolute; */
      /* top: 107px; */
      /* left: 40px; */
      margin:  10px 0 0 0;
      padding-left: 0;
      text-align: center;
    }
    @include lg {
      left: 0;
    }
  }
  #bar {
    text-align: center;
    @include md {
      margin-top: 10px;
    }
    #header_menu {
      @include md {
        /* position: absolute; */
        /* bottom: 30px; */
        /* right: 30px; */
        display: inline-block;
        margin-top: 20px;
      };
      @include lg {
        /* right: 0; */
      };
    }
    .social_btn {
      text-align: center;
      /* margin: 20px auto; */
      padding: 0;
      @include md {
        /* float:right; */
        display: inline-block;
        position: absolute;
        /* margin: 0 auto; */
        /* top: 112px; */
        right: 0px;
      };
      @include lg {
        right: 10px;
      };
      a {
        display: inline;
        margin: 0 6px;
        @include md {
          margin: 0 5px;
        }
        .icon {
          width: 28px;
          height: 28px;
          fill: #4c4c4c;
          @include md {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
  #language_selector  {
    /* display: flex; */
    /* justify-content: flex-end; */
    text-align: center;
    @include md {
      float: right;
    }
    /* position: absolute; */
    /* right: 0; */
    /* display: inline-block; */
    /* text-align: right; */
  }
}
</style>
