<template>
  <Unauth>
    <div class="card forgot-password-container">
      <div class="form with-bottom-action">
        <span class="form-centered-title">Forgot Password</span>
        <el-form ref="restorePasswordForm" :model="forgotPassword" :rules="forgotPasswordRules">
          <el-alert
            v-if="error"
            center
            class="invalid-message"
            type="error"
            :title="error"
            :closable="false"
          ></el-alert>
          <el-form-item
            class="flex flex-center el-form-subtitle"
          >Enter your e-mail below and we will send you a link to restore password</el-form-item>
          <el-form-item prop="email">
            <el-input
              type="email"
              v-model="forgotPassword.email"
              placeholder="Your e-mail"
              @keydown.native.prevent.stop.enter
              @keyup.native.enter="resetPassword"
            ></el-input>
          </el-form-item>
          <el-form-item class="flex flex-center">
            <router-link :to="{ name: 'login' }" class="router-link">Back to Log In</router-link>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-action forgot-password-submit">
        <button @click="resetPassword">Restore password</button>
      </div>
    </div>
  </Unauth>
</template>

<script>
import Unauth from "../core/layouts/Unauth";
import { api } from "../core/lib";
import * as R from "ramda";

export default {
  data() {
    return {
      error: "",
      forgotPassword: {
        email: ""
      },
      forgotPasswordRules: {
        email: [
          { required: true, message: "Email is required", trigger: "blur" },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  components: {
    Unauth
  },
  methods: {
    resetPassword() {
      const { email } = this.forgotPassword;
      this.error = "";
      api()
        .post("/auth/password-reset", { email })
        .then(
          () => {
            this.clearForm();
            this.$message({
              dangerouslyUseHTMLString: true,
              type: "success",
              duration: 3000,
              message:
                "<div>Your password was successfully changed!</div></br><div> We have sent you an email with new password :)</div>"
            });
            this.$router.push({ path: "/login" });
          },
          error => {
            const { data } = R.propOr({ data: "Something went wrong" })(
              "response"
            )(error);
            this.error = data;
            this.clearForm();
          }
        );
    },
    clearForm() {
      this.$refs["restorePasswordForm"].resetFields();
    }
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
