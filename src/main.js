import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios);
 
//import template vuejs
import App from './App.vue';
import Home from './components/Home.vue';
import Boxchat from './components/Boxchat.vue';
import FormRegister from './components/FormRegister.vue';
import FormLogin from './components/FormLogin.vue';
Vue.use(VueRouter)
const routes = [
    {
        name:"Home",
        path: '/',
        component: Home
    },
    {
        name: 'FormRegister',
        path: '/form-register',
        component: FormRegister
    },
    {
        name: 'FormLogin',
        path: '/form-login',
        component: FormLogin
    },
    {
        name: 'Boxchat',
        path: '/chat',
        component: Boxchat
    }
   
];
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
