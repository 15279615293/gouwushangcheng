import {getBanners,getHomeNew,getHomeHot,getHotBrank,getHomeGoods,getHomeSpecial} from '@/api/index'
const state={
    bannersList:[],
    newList:[],
    hotList:[],
    brankList:[],
    goodsInfo:[],
    specialList:[]
}
const mutations={
    GETBANNERS(state,bannersList){
        state.bannersList=bannersList
    },
    HOMENEWLIST(state,newList){
        state.newList=newList
    },
    GETHOTLIST(state,hotList){
        state.hotList=hotList
    },
    GETHOTBRANK(state,brankList){
        state.brankList=brankList
    },
    GETHOMEGOODS(state,goodsInfo){
        state.goodsInfo=goodsInfo
    },
    GETSPECIALLIST(state,specialList){
        state.specialList=specialList
    }
}
const actions={
    async getBannersList({commit}){
        let results = await getBanners()
        if(results.status==200){
            commit('GETBANNERS',results.data.result)
        }
    },
    async HomeNewList({commit}){
        let results = await getHomeNew()
        commit('HOMENEWLIST',results.data.result)
    },
    async getHomeHotList({commit}){
        let results = await getHomeHot()
        commit("GETHOTLIST",results.data.result)
    },
    async getHotBrankList({commit}){
        let results = await getHotBrank()
        commit("GETHOTBRANK",results.data.result)
    },
    async getHomeGoodsInfo({commit}){
        let results = await getHomeGoods()
        commit('GETHOMEGOODS',results.data.result)
    },
    async getSpecialList({commit}){
        let results = await getHomeSpecial()
        commit("GETSPECIALLIST",results.data.result)
    }
}
const getters={
 
}

export default{
    state,
    mutations,
    actions,
    getters
}