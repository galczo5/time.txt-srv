import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import 'bootswatch/dist/flatly/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder, faCheckCircle, faTimes, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFolder);
library.add(faCheckCircle);
library.add(faTimes);
library.add(faFilter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App)
});
