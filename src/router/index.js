import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Form from '../views/Form.vue'
// import Home from '../views/Home.vue'
// import Msg from '../views/Msg.vue'
import '../scss/style.scss'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/index",
    name: "index",
    component: Index
  },
  {
    path: "/form",
    name: "form",
    component: Form
  }
];

const router = new VueRouter({
  routes
})

export default router
