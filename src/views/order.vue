<template>
  <div class="container">
    <!-- <div class="tab-bars">
      <i v-for="(item, i) in styleBars" :key="i"
        :class="list_style == item.name?item.icon+' active':item.icon"
        @click="chgListStyle(item)"></i>
    </div> -->
    <!-- <el-tabs v-model="active_tab" type="card" @tab-click="tabChange">
      <el-tab-pane label="未结订单" name="not_settle_list">
        <order-list :order-params="active_tab" :list-style="list_style"></order-list>
      </el-tab-pane>
      <el-tab-pane label="当日订单" name="cur_day_list">
        <order-list :order-params="active_tab"></order-list>
      </el-tab-pane>
      <el-tab-pane label="全部订单" name="order_list">
        <order-list :order-params="active_tab"></order-list>
      </el-tab-pane>
    </el-tabs> -->
    <div class="toolbar">
      <span>工具栏：</span>
      <el-button-group>
        <el-button type="text">未结订单</el-button>
        <el-button type="text">全部订单</el-button>
      </el-button-group>
      <el-divider direction="vertical"></el-divider>
      <el-button-group>
        <el-button type="text">列表</el-button>
        <el-button type="text">卡片</el-button>
      </el-button-group>
    </div>

    <el-table
      :data="orderList"
      style="width:100%">
      <el-table-column
        prop="order_name"
        label="订单"
        width="200"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// import OrderList from '@/components/OrderList.vue'
// import api from '@/service'
export default {
  name: "Order",
  data: () => ({
    active_tab: 'not_settle_list',
    list_style: 'card', // 订单显示方式，可以是列表list，也可以是card形式
    styleBars: [
      {
        name: 'card',
        icon: 'el-icon-menu'
      },
      {
        name: 'list',
        icon: 'el-icon-s-grid'
      }
    ],
    orderList: []
  }),
  mounted() {
    
  },
  methods: {
    tabChange() {

    },
    chgListStyle(item) {
      this.list_style = item.name
    }
  },
  components: {
    // OrderList 
  }
}
</script>

<style scope>
.container {
  position: relative;
}
.tab-bars {
  text-align: right;
  width: 120px;
  height: 41px;
  line-height: 41px;
  font-size: 22px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
}
.tab-bars i {
  cursor: pointer;
}
.tab-bars i.active {
  color: #409EFF;
}

.toolbar {
  position: fixed;
  right: 0;
  bottom: 0;
}

</style>
