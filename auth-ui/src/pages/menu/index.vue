<template>
  <div>
    <breadcrumb :breadcrumb_data="breadcrumb_data"></breadcrumb>
    <el-tree
      :data="tree_data"
      :props="defaultProps"
      node-key="id"
      highlight-current="true"
      :render-content="renderContent">
    </el-tree>
  </div>
</template>


<script>
  import Breadcrumb from '../../components/Breadcrumb.vue'
  import DictionarySelect from '../../components/DictionarySelect.vue'
  import Dict from '../../components/Dict.vue'


  export default {
    components: {
      "breadcrumb": Breadcrumb,
      "portalSelect": DictionarySelect
    },
    data() {
      return {
        breadcrumb_data: [
          {path: '/', name: '首页'},
          {path: '', name: '系统管理'},
          {path: '/menu', name: '菜单管理'}
        ],
        tree_data: [],
        defaultProps: {
          children: 'children',
          label: 'menu_name'
        },
        dialog_form: false,
        portal_options: Dict.SYSTEM_PORTAL
      }
    },
    created () {
      this.load_data();
    },
    computed: {},
    methods: {
      renderContent(h, {node, data, store}) {
        return (
          <span>{node.label}</span>
        );
      },
      load_data: function (params) {
        var v = this;
        var url_ = '/menu/map_tree';
        v.$api.get(url_, params, function (resp) {
          console.log(resp);
          v.tree_data = resp.data;
        })
      }
    },
  }
</script>
