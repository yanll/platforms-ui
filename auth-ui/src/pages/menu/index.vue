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
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="系统名称">
          <portalSelect placeholder="请选择系统名称" ref="portalSelect" :dict_options="portal_options"/>
        </el-form-item>
        <el-form-item label="父级菜单">
          <el-input readonly disabled="true" v-model="form.parentId"></el-input>
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
          parentId: '系统管理',
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
            <span style="margin-left: 10px;">
              <el-button type="text" size="small" on-click={() => this.detail(store, data)}>编辑</el-button>
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
              <el-button type="text" size="small" on-click={() => this.detail(store, data)}>新增子级菜单</el-button>
              {ope}
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
      detail: function (store, data) {
        var v = this;
        v.dialog_form = true;
        var url_ = '/permission_group/list';
        v.$api.get(url_, {}, function (resp) {
          v.$refs.portalSelect.change('-----------');
          //v.$refs.portalSelect.setValue(2);
        })
      },
      del: function (store, data) {
        var v = this;
        var url_ = '/menu/' + data.id;
        v.$api.delete(url_, {}, function (resp) {
          v.load_data();
        })
      },
    },
  }
</script>
