<template>
  <div class="request-list">
    <div class="card request-list-container">
      <div class="form with-bottom-action">
        <span class="form-title">Previous Requests</span>
        <div class="form-group" v-if="requests && requests.length">
          <RequestItem
            v-for="request in requests"
            :key="request.id"
            :request="request"
            class="list-item-container"
          />
        </div>
        <div class="form-group" v-else>
          <span class="form-group-splash-message">Requests list is empty</span>
        </div>
        <div class="action-group">
          <span class="show-more-action" v-if="false">
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
