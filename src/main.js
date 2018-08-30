// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  i18n, loadLanguageAsync
} from './i18n'
import store from './store'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
import './styles/index.less'
Vue.config.productionTip = false

Vue.prototype.$loadLanguageAsync = (lang) => {
  return loadLanguageAsync(lang).then(()=>{
    store.commit('updateLocaleLang', {
      lang: i18n.locale
    })
    return lang;
  })
}
store.commit('updateLocaleLang', {
  lang: i18n.locale
})

// 异步连接ws 连接成功更新连接状态 
// 异步获取 guest token


// store 按需加载模块
// 注册模块 `myModule`
// store.registerModule('myModule')

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page. 
    if (store.state.common.userloginOut) {
      next({
        path: '/account/signin',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }  
});

router.afterEach(route => {
    iView.LoadingBar.finish(); 
}); 

// Vue.use(VueI18n)

Vue.use(iView, {
  locale,
  transfer: true,
  size: 'large'
});

// import {
//   Layout,
//   Content,
//   Header,
//   Sider,
//   Footer,
//   Card,
//   Page,
//   Tabs,
//   TabPane,
//   Carousel
// } from 'iview';
// Vue.component('Layout', Layout);
// Vue.component('Content', Content);
// Vue.component('Header', Header);
// Vue.component('Sider', Sider);
// Vue.component('Footer', Footer);
// Vue.component('Card', Card);
// Vue.component('Page', Page);
// Vue.component('Tabs', Tabs);
// Vue.component('TabPane', TabPane);
// Vue.component('Carousel', Carousel);
// Vue.use(VueI18n)
// Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#vueApp', 
  router,
  store, 
  i18n,
  components: { App },
  template: '<App/>'
})