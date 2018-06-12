<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-title">
        <span style="font-size: 18px;color: #fff;">后台管理系统</span>
        <!--展开折叠开关-->
        <span class="menu-toggle" style="margin-left: 48px;" @click.prevent="collapse">
          <span style="cursor: pointer" v-show="!collapsed">收起</span>
          <span style="cursor: pointer" v-show="collapsed">展开</span>
        </span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner">
            <i class="iconfont icon-user"></i>
              管理员
            <i class="iconfont icon-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div><span style="color: #555;font-size: 14px;">个人信息</span></div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div><span style="color: #555;font-size: 14px;">修改密码</span></div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">

        <span v-show="!collapsed">
          <NaviMenu></NaviMenu>
        </span>
      </aside>

      <!--右侧内容区-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <Container></Container>
          </el-col>
        </div>
      </section>
    </el-col>

  </el-row>
</template>
<script>
  import Top from '../components/Top.vue'
  import NaviMenu from '../components/NaviMenu.vue'
  import Container from '../components/Container.vue'


  export default {
    components: {
      Top,
      NaviMenu,
      Container
    },
    data() {
      return {
        collapsed: false,
      }
    },
    methods: {
      collapse: function () {
        console.log(this.collapsed);
        this.collapsed = !this.collapsed;
      },
      logout: function () {
        this.$router.push({name: 'login', params: {}})
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .topbar-wrap {
      height: 50px;
      line-height: 50px;
      background: #373d41;
      padding: 0px;
      .topbar-btn {
        color: #fff;
      }
      .topbar-logo {
        float: left;
        width: 60px;
        line-height: 26px;
      }
      .topbar-logos {
        float: left;
        width: 120px;
        line-height: 26px;
      }
      .topbar-title {
        float: left;
        text-align: left;
        width: 200px;
        padding-left: 10px;
        border-left: 0px solid #000;
      }
      .topbar-account {
        float: right;
        padding-right: 12px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
    }
    aside {
      width: 0px;
      background: #4A5064;
      &::-webkit-scrollbar {
        display: none;
      }
      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
        width: 200px;
      }
    }
    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 26px;
    }
    .content-container {
      background: #fff;
      flex: 1;
      overflow-y: auto;
      padding: 6px;
      padding-bottom: 0px;
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
