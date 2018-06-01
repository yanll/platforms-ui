<template>
  <div style="background-color: white">
    <breadcrumb :breadcrumb_data="breadcrumb_data"></breadcrumb>

  </div>
</template>


<script>
  import Breadcrumb from '../../components/Breadcrumb.vue'


  export default {
    components: {
      "breadcrumb": Breadcrumb
    },
    data() {
      return {
        breadcrumb_data: []
      }
    },
    created() {

    },
    mounted() {
      var v = this;
      console.log("breadcrumb_data...");
      console.log(v.$route);
      this.breadcrumb_data = [
        {path: '', name: '首页'},
        {path: '', name: '演示管理'},
        {path: '', name: '面包屑'}
      ]
    },
    methods: {}
  }
</script>
