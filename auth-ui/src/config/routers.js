// 引用模板
import home from '../pages/home.vue'
import user from '../pages/user/index.vue'
import menu from '../pages/menu/index.vue'
import permission from '../pages/permission/index.vue'
import permission_group from '../pages/permission_group/index.vue'
// 配置路由
export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/user',
    component: user
  },
  {
    path: '/permission',
    component: permission
  },
  {
    path: '/permission_group',
    component: permission_group
  },
]
