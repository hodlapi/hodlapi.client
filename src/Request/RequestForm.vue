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
              v-for="item in dataSources"
              :key="item.name"
              :item="item"
              :selected="item.name === form.dataSource"
              @click.native="onDataSourceSelect(item.name)"
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
              :key="item.value"
              :selected="isIntervalSelected(item.value)"
              @click.native="onIntervalSelect(item.value)"
            >{{item.value}}</IntervalItem>
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
import { mapState } from "vuex";
import { api } from "../core/lib";
import * as R from "ramda";

export default {
  data() {
    return {
      // intervals: ["1m", "5m", "15m", "30m", "1h"],
      // dataSources: [
      //   { id: "binance", logo: require("../assets/binance.svg") },
      //   { id: "0x", logo: require("../assets/0x.svg") }
      // ],
      form: {
        dataSource: null,
        intervals: []
      }
    };
  },
  computed: mapState({
    intervals: R.pathOr([], ["intervals", "intervals"]),
    dataSources: R.pathOr([], ["dataSources", "dataSources"]),
    currencyPairs: R.pathOr([], ["currencyPairs", "currencyPairs"])
  }),
  components: {
    ExchangeItem,
    IntervalItem
  },
  beforeMount() {
    this.getIntervals();
    this.getDataSources();
    this.getCurrencyPairs();
  },
  methods: {
    onDataSourceSelect(dataSource) {
      this.form = {
        ...this.form,
        dataSource
      };
    },
    onIntervalSelect(interval) {
      let curIntervals = this.form.intervals.filter(function(elem) {
        if (elem != interval) return elem;
      });
      if (curIntervals.length != this.form.intervals.length) {
        this.form.intervals = curIntervals;
        return;
      }
      this.form.intervals = [...this.form.intervals, interval];
    },
    isIntervalSelected(interval) {
      return (
        this.form.intervals.filter(function(elem) {
          if (elem == interval) return elem;
        }).length > 0
      );
    },
    getIntervals() {
      api()
        .get("/intervals")
        .then(data => {
          const intervals = R.pathOr(null, ["data"])(data);
          this.$store
            .dispatch("intervals/setIntervals", intervals)
            .then(() => {});
        });
    },
    getDataSources() {
      api()
        .get("/dataSources")
        .then(data => {
          const dataSources = R.pathOr(null, ["data"])(data);
          this.$store
            .dispatch("dataSources/setDataSources", dataSources)
            .then(() => {});
        });
    },
    getCurrencyPairs() {
      api()
        .get("/currencyPairs")
        .then(data => {
          const currencyPairs = R.pathOr(null, ["data"])(data);
          this.$store
            .dispatch("currencyPairs/setCurrencyPairs", currencyPairs)
            .then(() => {});
        });
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
