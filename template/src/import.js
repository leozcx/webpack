import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from '@/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export { router }
{{/router}}
{{#vuex}}
import store from '@/store'
export { store }
{{/vuex}}
{{#toast}}
{{#if_eq toastConfig "vue-toasted"}}
import Toasted from 'vue-toasted'
const option = {
  position: 'top-center',
  className: 'my-toast'
}
Vue.use(Toasted, option)
{{/if_eq}}
{{/toast}}
{{#postcss}}
import '@/main.postcss'
{{/postcss}}
{{#fontawesome}}
import '@/../font-awesome.config'
{{/fontawesome}}
{{#i18n}}
import VueI18n from 'vue-i18n'
import { messages, lang } from '@/locales.js'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: lang,
  messages
})
export { i18n }
{{/i18n}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export { Vue }
