import Vue from 'vue'
import App from './App.vue'
import BarChart from './components/BarChart.vue'


Vue.component("bar-chart", BarChart);

new Vue({
  el: '#app',
  render: h => h(App)
})
