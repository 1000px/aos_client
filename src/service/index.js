import service from './api'

// 订单管理
const getOrders = (shopID) => {
  return service.get('/orders/' + shopID)
}

// 菜品分类

// 菜单管理

// 餐桌管理

// 数据统计

// 我的信息


export default {
  getOrders
}