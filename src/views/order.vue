<template>
  <div class="container">
    <el-tabs v-model="active_tab" type="card" @tab-click="tabChange">
      <el-tab-pane label="未结订单" name="not_settle_list">
        <order-list :order-params="active_tab"></order-list>
      </el-tab-pane>
      <el-tab-pane label="当日订单" name="cur_day_list">当日订单</el-tab-pane>
      <el-tab-pane label="全部订单" name="order_list">全部订单</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrderList from '@/components/OrderList.vue'
export default {
  name: "Order",
  data: () => ({
    msg: 'Hello, World',
    active_tab: 'not_settle_list',
  }),
  mounted() {

  },
  methods: {
    tabChange() {

    }
  },
  components: {
    OrderList 
  }
}
</script>

<style scope>

</style>
