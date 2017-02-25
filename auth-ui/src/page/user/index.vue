<template>
  <div>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="username" label="用户名称" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
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
        v.$api.get('/user/list', params, function (resp) {
          v.list = resp.data;
        })
      },
    },
  }
</script>
