import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login/Login.vue';
import ForgotPassword from './Login/ForgotPassword.vue';
import Profile from './Profile/Profile.vue';
import Request from './Request/Request.vue';
import User from './User/User.vue';
import store from './store';
import * as R from 'ramda';

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
      meta: {
        guest: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '',
      alias: '/request',
      name: 'requests',
      component: Request,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = R.pathOr(null, ['state', 'user', 'token'])(store);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (R.isNil(token)) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (R.isNil(token)) {
      next();
    } else {
      next({
        name: ''
      });
    }
  } else {
    next();
  }

});

export default router;