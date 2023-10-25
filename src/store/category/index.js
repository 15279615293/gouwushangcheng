import {getCategoryInfo,GetCategorySubList,GetSubTemporary} from "@/api/index"

const state={
    categoryInfo:{},
    subList:{},
    temporaryInfos:{}
}
const mutations={
    GETCATEGORYINFO(state,categoryInfo){
        state.categoryInfo=categoryInfo
    },
    GETCATEGORYSUB(state,subList){
        state.subList=subList
    },
    GETTEMPORARY(state,temporaryInfos){
        state.temporaryInfos=temporaryInfos
    }
}
const actions={
    async getCategory({commit},category1Id){
        let results = await getCategoryInfo(category1Id)
        commit("GETCATEGORYINFO",results.data.result)
    },
    async getCategorySub({commit},category2Id){
        let results = await GetCategorySubList(category2Id)
        commit("GETCATEGORYSUB",results.data.result)
    },
    async getTemporary({commit},data){
        let results = await GetSubTemporary(data)
        commit("GETTEMPORARY",results.data.result)
    }
}
const getters={}


export default{
    state,
    mutations,
    actions,
    getters
}