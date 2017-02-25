<template lang="html">
  <el-menu id="nav-menu" theme="dark">
    <div class="logo"></div>
    <el-menu-item ><router-link to="/" class="nav-link"><i class="el-icon-menu"></i>首页</router-link></el-menu-item>
    <el-submenu  >
      <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
      <el-menu-item  ><router-link to="/permission" class="nav-link">权限管理</router-link></el-menu-item>
      <el-menu-item ><router-link to="/menu" class="nav-link">菜单管理</router-link></el-menu-item>
      <el-menu-item ><router-link to="/user" class="nav-link">用户管理</router-link></el-menu-item>
    </el-submenu>
  </el-menu>
</template>
