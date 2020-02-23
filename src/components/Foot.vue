<template>
  <footer>
    <div id="totop_wrapper" @click="scroll_to_top">
      <IconTotop id="totop" />
    </div>
    <Menu id="footer_menu" />
    <div id="copyright">
      © MUNEHIRO All rights reserved.
    </div>
  </footer>
</template>

<script>
import Menu from '../components/Menu.vue'
import IconTotop from '../svgs/totop.vue'
export default {
  name: 'Foot',
  components: {
    Menu,
    IconTotop
  },
  methods: {
    scroll_to_top() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
footer {
  text-align: center;
  margin-top: 60px;
  @include md {
    max-width: 960px;
    margin: 80px 5% 60px 5%;
  }
  @include lg {
    margin: 80px auto 60px auto;
  }
  #totop_wrapper {
    width: 100%;
    cursor: pointer;
    margin-bottom: 40px;
    @include md {
      display: inline-block;
      width: 22px;
      margin-bottom: 60px;
    }
    #totop {
      width: 22px;
      height: auto;
      fill: #bcbcbc;
    }
  }
  #footer_menu {
    ul {
      @include md {
        float: left;
      }
      padding-left: 0;
      li {
        @include md {
          /* margin: 0 50px; */
          margin-left: 0;
          margin-right: 40px;
        }
      }
    }
  }
  #copyright {
    font-size: 10px;
    margin: 24px 0;
    @include md {
      float: right;
      margin: 0;
    }
  }
}
</style>
