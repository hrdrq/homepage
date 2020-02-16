<template>
  <header>
    <LanguageSelector id="language_selector" />
    <div id="logo"><router-link to="/">Munehiro (Tsung-Po)</router-link></div>
    <nav>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <ul class="social_btn">
      <!-- <a href="linkedin"><img class="icon" src="../assets/img/linkedin.svg" /></a> -->
      <a href="linkedin"><IconLinkedin class="icon" /></a>
      <a href="github"><IconGithub class="icon" /></a>
      <a href="atcoder"><img class="icon" src="../assets/img/atcoder.png" /></a>
      <a href="hackerrank"><IconHackerrank class="icon" /></a>
      <a href="qiita"><img class="icon" src="../assets/img/qiita.png" /></a>
    </ul>
  </header>
</template>

<script>
import IconLinkedin from '../svgs/linkedin.vue'
import IconGithub from '../svgs/github.vue'
import IconHackerrank from '../svgs/hackerrank.vue'
import LanguageSelector from '../components/LanguageSelector.vue'
export default {
  name: 'Header',
  components: {
    IconLinkedin,
    IconGithub,
    IconHackerrank,
    LanguageSelector
  },
  data() {
    return {
      arrayOfObjects: [],
      object: {
        name: 'Object Name',
      }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  @include md {
    position: relative;
    max-width: 960px;
    height: 270px;
    margin: 0 auto;
  };
  #logo {
    font-size: 1.8em;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: 21px 0 25px 0;
    padding-left: 30px;
    text-align: left;
    @include md {
      position: absolute;
      top: 107px;
      left: 50px;
      margin: 0;
      padding-left: 0;
      text-align: center;
    }
  }
  nav {
    margin-bottom: 20px;
    border-top: 1px solid #d9d9d9;
    @include md {
      position: absolute;
      bottom: 30px;
      right: 30px;
      margin-bottom: 0;
      border-top: none;
    };
    @include lg {
      right: 0;
    };
    ul {
      list-style: none;
      li {
        float: left;
        width: 50%;
        border-bottom: 1px solid #d9d9d9;
        text-align: center;
        @include md {
          margin-left: 50px;
          display: inline;
          float: none;
          border-bottom: none;
          text-align: right;
        };
        a {
          letter-spacing: 0.1em;
        }
      }
    }
  }
  .social_btn {
    text-align: center;
    margin: 0 auto;
    @include md {
      position: absolute;
      top: 112px;
      right: 30px;
    };
    @include lg {
      right: 10px;
    };
    a {
      display: inline;
      margin-right: 8px;
      @include md {
        margin-right: 10px;
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
  #language_selector {
    @include md {
      position: absolute;
      right: 0px;
    }
  }
}
</style>
