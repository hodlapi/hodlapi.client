<template>
  <div id="app">
    <el-row type="flex" :justify="'center'" :glutter="20">
      <el-col :span="12" :xs="24">
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

