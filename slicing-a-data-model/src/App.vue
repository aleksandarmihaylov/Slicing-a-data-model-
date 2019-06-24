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
            <li>Number of cars: {{allCars.length}}</li>
            <li>Average price: {{averagePrice}} DKK</li>
            <li>Average fuel consumption: {{averageFuelConsumption}} l/100km</li>
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
              <tr v-for="(car, index) in allCars" :key="index">
                <td>{{car.id}}</td>
                <td>{{car.year}}</td>
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td>{{car.price}}</td>
                <td>{{car.milage}}</td>
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
      allCars: [],
      averagePrice: 0,
      averageFuelConsumption: 0
    };
  },
  mounted() {
    function sum(array, prop) {
      let total = 0;
      for (let i = 0, _len = array.length; i < _len; i++) {
        total += Number(array[i][prop]);
      }
      return total;
    }
    fetch("http://localhost:3000/cars")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.allCars = myJson;
        this.averagePrice = (
          sum(this.allCars, "price") / this.allCars.length
        ).toFixed(2);
        this.averageFuelConsumption = (
          sum(this.allCars, "milage") / this.allCars.length
        ).toFixed(2);
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
