<template>
  <div class="tags">
    <div class="header">标签云</div>
    <div class="container">
      <div class="tag-list">
        <div
          class="item"
          :style="{ fontSize: tag.fontSize + 'px', opacity: tag.opacity }"
          v-for="tag in tagsWithStyle"
          :key="tag.tag"
        >{{tag.tag}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const TAGS = ['html', 'css', 'javascript', 'vue', 'vuex', 'react', 'redux', 'http', 'ajax', 'webpack', 'gulp',
      'node', 'express', 'koa', 'mongodb', 'mongoose', 'redis', 'linux', 'leetcode', 'git', 'github',
      'photoshop', '数据结构', 'json', 'cors', 'markdown', 'hexo', 'atom', 'vscode', 'jquery'];
    return {
      tags: TAGS
    };
  },
  computed: {
    tagsWithStyle() {
      return this.tags.map(tag => {
        return {
          tag,
          fontSize: this.random(14, 32),
          opacity: this.random(3, 10) / 10
        };
      });
    }
  },
  methods: {
    random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }
};
</script>

<style lang="stylus">
.tags
  box-shadow: 3px 3px 5px #ddd
  background: white

  .header
    padding-top: 20px
    text-align: center
    font-size: 30px
    color: #888

  .container
    padding: 30px

    @media screen and (max-width: 800px)
      padding: 20px

    .tag-list
      vertical-align: baseline

      .item
        text-transform: capitalize
        position: relative
        display: inline-block
        margin-right: 25px
        cursor: pointer
        border-bottom: 1px solid #888
        margin-bottom: 20px
        transition: all 0.5s

        &:hover
          border-bottom: 3px dotted #888
          color: #333
          opacity: 1 !important
</style>
