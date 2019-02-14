<template>
  <div class="request-item">
    <div class="request-logo">
      <img v-if="request.dataSource" :src="request.dataSource.logo">
    </div>
    <div class="request-meta">
      <div class="request-meta-currency-pairs">
        <span class="request-meta-name"
              v-for="(currencyPair,index) of request.currencyPairs"
              :key="currencyPair.name">
              {{currencyPair.name}}
              <span v-if="index != Object.keys(request.currencyPairs).length - 1">,&nbsp;</span>
        </span>
      </div>
      <div class="request-meta-values">
        <div class="meta">
          <i class="meta-icon el-icon-time"></i>
          <div class="meta-value" 
          v-for="interval in request.intervals"
              :key="interval">{{interval}}&nbsp;</div>
        </div>
        <div class="meta">
          <i class="meta-icon el-icon-date"></i>
          <div class="meta-value">{{request.fromDate | formatDate}} - {{request.toDate | formatDate}}</div>
        </div>
        <div class="meta" v-if="request.files && request.files.length>0">
          <i class="meta-icon el-icon-document"></i>
          <div class="meta-value">
              {{request.files.length}} files
              </div>
        </div>
      </div>
    </div>
    <div class="request-action">
        <span class="action" >
            <i class="el-icon-download active-action" 
            @click="downloadFile(request.resultUrl)" v-if="request.status=='ready'"></i>
            <i class="el-icon-time" 
            v-if="request.status!='ready'"></i>
        </span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Vue from "vue";

export default {
  props: {
    request: {
      type: Object
    }
  },
  methods: {
    downloadFile(url) {
      window.open(url + "?access_token=" + localStorage.getItem("token"));
    }
  }
};

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD.MM.YYYY");
  }
});
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
      .active-action {
        cursor: pointer;
      }
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
    &-currency-pairs {
      flex-direction: row;
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
