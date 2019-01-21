<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <request-form></request-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RequestForm from "./components/RequestForm.vue";

export default {
  name: "app",
  components: {
    RequestForm
  }
};
</script>

