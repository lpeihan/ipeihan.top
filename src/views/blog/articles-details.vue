<template>
  <div class="articles-details markdown-body">
    <articles-header :article="articles[index]"></articles-header>
    <div class="articles-details-content" v-html="articles[index].html"></div>
    <articles-footer :article="articles[index]" :moreShow="false"></articles-footer>
  </div>
</template>

<script>
import ArticlesHeader from './articles-header';
import ArticlesFooter from './articles-footer';
export default {
  props: {
    articles: Array
  },
  components: {
    ArticlesHeader,
    ArticlesFooter
  },
  data() {
    return {
      index: 0
    };
  },
  created() {
    this.index = this.$route.params.index;
  }
};
</script>

<style lang="stylus" scoped>
.articles-details
  max-width: 980px
  background: white
  box-shadow: 3px 3px 5px #ddd
  &-content
    padding: 1% 8%
</style>
