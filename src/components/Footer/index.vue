<template>
  <div>
    <!-- 底部 -->
    <div class="footer">
      <div class="footer-top">
        <div class="nav">
          <div class="nav-list">
            <p class="text">客服服务</p>
            <div class="one-box">
              <img src="../../assets/1.png" alt="" />
            </div>
            <div class="two-box">
              <img src="../../assets/2.png" alt="" />
            </div>
          </div>
          <div class="nav-list">
            <p class="text">关注我们</p>
            <div class="one-box">
              <img src="../../assets/3.png" alt="" />
            </div>
            <div class="two-box">
              <img src="../../assets/4.png" alt="" />
            </div>
          </div>
          <div class="nav-list">
            <p class="text">下载APP</p>
            <div class="one-box">
              <img src="../../assets/erweima.jpg" alt="" />
            </div>
            <div class="two-box">
              <img src="../../assets/5.png" alt="" />
            </div>
          </div>
          <div class="nav-list">
            <p class="text">服务热线</p>
            <div class="phone">
              <p>400-0000-000</p>
              <p>周一至周日 8:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottmo">
        <img src="../../assets/last.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: "Footer",
};
</script>

<style scoped>
.footer {
  width: 1473px;
  height: 638px;
  margin-top: 50px;
  /* clear: both; */
}
.footer-top {
  position: relative;
  width: 1473px;
  height: 290px;
  background: white;
}
.footer-top .nav {
  width: 1076px;
  height: 190px;
  margin-left: 130px;
  position: absolute;
  top: 60px;
}
.nav .nav-list {
  width: 269px;
  height: 190px;
  float: left;
}
.nav-list .text {
  width: 196px;
  height: 18px;
  color: rgb(163, 161, 161);
  font-size: 16px;
  text-align: center;
  margin-left: 35px;
}
.one-box,
.two-box {
  width: 92px;
  height: 92px;
  background: aqua;
  float: left;
  margin-top: 30px;
}
.one-box img,
.two-box img {
  width: 92px;
  height: 92px;
}
.one-box {
  margin-left: 35px;
}
.phone {
  width: 196px;
  height: 72px;
  margin-left: 35px;
  margin-top: 50px;
  text-align: center;
  color: rgb(163, 161, 161);
}
.phone p:nth-child(1) {
  font-size: 20px;
}
.phone p:nth-child(2) {
  font-size: 14px;
}
.footer-bottmo {
  width: 1473px;
  height: 348px;
}
.footer-bottmo img {
  width: 1473px;
  height: 348px;
}
</style>