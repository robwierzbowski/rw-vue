import Vue from 'vue';
import App from '@/App';
import router from '@/router';

/* eslint-disable no-unused-vars */
const vm = new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App),
});
