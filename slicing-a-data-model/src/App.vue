<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <bar-chart
            v-if="allCars"
            title="Brand"
            v-on:childToParent="getFilterConditions"
            :shouldShowFilteredData="wasFiltered"
            :objectValues="getObjectValues('brand')"
          ></bar-chart>
        </div>
        <div class="col-sm-6">
          <bar-chart
            v-if="allCars"
            title="Year"
            v-on:childToParent="getFilterConditions"
            :shouldShowFilteredData="wasFiltered"
            :objectValues="getObjectValues('year')"
          ></bar-chart>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 section-two">
          <p>Insight on the selected category</p>
          <ul>
            <li>Number of cars: {{filteredCars.length}}</li>
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
              <tr v-for="(car, index) in filteredCars" :key="index">
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
      filteredCars: [],
      averagePrice: 0,
      averageFuelConsumption: 0,
      brands: [],
      years: [],
      filterProperties: {},
      wasFiltered: false
    };
  },
  async mounted() {
    const cars = await this.getCars();
    this.allCars = cars;
    this.filteredCars = this.allCars;

    this.averagePrice = this.getAverage("price");
    this.averageFuelConsumption = this.getAverage("milage");
  },
  methods: {
    // Getting all the cars from the API
    getCars() {
      return fetch("http://localhost:3000/cars").then(function(response) {
        return response.json();
      });
    },
    // This method will return the values -> fx BMW, Mazda, 2017 and the ammount of cars in a percantage for the width
    getObjectValues(slicingAxis) {
      return [...new Set(this.allCars.map(value => value[slicingAxis]))].map(
        value => {
          return {
            value,
            width: this.calculateProportion(slicingAxis, value),
            filteredWidth: this.calculateFilteredProportion(slicingAxis, value)
          };
        }
      );
    },
    // This function will get the amount of cars based on a object key -> brand or year fx. and a property -> BMW, 2017 fx.
    getCarCountByProperty(objectProperty, objectValue) {
      return this.allCars.filter(item => {
        return item[objectProperty] === objectValue;
      }).length;
    },
    // This fucntion will calcuate the percentage which will be used to present the data through the width in the BarChart component
    calculateProportion(objectProperty, objectValue) {
      const count = this.getCarCountByProperty(objectProperty, objectValue);
      const total = this.allCars.length;
      const percantage = (count / total) * 100;
      return percantage.toFixed(2);
    },
    // // This function will get the amount of filtered cars based on a object key -> brand or year fx. and a property -> BMW, 2017 fx.
    getFilteredCarCountByProperty(objectProperty, objectValue) {
      return this.filteredCars.filter(item => {
        return item[objectProperty] === objectValue;
      }).length;
    },
    calculateFilteredProportion(objectProperty, objectValue) {
      const count = this.getFilteredCarCountByProperty(
        objectProperty,
        objectValue
      );
      const total = this.filteredCars.length;
      const percantage = (count / total) * 100;
      return percantage.toFixed(2);
    },
    getFilterConditions(values) {
      this.wasFiltered = true;
      this.filterProperties = values;
      this.filterCars(
        this.filterProperties.title,
        this.filterProperties.carAttributes
      );
    },
    filterCars(slicingAxis, objectValue) {
      this.filteredCars = this.allCars.filter(item => {
        return item[slicingAxis] === objectValue;
      });
      this.averagePrice = this.getAverage("price");
      this.averageFuelConsumption = this.getAverage("milage");
    },
    // helper sum function
    sum(array, prop) {
      let total = 0;
      for (let i = 0, _len = array.length; i < _len; i++) {
        total += parseFloat(array[i][prop]);
      }
      return total;
    },
    // This method will get the average sum of a given
    getAverage(prop) {
      return (
        this.sum(this.filteredCars, prop) / this.filteredCars.length
      ).toFixed(2);
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
