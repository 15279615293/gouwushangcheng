import requests  from "./request";
import mocks from "./mock"
//头部商品分类
export const categoryHeader=()=>requests({url:'/home/category/head',method:'get'})
//首页轮播轮播图数据
export const getBanners=()=>requests({url:'/home/banner',method:'get'})
//新鲜好物
export const getHomeNew=()=>requests({url:'/home/new',method:'get'})
//人气推荐
export const getHomeHot=()=>requests({url:'/home/hot',method:'get'})
//热门品牌
export const getHotBrank=()=>requests({url:'/home/brand',method:'get'})
//产品区块
export const getHomeGoods=()=>requests({url:'/home/goods',method:'get'})
//最近专题
export const getHomeSpecial=()=>requests({url:'/home/special',method:'get'})
//一级分类类目
export const getCategoryInfo=(category1Id)=>requests({url:`/category?id=${category1Id}`,method:"get"})
//二级分类筛选条件数据
export const GetCategorySubList=(category2Id)=>requests({url:`/category/sub/filter?id=${category2Id}`,method:"get"})
//商品列表
export const GetSubTemporary=(data)=>requests({url:"/category/goods/temporary",method:"post",data})
//商品详情
export const GetProductGood=(id)=>requests({url:`/goods?id=${id}`,method:"get"})
//同类推荐(也支持猜你喜欢)
export const getRelevant=(id,limit)=>requests({url:`/goods/relevant?id=${id}&limit=${limit}`,method:"get"})
//销售热榜
export const getHotSalesList=(id,limit,type)=>requests({url:`/goods/hot?id=${id}&limit=${limit}&type=${type}`,method:"get"})
//商品评价信息
export const getGoodEvaluate=(id)=>mocks({url:`/goods/${id}/evaluate`,method:"get"})
//评价分页数据
export const getEvaluatePage=(id,data)=>mocks({url:`/goods/${id}/evaluate/page`,params:data, method:"get"})
//登录
export const getLoginInfos=(data)=>requests({url:"/login",method:"post",data})
//加入购物车
export const getAddCarts=(data)=>requests({url:"/member/cart",method:"post",data})
//购物车列表
export const getCarInfos=()=>requests({url:'/member/cart',method:'get'})
//购物车sku数据
export const getCarSkus=(skuId)=>requests({url:`/goods/sku/${skuId}`,method:'get'})
//删除/清空购物车商品
export const getselectedAll=(data)=>requests({url:"/member/cart",method:"DELETE",data})