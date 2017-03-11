<template>
  <div style="background-color: white">
    <navBar :navbar_title="navbar_title"></navBar>
    <el-row>
      <el-button type="text" @click="detail">添加</el-button>
    </el-row>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="username" label="用户名称" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="enabled" label="是否启用"></el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <template scope="scope">
          <el-button type="text" size="small" @click="resetpwd(scope.row)">重置密码</el-button>
          <el-button type="text" size="small" @click="detail(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          <el-button type="text" size="small" @click="detail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="用户" v-model="dialog_form"
               :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="启用">
          <enabledSelect v-model="form.enabled" placeholder="请选择是否启用" ref="enabledSelect"
                         :dict_options="enabled_options"/>
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
  import Paginator from '../../components/common/Paginator.vue'
  import NavBar from '../../components/common/NavBar.vue'
  import DictionarySelect from '../../components/common/DictionarySelect.vue'
  import Dict from '../../components/const/Dict.vue'
  export default {
    components: {
      "paginator": Paginator,
      "navBar": NavBar,
      "enabledSelect": DictionarySelect
    },
    data() {
      return {
        navbar_title: '首页 > 系统管理 > 用户管理',
        list: [],
        dialog_form: false,
        enabled_options: Dict.YESNO,
        form: {
          username: '',
          nickname: '',
          enabled: 0,
          id: ''
        }
      }
    },
    created () {
      this.load_data()
    },
    methods: {
      load_data: function (params) {
        var v = this;
        var url_ = '/user/list';
        if (v.$refs.paginator != undefined) {
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
        var params = {
          username: v.form.username,
          nickname: v.form.nickname,
          enabled: v.form.enabled,
          id: v.form.id
        };
        var url_ = '/user';
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
      del: function (row) {
        var v = this;
        var url_ = '/user/' + row.id;
        v.$api.delete(url_, {}, function (resp) {
          v.load_data();
        })
      },
      detail: function (row) {
        var v = this;
        v.dialog_form = true;
        if (row.id == undefined) {
          v.form.username = '';
          v.form.nickname = '';
          v.form.id = '';
          v.form.enabled = Dict.YESNO_.N;
          console.log(v.$refs);
          console.log(v.$refs.enabledSelect);
          return;
        }
        var url_ = '/user/' + row.id;
        v.$api.get(url_, {}, function (resp) {
          v.form.username = resp.data.username;
          v.form.nickname = resp.data.nickname;
          v.form.enabled = resp.data.enabled;
          v.$refs.enabledSelect.setValue(resp.data.enabled);
          v.form.id = resp.data.id;
        })
      }
    },
  }
</script>
