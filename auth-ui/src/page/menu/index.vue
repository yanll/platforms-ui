<template>
	<div>
    <el-table      :data="list"   stripe border   style="width: 100%" >
      <el-table-column        prop="menuName"        label="菜单名称"        width="180">      </el-table-column>
      <el-table-column        prop="url"        label="路由地址">      </el-table-column>
      </el-table>
    </div> 
  </template>
  
  
  
  
<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  created () {
    this.get_data()
  },
  methods: {
    get_data: function(params) {
      var v = this
      if (!params) params = {}
      v.$api.get('/menu/list', params, function(resp) {
        v.list = resp.data;
      })
    },
  },
}
</script>
