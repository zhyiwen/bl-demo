import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueAxios from 'vue-axios'
import axios from 'axios'
import VueResource from 'vue-resource'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant, VueResource);
Vue.use(vueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
