<template>
  <header>
    <div class="logo"><router-link to="/">Munehiro (Tsung-Po)</router-link></div>
    <nav>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/skill">Skill</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <ul class="social_btn">
      <a href="linkedin">L</a>
      <a href="github">G</a>
      <a href="atcoder">A</a>
      <a href="hackerrank">H</a>
      <a href="qiita">Q</a>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
