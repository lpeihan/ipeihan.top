<template>
  <transition>
    <div class="modal" v-show="show" @click="close">
      <div class="modal-content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.modal
  fixed: top left right bottom
  background: $color-overlay
  &.v
    &-enter-active
    &-leave-active
      transition: all .3s

      .modal-content
        transition: all .3s

    &-enter
    &-leave-to
      opacity: 0

      .modal-content
        transform: translate(-50%, -50%) scale(0.7)
        opacity: 0

  &-content
    absolute: top 50% left 50%
    transform: translate(-50%, -50%)
    min-height: 300px
    min-width: 300px
    background: white
    max-height: 90%
    overflow: auto
    border-radius: 5px
</style>
