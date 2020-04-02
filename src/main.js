import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueAxios from 'vue-axios'
import axios from 'axios'
// import VueResource from 'vue-resource'
import Vant from 'vant'
import 'vant/lib/index.css'
import htmlToPdf from './assets/js/htmlToPdf';


Vue.config.productionTip = false
Vue.use(Vant);

Vue.use(vueAxios, axios);
axios.defaults.withCredentials = false;
// Vue.prototype.$axios = axios;
Vue.use(htmlToPdf);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
