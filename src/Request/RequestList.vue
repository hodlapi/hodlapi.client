<template>
  <div class="request-list">
    <div class="card request-list-container">
      <div class="form with-bottom-action">
        <span class="form-title">Previous Requests</span>
        <div class="form-group">
          <RequestItem
            v-for="request in requests"
            :key="request.id"
            :request="request"
            class="list-item-container"
          />
        </div>
        <div class="action-group">
          <span class="show-more-action">
            Show more
            <i class="el-icon-caret-bottom"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestItem from "../core/components/RequestItem";
import { mapState } from "vuex";
import { api } from "../core/lib";
import * as R from "ramda";

export default {
  // data() {
  //   return {
  //     requests: [
  //       // {
  //       //   id: 0,
  //       //   interval: "1h",
  //       //   logo: require("../assets/binance.svg"),
  //       //   pair: "DAI / WETH",
  //       //   range: "01.02.2017 - 02.04.2018",
  //       //   size: "5 MB",
  //       //   link: ""
  //       // },
  //       // {
  //       //   id: 1,
  //       //   interval: "1m",
  //       //   logo: require("../assets/0x.svg"),
  //       //   pair: "BNT / ETH, RPX / ETH",
  //       //   range: "01.02.2017 - 02.04.2018",
  //       //   size: "25 MB",
  //       //   link: ""
  //       // },
  //       // {
  //       //   id: 2,
  //       //   interval: "15m",
  //       //   logo: require("../assets/binance.svg"),
  //       //   pair: "LTC / BTC , TRX / BTC, PAI / ETH",
  //       //   range: "03.05.2018 - 02.08.2018",
  //       //   size: "14 MB",
  //       //   link: "http://test.com"
  //       // },
  //       // {
  //       //   id: 3,
  //       //   interval: "5m",
  //       //   logo: require("../assets/0x.svg"),
  //       //   pair: "MKR / WETH",
  //       //   range: "01.02.2017 - 02.04.2018",
  //       //   size: "55 MB",
  //       //   link: ""
  //       // }
  //     ]
  //   };
  // },
  props: {
    list: {
      type: Array
    }
  },
  components: {
    RequestItem
  },
  beforeMount() {
    this.getRequests();
  },
  computed: {
    ...mapState({
      requests: R.pathOr([], ["requests", "requests"])
    })
  },
  methods: {
    getRequests() {
      api()
        .get("/requests")
        .then(data => {
          this.$store.dispatch(
            "requests/setRequests",
            R.pathOr(null, ["data"])(data)
          );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../core/styles/_consts.scss";

.request-list {
  width: 100%;
  .list-item-container {
    border-bottom: 1px solid rgba(white, 0.12);
    padding: 20px 0;
  }
  .action-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 10px;
  }
  .show-more-action {
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $font-primary-color;
    opacity: 0.4;
  }
}
</style>
