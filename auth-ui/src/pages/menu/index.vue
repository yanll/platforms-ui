<template>
  <div style="background-color: white">
    <navBar :navbar_title="navbar_title" :navbar_data="navbar_data"></navBar>
    <el-tree
      :data="tree_data"
      :props="defaultProps"
      node-key="id"
      highlight-current="true"
      :render-content="renderContent">
    </el-tree>
    <el-dialog title="菜单" v-model="dialog_form"
               :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="系统名称">
          <portalSelect placeholder="请选择系统名称" ref="portalSelect" :dict_options="portal_options"/>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="form.menuName"></el-input>
        </el-form-item>
        <el-form-item label="菜单URL">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.idx"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog_form = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import NavBar from '../../components/common/NavBar.vue'
  import DictionarySelect from '../../components/common/DictionarySelect.vue'
  import Dict from '../../components/const/Dict.vue'


  export default {
    components: {
      "navBar": NavBar,
      "portalSelect": DictionarySelect
    },
    data() {
      return {
        navbar_title: '首页 > 系统管理 > 菜单管理',
        tree_data: [],
        defaultProps: {
          children: 'children',
          label: 'menu_name'
        },
        dialog_form: false,
        form: {
          menuName: '',
          parentName: '系统管理',
          url: '',
          idx: ''
        },
        portal_options: Dict.SYSTEM_PORTAL
      }
    },
    created () {
      this.load_data();
    },
    computed: {},
    methods: {
      renderContent(h, {node, data, store}) {
        let ope;
        if (data.editable != 0) {
          ope = (
            <span style="margin-left: 10px; margin-right: 10px;">
              <el-button type="text" size="small" on-click={() => this.del(store, data)}>删除</el-button>
            </span>
          )
        }
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 12px;">
              <el-button type="text" size="small" on-click={() => this.add(store, data)}>新增子级菜单</el-button>
              {ope}
              <el-button type="text" size="small" on-click={() => this.detail(store, data)}>详情</el-button>
            </span>
          </span>
        );
        /*
         var label = h('span', [
         h('span', node.label)
         ]);
         var button_span = h('span', {style: 'float:right;font-size:12px;'}, [
         h('a', {style: 'margin-right:12px;',}, '新增'),
         h('a', {style: 'margin-right:12px;'}, '编辑'),
         h('a', {style: 'margin-right:12px;', on: {click: this.del(store, data)}}, '删除')
         ]);
         return h('span', [label, button_span]);
         */
      },
      load_data: function (params) {
        var v = this;
        var url_ = '/menu/map_tree';
        v.$api.get(url_, params, function (resp) {
          console.log(resp);
          v.tree_data = resp.data;
        })
      },
      add: function (store, data) {
        var v = this;
      },
      detail: function (store, data) {
        var v = this;
        v.dialog_form = true;
        var url_ = '/menu/' + data.id;
        v.form.menuName = '';
        v.form.url = '';
        v.form.idx = '';
        v.$api.get(url_, {}, function (resp) {
          var dat = resp.data;
          v.form.menuName = data.menu_name;
          v.form.url = data.url;
          v.form.idx = data.idx;
          v.$refs.portalSelect.setValue(data.portal_id);
        })
      },
      del: function (store, data) {
        var v = this;
        var url_ = '/menu/' + data.id;
        v.$api.delete(url_, {}, function (resp) {
          v.load_data();
        })
      },
      save: function () {
        console.log('save');
      },
    },
  }
</script>
