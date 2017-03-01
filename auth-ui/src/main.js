import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './config/routers'

Vue.use(Element)
Vue.use(VueRouter)

import api from './config/api'
Vue.prototype.$api = api

const router = new VueRouter({
  routes
})

Vue.config.silent = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})
