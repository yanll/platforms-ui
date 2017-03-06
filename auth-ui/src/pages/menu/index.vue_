<template>
  <div style="background-color: white">
    <navBar :navbar_title="navbar_title" :navbar_data="navbar_data"></navBar>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="menuName" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="url" label="路由地址"></el-table-column>
    </el-table>
    <paginator @load_data="load_data" ref="paginator" :page="page" :limit="limit" :total="total"></paginator>
  </div>
</template>


<script>
  import Paginator from '../../components/common/Paginator.vue'
  import NavBar from '../../components/common/NavBar.vue'

  export default {
    components: {
      "paginator": Paginator,
      "navBar": NavBar
    },
    data() {
      return {
        navbar_title: '首页 > 系统管理 > 菜单管理',
        navbar_data: {
          data: [{
            title: '首页',
            url: '/'
          }, {
            title: '系统管理',
            url: ''
          }, {
            title: '菜单管理',
            url: '../pages/menu/index.vue'
          }]
        },
        list: []
      }
    },
    created () {
      this.load_data();
    },
    computed: {},
    methods: {
      load_data: function (params) {
        console.log('MENU:load_data');
        var v = this;
        var url_ = '/menu/list';
        if (v.$refs.paginator) {
          var pagination = '?page=' + v.$refs.paginator.page + '&limit=' + v.$refs.paginator.limit;
          url_ += pagination;
        }
        console.log('URL:' + url_);
        v.$api.get(url_, params, function (resp) {
          v.list = resp.data.items;
          v.total = resp.data.pagination.total;
          //父调用子
          v.$refs.paginator.logs(resp);
        })
      },
    },
  }
</script>
