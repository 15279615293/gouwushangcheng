import {getLoginInfos} from "@/api/index"
import {setToken} from "@/utils/token"

const state={
    loginInfo:{}
}
const mutations={
    GETLOGININFO(state,loginInfo){
        state.loginInfo=loginInfo
    }
}
const actions={
    async getLoginInfo({commit},data){
        let results = await getLoginInfos(data)
        commit("GETLOGININFO",results.data.result)
        setToken(results.data.result.token)
        localStorage.setItem("userName",results.data.result.account)
    }
}
const getters={}

export default {
    state,
    mutations,
    actions,
    getters
}