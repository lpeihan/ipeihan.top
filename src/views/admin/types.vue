<template>
  <div class="types">
    <el-tag
      :type="types[index % 5]"
      :key="tag"
      v-for="(tag, index) in tags"
      closable
      @close="handleClose(tag)"
      :size="size"
    >{{tag}}</el-tag>

    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    ></el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ {{addName}}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: '' // mini small
    },
    addName: {
      type: String,
      default: '添加分类'
    }
  },
  data() {
    return {
      inputVisible: false,
      inputValue: '',
      types: ['', 'success', 'info', 'warning', 'danger']
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
};
</script>

<style lang="stylus" scoped>
.types
  .el-tag + .el-tag
    margin-left: 20px

  .button-new-tag
    margin-left: 10px
    height: 32px
    line-height: 30px
    padding-top: 0
    padding-bottom: 0

  .input-new-tag
    width: 90px
    margin-left: 10px
    height: 32px
    vertical-align: bottom

    >>>.el-input__inner
      height:  36px
      line-height: 36px
</style>
