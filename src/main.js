import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueI18n from 'vue-i18n'

let get_locale = () => {
  let locale = null
  document.cookie.split(';').forEach(value => {
    let content = value.split('=')
    if(content[0] === 'locale') {
      locale = content[1]
    }
  })
  if(!locale) {
    let lang = navigator.language || navigator.userLanguage
    if(lang.startsWith('ja')) {
      locale = 'ja'
    }
    else if(lang.startsWith('zh')) {
      if(lang === 'zh-tw' || lang === 'zh-hk') {
        locale = 'zh-tw'
      }
      else {
        locale = 'zh-cn'
      }
    }
    else {
      locale = 'en'
    }
  }
  return locale
}

Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: get_locale(),
  messages: {
    'en': require('../locales/en.json'),
    'ja': require('../locales/ja.json'),
    'zh-tw': require('../locales/zh-tw.json'),
    'zh-cn': require('../locales/zh-cn.json')
  }
})

new Vue({
  render: h => h(App),
  router: router,
  i18n: i18n
}).$mount('#app')
