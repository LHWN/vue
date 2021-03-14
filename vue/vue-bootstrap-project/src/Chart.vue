<template>
  <div id="container" style="width:100%; height:400px;"></div>
</template>

<script>
export default {
  mounted() {
    HighCharts.chart("container", {
      chart: {
        type: "bar"
      },
      title: {
        text: "Fruit Consumption"
      },
      xAxis: {
        categoris: ["Apples", "Bananas", "Oranges"]
      },
      yAxix: {
        title: {
          text: "Fruit eaten"
        }
      },
      series: [
        {
          name: "Jane",
          data: [1, 0, 4]
        },
        {
          name: "John",
          data: [5, 7, 3]
        }
      ]
    });
  }
};
</script>

<style></style>
