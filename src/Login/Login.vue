<template>
  <Unauth>
    <div class="card login-container">
      <div class="form with-bottom-action">
        <span class="form-centered-title">Log in</span>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-alert
            v-if="error"
            center
            class="invalid-message"
            type="error"
            :title="error"
            :closable="false"
          ></el-alert>
          <el-form-item label="E-mail" prop="email">
            <el-input type="email" v-model="loginForm.email" placeholder="Your e-mail"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              @keyup.native.enter="login"
              v-model="loginForm.password"
              placeholder="Your password"
            ></el-input>
          </el-form-item>
          <el-form-item class="flex flex-row-reverse">
            <router-link :to="{ name: 'forgot-password' }" class="router-link">Forgot password?</router-link>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-action login-submit">
        <button type="submit" @click="login">Log in</button>
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
      loginForm: {
        email: "",
        password: ""
      },
      loginRules: {
        email: [
          { required: true, message: "Email is required", trigger: "blur" },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    Unauth
  },
  methods: {
    login() {
      this.error = "";
      api()
        .post("/auth/login", { ...this.loginForm })
        .then(
          data => {
            const token = R.pathOr(null, ["data", "token"])(data);
            this.$store.dispatch("user/setToken", token).then(() => {
              this.$router.push({ path: "/" });
            });
          },
          err => {
            const { data } = err.response;
            this.error = data;
            this.clearForm();
          }
        );
    },
    clearForm() {
      this.$refs["loginForm"].resetFields();
    }
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

<style>
.invalid-message {
  margin-top: 15px;
}
</style>
