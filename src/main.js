import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router // 简写前是：router:router
}).$mount('#app');
