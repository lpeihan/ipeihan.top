<template>
  <div class="modify">
    <div class="item">
      <el-input
        disabled
        type="text"
        placeholder="用户名"
        v-model="user.username"
      >
        <template slot="prepend">用户名</template>
      </el-input>
    </div>

    <div class="item">
      <el-input
        show-password
        type="password"
        placeholder="请输入旧密码"
        v-model="model.oldPassword"
      >
        <template slot="prepend">旧密码</template>
      </el-input>
    </div>

    <div class="item">
      <el-input
        show-password
        type="password"
        placeholder="请输入新密码"
        v-model="model.password"
      >
        <template slot="prepend">新密码</template>
      </el-input>
    </div>

    <el-button style="float: right" type="primary" @click="confirm">确认修改</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      model: {
        oldPassword: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['modifyAction']),
    async confirm() {
      await this.modifyAction(this.model);
      this.$message({
        type: 'success',
        message: '修改用户信息成功'
      });

      this.$router.push('/admin');
    }
  }
};
</script>

<style lang="stylus" scoped>
.modify
  width: 320px
  margin: 50px auto 0

  .item
    margin-bottom: 20px
</style>
