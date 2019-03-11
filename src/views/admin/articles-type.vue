<template>
  <div class="articles-type">
    <types :tags="tags"></types>
  </div>
</template>

<script>
import Types from './types';

export default {
  components: {
    Types
  },
  data() {
    return {
      tags: ['Nodejs', 'JavaScript', 'Vuejs', 'MongDB', 'Redis', 'Electron']
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>
