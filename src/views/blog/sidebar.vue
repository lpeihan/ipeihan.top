<template>
  <div class="sidebar">
    <div class="container">
      <div class="avatar" @click="$router.push('/')">
        <img src="@/assets/imgs/avatar.png" alt="avatar" with="100%" height="100%">
      </div>
      <div class="title">Lpeihan</div>
      <div class="sub-title">
        凡心所向，素履以往。
      </div>
      <div class="menu-btn" @click="menuShow = !menuShow">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div :style="{ height: menuShow ? '186px' : 0, transition: 'all .3s' }">
        <div class="nav">
          <div class="item" @click="$router.push('/')">首页</div>
          <div class="item" @click="$router.push('/tags')">标签</div>
          <div class="item"  @click="$router.push('/archives')">归档</div>
        </div>
        <div class="links">
          <a class="item github" href="https://github.com/lpeihan" target="_blank"></a>
          <a class="item weibo"></a>
          <a class="item zhihu"></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false
    };
  },
  watch: {
    $route() {
      this.menuShow = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .sidebar
    fixed: top 0 left 0 bottom 0
    width: 300px
    background: rgb(246, 248, 250)
    overflow: auto
    &::before
      content: ''
      height: 160px
      absolute: top 0 left 0 right 0
      background: #5d5d5d
    .container
      margin-top: 160px
      text-align: center
      .menu-btn
        display: none
      .avatar
        position: relative
        margin: -55px auto 0
        size: 110px
        border: 5px solid $white
        overflow: hidden
        border-radius: 50%
        cursor: pointer
        &:hover
          border: 5px solid rgb(234, 217, 204)
          box-shadow: 0 0 1.5em rgb(234, 217, 204)
          animation: shake 0.15s linear infinite alternate
          @keyframes shake
            from
              right: 4px
              top: 1px
            to
              right: 0px
              top: -1px
      .title
        font-size: 28px
        font-family: "Times New Roman", Georgia, Times, sans-serif
        font-weight: bold
        margin: 20px
        color: #666
      .sub-title
        color: #999
        margin-bottom: 40px
      .nav
        color: #999
        margin-bottom: 40px
        .item
          padding: 8px 0
          cursor: pointer
          &:hover
            color: #333
      .links
        text-align: center
        .item
          width: 32px
          height: 32px
          border-radius: 50%
          box-shadow: 1px 1px 3px rgba(0,0,0,0.3)
          display: inline-block
          margin-right: 20px
          cursor: pointer
          position: relative
          &:last-child
            margin-right: 0
          &.github
            background: url(//cdn.bootcss.com/logos/0.2.0/github-octocat.svg) no-repeat #fff
            background-size: 100%
          &.weibo
            background: url('~@/assets/imgs/weibo.png') no-repeat #fff
            background-size: 100%
          &.zhihu
            background: url('~@/assets/imgs/zhihu.png') no-repeat #fff
            background-size: 100%
  @media screen and (max-width: 800px)
    .sidebar
      position: relative
      width: 100%
      background: rgba(234, 217, 204, 0.4)
      &::before
        height: 80px
      .container
        margin-top: 80px
        .menu-btn
          box-sizing: content-box
          display: flex
          position: absolute
          top: 28px
          width: 28px
          height: 28px
          left: 28px
          border-radius: 5px
          padding: 0 5px
          flex-wrap: wrap
          align-content: space-around
          .line
            flex: 100%
            width: 25px
            height: 2px
            background: $white
            border-radius: 2px
        .avatar
          margin: -60px auto 0
          size: 90px
          border: 3px solid $white
          &:hover
            animation: none
            border: 3px solid rgb(234, 217, 204)
        .title
          margin: 10px
        .sub-title
          margin-bottom: 10px
        .nav
          margin-bottom: 20px
        .links
          padding-bottom: 20px
</style>
