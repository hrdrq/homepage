<template>
  <span id="copier" :title="$t('copy')">
    <span id="icon" :title="$t('copy')" @click="do_copy()">
      <svg  viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <polyline fill="none" points="29,21 18,21 18,10   " stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <polygon fill="none" points="30,49 1,49 1,9   18,9 30,21 " stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <polyline fill="none" points="48,13 37,13 37,2   " stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <polygon points="37.414,0 19,0 19,6 21,8 21,2 36.586,2 48,13.414 48,40 33,40 33,42 50,42 50,12.586 "/>
      </svg>
    </span>
    <span id="msg" v-if="show_msg">{{ $t('copied') }}</span>
  </span>
</template>

<script>
export default {
  name: 'Copier',
  props: {
    text: String
  },
  data() {
    return {
      show_msg: false
    }
  },
  methods: {
    do_copy() {
      let textArea = document.createElement("textarea")
      textArea.style.position = 'fixed'
      textArea.style.top = 0
      textArea.style.left = 0
      textArea.style.width = '2em'
      textArea.style.height = '2em'
      textArea.style.padding = 0
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'
      textArea.style.background = 'transparent'
      textArea.value = this.text
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        let successful = document.execCommand('copy')
        if(successful) {
          this.show_msg = true
          setTimeout(() => { this.show_msg = false }, 1000)
        }
      } catch (err) {
        console.log('Oops, unable to copy')
      }

      document.body.removeChild(textArea)
    }
  }
}
</script>

<style scoped lang="scss">
#copier {
  margin-left: 6px;
  #icon {
    &:hover {
      cursor: pointer;
    }
    svg {
      width: 16px;
      stroke: $color-front;
    }
  }
  #msg {
    font-size: 10px;
    color: $color-front;
    margin-left: 6px;
  }
}
</style>
