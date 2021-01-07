import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/category.vue'
import Cart from '../views/cart.vue'
import Profile from '../views/profile.vue'
import Details from '../views/details.vue'
import Register from '../views/register.vue'
import Orders from '../views/orders.vue'
import Search from '../views/search.vue'
import Login from '../views/login.vue'
import Address from '../views/address.vue'
import Pro_by_cate from '../views/pro_by_cate.vue'
import Payment from '../views/payment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/category",
    name: 'Category',
    component: Category
  },
  {
    path: "/cart",
    name: 'Cart',
    component: Cart
  },
  {
    path: "/profile",
    name: 'Profile',
    component: Profile
  },
  {
    path: "/register",
    name: 'Register',
    component: Register
  },
  {
    path: "/orders",
    name: 'Orders',
    component: Orders
  },
  {
    path: "/search",
    name: 'Search',
    component: Search
  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: "/address",
    name: 'Address',
    component: Address
  },
  {
    path: "/pro_by_cate",
    name: 'Pro_by_cate',
    component: Pro_by_cate
  },
  {
    path: "/payment",
    name: 'Payment',
    component: Payment
  },
  {
    path: "/:id",
    name: 'Details',
    component: Details
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
