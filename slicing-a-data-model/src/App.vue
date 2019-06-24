<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <bar-chart title="Brand"></bar-chart>
        </div>
        <div class="col-sm-6">
          <bar-chart title="Year"></bar-chart>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 section-two">
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
          <table class="car-table" border="1">
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
  mounted() {
    fetch("http://localhost:3000/cars")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
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

.section-two {
  margin: 50px 0;
}

.car-table {
  width: 100%;
}
</style>
