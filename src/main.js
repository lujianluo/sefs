import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
//import { auth } from './firebase';


Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;
Vue.use(VueFirestore)


let app = '';

fb.auth().onAuthStateChanged(function() {

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
    
  }

});


//new Vue({ router, render: h => h(App)}).$mount("#app");