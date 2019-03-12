<template>
  <div class="home">
    <div class="item" v-for="item in articles" :key="item._id">
      {{item.title}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['articles'])
  },
  methods: {
    ...mapActions(['getArticles'])
  },
  asyncData ({ store, cookies }) {
    return store.dispatch('getArticles', { cookies });
  },
  async mounted() {
    if (this.articles.length <= 0) {
      await this.getArticles({});
    }
  }
};
</script>
