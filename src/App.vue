<template>
  <el-container>
    <el-aside width="308px">
      <h3>控制台</h3>
      <p>abc@suoyatu.com</p>
      <br>
      <div class="side-item">
        <i class="el-icon-sold-out"></i><span>店铺信息</span>
      </div>
      <div class="side-item">
        <i class="el-icon-shopping-cart-full"></i><span>订单管理</span>
      </div>
      <div class="side-item">
        <i class="el-icon-notebook-2"></i><span>菜品分类</span>
      </div>
      <div class="side-item">
        <i class="el-icon-fork-spoon"></i><span>菜单管理</span>
      </div>
      <div class="side-item">
        <i class="el-icon-goblet"></i><span>餐桌管理</span>
      </div>
      <br>
      <h3>仪表盘</h3>
      <p>Data Analize</p>
      <br>
      <div class="side-item">
        <i class="el-icon-pie-chart"></i><span>数据统计</span>
      </div>
      <div class="side-item">
        <i class="el-icon-setting"></i><span>当前账户</span>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <i class="el-icon-s-fold"></i><span>数据统计</span>
          </el-col>
          <el-col :span="12">
            <i class="el-icon-message"></i><i class="el-icon-user"></i>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
margin: 0;
padding: 0;
}
html, body {
width: 100%;
height: 100%;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
.el-container {
height: 100%;
}
.el-aside {
height: 100%;
border-right: 1px solid silver;
padding: 32px 12px;
}
.el-aside .side-item {
margin-bottom: 6px;
height: 32px;
line-height: 32px;
font-size: 18px;
border-bottom: 1px solid silver;
}
.el-aside .side-item i {
margin-right: 8px;
}
.el-header {
border-bottom: 1px solid silver;
padding: 0;
}
.el-header .el-row {
height: 60px;
line-height: 60px;
font-size: 20px;
margin: 0;
}
.el-header .el-row .el-col:nth-child(1) {
}
.el-header .el-row .el-col:nth-child(2) {
text-align: right;
}
.el-header .el-row .el-col:nth-child(2) i {
margin-left: 8px;
}
</style>
