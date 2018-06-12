import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './scripts/routers'
import api from './scripts/api'


Vue.use(ElementUI)
Vue.use(VueRouter)



Vue.prototype.$api = api

const router = new VueRouter({
  routes
})

Vue.config.silent = true

new Vue({
  template: '<App/>',
  render: h => h(App),
  router
}).$mount('#app')
