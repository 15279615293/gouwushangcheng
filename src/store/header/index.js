import {categoryHeader} from '@/api/index'

const state={
    headerList:[]
}
const mutations={
    CATEGORYHEADER(state,headerList){
        state.headerList=headerList
    }
}
const actions={
    async getCategoryHeader({commit}){
        let results = await categoryHeader()
        if(results.status==200){
            commit("CATEGORYHEADER",results.data.result)
        }
    }
}
const getters={}

export default {
    state,
    mutations,
    actions,
    getters
}