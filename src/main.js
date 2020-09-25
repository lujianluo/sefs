import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import firebase from "firebase/app";
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
//import { auth } from './firebase';


Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAhitrrZx8RYkLR5kwC7gH_a3C36Ihklos",
  authDomain: "ad-project-9ed24.firebaseapp.com",
  databaseURL: "https://ad-project-9ed24.firebaseio.com",
  projectId: "ad-project-9ed24",
  storageBucket: "ad-project-9ed24.appspot.com",
  messagingSenderId: "1000226156535",
  appId: "1:1000226156535:web:fe1be0a2b5783c9a4fc8f2"
};

firebase.initializeApp(firebaseConfig);

new Vue({
   router,
   render: h => h(App)
 }).$mount("#app");