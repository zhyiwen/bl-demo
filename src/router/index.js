import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
// import Home from '../views/Home.vue'
// import Msg from '../views/Msg.vue'
import '../scss/style.scss'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: Index
  }
];

const router = new VueRouter({
  routes
})

export default router