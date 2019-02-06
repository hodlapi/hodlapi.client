import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login/Login.vue';
import Profile from './Profile/Profile.vue';
import Request from './Request/Request.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/users',
      name: 'users',
      children: []
    },
    {
      path: '',
      alias: '/request',
      name: 'requests',
      component: Request
    }
  ]
})
