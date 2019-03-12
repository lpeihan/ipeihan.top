<template>
  <el-table :data="list" style="width: 100%" :row-class-name="tableRowClassName">
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="create_date" label="日期"></el-table-column>
    <el-table-column prop="tags" label="标签"></el-table-column>
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import dayjs from 'dayjs';

export default {
  computed: {
    ...mapGetters(['adminArticles']),
    list() {
      const list = JSON.parse(JSON.stringify(this.adminArticles));
      return list.map(item => {
        item.tags = item.tags.join();
        item.create_date = dayjs(item.create_date).format('YY-MM-DD HH:mm:ss');
        return item;
      });
    }
  },
  methods: {
    ...mapActions(['getAdminArticlesAction', 'setCurrentArticle', 'deleteAdminArticleAction']),
    handleEdit(index, row) {
      this.setCurrentArticle(this.adminArticles[index]);
      this.$router.push('/admin/articles-edit');
    },
    async handleDelete(index, row) {
      await this.deleteAdminArticleAction(row._id);
      this.$message({
        type: 'success',
        message: '删除文章成功'
      });

      this.getAdminArticlesAction({});
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  asyncData ({ store, cookies }) {
    return store.dispatch('getAdminArticlesAction', { cookies });
  },
  mounted() {
    this.getAdminArticlesAction({});
  }
};
</script>

<style lang="stylus" scoped>
.el-table .warning-row
  background: oldlace

.el-table .success-row
  background: #f0f9eb
</style>
