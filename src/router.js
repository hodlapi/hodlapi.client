import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login/Login.vue';
import Profile from './Profile/Profile.vue';
import Request from './Request/Request.vue';
import User from './User/User.vue';

Vue.use(Router)

export default new Router({
  routes: [{
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
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '',
      alias: '/request',
      name: 'requests',
      component: Request
    }
  ]
})