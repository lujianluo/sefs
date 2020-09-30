import Vue from "vue";
import VueRouter from "vue-router";
import ART from '../components/ART.vue';
import TECH from '../components/TECH.vue';
import Home from '../components/Home.vue';
import About_us from '../components/About_us.vue';
import ProductPage from '../components/ProductPage.vue';
import Userinfo from '../components/Userinfo.vue';
import Liked from '../components/Liked.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Upload from '../components/Upload.vue';
import Mypost from '../components/Mypost.vue';
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
    {path: '/Home', name:"Home", component: Home},
    {path: '/', component: Home},
    {path: '/About_us', name:"About_us", component: About_us},
    {path: '/TECH', name:"TECH", component: TECH},
    {path: '/ART', name:"ART", component: ART},
    {path: '/ProductPage', name:"ProductPage", component: ProductPage},
    {path: '/Userinfo', name:"Userinfo", component: Userinfo, meta: { requiresAuth: true }},
    {path: '/Liked', name:"Liked", component: Liked, meta: { requiresAuth: true }},
    {path: '/Login', name:"Login", component: Login, Register,meta: {hideForAuth: true}},
    {path: '/Register', name:"Register", component: Register,meta: {hideForAuth: true}},
    {path: '/Upload', name:"Upload", component: Upload, meta: { requiresAuth: true }},
    {path: '/Mypost', name:"Mypost", component: Mypost, meta: { requiresAuth: true }},
  ];
  
  const router = new VueRouter({
    routes,
    mode: 'history'
  });

  router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!user) {
              next({ path: '/Login' });
          } else {
              next();
          }

      } else {
          next();
      }
    if (to.matched.some(record => record.meta.hideForAuth)) {
      if (user) {
          next({ path: '/Userinfo' });
      } else {
          next();
      }
  } else {
      next();
  }
});
  });
  
  export default router;