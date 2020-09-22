import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
//import ART from './components/ART.Vue'
//import TECH from './components/TECH.Vue'
//import Account from './components/Account.Vue'
//import About_us from './components/About_us.Vue'


Vue.use(Router)



export default new Router({
    mode:'history',
    routes:[
        {path:'/Home',component: Home},
        {
            path:'/Home',
            component:Home,
            children:[
                //{path:'/About_us', component: About_us},
                //{path:'ART', component: ART},
                //{path:'/TECH', component: TECH},
                //{path:'/Account', component: Account},           
            ]
        }
    ]
})
