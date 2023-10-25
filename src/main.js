import Vue from 'vue'
import App from './App.vue'
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import Carousels from "@/components/Carousel"
import Relevant from "@/components/Relevant"
import store from "@/store"
import router from "@/router/index"
import * as API from "@/api/index"
import { Carousel, CarouselItem, Breadcrumb, BreadcrumbItem, Empty, Cascader, Tooltip, Rate, Image, Pagination, Table, TableColumn,Dialog,Button,Input,Icon } from 'element-ui';
//引入swiper样式
import "swiper/css/swiper.css"

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Empty)
Vue.use(Cascader)
Vue.use(Tooltip)
Vue.use(Rate)
Vue.use(Image)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)
Vue.component("Header", Header)
Vue.component("Footer", Footer)
Vue.component("Carousels", Carousels)
Vue.component("Relevant", Relevant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  store,
  router
}).$mount('#app')
