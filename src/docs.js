import Vue from 'vue';
import Buefy from 'buefy';
import App from './app';
import './styles/app.scss';

Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
