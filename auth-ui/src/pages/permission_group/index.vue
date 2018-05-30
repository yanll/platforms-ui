<template>
  <div style="background-color: white">
    <!--<breadcrumb :breadcrumb_data="breadcrumb_data"></breadcrumb>-->
    <el-form :inline="true" :model="search_form">
      <el-form-item>
        <portalSelectSearch placeholder="请选择系统" ref="portalSelectSearch" :dict_options="portal_options_search"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
        <el-button type="primary" @click="openDialog">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="groupName" label="权限组名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="380">
        <template scope="scope">
          <el-button type="text" size="small" @click="permissions(scope.row)">权限设置</el-button>
          <el-button type="text" size="small">用户设置</el-button>
          <el-button type="text" size="small" @click="openDialog(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="权限分组" :visible.sync="dialog_form" @close='closeDialog' @open="open"
               :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <el-form ref="myform" :model="myform" label-width="80px">
        <el-form-item label="系统名称">
          <portalSelect placeholder="请选择系统" ref="portalSelect" :dict_options="portal_options"/>
        </el-form-item>
        <el-form-item prop="groupName" label="权限组名">
          <el-input v-model="myform.groupName"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog_form = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </el-dialog>
    <paginator @load_data="load_data" ref="paginator" :page="page" :limit="limit" :total="total"></paginator>
  </div>
</template>


<script>
  import Paginator from '../../components/Paginator.vue'
  import Dict from '../../components/Dict.vue'
  import Breadcrumb from '../../components/Breadcrumb.vue'
  import SimpleSelect from '../../components/SimpleSelect.vue'

  export default {
    components: {
      "portalSelectSearch": SimpleSelect,
      "portalSelect": SimpleSelect,
      "paginator": Paginator,
      "breadcrumb": Breadcrumb
    },
    data() {
      return {
        breadcrumb_data: [
          {path: '/', name: '首页'},
          {path: '', name: '系统管理'},
          {path: '/permission_group', name: '权限分组'}
        ],
        list: [],
        dialog_form: false,
        search_form: {},
        myform: {
          id: '',
          portalSelect: '',
          groupName: ''
        },
        portal_options_search: Dict.SYSTEM_PORTAL,
        portal_options: Dict.SYSTEM_PORTAL
      }
    },
    created() {

    },
    mounted() {
      var v = this;
      v.$refs.portalSelectSearch.setValue(Dict.SYSTEM_PORTAL_.AUTH_CONSOLE);
      v.onSearch();
    },
    methods: {
      load_data: function (params) {
        var v = this;
        var portal_id = v.$refs.portalSelectSearch.value;
        if (portal_id == undefined || portal_id == '') {
          console.error("请选择系统！");
          return;
        }
        var url_ = '/permission_group/list/' + portal_id;
        if (v.$refs.paginator) {
          var pagination = '?page=' + v.$refs.paginator.page + '&limit=' + v.$refs.paginator.limit;
          url_ += pagination;
        }
        v.$api.get(url_, params, function (resp) {
          v.list = resp.data.items;
          v.total = resp.data.pagination.total;
        })
      },
      save: function () {
        var v = this;
        console.log('点击保存');
        console.log(v.myform);
        var params = {
          groupName: v.myform.groupName,
          portalId: v.$refs.portalSelect.value,
          id: v.myform.id,
          enabled: Dict.YESNO_.Y
        };
        var url_ = '/permission_group';
        if (params.id != undefined && params.id != '') {
          v.$api.put(url_, params, function (resp) {
            v.dialog_form = false;
            v.load_data();
          })
        } else {
          v.$api.post(url_, params, function (resp) {
            v.dialog_form = false;
            v.load_data();
          })
        }
      },
      del: function (index, row) {
        var v = this;
        var url_ = '/permission_group/' + row.id;
        v.$api.delete(url_, {}, function (resp) {
          v.load_data();
        })
      },
      onSearch: function () {
        this.load_data();
      },
      openDialog: function (row) {
        console.log('openDialog');
        var v = this;
        v.dialog_form = true;
        if (row == '' || row == undefined || row.id == '' || row.id == undefined) {
          return;
        }
        v.myform.id = row.id;
        v.myform.groupName = row.groupName;
        v.$nextTick(() => {
          v.$refs.portalSelect.setValue(row.portalId);
        })
      },
      open: function (row) {
        var v = this;
        console.log('open');
        console.log(v.$refs);
        v.$nextTick(() => {
          console.log('open..');
          console.log(v.$refs);
        })
      },
      permissions: function (row) {
        var v = this;
        v.$router.push({path: '/permissions/' + row.id});
      },
      closeDialog: function () {
        console.log('开始清空表单');
        this.$refs.portalSelect.setValue('');
        this.$refs.myform.id = '';
        this.$refs.myform.resetFields()
      }
    }
  }
</script>
