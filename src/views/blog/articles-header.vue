<template>
  <div class="articles-header">
    <div class="title">{{article.title}}</div>
    <div class="date">{{article.create_date | date}}</div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  }
};
</script>

<style lang="stylus">
.articles-header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1.5% 8%
  border-left: 4px solid #4d4d4d
  color: #696969

  .title
    font-size: 30px
    cursor: pointer

  .date
    color: $gray
    font-size: 20px

@media screen and (max-width: 800px)
  .article-header
    border-left: none
    padding: 4% 0
    margin: 0 20px 20px
    display: block
    border-bottom: 1px dashed $default-border

    .title
      font-size: 20px

    .date
      font-size: 18px
      margin-top: 5px
</style>
