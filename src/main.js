import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './core/styles/index.scss';
import App from './App.vue';
import locale from 'element-ui/lib/locale/lang/en';
import router from './router';
import store from './store';
import VueSocketIO from 'vue-socket.io';
import { socketHost } from './core/lib/constants';

Vue.use(ElementUI, { locale });
Vue.use(new VueSocketIO({
  connection: socketHost,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
