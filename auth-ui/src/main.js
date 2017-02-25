//// 引用 vue 没什么要说的
//import Vue from 'vue'
//// 引用路由
//import VueRouter from 'vue-router'
//// 光引用不成，还得使用
//Vue.use(VueRouter)
//// 入口文件为 src/App.vue 文件 所以要引用
//import App from './App.vue'
//// 引用路由配置文件
//import routes from './config/routers'
//
//import api from './config/api'
//Vue.prototype.$api = api
//
//// 使用配置文件规则
//const router = new VueRouter({
//routes
//})
//// 跑起来吧
//new Vue({
//router,
//el: '#app',
//render: (h) => h(App)
//})




// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'normalize.css'
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
