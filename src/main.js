import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
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
