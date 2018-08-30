import Vue from 'vue'
import Router from 'vue-router'  
import Home from '@/pages/Home/index'
import signin from '@/pages/account/signin'
import signup from '@/pages/account/signup' 
import empty from '@/pages/layout/empty'

import system from './system'
import prodEnv from '../../config/prod.env'
Vue.use(Router)
let basePath = __dirname;
if (process.env.NODE_ENV == "production") basePath = prodEnv.BASE_PATH //basePath = '/html/s2/';

export default new Router({
  // account signin  signup  用户中心 
  // mode: 'history', //掉/#访问 hash  history history 
  base: basePath,
  routes: [{
      path: '/',
      component(resolve) {
        require.ensure([], function (require) {
          resolve(require('../pages/layout/main.vue'));
        }, 'layout/main')
      },
      children: [{
          path: '',
          name: 'Home',
          component: Home
        }, 
         {
          path: 'account', //signin //signup
          name: 'account', 
          component: empty, 
          children: [{
              path: '',
              redirect: 'signin'
            },
            {
              path: 'signin',
              name: 'signin',
              component: signin
            },
            {
              path: 'signup',
              name: 'signup',
              component: signup
            }
          ]
        }, 
        {
          path: 'agreement',
          name: 'agreement',
          component: empty, 
          children: [{
              path: '',
              redirect: 'service'
            },
            {
              path: 'service',
              name: 'service',
              component(resolve) {
                require.ensure([], function (require) {
                  resolve(require('../pages/agreement/service.vue'));
                }, 'modules/agreement')
              },
            },
          ]
        },
        //404,500页面, 必须放到最后
        ...system
      ]
    }

  ]
})
