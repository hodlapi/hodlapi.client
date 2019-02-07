<template>
  <div id="app">
    <el-row type="flex" :justify="'center'" :glutter="20">
      <el-col :span="12" :xs="24">
        <subscription-settings />
        <user-settings />
        <request-form />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RequestForm from "./components/RequestForm.vue";
import UserSettings from './components/UserSettings/UserSettings'
import SubscriptionSettings from './components/SubscripionSettings/SubscribtionSettings'

export default {
  name: "app",
  components: {
    RequestForm,
    UserSettings,
    SubscriptionSettings
  }
};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  body {
    background: #21292F;
  }
  .footer--button {
    background: #00A192;
    padding: 19px 0 20px;
    width: 100%;
    border: none;
    border-radius: 0;
    color: #fff;
    text-transform: uppercase;
  }
  .block-title {
    color: #fff;
    font-size: 24px;
    padding: 0;
    font-weight: 300;
    margin-bottom: 30px;
  }
  .block {
    background: #13191D;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    border: none;
    & .el-card__body {
      padding: 0;
    }
  }
  .label {
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
  }
</style>

