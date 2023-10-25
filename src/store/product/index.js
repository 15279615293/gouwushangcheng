import {GetProductGood,getRelevant,getHotSalesList,getGoodEvaluate,getEvaluatePage} from "@/api/index"

const state={
    productGood:{},
    relevantInfo:[],
    salesOne:[],
    salesTwo:[],
    goodEvaluate:{},
    pageList:{}
}
const mutations={
    GETPRODUCTLIST(state,productGood){
        state.productGood=productGood
    },
    GETRELEVANTINFO(state,relevantInfo){
        state.relevantInfo=relevantInfo
    },
    SALESLISTONE(state,salesOne){
        state.salesOne=salesOne
    },
    SALESLISTTWO(state,salesTwo){
        state.salesTwo=salesTwo
    },
    GETGOODEVALUATE(state,goodEvaluate){
        state.goodEvaluate=goodEvaluate
    },
    GETPAGELIST(state,pageList){
        state.pageList=pageList
    }
}
const actions={
    async getProductList({commit},id){
        let results = await GetProductGood(id)
        commit("GETPRODUCTLIST",results.data.result)
    },
    async getRelevantInfo({commit},{id,limit}){
        let results = await getRelevant(id,limit)
        commit("GETRELEVANTINFO",results.data.result)
    },
    async hotSalesListOne({commit},{id,limit,type}){
        let results= await getHotSalesList(id,limit,type)
        commit("SALESLISTONE",results.data.result)
    },
    async hotSalesListTwo({commit},{id,limit,type}){
        let results= await getHotSalesList(id,limit,type)
        commit("SALESLISTTWO",results.data.result)
    },
    async getGoodEvaluateList({commit},id){
        let results = await getGoodEvaluate(id)
        commit("GETGOODEVALUATE",results.data.result)
    },
    async getEvaluatePageList({commit},{id,data}){
        let results = await getEvaluatePage(id,data)
        commit("GETPAGELIST",results.data.result)
    }
}
const getters={}

export default {
    state,
    mutations,
    actions,
    getters
}