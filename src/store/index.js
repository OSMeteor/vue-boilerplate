import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import counter from './modules/counter'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
 
export default new Vuex.Store({
    modules: { 
        cart,
        products,
        counter 
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})