<template>
  <div style="background-color: white">
    <navBar :navbar_title="navbar_title" :navbar_data="navbar_data"></navBar>
    <el-tree
      :data="tree_data"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
</template>


<script>
  import NavBar from '../../components/common/NavBar.vue'

  export default {
    components: {
      "navBar": NavBar
    },
    data() {
      return {
        navbar_title: '首页 > 系统管理 > 菜单管理',
        tree_data: [],
        defaultProps: {
          children: 'children',
          label: 'menu_name'
        }
      }
    },
    created () {
      this.load_data();
    },
    computed: {},
    methods: {
      renderContent(h, {node, data, store}) {
        var label = h('span', [
          h('span', node.label)
        ]);
        var button_span = h('span', {style: 'float:right;font-size:12px;'}, [
          h('a', {style: 'margin-right:12px;', on: {click: this.detail(store, data)}}, '新增'),
          h('a', {style: 'margin-right:12px;'}, '编辑'),
          h('a', {style: 'margin-right:12px;', on: {click: this.del(store, data)}}, '删除')
        ]);
        return h('span', [label, button_span]);
      },
      load_data: function (params) {
        var v = this;
        var url_ = '/menu/map_tree';
        v.$api.get(url_, params, function (resp) {
          console.log(resp);
          v.tree_data = resp.data;
        })
      },
      detail: function (store, data) {
        console.log(data.id + ':' + data.menu_name + ":" + data.label + ":" + store.label + ":" + store.menu_name);
      },
      del: function (store, data) {
        var v = this;
        var url_ = '/menu/' + data.id;
        console.log(data);
        return;
        v.$api.delete(url_, {}, function (resp) {
          v.load_data();
        })
      },
    },
  }
</script>
