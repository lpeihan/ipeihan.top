<template>
  <div class="blog">
    <sidebar></sidebar>

    <div class="blog-content">
      <transition mode="out-in">
        <router-view :articles="articles"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar';
import { mapGetters, mapActions } from 'vuex';

export default {
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
  &-content
    margin-left: 300px
    padding: 24px
    background: #eee

  .fade
    &-enter
    &-leave-to
      opacity: 0

    &-enter-active
    &-leave-active
      transition: opacity 0.5s

  @media screen and (max-width: 800px)
    .blog
      &-content
        margin: 0
        padding: 0

</style>
