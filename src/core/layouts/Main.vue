<template>
  <div class="main">
    <div class="main__sidebar">
      <div class="logo">
          <span>H</span>
      </div>
      <ul class="navbar"></ul>
      <div class="user-meta">
        <img src="http://i.pravatar.cc/300" class="user-meta-block">
      </div>
    </div>
    <div class="main__container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/_consts.scss";
.main {
    $sidebar-width: 80px;
  display: flex;
  &__sidebar {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: $sidebar-width;
    height: 100vh;
    background-color: $block-background;
    position: fixed;
    .logo {
      height: 80px;
      width: 80px;
      border-bottom: 1px solid rgba(white, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
          color: white;
          font-size: 42px;
      }
    }
    .navbar {
    }
    .user-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
      &-block {
        cursor: pointer;
        border: 1px solid $primary;
        border-radius: 100%;
        max-height: 40px;
        max-width: 40px;
        user-select: none;
      }
    }
  }
  &__container {
      margin: 60px;
      width: 100%;
      margin-left: calc(#{$sidebar-width} + 60px);
  }
}
</style>
