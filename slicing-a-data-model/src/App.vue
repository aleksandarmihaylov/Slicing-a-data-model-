<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="bar-chart">
            <div class="row">
              <p class="bar-chart-heading">Brand</p>
            </div>
            <div class="row">
              <div class="bar-chart-text col-sm-3">BMW</div>
              <div class="bar-chart-wrapper col-sm-9">
                <div class="bar-chart-element"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="bar-chart">
            <div class="row">
              <p class="bar-chart-heading">Year</p>
            </div>
            <div class="row">
              <div class="bar-chart-text col-sm-3">2015</div>
              <div class="bar-chart-wrapper col-sm-9">
                <div class="bar-chart-element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <p>Insight on the selected category</p>
          <ul>
            <li>Number of cars: 10000</li>
            <li>Average price: 200.000 DKK</li>
            <li>Average fuel consumption: 10,40 l/100km</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <table style="width: 100%;" border="1">
            <tbody>
              <tr>
                <td>Id</td>
                <td>Year</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Price</td>
                <td>Milage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

.bar-chart {
}

.bar-chart-heading {
}

.bar-chart-text {
  text-align: left;
}

.bar-chart-wrapper {
  border: 1px solid black;
}

.bar-chart-element {
  margin: 10px;
  width: 80%;
  height: 30px;
  border: 1px solid black;
}
</style>
