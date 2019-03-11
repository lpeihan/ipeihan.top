<template>
  <div class="login">
    <el-form :model="model" class="login-form" :rules="rules" ref="form">
      <div class="title">Welcome</div>

      <el-form-item prop="username" class="username-item">
        <el-input type="text" clearable placeholder="请输入用户名" v-model="model.username"></el-input>
      </el-form-item>

      <el-form-item prop="password" class="username-item">
        <el-input
          show-password
          class="password-input"
          type="password"
          placeholder="请输入密码"
          v-model="model.password"
        ></el-input>
      </el-form-item>

      <el-button class="login-btn" type="primary" @click.native.prevent="login">登录</el-button>
    </el-form>
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
      },
      rules: {
        username: [{ required: true,
          trigger: 'blur',
          validator: (rule, val, cb) => {
            val ? cb() : cb(new Error('请输入用户名'));
          } }],
        password: [{ required: true,
          trigger: 'blur',
          validator: (rule, val, cb) => {
            val ? cb() : cb(new Error('请输入密码'));
          } }]
      }
    };
  },
  methods: {
    ...mapActions(['loginAction', 'registerAction']),
    async login(e) {
      this.$refs.form.validate(async valid => {
        if (valid) {
          await this.loginAction(this.model);
          this.$router.push('/admin/articles-list');
        }
      });
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
.login
  min-height: 100%
  background: #2d3a4b
  background: url('~@/assets/imgs/login-bg.jpg') no-repeat
  background-size: 100% 100%

  .login-form
    max-width: 400px
    width: 80%
    margin: 200px auto

    .title
      font-size: 24px
      color: white
      margin-bottom: 20px
      font-weight: bold

    .username-item
      margin-bottom: 30px

    .login-btn
      width: 100%
</style>
