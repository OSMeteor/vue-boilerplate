import Vue from 'vue'
import Vuex from 'vuex'  
import createLogger from 'vuex/dist/logger'
import common from './modules/common'
import customers from './modules/customers'
import API from "../api";
import { i18n } from '../i18n'


Vue.use(Vuex)
const store = new Vuex.Store({
   modules: { 
     common,
     'customers': customers(API, i18n)
   },
   strict: process.env.NODE_ENV !== 'production',
   plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
 })
store.commit('updateIsMobileStatus')
export default store