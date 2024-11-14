import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Skull from '../components/Skull.vue'
import ClientSignup from '../components/ClientSignup.vue'
import ClientLogin from '../components/ClientLogin.vue'
import AdminLogin from '../components/AdminLogin.vue'
import AppAccounts from '../components/AppAccounts.vue'
import UserSpace from '../components/UserSpace.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/clientsignup',
    name: 'ClientSignup',
    component: ClientSignup
  },
  {
    path: '/clientlogin',
    name: 'ClientLogin',
    component: ClientLogin
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  },
  {
    path: '/userspace/:username',
    name: 'UserSpace',
    component: UserSpace
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
