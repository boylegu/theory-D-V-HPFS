import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import VueWorker from 'vue-worker';
import axios from 'axios'

Vue.use(VueWorker);

Vue.prototype.$axios= axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
// setTimeout(function() {
// 	vm.$mount('#app');
// }, 2000);
// vm.$destroy();
