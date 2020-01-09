import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Msg from '../views/Msg.vue'
import '../scss/style.scss'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/msg",
    name: "msg",
    component: Msg
  }
];

const router = new VueRouter({
  routes
})

export default router
