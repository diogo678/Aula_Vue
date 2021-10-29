

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
Vue.use(VueRouter);
Vue.use(VeeValidate);



const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueResource);

// http usará sempre o endereço abaixo

Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

