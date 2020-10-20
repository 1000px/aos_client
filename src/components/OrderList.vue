<template>
  <div class="container">
    <el-row :gutter="20">
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
  </div>
</template>
<script>
export default {
  name: 'OrderList',
  data: () => ({
    orders: [
      {
        desk_name: '1' + '号桌',
        price: 23.45,
        dishes: [
          {
            'name': '红烧豆腐',
            'count': 1,
            'price': 10
          },
          {
            'name': '麻婆肉',
            'count': 1,
            'price': 20
          }
        ]
      },
      {
        desk_name: '2' + '号桌',
        price: 53.45,
        dishes: [
          {
            'name': '烧豆腐',
            'count': 1,
            'price': 10
          },
          {
            'name': '婆肉',
            'count': 1,
            'price': 12
          }
        ]
      }
    ]
  }),
  props: ['orderParam']
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