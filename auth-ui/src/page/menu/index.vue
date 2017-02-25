<template>
  <div>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="menuName" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="url" label="路由地址"></el-table-column>
    </el-table>
    <Paginator :page="page" :limit="limit" :total="total"></Paginator>
  </div>
</template>


<script>
  import Paginator from '../../components/common/Paginator.vue'

  export default {
    components: {
      Paginator
    },
    data() {
      return {
        list: []
      }
    },
    created () {
      this.get_data()
    },
    methods: {
      get_data: function (params) {
        var v = this
        if (!params) params = {}
        v.$api.get('/menu/list', params, function (resp) {
          v.list = resp.data;
          v.page = 2;
          v.limit = 5;
          v.total = 30;
        })
      },
    },
  }
</script>
