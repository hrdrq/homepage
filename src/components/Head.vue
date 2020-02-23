<template>
  <header>
    <LanguageSelector id="language_selector" />
    <div id="logo"><router-link to="/">Munehiro (Tsung-Po)</router-link></div>
    <Menu id="header_menu" />
    <ul class="social_btn">
      <!-- <a href="linkedin"><img class="icon" src="../assets/img/linkedin.svg" /></a> -->
      <a href="linkedin" target="_blank"><IconLinkedin class="icon" /></a>
      <a href="github" target="_blank"><IconGithub class="icon" /></a>
      <a href="atcoder" target="_blank"><img class="icon" src="../assets/img/atcoder.png" /></a>
      <a href="hackerrank" target="_blank"><IconHackerrank class="icon" /></a>
      <a href="qiita" target="_blank"><img class="icon" src="../assets/img/qiita.png" /></a>
    </ul>
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
    height: 260px;
    margin: 0 auto;
  };
  #logo {
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 1.2px;
    margin: 0 0 25px 0;
    padding-left: 15px;
    text-align: left;
    @include md {
      font-size: 28px;
      letter-spacing: 2.6px;
      position: absolute;
      top: 107px;
      left: 40px;
      margin: 0;
      padding-left: 0;
      text-align: center;
    }
    @include lg {
      left: 0;
    }
  }
  #header_menu {
    @include md {
      position: absolute;
      bottom: 30px;
      right: 30px;
    };
    @include lg {
      right: 0;
    };
  }
  .social_btn {
    text-align: center;
    margin: 20px auto;
    padding: 0;
    @include md {
      position: absolute;
      margin: 0 auto;
      top: 112px;
      right: 30px;
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
  #language_selector  {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
