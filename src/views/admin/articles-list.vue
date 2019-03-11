<template>
  <el-table :data="list" style="width: 100%" :row-class-name="tableRowClassName">
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="category" label="分类"></el-table-column>
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        date: '2016-05-02',
        category: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        category: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        category: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        category: '王小虎',
        title: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  },
  methods: {
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
  }
};
</script>

<style lang="stylus" scoped>
.el-table .warning-row
  background: oldlace

.el-table .success-row
  background: #f0f9eb
</style>
