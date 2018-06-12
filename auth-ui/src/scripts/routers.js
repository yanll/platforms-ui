// 引用模板
import login from "../pages/login.vue";
import main from "../pages/main.vue";
import home from "../pages/home.vue";
import user from "../pages/user/index.vue";
import menu from "../pages/menu/index.vue";
import permission_group from "../pages/permission_group/index.vue";
import permissions from "../pages/permission/index.vue";
import demo_breadcrumb from "../pages/demo/breadcrumb.vue";
// 配置路由
export default [
  {name: 'login', path: '/', component: login},
  {
    name: 'main', path: '/main', component: main, children: [
      {name: 'home', path: '/home', component: home},
      {name: 'permission_group_manage', path: '/permission_group', component: permission_group},
      {name: 'menu_manage', path: '/menu', component: menu},
      {name: 'user_manage', path: '/user', component: user},
      {name: 'permission_manage', path: '/permission', component: permissions},
      {name: 'demo_breadcrumb', path: '/demo_breadcrumb', component: demo_breadcrumb}
    ]
  }
]
