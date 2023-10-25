import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import routes from '@/router/routes'

// 重写phsh方法
let orginRepush = VueRouter.prototype.push
VueRouter.prototype.push=function(location,resole,reject){
    if(resole && reject){
        orginRepush.call(this,location,resole,reject)
    }else{
        orginRepush.call(this,location,()=>{ },()=>{ })
    }
}

let router=new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
})

router.beforeEach((to,from,next)=>{
    if(localStorage.getItem("TOKEN")){
        if(to.path=="/login"){
            next("/")
        }else{
            next()
        }
    }else{
        let toPath=to.path
        if(toPath.indexOf("/cart")!=-1){
            next("/login?redirect="+toPath)
        }else{
            next()
        }
    }
})

export default router