<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { EventBus } from "./core/lib";

export default {
  mounted() {
    EventBus.$on("error.invalidToken", () => {
      this.$store
        .dispatch("user/logout")
        .then(() => this.$router.replace("/login"));
    });
  }
};
</script>
