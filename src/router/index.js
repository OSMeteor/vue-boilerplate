import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Element from '@/pages/Element'
import Counter from '@/pages/Counter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/element',
      name: 'Element',
      component: Element
    }
  ]
})
