<template>
    <el-card class="block user-settings-wr">
        <el-form
            :model="userSettingsForm"
            :rules="userSettingRules"
            ref="userSettingsForm"
            class="user-settings-form"
        >
            <el-header height="auto" class="block-title user-settings-title">
                User Settings
            </el-header>
            <el-form-item label="e-mail" prop="email" class="user-settings-input">
                <el-input type="email" v-model="userSettingsForm.email"/>
            </el-form-item>
            <el-form-item label="old password" prop="oldPassword" class="user-settings-input">
                <el-input type="password" v-model="userSettingsForm.oldPassword"/>
            </el-form-item>
            <el-form-item label="new password" prop="newPassword" class="user-settings-input">
                <el-input type="password" v-model="userSettingsForm.newPassword"/>
            </el-form-item>
            <el-form-item label="confirm new password" prop="newPasswordConfirm" class="user-settings-input">
                <el-input type="password" v-model="userSettingsForm.newPasswordConfirm"/>
            </el-form-item>
        </el-form>
        <el-button type="submit" class="footer--button user-settings-submit">save</el-button>
    </el-card>
</template>

<script>
  export default {
    data() {
      return {
        userSettingsForm: {
          email: '',
          oldPassword: '',
          newPassword: '',
          newPasswordConfirm: ''
        },
        userSettingRules: {
          email: { required: true, message: 'Enter email', trigger: 'blur' },
          oldPassword: { required: true, message: 'Enter old password', trigger: 'blur' },
          newPassword: { required: true, message: 'Enter new password', trigger: 'blur' },
          newPasswordConfirm: { required: true, message: 'confirm new password', trigger: 'blur' },
        }
      }
    }
  }
</script>

<style lang="scss">
    .user-settings-form {
        padding: 32px 32px 12px;
    }
    .user-settings-input {
        margin-bottom: 30px;
        & label {
            text-transform: uppercase;
            color: #fff;
            font-weight: 600;
            &::before {
                display: none;
            }
        }
        & input {
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-sizing: border-box;
            border-radius: 6px;
            background: none;
        }
    }
</style>