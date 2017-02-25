// 引用模板
import home from '../page/home.vue' 
import user from '../page/user/index.vue' 
import menu from '../page/menu/index.vue'
import permission from '../page/permission/index.vue'
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
]
