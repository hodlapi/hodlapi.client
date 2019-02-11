<template>
  <Main>
    <el-row :gutter="40">
      <el-col :span="16">
        <UserSettings/>
      </el-col>
      <el-col :span="8">
        <SubscriptionSettigns/>
      </el-col>
    </el-row>
  </Main>
</template>

<script>
import Main from "../core/layouts/Main";
import SubscriptionSettigns from "./SubscriptionSettings";
import UserSettings from "./UserSettings";

export default {
  components: {
    SubscriptionSettigns,
    UserSettings,
    Main
  }
};
</script>
