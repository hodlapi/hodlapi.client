<template>
  <div class="exchange-item" :class="{'active': selected}">
    <img :src="item.logo" class="exchang-item-logo">
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    selected: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_consts.scss";

.exchange-item {
  cursor: pointer;
  height: 64px;
  width: 64px;
  border-radius: 6px;
  border: 1px solid rgba($color: #ffffff, $alpha: 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &.active {
    border-width: 2px;
    border-color: $primary;
  }
  &.logo {
    height: 34px;
    width: 34px;
  }
}
</style>
