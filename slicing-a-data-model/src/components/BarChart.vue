<template>
  <div class="bar-chart">
    <div class="row">
      <p class="bar-chart-heading">{{title}}</p>
    </div>
    <div class="row">
      <div class="bar-chart-text col-sm-3">BMW</div>
      <div class="bar-chart-wrapper col-sm-9">
        <div class="bar-chart-element"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "Bar Chart"
};
</script>

<style>
</style>
