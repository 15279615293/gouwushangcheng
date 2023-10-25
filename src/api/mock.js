import axios from "axios";

const mocks =axios.create({
    baseURL:'https://mock.boxuegu.com/mock/1175',
    timeout:5000
})

//请求拦截器
mocks.interceptors.request.use((config)=>{
    return config
})
//响应拦截器
mocks.interceptors.response.use((res)=>{
    return res
},(error)=>{
    return Promise.reject(new Error('faile'))
})

export default mocks