import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './routes';
import store from './store/store';

Vue.use(VueRouter);

Vue.filter('currency', val => `$ ${val.toLocaleString()}`);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  store,
  router,
  render: r => r(App),
});
