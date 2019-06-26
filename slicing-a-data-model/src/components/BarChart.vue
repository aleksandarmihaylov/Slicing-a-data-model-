<template>
  <div class="bar-chart">
    <div class="row">
      <p class="bar-chart-heading">{{title}}</p>
    </div>
    <div class="row" v-for="(key, index) in objectValues" :key="index">
      <div class="bar-chart-text col-sm-3">{{key.value}}</div>
      <div class="bar-chart-wrapper col-sm-9">
        <div
          class="bar-chart-element"
          @click="emitToParent(key.value)"
          :style="{width: key.width + '%', backgroundColor: (key.filteredWidth == 100 ? 'red' : 'transparent')}"
        >
          <div
            v-if="shouldShowFilteredData"
            class="filtered-data"
            :style="{width: key.filteredWidth + '%'}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "objectValues", "shouldShowFilteredData"],
  name: "BarChart",
  data() {
    return {
      activeIndex: undefined
    };
  },
  methods: {
    emitToParent(filterCondition, event) {
      this.$emit("childToParent", this.selectFilter(filterCondition));
    },
    selectFilter(filterCondition) {
      let title = "";
      let carAttributes = "";
      if (this.title === "Brand") {
        title = "brand";
      } else if (this.title === "Year") {
        title = "year";
      }
      if (filterCondition) {
        carAttributes = filterCondition;
      }
      return {
        title: title,
        carAttributes: carAttributes
      };
    }
  }
};
</script>

<style scoped>
.bar-chart-text {
  text-align: center;
  padding: 18px 0 0 0;
}

.bar-chart-wrapper {
  z-index: 10;
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

.filtered-data {
  height: 100%;
  margin-left: -2px;
  background-color: blue;
  z-index: -1;
  position: relative;
}
</style>
