import axios from "axios";
import {getToken} from "@/utils/token"

const requests =axios.create({
    baseURL:'http://pcapi-xiaotuxian-front.itheima.net',
    timeout:5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    if(getToken()){
        config.headers.Authorization=`Bearer ${getToken()}`
    }
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    return res
},(error)=>{
    return Promise.reject(new Error('faile'))
})

export default requests