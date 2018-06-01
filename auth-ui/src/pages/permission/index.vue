<template>
  <div style="background-color: white">
    <el-form :inline="true" :model="search_form">
      <el-form-item>
        <portalSelectSearch placeholder="请选择系统" ref="portalSelectSearch" :dict_options="portal_options_search"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="menuName" label="菜单名称" width="200"></el-table-column>
      <el-table-column prop="permissionName" label="权限名称" width="200"></el-table-column>
      <el-table-column prop="url" label="路由地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="380">

      </el-table-column>
    </el-table>
    <paginator @load_data="load_data" ref="paginator" :page="page" :limit="limit" :total="total"></paginator>
  </div>
</template>


<script>

  import Paginator from '../../components/Paginator.vue'
  import SimpleSelect from '../../components/SimpleSelect.vue'
  import Dict from '../../components/Dict.vue'


  export default {
    components: {
      "portalSelectSearch": SimpleSelect,
      "paginator": Paginator
    },
    data() {
      return {
        list: [],
        search_form: {},
        portal_options_search: Dict.SYSTEM_PORTAL,
        portal_options: Dict.SYSTEM_PORTAL
      }
    },
    created() {

    },
    mounted() {
      var v = this;
      v.$refs.portalSelectSearch.setValue(Dict.SYSTEM_PORTAL_.AUTH_CONSOLE);
      v.onSearch();
    },
    methods: {
      load_data: function (params) {
        console.log('加载权限列表...');
        var v = this;
        if (params == undefined) params = {}
        var portal_id = v.$refs.portalSelectSearch.value;
        if (portal_id == undefined || portal_id == '') {
          console.error("请选择系统！");
          return;
        }
        var url = '/permission/list/' + portal_id;
        if (v.$refs.paginator != undefined) {
          var pagination = '?page=' + v.$refs.paginator.page + '&limit=' + v.$refs.paginator.limit;
          url += pagination;
        }
        v.$api.get(url, params, function (resp) {
          console.log(resp);
          v.list = resp.data.items;
          v.total = resp.data.pagination.total;
        })
      },
      onSearch: function () {
        this.load_data();
      }
    }
  }
</script>
