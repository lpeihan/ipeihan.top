<template>
  <div class="login">
    <el-form class="login-form">
      <div class="login-title">Login</div>

      <el-form-item prop="username">
        <el-input></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input></el-input>
      </el-form-item>

      <el-button type="primary" size="medium" class="login-btn">login</el-button>

      <div class="login-tips">
        <p>username: admin</p>
        <p>password: password</p>
      </div>
    </el-form>
  </div>
</template>

<style lang="stylus" scoped>
.login
  min-height: 100%
  color: #eee
  background: #2d3a4b

  .login-form
    position: relative
    width: 520px
    max-width: 100%
    padding: 160px 35px 0
    margin: 0 auto
    overflow: hidden

    .login-title
      text-align: center
      font-size: 26px
      margin-bottom: 40px
      font-weight: bold

    .login-btn
      width: 100%
      margin-bottom: 30px
</style>
