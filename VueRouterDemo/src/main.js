'use strict';

import App from './App.vue';
import Vue from 'vue';

const vm = new Vue({
  el: "#app",
  render: h => h(App),
});
