const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,//去除map文件
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
})
