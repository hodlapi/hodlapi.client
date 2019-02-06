<template>
  <div class="request-form">
    <div class="card request-form-container">
      <div class="form with-bottom-action">
        <span class="form-title">New Request</span>
        <div class="form-group">
          <label class="form-label">Choose exchange</label>
          <div class="form-value">
            <ExchangeItem
              class="exchange-item-container"
              v-for="item in exchangePlatforms"
              :key="item.id"
              :item="item"
              :selected="item.id === form.platform"
              @click.native="onPlatformSelect(item.id)"
            ></ExchangeItem>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Trading pairs</label>
          <div class="form-value">
            <el-select
              class="form-field-container"
              v-model="form.pair"
              placeholder="Choose desired pair(s)"
            ></el-select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Intervals</label>
          <div class="form-value intervals-container">
            <IntervalItem
              v-for="item in intervals"
              :key="item"
              :selected="item === form.interval"
              @click.native="onIntervalSelect(item)"
            >{{item}}</IntervalItem>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Date range</label>
          <div class="form-value">
            <el-date-picker
              type="daterange"
              align="right"
              unlink-panels
              range-separator="To"
              start-placeholder="Pick start date"
              end-placeholder="Pick end date"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="form-action">
        <button>Сreate parse request</button>
      </div>
    </div>
  </div>
</template>

<script>
import ExchangeItem from "../core/components/ExchangeItem";
import IntervalItem from "../core/components/IntervalItem";

export default {
  data() {
    return {
      intervals: ["1m", "5m", "15m", "30m", "1h"],
      exchangePlatforms: [
        { id: "binance", logo: require("../assets/binance.svg") },
        { id: "0x", logo: require("../assets/0x.svg") }
      ],
      form: {
        platform: null,
        interval: null
      }
    };
  },
  components: {
    ExchangeItem,
    IntervalItem
  },
  methods: {
    onPlatformSelect(platform) {
      this.form = {
        ...this.form,
        platform
      };
    },
    onIntervalSelect(interval) {
      this.form = {
        ...this.form,
        interval
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.request-form {
  &-container {
    min-width: 360px;
  }
  .exchange-item-container {
    margin-right: 24px;
  }
  .intervals-container {
    display: flex;
    justify-content: space-between;
  }
  .form-field-container {
    width: 100%;
  }
}
</style>
