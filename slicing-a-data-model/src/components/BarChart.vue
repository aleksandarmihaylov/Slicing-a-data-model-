<template>
  <div class="bar-chart">
    <div class="row">
      <p class="bar-chart-heading">{{title}}</p>
    </div>
    <div class="row" v-for="(key, index) in data" :key="index">
      <div class="bar-chart-text col-sm-3">{{key}}</div>
      <div class="bar-chart-wrapper col-sm-9">
        <div class="bar-chart-element"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "data"],
  name: "BarChart",
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.bar-chart {
}

.bar-chart-heading {
}

.bar-chart-text {
  text-align: center;
  padding: 18px 0 0 0;
}

.bar-chart-wrapper {
  border: 1px solid black;
}

.bar-chart-element {
  margin: 10px;
  padding: 0 20px;
  max-width: 100%;
  height: 30px;
  border: 1px solid black;
}
</style>
