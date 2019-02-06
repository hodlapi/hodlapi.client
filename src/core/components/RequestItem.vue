<template>
  <div class="request-item">
    <div class="request-logo">
      <img :src="request.logo">
    </div>
    <div class="request-meta">
      <div class="request-meta-name">{{request.pair}}</div>
      <div class="request-meta-values">
        <div class="meta">
          <i class="meta-icon el-icon-time"></i>
          <div class="meta-value">{{request.interval}}</div>
        </div>
        <div class="meta">
          <i class="meta-icon el-icon-date"></i>
          <div class="meta-value">{{request.range}}</div>
        </div>
        <div class="meta">
          <i class="meta-icon el-icon-document"></i>
          <div class="meta-value">{{request.size}}</div>
        </div>
      </div>
    </div>
    <div class="request-action">
        <span class="action">
            <i class="el-icon-download"></i>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    request: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_consts.scss";

.request-item {
  display: flex;
  justify-content: space-between;
  height: 50px;
  .request-logo {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .request-action {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .action {
        height: 44px;
        width: 44px;
        border-radius: 100%;
        border: 2px solid $primary;
        color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }
  }
  .request-meta {
    width: calc(100% - 100px);
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    &-name {
      color: $font-primary-color;
      font-weight: 900;
      line-height: 24px;
      font-size: 14px;
    }
    &-values {
        display: flex;
        flex-direction: row;
        margin-top: 6px;
        .meta {
            display: flex;
            align-items: center;
            color: $font-primary-color;
            opacity: 0.4;
            margin-right: 34px;
            font-size: 14px;
            &-icon {
                margin-right: 5px;
            }
        }
    }
  }
}
</style>
