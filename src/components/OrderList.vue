<template>
  <div class="container">
    <el-row :gutter="20" v-if="listStyle=='card'">
      <el-col :span="6" v-for="(order, index) in orders" :key="index">
        <el-card shadow="hover">
          <div slot="header" class="order-header">
            <span>{{order.desk_name}}</span>
            <span>{{order.price}}</span>
          </div>
          <div class="order-border">
            <span v-for="(item, i) in order.dishes" :key="i">
              {{item.name + ':' + item.count + '*' + item.price + ';'}}
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-table
      v-if="listStyle=='list'"
      :data="orders"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desk_name"
        label="餐桌"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="dishes"
        label="菜单内容">
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态">
      </el-table-column>
      <el-table-column
        label="详情">
        <template slot-scope="scope">
          <el-button size="mini" @click="getDetail(scope.row)" type="success">菜单详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from '@/service'
export default {
  name: 'OrderList',
  data: () => ({
    orders: []
  }),
  props: ['orderParam', 'listStyle'],
  methods: {
    getDetail: (row) => {
      console.log(row.desk_name)
    }
  },
  mounted() {
    api.getOrders(1).then(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
.order-header {
  text-align: right;
  height: 32px;
  line-height: 32px;
}
.order-header > span {
  font-size: 20px;
  font-weight: bold;
}
.order-header > span:nth-child(1) {
  float: left;
}

</style>