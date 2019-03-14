<template>
  <div class="blog">
    <sidebar></sidebar>

    <div class="blog-content">
      <transition mode="out-in">
        <router-view class="router-view" :articles="articles"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar';
import { mapGetters, mapActions } from 'vuex';

export default {
  metaInfo: {
    title: 'Lpeihan\'s 博客'
  },
  components: {
    Sidebar
  },
  computed: {
    ...mapGetters(['articles'])
  },
  methods: {
    ...mapActions(['getArticles'])
  },
  asyncData({ store, cookies }) {
    return store.dispatch('getArticles', { cookies });
  },
  async mounted() {
    if (this.articles.length <= 0) {
      await this.getArticles({});
    }
  }
};
</script>

<style lang="stylus" scoped>
.blog
  .router-view
    &.v
      &-enter-active
      &-leave-active
        transition: all 0.3s

      &-enter
      &-leave-to
        opacity: 0

  &-content
    margin-left: 300px
    min-height: 100vh
    padding: 24px
    background: #eee

  @media screen and (max-width: 800px)
    .blog
      &-content
        margin: 0
        padding: 0
</style>
