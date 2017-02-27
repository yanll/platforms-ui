<template>
  <div>
    <el-table :data="list" stripe border style="width: 100%">
      <el-table-column prop="menuName" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="url" label="路由地址"></el-table-column>
    </el-table>
    <Paginator :page="page" :limit="limit" :total="total"></Paginator>
  </div>
</template>


<script>
  import Paginator from '../../components/common/Paginator.vue'

  export default {
    components: {
      Paginator
    },
    data() {
      return {
        list: [],
        param: {} // 向服务器传递参数
      }
    },
    created () {
      var v = this;
      console.log("-----1-----------3123-----------");
      console.log(v);
      console.log(v.total);
      this.get_data();
    },
    computed:{
      pages:function(){
        console.log('2222222222')
        var pag = [];
        if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem,this.allpage);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
            i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
            middle = (this.allpage - this.showItem) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页1 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页1: ${val}`);
      },
      get_data: function (params) {
        var v = this
        if (!params) params = {}
        v.$api.get('/menu/list', params, function (resp) {
          v.list = resp.data.items;
          v.page = resp.data.paginator.page;
          v.limit = resp.data.paginator.limit;
          v.total = resp.data.paginator.totalCount;
        })
      },
    },
  }
</script>
