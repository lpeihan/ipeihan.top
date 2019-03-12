<template>
  <el-table :data="adminArticles" style="width: 100%" :row-class-name="tableRowClassName">
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

export default {
  computed: {
    ...mapGetters(['adminArticles'])
  },
  methods: {
    ...mapActions(['getAdminArticlesAction']),
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
