// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill'
import Vue from 'vue'
// import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
import 'iview/dist/styles/iview.css';
import {
  Layout,
  Content,
  Header,
  Sider,
  Footer,
  Card,
  Page,
  Tabs,
  TabPane
} from 'iview';
Vue.component('Layout', Layout);
Vue.component('Content', Content);
Vue.component('Header', Header);
Vue.component('Sider', Sider);
Vue.component('Footer', Footer);
Vue.component('Card', Card);
Vue.component('Page', Page);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);


// Vue.use(VueI18n)
// Vue.use(iView);
// Vue.use(VueAxios, axios) 

Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
