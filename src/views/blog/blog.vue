<template>
  <div class="home">
    <router-link to="/admin/login">login</router-link>

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
  asyncData ({ store }) {
    return store.dispatch('getArticles');
  },
  async mounted() {
    if (this.articles.length <= 0) {
      await this.getArticles();
    }
  }
};
</script>
