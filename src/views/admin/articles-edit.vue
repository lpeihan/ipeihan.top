<template>
  <div class="articles-new">
    <div class="title-wrapper">
      <el-input type="text" placeholder="请输入标题" v-model="currentArticle.title">
        <el-select v-model="select" slot="prepend" placeholder="请选择分类">
          <el-option label="全部分类" value="1"></el-option>
          <el-option label="Javascript" value="2"></el-option>
          <el-option label="CSS" value="3"></el-option>
          <el-option label="Nodejs" value="4"></el-option>
        </el-select>
      </el-input>
    </div>

    <el-input type="textarea" class="textarea" placeholder="请输入内容" v-model="currentArticle.content"></el-input>

    <div class="bottom-btns">
      <types :tags="currentArticle.tags" addName="new tag"></types>

      <div class="right-btn">
        <el-button @click="$router.push('/admin/articles-list')">取消</el-button>
        <el-button @click="preview">预览</el-button>
        <el-button type="primary" @click="update">保存</el-button>
      </div>
    </div>

    <modal ref="modal">
      <div class="markdown-body">
        <div class="preview" v-html="html"></div>
      </div>
    </modal>
  </div>
</template>

<script>
import Types from './types';
import { mapActions, mapGetters } from 'vuex';
import marked from '@/utils/marked';
import Modal from '@/components/modal/modal';

export default {
  components: {
    Types,
    Modal
  },
  data() {
    return {
      select: '1',
      html: ''
    };
  },
  computed: {
    ...mapGetters(['currentArticle'])
  },
  methods: {
    ...mapActions(['updateAdminArticleAction']),
    async update() {
      await this.updateAdminArticleAction(this.currentArticle);

      this.$message({ type: 'success', message: '修改文章成功' });
      this.$router.push('/admin/articles-list');
    },
    preview() {
      this.html = marked(this.currentArticle.content);
      this.$refs.modal.open();
    }
  }
};
</script>

<style lang="stylus" scoped>
.articles-new
  height: 100%

  >>>.types
    margin: 10px 0

  .textarea
    height: calc(100% - 150px)
    margin-top: 20px

    >>>.el-textarea__inner
      height: 100%

  >>>.el-select .el-input
    width: 130px

  .bottom-btns
    margin-top: 10px
    display: flex
    align-items: center
    justify-content: space-between

  .markdown-body
    box-sizing: border-box
    max-width: 980px

    .preview
      padding: 1% 8%
</style>
