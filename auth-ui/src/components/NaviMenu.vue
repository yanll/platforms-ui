<template>
  <el-tree default-expand-all="false" @node-click="router_to" :data="tree_data" :props="defaultProps" node-key="id"
           highlight-current="true">
  </el-tree>
</template>


<script>
  import SimpleSelect from '../components/SimpleSelect.vue'
  import Dict from '../components/Dict.vue'
  import Const from '../components/Const.vue'


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
      this.onSearch();
    },
    computed: {},
    methods: {
      load_data: function (portal_id) {
        console.log('开始加载菜单数据...');
        var v = this;
        var url_ = '/user/navi/' + portal_id + '/' + Const.MOCK_USER.ADMIN;
        v.$api.get(url_, {}, function (resp) {
          console.log(resp);
          v.tree_data = resp.data;
        })
      },
      onSearch: function () {
        var v = this;
        var portal_id = Dict.SYSTEM_PORTAL_.AUTH_CONSOLE;
        this.load_data(portal_id);
      },
      router_to: function (node, n, s) {
        var leaf = node.leaf;
        if (!leaf) return;
        this.$router.push({name: node.menu_code, params: {}})
      }
    }
  }
</script>
