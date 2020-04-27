// with polyfills
import bootstrap from './core/bootstrap'
// require('./bootstrap');
import 'core-js/stable'
window.axios = require('axios');

import 'regenerator-runtime/runtime'
import $ from 'jquery'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Vue.use(Antd);
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.

import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import { Dialog } from '@/components'

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Dialog)

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
