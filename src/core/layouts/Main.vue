<template>
  <div class="main">
    <div class="main__sidebar">
      <div class="logo">
        <router-link :to="{name: 'requests'}">
          <span class="logo-name">H</span>
        </router-link>
      </div>
      <ul class="navbar"></ul>
      <div class="user-meta">
        <el-popover placement="right" width="60" trigger="click">
          <div class="user-context__menu">
            <!-- <div class="user-context__menu-item">
              <router-link :to="{name: 'user'}">Profile</router-link>
            </div> -->
            <div class="user-context__menu-item">
              <a @click="logout">Logout</a>
            </div>
          </div>
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
            class="user-meta-block"
            slot="reference"
          >
        </el-popover>
      </div>
    </div>
    <div class="main__container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store
        .dispatch("user/logout")
        .then(() => this.$router.replace("/login"));
    }
  }
};
</script>


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
      a {
        text-decoration: none;
      }
      &-name {
        color: white;
        font-size: 42px;
        user-select: none;
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

<style lang="scss">
@import "../styles/_consts.scss";

.user-context {
  &__menu {
    display: flex;
    flex-direction: column;
    &-item {
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 4px;
      & > * {
        text-decoration: none;
        color: rgba(black, 0.6);
      }
      &:hover {
        background-color: rgba(black, 0.09);
      }
    }
  }
}
</style>
