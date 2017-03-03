<template>
  <div style="background-color: white">
    <navBar :navbar_title="navbar_title"></navBar>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="permissionName" label="权限名称" width="180"></el-table-column>
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
        navbar_title: '首页 > 系统管理 > 权限分组 > 权限设置',
        list: []
      }
    },
    created () {
      this.load_data()
    },
    methods: {
      load_data: function (params) {
        var v = this;
        if (!params) params = {}
        var url = '/permission_group/' + v.$route.params.id + '/permissions';
        v.$api.get(url, params, function (resp) {
          console.log(resp);
          v.list = resp.data.items;
        })
      }
    },
  }
</script>
