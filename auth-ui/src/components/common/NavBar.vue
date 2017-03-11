<template lang="html">
  <!--<mime ref="child"></mime>-->
  <div class="progress-bar" :navbar_data="navbar_data" style="font-size: 12px;">
    {{navbar_title}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navbar_title: '',
        navbar_data: {}
      };
    },
    created () {
      this.load_data();
    },
    methods: {
      load_data: function (params) {
        var v = this
        if (params == undefined) params = {}
        if (v.navbar_title != undefined) console.log(v.navbar_title);
        if (v.navbar_data != undefined) console.log(v.navbar_data.data);
      }
    },
    props: {
      navbar_title: {type: String, default: ''},
      navbar_data: {type: Object, defaut: {}}
    }
  }
</script>
