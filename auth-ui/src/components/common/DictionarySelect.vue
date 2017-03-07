<!--todo-yll-fixme value 默认值设置-->
<template>
  <el-select v-model="value" :dict_options="dict_options" :placeholder="placeholder" @change="change"
             @setValue="setValue">
    <el-option v-for="item in dict_options" :label="item.desc" :value="item.value"></el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        dict_options: [],
        placeholder: '',
        value: ''
      }
    },
    props: {
      dict_options: {type: Object, defaut: {}},
      placeholder: {type: String, defaut: ''}
    },
    methods: {
      change(v){
        if (!v) return;
        console.log(v)
      },
      setValue(v){
        if (!v) return;
        this.value = v;
      }
    }
  }
</script>
