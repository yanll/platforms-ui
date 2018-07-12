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
      <el-tree default-expand-all="true" :data="tree_data" :props="defaultProps" node-key="id" highlight-current="true">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
        </span>
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
