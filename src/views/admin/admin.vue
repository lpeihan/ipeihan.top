<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '1']" default-active="1-1">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>文章管理
          </template>
          <el-menu-item index="1-1" @click="$router.push('/admin/articles')">发布文章</el-menu-item>
          <el-menu-item index="1-2">管理文章</el-menu-item>
          <el-menu-item index="1-3">添加分类</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>用户信息
          </template>
          <el-menu-item index="2-1">修改资料</el-menu-item>
          <el-menu-item index="2-2">网站信息</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <span>
              你好，{{user.username}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改资料</el-dropdown-item>
            <el-dropdown-item>github</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.user.username) {
        vm.$router.push('/admin/login');
      }
    });
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
