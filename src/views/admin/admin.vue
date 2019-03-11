<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '1']" default-active="1-1" unique-opened>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>文章管理
          </template>
          <el-menu-item index="1-1" @click="go('/admin/articles-list')">文章列表</el-menu-item>
          <el-menu-item index="1-2" @click="go('/admin/articles-new')">发布文章</el-menu-item>
          <el-menu-item index="1-3" @click="go('/admin/articles-type')">添加分类</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>用户信息
          </template>
          <el-menu-item index="2-1" @click="go('/admin/modify')">修改资料</el-menu-item>
          <el-menu-item index="2-2" @click="go('/admin/web-info')">网站信息</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <span>{{$route.name}}</span>
        <el-dropdown style="float: right; cursor: pointer;" trigger="click">
          <span>
            你好，{{user.username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改资料</el-dropdown-item>
            <el-dropdown-item @click.native="goGithub">github</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <transition mode="out-in">
          <router-view class="router-view"></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logoutAction']),
    go(path) {
      this.$router.push(path);
    },
    goGithub() {
      window.open('https://github.com/lpeihan/koa-ssr');
    },
    async logout() {
      await this.logoutAction();
      this.$router.push('/admin/login');
    }
  }
};
</script>
<style lang="stylus">
.el-header
  background: url('~@/assets/imgs/login-bg.jpg')
  opacity: 0.5
  color: white
  line-height: 60px

.el-aside
  color: #333

.el-dropdown
  color: white !important

.router-view
  &.v
    &-enter-active
    &-leave-active
      transition: all .3s
    &-enter
    &-leave-to
      opacity: 0
</style>
