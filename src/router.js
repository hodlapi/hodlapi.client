import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login/Login.vue';
import ForgotPassword from './Login/ForgotPassword.vue';
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
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
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