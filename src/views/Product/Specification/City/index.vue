<template>
  <div class="block">
    <el-cascader
      v-model="value"
      :options="options"
    ></el-cascader>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      value: [],
      options: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "beijingshi",
              label: "北京市",
              children: [
                {
                  value: "dongchengqu",
                  label: "东城区",
                },
                {
                  value: "xichengqu",
                  label: "西城区",
                },
                {
                  value: "chongwenqu",
                  label: "崇文区",
                },
                {
                  value: "xuanwuqu",
                  label: "宣武区",
                },
                {
                  value: "zhaoyangqu",
                  label: "朝阳区",
                },
                {
                  value: "fnegtaiqu",
                  label: "丰台区",
                },
                {
                  value: "shijingshanqu",
                  label: "石景山区",
                },
                {
                  value: "haidianqu",
                  label: "海淀区",
                },
                {
                  value: "mentougouqu",
                  label: "门头沟区",
                },
                {
                  value: "fangshanqu",
                  label: "房山区",
                },
                {
                  value: "tongzhouqu",
                  label: "通州区",
                },
                {
                  value: "shunyiqu",
                  label: "顺义区",
                },
                {
                  value: "changpingqu",
                  label: "昌平区",
                },
                {
                  value: "daxingqu",
                  label: "大兴区",
                },
                {
                  value: "huairouqu",
                  label: "怀柔区",
                },
                {
                  value: "pingguqu",
                  label: "平谷区",
                },
                {
                  value: "miyunqu",
                  label: "密云区",
                },
                {
                  value: "yanqingqu",
                  label: "延庆区",
                },
                {
                  value: "jingjijishukaifaqu",
                  label: "经济技术开发区",
                },
              ],
            },
          ],
        },
        {
          value: "tianjin",
          label: "天津",
          children: [
            {
              value: "tianjinshi",
              label: "天津市",
              children: [
                {
                  value: "hepingqu",
                  label: "和平区",
                },
                {
                  value: "hedongqu",
                  label: "河东区",
                },
                {
                  value: "hexiqu",
                  label: "河西区",
                },
                {
                  value: "nankaiqu",
                  label: "南开区",
                },
                {
                  value: "hebeiqu",
                  label: "河北区",
                },
                {
                  value: "hongqiaoqu",
                  label: "红桥区",
                },
                {
                  value: "tangguqu",
                  label: "塘沽区",
                },
                {
                  value: "hanguqu",
                  label: "汉沽区",
                },
                {
                  value: "dagangqu",
                  label: "大港区",
                },
                {
                  value: "dongliqu",
                  label: "东丽区",
                },
                {
                  value: "xiqingqu",
                  label: "西青区",
                },
                {
                  value: "jinnanqu",
                  label: "津南区",
                },
                {
                  value: "beichenqu",
                  label: "北辰区",
                },
                {
                  value: "wuqingqu",
                  label: "武清区",
                },
                {
                  value: "baodiqu",
                  label: "宝坻区",
                },
                {
                  value: "binhaixinqu",
                  label: "滨海新区",
                },
                {
                  value: "ninghequ",
                  label: "宁河区",
                },
                {
                  value: "jinghaiqu",
                  label: "静海区",
                },
                {
                  value: "jizhouqu",
                  label: "蓟州区",
                },
                {
                  value: "kaifaqu",
                  label: "开发区",
                },
                {
                  value: "baoshuiqu",
                  label: "保税区",
                },
                {
                  value: "kejiyuanqu",
                  label: "科技园区",
                },
              ],
            },
          ],
        },
        {
          value: "hebeisheng",
          label: "河北省",
          children: [
            {
              value: "shijiazhuang",
              label: "石家庄市",
              children: [
                {
                  value: "changanqu",
                  label: "长安区",
                },
                {
                  value: "qiaodongqu",
                  label: "桥东区",
                },
                {
                  value: "qiaoxiqu",
                  label: "桥西区",
                },
                {
                  value: "xinhuaqu",
                  label: "新华区",
                },
                {
                  value: "jingxingkuangqu",
                  label: "井陉矿区",
                },
                {
                  value: "yuhuaqu",
                  label: "裕华区",
                },
                {
                  value: "jingxingxian",
                  label: "井陉县",
                },
                {
                  value: "zhnegdingxian",
                  label: "正定县",
                },
                {
                  value: "luanchengqu",
                  label: "栾城区",
                },
                {
                  value: "xingtangxian",
                  label: "行唐县",
                },
                {
                  value: "lingshouxian",
                  label: "灵寿县",
                },
                {
                  value: "gaoyixian",
                  label: "高邑县",
                },
                {
                  value: "shenzexian",
                  label: "深泽县",
                },
                {
                  value: "zanhuangxian",
                  label: "赞皇县",
                },
                {
                  value: "wujixian",
                  label: "无极限",
                },
                {
                  value: "pingshanxian",
                  label: "平山县",
                },
                {
                  value: "yuanshixian",
                  label: "元氏县",
                },
                {
                  value: "zhaoian",
                  label: "赵县",
                },
                {
                  value: "kaifaqu",
                  label: "开发区",
                },
                {
                  value: "zhengdingxinqu",
                  label: "正定新区",
                },
                {
                  value: "shijiazhuangxunhuanhuagonyuanqu",
                  label: "石家庄循环化工园区",
                },
                {
                  value: "xinjishi",
                  label: "xinjishi",
                },
                {
                  value: "gaochengqu",
                  label: "藁城区",
                },
                {
                  value: "jinzhoushi",
                  label: "晋州市",
                },
                {
                  value: "xinleshi",
                  label: "新乐市",
                },
                {
                  value: "luquanqu",
                  label: "鹿泉区",
                },
              ]
            },
            {
              value: "tangshanshi",
              label: "唐山市",
              children: [
                {
                  value: "lunanqu",
                  label: "路南区",
                },
                {
                  value: "lubeiqu",
                  label: "路北区",
                },
                {
                  value: "guyequ",
                  label: "古冶区",
                },
                {
                  value: "kaipingqu",
                  label: "开平区",
                },
                {
                  value: "fenngnanqu",
                  label: "丰南区",
                },
                {
                  value: "fengrunqu",
                  label: "丰润区",
                },
                {
                  value: "caofeidianqu",
                  label: "曹妃甸区",
                },
                {
                  value: "luanxian",
                  label: "滦县",
                },
                {
                  value: "luannanxian",
                  label: "滦南县",
                },
                {
                  value: "laotingxian",
                  label: "乐亭县",
                },
                {
                  value: "qianxixianqu",
                  label: "迁西县",
                },
                {
                  value: "yutianxian",
                  label: "玉田县",
                },
                {
                  value: "tangshankaifaqu",
                  label: "唐山高新技术开发区",
                },
                {
                  value: "nanbaokaifaqu",
                  label: "南堡开发区",
                },
                {
                  value: "haigangkaifaqu",
                  label: "海港开发区",
                },
                {
                  value: "lutaikaifaqu",
                  label: "芦台开发区",
                },
                {
                  value: "hanguqu",
                  label: "hangukaifaqu",
                },
                {
                  value: "caofeidianqu",
                  label: "曹妃甸gonye区",
                },
                {
                  value: "zunhuashi",
                  label: "zunhuashi",
                },
                {
                  value: "qiananshi",
                  label: "迁安市",
                },
              ]
            },
            {
              value: "qinhuangdaoshi",
              label: "秦皇岛市",
               children: [
                {
                  value: "haigangqu",
                  label: "海港区",
                },
                {
                  value: "shanhaiguanqu",
                  label: "山海关区",
                },
                {
                  value: "beidaihequ",
                  label: "北戴河区",
                },
                {
                  value: "qinglongmanzu",
                  label: "青龙满族自治县",
                },
                {
                  value: "changlixian",
                  label: "昌黎县",
                },
                {
                  value: "funingqu",
                  label: "抚宁区",
                },
                {
                  value: "lulongxian",
                  label: "卢龙县",
                },
                {
                  value: "kaifaqu",
                  label: "开发区",
                },
                {
                  value: "beidaihexinqu",
                  label: "北戴河新区",
                },
              ]
            },
            {
              value: "handanshi",
              label: "邯郸市",
              children: [
                {
                  value: "hanshanqu",
                  label: "邯山区",
                },
                {
                  value: "congtaiqu",
                  label: "丛台区",
                },
                {
                  value: "fuxingqu",
                  label: "复兴区",
                },
                {
                  value: "fengfengkuangqu",
                  label: "峰峰矿区",
                },
                {
                  value: "handanshi",
                  label: "邯郸市",
                },
                {
                  value: "linzhangxian",
                  label: "临漳县",
                },
                {
                  value: "chenganxian",
                  label: "成安县",
                },
                {
                  value: "damingxian",
                  label: "大名县",
                },
                {
                  value: "shexian",
                  label: "涉县",
                },
                {
                  value: "cixian",
                  label: "磁县",
                },
                {
                  value: "feixiangqu",
                  label: "feixangqu",
                },
                {
                  value: "yongnianqu",
                  label: "永年区",
                },
                {
                  value: "qiuxian",
                  label: "邱县",
                },
                {
                  value: "jizexian",
                  label: "鸡泽县",
                },
                {
                  value: "guangpingxian",
                  label: "广平县",
                },
                {
                  value: "guantaoxian",
                  label: "馆陶县",
                },
                {
                  value: "weixian",
                  label: "魏县",
                },
                {
                  value: "quzhouxian",
                  label: "曲周县",
                },
                {
                  value: "kaifaqu",
                  label: "开发区",
                },
                {
                  value: "matoushnegtai",
                  label: "码头生态工业城",
                },
                {
                  value: "wuanshi",
                  label: "武安市",
                },
              ]
            },
            // {
            //   value: "shijiazhuang",
            //   label: "石家庄市",
            //   children: [
            //     {
            //       value: "changanqu",
            //       label: "长安区",
            //     },
            //   ]
            // },
          ],
        },
        //  {
        //   value: "beijing",
        //   label: "北京",
        //   children: [
        //     {
        //       value: "shejiyuanze",
        //       label: "设计原则",
        //       children: [
        //         {
        //           value: "yizhi",
        //           label: "一致",
        //         },
        //       ],
        //     },
        //     {
        //       value: "daohang",
        //       label: "导航",
        //       children: [
        //         {
        //           value: "cexiangdaohang",
        //           label: "侧向导航",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    };
  },
};
</script>

<style scoped>
.block{
    position: relative;
    left: 80px;
    top: -50px;
}
</style>