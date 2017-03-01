<template lang="html">

  <div class="logo">333</div>
  <el-menu id="nav-menu">
    <el-menu-item index="2"><router-link to="/" class="nav-link"><i class="el-icon-menu"></i>首页</router-link></el-menu-item>
    <el-submenu index="10">
      <template slot="title" index="2"><i class="el-icon-menu"></i>系统管理</template>
      <el-menu-item  index="3"><router-link to="/permission" class="nav-link">权限管理</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/menu" class="nav-link">菜单管理</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/user" class="nav-link">用户管理</router-link></el-menu-item>
      <el-submenu  index="9">
        <template slot="title" index="6">日志管理</template>
        <el-menu-item index="7"><router-link to="/2" class="nav-link">系统日志</router-link></el-menu-item>
        <el-menu-item index="8"><router-link to="/3" class="nav-link">操作日志</router-link></el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>


