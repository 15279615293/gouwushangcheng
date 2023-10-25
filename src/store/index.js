import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import header from './header'
import home from './home'
import category from "./category"
import product from "./product"
import login from "./login"


export default new Vuex.Store({
    modules:{
        header,
        home,
        category,
        product,
        login
    }
})