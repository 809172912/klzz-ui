import Vue from 'vue';
import App from './examples/views/App.vue';
import router from './examples/router';
import store from './store';
import demoBlock from './examples/components/demo-block.vue';
import KatButton from './packages/components/button/index.vue';

Vue.config.productionTip = false;

Vue.component('demo-block', demoBlock)
Vue.component('kat-button', KatButton);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
