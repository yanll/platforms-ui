// 引用模板
import home from "../pages/home.vue";
import user from "../pages/user/index.vue";
import menu from "../pages/menu/index.vue";
import permission_group from "../pages/permission_group/index.vue";
import permissions from "../pages/permission/index.vue";
import demo_breadcrumb from "../pages/demo/breadcrumb.vue";
// 配置路由
export default [
  {name: 'home', path: '/', component: home},
  {name: 'menu_manage', path: '/menu', component: menu},
  {name: 'user_manage', path: '/user', component: user},
  {name: 'permission_group_manage', path: '/permission_group', component: permission_group},
  {name: 'permission_manage', path: '/permission', component: permissions},
  {name: 'demo_breadcrumb', path: '/demo_breadcrumb', component: demo_breadcrumb}
]
