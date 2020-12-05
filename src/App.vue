<template>
  <el-container>
    <el-aside width="308px">
      <div style="padding-top:20px">
        <h3>控制台</h3>
        <p>abc@suoyatu.com</p>
      </div>
  
      <br>
      <div class="side-item" v-for="(item, i) in tabs1" :key="i">
        <router-link :to="item.path" :class="curRoute.path.indexOf(item.path)!=-1?'active':''">
          <i :class="item.icon"></i><span>{{item.name}}</span>
        </router-link>
      </div>
      <br>
      <h3>仪表盘</h3>
      <p>Data Analize</p>
      <br>
      <div class="side-item" v-for="(item, i) in tabs2" :key="i+100">
        <router-link :to="item.path" :class="curRoute.path.indexOf(item.path)!=-1?'active':''">
          <i :class="item.icon"></i><span>{{item.name}}</span>
        </router-link>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <i class="el-icon-s-fold"></i><span>{{$store.getters.getCurrentRouter}}</span>
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
import config from './config'
export default {
  name: 'App',
  data: () => ({
    curRoute: {
      path: '',
      name: ''
    },
    tabs1: config.tabs1,
    tabs2: config.tabs2
  }),
  mounted () {
    this.chgCurRoute(this.$route.path)
    this.$store.commit('chgCurrentRouter', this.$route.path)
  },
  watch: {
    $route(to, from) {
      this.curRoute = to.path
      this.orgRotue = from.path
      this.chgCurRoute(to.path)
      this.$store.commit('chgCurrentRouter', this.curRoute)
    }
  },
  computed: {
    curRouteName: function() {
      return this.$store.state.curRouterName
    }
  },
  methods: {
    chgCurRoute: function (path) {
      console.log('change cur route:', path)
      if (path == '/') return
      this.tabs1.forEach(element => {
        if(path != '' && path.indexOf(element.path) != -1) {
          this.curRoute = element
        }
      });
      this.tabs2.forEach(item => {
        if(path != '' && path.indexOf(item.path) != -1) {
          this.curRoute = item
        }
      })
    }
  }
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
  padding: 0 12px;
}
.el-aside .side-item {
  margin-bottom: 6px;
  height: 32px;
  line-height: 32px;
  font-size: 18px;
  border-bottom: 1px solid silver;
}
.el-aside .side-item > a {
  text-decoration: none;
  color: #333;
}
.el-aside .side-item > a:hover,
.el-aside .side-item > a.active {
  color: #67c23a;
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
.el-header .el-row .el-col:nth-child(2) {
  text-align: right;
}
.el-header .el-row .el-col:nth-child(2) i {
  margin-left: 8px;
}
</style>
