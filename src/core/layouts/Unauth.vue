<template>
  <div class="unauth">
    <div class="unauth__container">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/_consts.scss";

.unauth {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: $block-background;
  }
}
</style>
