import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products
  }
})