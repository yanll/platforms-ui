<template>
  <div style="background-color: white">


    <p></p>
    <p></p>
    <p></p>
    <p></p>

    <el-form  :inline="true" class="demo-form-inline" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name">
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-tree default-expand-all="true" :data="tree_data" :props="defaultProps" node-key="id"
                 highlight-current="true">
        </el-tree>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>

      <el-form-item label="名称">
        <el-input >
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>

      <el-form-item label="名称">
        <el-input >
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>

      <el-form-item label="名称">
        <el-input >
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>

      <el-form-item label="名称">
        <el-input >
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>

      <el-form-item label="名称">
        <el-input >
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>

      <el-form-item label="名称">
        <el-input >
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">

      </el-form-item>
      <el-form-item label="活动形式">
        <el-input ></el-input>
      </el-form-item>
    </el-form>


  </div>
</template>


<script>


  export default {
    components: {},
    data() {
      return {
        tree_data: [],
        defaultProps: {
          children: 'children',
          label: 'department_name'
        },
        dialog_form: false,
        search_form: {},
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    created() {
      this.onSearch();
    },
    mounted() {
      var v = this;

    },
    methods: {
      load_data: function () {
        console.log('开始加载菜单数据...');
        var v = this;


        var config = {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
          }
        };


        var instance = this.$axios.create({
          baseURL: 'http://127.0.0.1:8006/yuia-boss',
          timeout: 2000,
          headers: {'X-Requested-With': 'XMLHttpRequest'}
        });

        instance.get('/department/tree', {}, config).then(function (resp) {
          if (resp.data.code == 200) {
            console.log(resp);
            v.tree_data = resp.data.data;
          } else {
            console.log(resp);
          }
        }).catch((error) => {
          console.log(error);
        });

      },
      onSearch: function () {
        var v = this;
        this.load_data();
      }
    }
  }
</script>
