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

let common_data = require('../locales/common.yml')
let get_common = query => {
  try {
    return query.split('.').reduce((o,i) => o[i], common_data)
  }
  catch (e) {
    return query
  }
}

Vue.prototype.$c = get_common
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: get_locale(),
  messages: {
    'en': require('../locales/en.yml'),
    'ja': require('../locales/ja.yml'),
    'zh-tw': require('../locales/zh-tw.yml'),
    'zh-cn': require('../locales/zh-cn.yml')
  }
})

new Vue({
  render: h => h(App),
  router: router,
  i18n: i18n
}).$mount('#app')
