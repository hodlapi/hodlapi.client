<template>
  <Unauth>
    <div class="card login-container">
      <div class="form with-bottom-action">
        <span class="form-centered-title">Log in</span>
        <el-form ref="loginForm">
          <el-form-item label="E-mail">
            <el-input placeholder="Your e-mail"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input placeholder="Your password"></el-input>
          </el-form-item>
          <el-form-item class="flex flex-row-reverse">
            <router-link :to="{ name: 'forgot-password' }" class="router-link">
              Forgot password?
            </router-link>
          </el-form-item>
        </el-form>

      </div>
      <div class="form-action login-submit">
        <button>Log in</button>
      </div>
    </div>
  </Unauth>
</template>

<script>
import Unauth from "../core/layouts/Unauth";

export default {
  components: {
    Unauth
  }
};
</script>

<style lang="scss" scoped>
@import "../core/styles/_consts.scss";

.login {
  &-container {
    width: 360px;
    background: $main-background;
  }
  &-submit > button {
    background-color: $secondary;
  }
}
</style>
