<template>
  <div class="interval-item" :class="{'active': selected}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../styles/_consts.scss';

.interval-item {
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid rgba(white, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 48px;
  color: rgba($color: white, $alpha: 0.4);
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  &.active {
      background-color: $primary;
      color: white;
  }
}
</style>
