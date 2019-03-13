<template>
  <div class="articles">
    <div class="articles-item markdown-body" v-for="(article, index) in articles" :key="article.id">
      <articles-header :article="article" :index="index"></articles-header>
      <div class="articles-item-content" v-html="article.summary"></div>
      <articles-footer :article="article" :index="index"></articles-footer>
    </div>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="10"
      :total="articlesTotal"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import ArticlesHeader from './articles-header';
import ArticlesFooter from './articles-footer';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    ArticlesHeader,
    ArticlesFooter
  },
  props: {
    articles: Array
  },
  computed: {
    ...mapGetters(['articlesTotal'])
  },
  methods: {
    ...mapActions(['getArticles']),
    handleCurrentChange(val) {
      this.getArticles({
        start: 10 * (val - 1),
        limit: 10
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.articles
  &-item
    box-sizing: border-box
    max-width: 980px
    background: white
    box-shadow: 3px 3px 5px #ddd
    margin-bottom: 25px

    &-content
      padding: 1% 8%

  .el-pagination
    text-align: center
    margin-top: 20px
</style>
