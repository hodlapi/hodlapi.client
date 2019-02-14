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
              :selected="item._id === form.dataSource"
              @click.native="onDataSourceSelect(item._id)"
            ></ExchangeItem>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Trading pairs</label>
          <div class="form-value">
            <el-select
              class="form-field-container"
              v-model="form.currencyPairs"
              placeholder="Choose desired pair(s)"
              filterable
              multiple
            >
              <el-option
                v-for="pair in currencyPairs"
                :key="pair._id"
                :value="pair._id"
                :label="pair.name"
              ></el-option>
            </el-select>
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
              v-model="form.range"
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
        <button
          @click="createRequest"
          :disabled="!form.dataSource || !form.currencyPairs || 
          !form.currencyPairs.length || !form.intervals || 
          !form.intervals.length || !form.range"
        >Сreate parse request</button>
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
      form: {
        dataSource: null,
        intervals: []
      }
    };
  },
  computed: {
    ...mapState({
      intervals: R.pathOr([], ["intervals", "intervals"]),
      dataSources: R.pathOr([], ["dataSources", "dataSources"]),
      currencyPairs: R.pathOr([], ["currencyPairs", "currencyPairs"])
    })
  },
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
        dataSource,
        currencyPairs: []
      };
      this.getCurrencyPairs(dataSource);
    },

    onIntervalSelect(interval) {
      let curIntervals = this.form.intervals.filter(elem => elem != interval);
      if (curIntervals.length != this.form.intervals.length) {
        this.form.intervals = curIntervals;
        return;
      }
      this.form.intervals = [...this.form.intervals, interval];
    },

    isIntervalSelected(interval) {
      return this.form.intervals.filter(elem => elem == interval).length > 0;
    },

    getIntervals() {
      api()
        .get("/intervals")
        .then(data => {
          this.$store.dispatch(
            "intervals/setIntervals",
            R.pathOr(null, ["data"])(data)
          );
        });
    },

    getDataSources() {
      api()
        .get("/dataSources")
        .then(data => {
          this.$store.dispatch(
            "dataSources/setDataSources",
            R.pathOr(null, ["data"])(data)
          );
        });
    },

    getCurrencyPairs(dataSourceId) {
      api()
        .get("/currencyPairs", { params: { dataSourceId } })
        .then(data => {
          this.$store.dispatch(
            "currencyPairs/setCurrencyPairs",
            R.pathOr(null, ["data"])(data)
          );
        });
    },

    createRequest() {
      api()
        .post("/request", { ...this.form })
        .then(() => {
          this.getRequests();
          this.clearForm();
          this.showSuccessMessage();
        });
    },

    getRequests() {
      api()
        .get("/requests")
        .then(data => {
          this.$store.dispatch(
            "requests/setRequests",
            R.pathOr(null, ["data"])(data)
          );
        });
    },

    clearForm() {
      this.form = {
        dataSource: null,
        intervals: [],
        range: null,
        currencyPairs: []
      };
    },

    showSuccessMessage() {
      this.$message({
        dangerouslyUseHTMLString: true,
        type: "success",
        duration: 7000,
        message:
          "<div>Your request was successfully created!</div></br><div> We will send you an email with results soon :)</div>"
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
