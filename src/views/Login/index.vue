<template>
  <div class="content">
    <img src="../../assets/login-top.jpg" class="login-top" alt="" />
    <p class="go" @click="goHome">进入网站首页<span>>></span></p>
    <img src="../../assets/c3.png" alt="" class="login-center" />
    <div class="login">
      <div class="nav">账户登录</div>
      <div class="password">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="userName"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="passWord" show-password></el-input>
        <div class="inputs">
        <input type="checkbox" :checked="isChecked" @click="isCheckeds">我已同意<span>《隐私条款》</span>和<span>《服务条款》</span>
      </div>
      <p style="color:red;font-size:12px" v-if="!isChecked">!!!请勾选登录协议</p>
      <button @click="login">登录</button>
      </div>
      <div class="bot">忘记密码&emsp;免费注册</div>
    </div>
    <img src="../../assets/login-bottom.png" class="login-top" alt="" />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        isChecked:true,
        userName:'xiaotuxian001',
        passWord:'123456'
    }
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    isCheckeds(){
        this.isChecked=!this.isChecked
    },
    async login(){
        if(this.isChecked && this.userName && this.passWord){
            try{
            await this.$store.dispatch("getLoginInfo",{account:this.userName,password:this.passWord})
            let toPath=this.$route.query.redirect || '/'
            this.$router.push(toPath) 
            }catch(error){
               alert(error.message) 
            }           
        }
    }
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  flex-flow: wrap;
}
.login-top {
  width: 100%;
  height: 100%;
}
.login-center {
  width: 100%;
  height: 488px;
}
.go {
  width: 120px;
  height: 23px;
  font-size: 16px;
  position: absolute;
  top: 70px;
  right: 150px;
}
.go span {
  color: #27ba9b;
}
.login {
  width: 380px;
  height: 400px;
  background: white;
  position: absolute;
  left: 55%;
  top: 180px;
}
.login .nav {
  height: 105px;
  color: #27ba9b;
  font-size: 18px;
  text-align: center;
  line-height: 105px;
  font-weight: 700;
}
.login .password {
  height: 218px;
  padding: 0 40px;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  justify-content: space-between;
}
.login .password .inputs{
    height: 23px;
    font-size: 14px;
}
.login .password .inputs span{
    color: #069;
}
.login button{
    width: 300px;
    height: 40px;
    font-size: 14px;
    border: none;
    color: #fff;
    background: #27ba9b;
}
.login .bot{
    width: 132px;
    height: 20px;
    margin-top: 20px;
    margin-left: 220px;
    color: #999;
    font-size: 14px;
}
</style>