{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import App from '@/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as dep from '@/import'

/* eslint-disable no-new */
new dep.Vue({
  el: '#app',
  {{#router}}
  router: dep.router,
  {{/router}}
  {{#vuex}}
  store: dep.store,
  {{/vuex}}
  {{#i18n}}
  i18n: dep.i18n,
  {{/i18n}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
