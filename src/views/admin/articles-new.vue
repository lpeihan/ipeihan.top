<template>
  <div class="articles-new">
    <div class="title-wrapper">
    <el-input type="text" placeholder="请输入标题" v-model="model.title">
      <el-select v-model="select" slot="prepend" placeholder="请选择分类">
        <el-option label="全部分类" value="1"></el-option>
        <el-option label="Javascript" value="2"></el-option>
        <el-option label="CSS" value="3"></el-option>
        <el-option label="Nodejs" value="4"></el-option>
      </el-select>
    </el-input>
    </div>

    <el-input type="textarea" class="textarea" placeholder="请输入内容" v-model="model.content"></el-input>

    <div class="bottom-btns">
      <types :tags="model.tags" addName="new tag"></types>

      <div class="right-btn">
        <el-button>取消</el-button>
         <el-button>预览</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Types from './types';
import { mapActions } from 'vuex';

export default {
  components: {
    Types
  },
  data() {
    return {
      model: {
        title: '',
        content: '',
        tags: []
      },
      select: '1'
    };
  },
  methods: {
    ...mapActions(['saveAdminArticleAction']),
    async save() {
      await this.saveAdminArticleAction(this.model);

      this.$message({ type: 'success', message: '发布文章成功' });
      this.$router.push('/admin/articles-list');
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
</style>
