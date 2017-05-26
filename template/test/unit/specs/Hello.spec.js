import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as dep from '@/import'
import { config } from '@/config'
import { events } from './data.js'

{{#axios}}
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
// mock data
let mock = new MockAdapter(axios)
mock.onGet('/data/test').reply(200, {
  data: {
    permission: false
  }
})
{{/axios}}

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = dep.Vue.extend(Hello){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    const vm = new Constructor(
      {
        {{#i18n}}
        i18n: dep.i18n{{/i18n}}{{#router}},
        router: dep.router{{/router}}{{#store}},
        store: dep.store{{/store}}
      }).$mount()
    {{/if_eq}}
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
