<template>
  <div class="articles-footer">
    <div class="tag-list">
      <a
        @click="$router.push(`/tags/${tag}`)"
        class="tag"
        v-for="(tag, index) in article.tags"
        :key="index"
      >{{tag}}</a>
    </div>
    <a v-if="moreShow" class="more" @click="$router.push(`/articles/details/${index}`)">展开全文 >></a>
    <a v-else class="more" @click="$router.push('/')">返回首页</a>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
    index: Number,
    moreShow: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.articles-footer
  color: $white
  display: flex
  justify-content: space-between
  align-items: center
  margin: 0 8%
  border-top: 1px solid #eaecef
  height: 80px

  .tag-list
    font-size: 14px
    margin-left: 9px

    .tag
      position: relative
      float: left
      height: 18px
      padding: 0 6px 0 8px
      line-height: 18px
      background: #ba8f6c
      margin-right: 20px
      border-top-right-radius: 5px
      border-bottom-right-radius: 5px
      cursor: pointer

      &:hover
        transform: scale(1.1)

      &::before
        position: absolute
        left: -18px
        content: ''
        width: 0
        height: 0
        border: 9px solid transparent
        border-right: 9px solid #ba8f6c

      &::after
        position: absolute
        top: 50%
        transform: translateY(-50%)
        left: 0
        background: $white
        content: ''
        width: 4px
        height: 4px
        border-radius: 50%
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3)

  .more
    background: #4d4d4d
    padding: 5px 0
    text-align: center
    flex: 0 0 96px
    font-size: 14px
    border-radius: 2px
    cursor: pointer

@media screen and (max-width: 800px)
  .article-footer
    margin: 0 20px
    height: 70px

    .tag-list
      .tag
        margin: 0 15px 5px 0
</style>
