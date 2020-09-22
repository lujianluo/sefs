import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ART from './components/ART.vue'
import TECH from './components/TECH.vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
import Home from './components/Home.vue';
import About_us from './components/About_us.vue'
import Header from './components/Header.vue'
import ProductPage from './components/ProductPage.vue'
import Userinfo from './components/Userinfo.vue'
//import router from './router.js'
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.component('aHeader', Header)
Vue.component('aAbout_us', About_us)

const routes = [
  {path: '/Home', component: Home},
  {path: '/', component: Home},
  {path: '/About_us', component: About_us},
  {path: '/TECH', component: TECH},
  {path: '/ART', component: ART},
  {path: '/ProductPage', component: ProductPage},
  {path: '/Userinfo', component: Userinfo}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  Home,
  router,
  render: h => h(App)
}).$mount('#app');