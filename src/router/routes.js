import Home from "@/views/Home"
import Category from "@/views/Category"
import Sub from "@/views/Category/Sub"
import Product from "@/views/Product"
import Cart from "@/views/Cart"
import Login from "@/views/Login"

export default [
    {
        name:"home",
        path:'/',
        component:Home,
        meta:{isShow:true}
    },
    {
        name:"category",
        path:'/category',
        component:Category,
        meta:{isShow:true},
        children:[
            {
                name:'sub',
                path:'sub',
                component:Sub,
                meta:{isShow:true},
            }
        ]
    },
    {
        name:"product",
        path:"/product/:id",
        component:Product,
        meta:{isShow:true}
    },
    {
        name:"cart",
        path:"/cart",
        component:Cart,
        meta:{isShow:true}
    },
    {
        name:"login",
        path:"/login",
        component:Login,
        meta:{isShow:false}
    },
]