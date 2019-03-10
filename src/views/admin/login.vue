<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" v-model="model.username">
    <input type="password" placeholder="请输入密码" v-model="model.password">
    <button @click="register">注册</button>
    <button @click="login">登录</button>
    <button @click="back"></button>
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
    login() {
      this.loginAction(this.model);
    },
    register() {
      this.registerAction(this.model);
    },
    back() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
