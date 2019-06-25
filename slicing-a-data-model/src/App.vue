<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <bar-chart title="Brand" :data="getData('brand')"></bar-chart>
        </div>
        <div class="col-sm-6">
          <bar-chart title="Year" :data="getData('year')"></bar-chart>
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
      averageFuelConsumption: 0,
      brands: [],
      years: []
    };
  },
  mounted() {
    function sum(array, prop) {
      let total = 0;
      for (let i = 0, _len = array.length; i < _len; i++) {
        total += parseFloat(array[i][prop]);
      }
      return total;
    }
    this.getCars().then(cars => {
      this.allCars = cars;
      this.averagePrice = (
        sum(this.allCars, "price") / this.allCars.length
      ).toFixed(2);
      this.averageFuelConsumption = (
        sum(this.allCars, "milage") / this.allCars.length
      ).toFixed(2);
    });
  },
  methods: {
    getCars() {
      return fetch("http://localhost:3000/cars").then(function(response) {
        return response.json();
      });
    },
    getAveragePrice() {
      return (sum(this.allCars, "price") / this.allCars.length).toFixed(2);
    },
    getAverageFuelConsumption() {
      return (sum(this.allCars, "milage") / this.allCars.length).toFixed(2);
    },
    getData(prop) {
      return [...new Set(this.allCars.map(item => item[prop]))];
    }
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

.section-two {
  margin: 50px 0;
  text-align: left;
}

.car-table {
  width: 100%;
}
</style>
