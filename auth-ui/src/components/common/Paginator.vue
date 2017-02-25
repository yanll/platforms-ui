<template>

  <div class="pagination-wrap">
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20]"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    props: {
      page: {type: Number, default: 1},
      limit: {type: Number, default: 10},
      total: {type: Number, default: 0}
    },
    data() {
      return {
        page: 1,
        total: 10,
        limit: 0
      };
    }
  }
</script>
