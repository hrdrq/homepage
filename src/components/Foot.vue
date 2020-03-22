<template>
  <footer>
    <div id="totop_wrapper" @click="scroll_to_top">
      <!-- <IconTotop id="totop" /> -->
      <div id="page_top"><a /></div>
    </div>
    <Menu id="footer_menu" />
    <!-- <div id="copyright"> -->
    <!--   © MUNEHIRO All rights reserved. -->
    <!-- </div> -->
  </footer>
</template>

<script>
import Menu from '../components/Menu.vue'
// import IconTotop from '../svgs/totop.vue'
export default {
  name: 'Foot',
  components: {
    Menu,
    // IconTotop
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
    /* margin-bottom: 40px; */
    text-align: center;
    @include md {
      display: inline-block;
      width: 22px;
      /* margin-bottom: 60px; */
    }
    #totop {
      width: 22px;
      height: auto;
      fill: #bcbcbc;
    }
  }
  #page_top{
    width: 90px;
    height: 90px;
    margin-left: -12px;
    /* position: fixed; */
    /* right: 0; */
    /* bottom: 0; */
    text-align: center;
    display: inline-block;
    opacity: 0.6;
  }
  #page_top a{
    position: relative;
    display: block;
    width: 90px;
    height: 70px;
    text-decoration: none;
  }
  #page_top a::before{
    /* font-family: 'Font Awesome 5 Free'; */
    /* font-weight: 900; */
    /* content: '\f102'; */
    /* font-size: 25px; */
    /* color: #3f98ef; */
    /* position: absolute; */
    /* width: 25px; */
    /* height: 25px; */
    /* top: -40px; */
    /* bottom: 0; */
    /* right: 0; */
    /* left: 0; */
    /* margin: auto; */
    /* text-align: center; */
     position: absolute;
     content: '';
     width: 10px;
     height: 10px;
     border-top: solid 2px $color-front;
     border-right: solid 2px $color-front;
     -webkit-transform: rotate(-45deg);
     transform: rotate(-45deg);
     top: 20px;
     left: 38px;
     /* margin-top: -3px; */
  }
  #page_top a::after{
    content: 'PAGE TOP';
    font-size: 13px;
    color: #fff;
    position: absolute;
    top: 40px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    color: $color-front;
  }
  // #footer_menu {
  //   ul {
  //     @include md {
  //       float: left;
  //     }
  //     padding-left: 0;
  //     li {
  //       @include md {
  //         /* margin: 0 50px; */
  //         margin-left: 0;
  //         margin-right: 40px;
  //       }
  //     }
  //   }
  // }
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
