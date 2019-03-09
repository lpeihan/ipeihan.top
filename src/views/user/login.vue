<template>
  <div class="login">
    <icon name="back" @click="back()"></icon>
    user
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
  .icon-back
    color: red
</style>
