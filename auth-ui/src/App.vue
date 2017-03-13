<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <Top></Top>
      </el-col>
    </el-row>
    <el-row :gutter="6">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <NaviMenu></NaviMenu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <Container></Container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Top from './components/Top.vue'
  import NaviMenu from './components/NaviMenu.vue'
  import Container from './components/Container.vue'
  export default {
    name: 'app',
    components: {
      Top,
      NaviMenu,
      Container
    }
  }
</script>

