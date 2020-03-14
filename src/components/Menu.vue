<template>
  <nav>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/experience">Experience</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped lang="scss">
nav {
  margin-bottom: 20px;
  /* border-top: 1px solid #d9d9d9; */
  color: $color-sub;
  @include md {
    border-top: none;
    margin-bottom: 0;
  };
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0;
    @include md {
      display: block;
    }
    li {
      /* display: flex;  */
      flex-basis: calc(50% - 1px);  
      justify-content: center;
      /* flex-direction: column; */
      /* float: left; */
      width: 50%;
      height: 50px;
      /* border-bottom: 1px solid #d9d9d9; */
      text-align: center;
      // &:nth-child(odd) {
      //   border-right: 1px solid #d9d9d9;
      // }
      @include md {
        margin: 0 34px;
        display: inline;
        float: none;
        /* border: none !important; */
        text-align: right;
      };
      a {
        font-size: 14px;
        letter-spacing: 0.1em;
        margin: 8px 0;
        padding: 4px 0;
        transition: .3s;
        position: relative;
        overflow: hidden;
        display:inline-block;
        &:not(.router-link-active)::after {
          position: absolute;
          bottom: 4px;
          left: 0;
          content: '';
          width: 100%;
          height: 1px;
          background-color: $color-sub;
          opacity: 0;
          transition: .3s;
        }
        &:hover::after {
          bottom: 0;
          opacity: 1;
        }
        // &:hover {
        //   text-decoration: underline;
        // }
        &.router-link-active {
          opacity: 0.3;
          cursor: auto;
        }
      }
    }
  }
}
</style>
