import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { BootstrapVue, CardPlugin } from 'bootstrap-vue';
import currencyToSymbol from './filters/currencyToSymbol.filter';
import moneyFormat from './filters/moneyFormat.filter';
import intOnly from "@/directives/input-int-only";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(CardPlugin);
Vue.use(intOnly);

Vue.filter('moneyFormat', moneyFormat);
Vue.filter('currencyToSymbol', currencyToSymbol);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
