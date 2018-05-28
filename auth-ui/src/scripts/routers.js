// 引用模板
import home from "../pages/home.vue";
import user from "../pages/user/index.vue";
import menu from "../pages/menu/index.vue";
import permission_group from "../pages/permission_group/index.vue";
import permissions from "../pages/permission_group/permissions.vue";
// 配置路由
export default [
  {name: 'index', path: '/', component: home},
  {name: 'menu_manage', path: '/menu', component: menu},
  {name: 'user_manage', path: '/user', component: user},
  {
    name: 'promission_group', path: '/permission_group', component: permission_group,
    children: [{
      path: '/:id/permissions',
      component: permissions
    }]
  }
]
