import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import App from './App'
import routes from './scripts/routers'
import api from './scripts/api'
/*import AxiosUtil from './scripts/AxiosUtil'*/
import './assets/iconfont.css'
import './assets/styles/main.scss'


Vue.use(ElementUI)
Vue.use(VueRouter)




Vue.prototype.$api = api;
Vue.prototype.$axios = axios;
/*Vue.prototype.$AxiosUtil = AxiosUtil;*/
const router = new VueRouter({
  routes
})

Vue.config.silent = true

new Vue({
  template: '<App/>',
  render: h => h(App),
  router
}).$mount('#app')
