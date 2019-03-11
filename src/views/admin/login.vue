<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" v-model="model.username">
    <input type="password" placeholder="请输入密码" v-model="model.password">
    <button @click="register">注册</button>
    <button @click="login">登录</button>
    <button @click="back">文章列表</button>
    <button @click="$router.push('/admin')">管理员</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['loginAction', 'registerAction']),
    async login() {
      await this.loginAction(this.model);
      this.$router.push('/admin/articles-list');
    },
    async register() {
      await this.registerAction(this.model);
      this.$router.push('/');
    },
    back() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
