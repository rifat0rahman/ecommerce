import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies';
// import VueCarousel from 'vue-carousel';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueCookies);
// Vue.use(VueCarousel);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
