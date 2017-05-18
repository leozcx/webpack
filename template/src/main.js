{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#vuex}}
import store from './store'
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
import './main.postcss'
{{/postcss}}
{{#fontawesome}}
import '../font-awesome.config'
{{/fontawesome}}
{{#i18n}}
import VueI18n from 'vue-i18n'
import locales from './locales.js'
Vue.use(VueI18n)
const lang = navigator.language || navigator.userLanguage || 'zh-CN'
const i18n = new VueI18n({
  locale: lang,
  locales
})
{{/i18n}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#i18n}}
  i18n,
  {{/i18n}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
