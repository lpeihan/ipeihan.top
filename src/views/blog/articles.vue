<template>
  <div class="articles">
    <div class="articles-item markdown-body" v-for="(article) in articles" :key="article.id">
      <div class="articles-item-content" v-html="article.html"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  }
};
</script>

<style lang="stylus" scoped>
.articles
  &-item
    background: white
    box-shadow: 3px 3px 5px #ddd
    margin-bottom: 25px

    &-content
      padding: 1% 4%

  .markdown-body
    box-sizing: border-box
    max-width: 980px
</style>
