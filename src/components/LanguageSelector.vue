<template>
  <div class="btn-group">
    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name">
      {{ selectedOption.name }}
      <span class="caret"></span>
    </li>
    <ul class="dropdown-menu" v-if="showMenu">
      <li v-for="(option, idx) in options" :key="idx">
        <span @click="updateOption(option)">
          {{ option.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'en', name: 'English' },
        { value: 'ja', name: '日本語' },
        { value: 'zh-tw', name: '繁體中文' },
        { value: 'zh-cn', name: '简体中文' }
      ],
      selectedOption: {},
      showMenu: false
    }
  },
  mounted() {
    this.selectedOption = this.options.filter(option => option.value == this.$i18n.locale)[0]
    document.addEventListener('click', this.clickHandler)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickHandler)
  },
  methods: {
    updateOption(option) {
      this.$root.$i18n.locale = option.value
      this.selectedOption = option
      this.showMenu = false
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    clickHandler(event) {
      const { target } = event
      const { $el } = this

      if (!$el.contains(target)) {
        this.showMenu = false
      }
    }
  }
}
</script>

<style scoped>
.btn-group {
  min-width: 80px;
  height: 40px;
  position: relative;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
}
.btn-group li {
  list-style: none;
}

.dropdown-toggle {
  color: #636b6f;
  min-width: 80px;
  padding: 10px 20px 10px 10px;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 0;
  transition: background 0.4s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dropdown-toggle:hover {
  background: #e1e1e1;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 80px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.dropdown-menu > li > span {
  padding: 10px 20px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}
.dropdown-menu > li > span:hover {
  background: #efefef;
  color: #409FCB;
}

.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}

.caret {
  width: 0;
  position: absolute;
  top: 19px;
  height: 0;
  margin-left: -24px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  right: 10px;
}
</style>
