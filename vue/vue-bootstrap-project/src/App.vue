<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg">Large Button</button>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "./Chart";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js"
    };
  },
  components: {
    Chart
  }
};
</script>

<style></style>
