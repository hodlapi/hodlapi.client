<template>
  <Unauth>
    <div class="card forgot-password-container">
      <div class="form with-bottom-action">
        <span class="form-centered-title">Forgot Password</span>
        <el-form ref="restorePasswordForm">
          <el-form-item class="flex flex-center el-form-subtitle">
              Enter your e-mail below and we will send you a link to restore password
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Your e-mail"></el-input>
          </el-form-item>
          <el-form-item class="flex flex-center">
            <router-link :to="{ name: 'login' }" class="router-link">Back to Log In</router-link>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-action forgot-password-submit">
        <button>Restore password</button>
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

.form-centered-title {
      margin-bottom: 20px;
  }

.forgot-password {
  &-container {
    width: 360px;
    background: $main-background;
  }
  &-submit > button {
    background-color: $secondary;
  }

  
}
</style>
