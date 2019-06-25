<template>
  <div class="bar-chart">
    <div class="row">
      <p class="bar-chart-heading">{{title}}</p>
    </div>
    <div class="row" v-for="(key, index) in data" :key="index">
      <div class="bar-chart-text col-sm-3">{{key.value}}</div>
      <div class="bar-chart-wrapper col-sm-9">
        <div
          class="bar-chart-element"
          @click="setActive(index); selectFilter(key)"
          :class="{ 'active': activeIndex === index }"
          :style="{width: key.width + '%'}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "data"],
  name: "BarChart",
  data() {
    return {
      activeIndex: undefined
    };
  },
  // mounted() {
  //   console.log(this.setActive());
  // },
  methods: {
    selectFilter(key) {
      let title = "";
      let carAttributes = "";
      if (this.title === "Brand") {
        title = "brand";
      } else if (this.title === "Year") {
        title = "year";
      }
      if (key) {
        carAttributes = key.value;
      }
      return {
        title: title,
        carAttributes: carAttributes
      };
    },
    setActive(index) {
      this.activeIndex = index;
    }
  }
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
  padding: 0 2px;
  max-width: 100%;
  height: 30px;
  border: 1px solid black;
}

.active {
  background-color: red;
}
</style>
