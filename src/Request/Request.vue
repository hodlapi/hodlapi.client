<template>
  <Main>
    <el-row :gutter="42">
      <el-col :span="8" class="request-form">
        <RequestForm></RequestForm>
      </el-col>
      <el-col :span="16">
        <RequestList></RequestList>
      </el-col>
    </el-row>
  </Main>
</template>

<script src="./Request.js">
</script>


<style lang="scss" scoped>
.request-form {
  max-width: 400px;
}
</style>
