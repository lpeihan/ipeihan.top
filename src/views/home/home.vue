<template>
  <div class="home">
    <router-link to="/login">login1s2</router-link>

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
    ...mapActions(['fetchArticles'])
  },
  asyncData ({ store }) {
    return store.dispatch('fetchArticles');
  }
};
</script>
