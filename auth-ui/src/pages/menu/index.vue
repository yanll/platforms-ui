<template>
  <el-row>
    <el-col span="24">
      <el-form :inline="true" :model="search_form">
        <el-form-item>
          <portalSelect placeholder="请选择系统" ref="portalSelect" :dict_options="portal_options"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
      <el-row :gutter="0">
        <el-col :span="4">
          <span style="text-align: left;font-size: 16px;"><b>菜单名称</b></span>
        </el-col>
        <el-col :span="4">
          <span style="text-align: left;font-size: 16px;"><b>菜单链接</b></span>
        </el-col>
        <el-col :span="4">
          <span style="text-align: left;font-size: 16px;"><b>状态</b></span>
        </el-col>
        <el-col :span="4">
          <span style="text-align: left;font-size: 16px;"><b>创建时间</b></span>
        </el-col>
        <el-col :span="4">
          <span style="text-align: left;font-size: 16px;"><b>最后修改时间</b></span>
        </el-col>
        <el-col :span="4">
          <span style="text-align: left;font-size: 16px;"><b>操作</b></span>
        </el-col>
      </el-row>
      <br/>
      <el-tree default-expand-all="true" :data="tree_data" empty-text="-" indent="0" :props="defaultProps" node-key="id"
               highlight-current="true">
        <div style="width: 100%" slot-scope="{ node, data }">
          <el-row :gutter="0">
            <el-col :span="4">
              <span style="text-align: left;font-size: 16px;">{{ data.menu_name }}</span>
            </el-col>
            <el-col :span="4">
              <span style="text-align: left;font-size: 16px;">-{{ data.url }}</span>
            </el-col>
            <el-col :span="4">
              <span style="text-align: left;font-size: 16px;">-{{ data.status }}</span>
            </el-col>
            <el-col :span="4">
              <span style="text-align: left;font-size: 16px;">-{{ data.create_time }}</span>
            </el-col>
            <el-col :span="4">
              <span style="text-align: left;font-size: 16px;">-{{ data.modify_time }}</span>
            </el-col>
            <el-col :span="4">
              <span style="text-align: left;font-size: 16px;">
              <el-button type="text" size="mini" @click="() => append_node(data)">编辑</el-button>
              <el-button v-if="data.id==10001" type="text" size="mini" @click="() => delete_node(data)">删除</el-button>
              </span>
            </el-col>
          </el-row>
        </div>
      </el-tree>
    </el-col>
  </el-row>

</template>


<script>
  import SimpleSelect from '../../components/SimpleSelect.vue'
  import Dict from '../../components/Dict.vue'


  export default {
    components: {
      "portalSelect": SimpleSelect
    },
    data() {
      return {
        tree_data: [],
        defaultProps: {
          children: 'children',
          label: 'menu_name'
        },
        dialog_form: false,
        portal_options: Dict.SYSTEM_PORTAL,
        search_form: {}
      }
    },
    created() {

    },
    mounted() {
      var v = this;
      v.$refs.portalSelect.setValue(Dict.SYSTEM_PORTAL_.AUTH_CONSOLE);
      this.onSearch();
    },
    computed: {},
    methods: {
      append_node: function (data) {
        console.log(this);
        alert('append_node:' + data.menu_name);
      },
      delete_node: function (data) {
        alert('delete_node:' + data.menu_name);
      },
      load_data: function (system_code) {
        var v = this;
        var url_ = '/menu/tree/' + system_code;
        var instance = this.$axios.create({
          baseURL: 'http://127.0.0.1:8080',
          timeout: 2000,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
        instance.get(url_, {}).then(function (resp) {
          console.log(resp.data)
          console.log(resp.data.code)
          if (resp.data.code == 403) {
            v.$message.error(resp.data.desc);
            return;
          }
          v.tree_data = resp.data.data;
        }).catch((error) => {
          console.log(error);
        });
      },
      onSearch: function () {
        var v = this;
        var system_code = v.$refs.portalSelect.value;
        if (system_code == undefined || system_code == '') {
          console.log("请选择系统！");
          return;
        }
        this.load_data(system_code);
      }
    }
  }
</script>
