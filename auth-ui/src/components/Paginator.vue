<template>
  <div style="text-align: right;">
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @logs="logs"
      :page-sizes="[10, 20, 50]"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>
<script>
  var DEFAULT_PAGE = 1;
  var DEFAULT_LIMIT = 20;
  var DEFAULT_TOTAL = 0;
  export default {

    methods: {
      handleSizeChange(val) {
        this.page = DEFAULT_PAGE;
        this.limit = val;
        this.$emit('load_data');
        console.log(`limit:${val}`);
      },
      handleCurrentChange(val) {
        this.page = val;
        this.$emit('load_data');
        console.log(`page:${val}`);
      },
      logs(val) {
        console.log(val);
      }
    },
    props: {
      page: {
        type: Number,
        default: DEFAULT_PAGE
      },
      limit: {
        type: Number,
        default: DEFAULT_LIMIT
      },
      total: {
        type: Number,
        default: DEFAULT_TOTAL
      }
    },
    data() {
      return {};
    }
  }
</script>
