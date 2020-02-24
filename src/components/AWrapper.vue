<template>
  <span>
    <a v-if="href" :href="href" :target="target"><slot /></a>
    <span v-else><slot /></span>
  </span>
</template>

<script>
export default {
  name: 'AWrapper',
  props: {
    href: String,
    target: String
  }
}
</script>
