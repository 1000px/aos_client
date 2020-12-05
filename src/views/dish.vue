<template>
  <div class="container">
    <el-tabs v-model="activeTab" type="card" @click="chgTab">
      <el-tab-pane label="已有菜品" name="dishes">
        <el-row :gutter="20">
          <el-col :span="4" v-for="(dish, index) in dishes" :key="index">
            <el-card :body-style="{padding: '0'}">
              <img :src="dish.imgSrc"/>
              <div class="card-main">
                <span>{{dish.name}}</span>
                <span>{{dish.price}}</span>
              </div>
              <div class="card-bottom">
                <el-button size="mini" type="primary">编辑</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="菜品分类" name="category">
        <el-row :gutter="20">
          <el-col :span="10">
            <h4 style="height: 48px; line-height: 48px;">未分类菜单：</h4>
            <el-table
              border
              :data="notCateDishes"
              ref="notTable"
              style="width: 100%; margin-top: 18px;">
              <el-table-column
                type="selection"
                width="60">
              </el-table-column>
              <el-table-column
                label="名称"
                prop="name"
                width="120">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="4" style="padding-top: 80px;">
            <el-button icon="el-icon-arrow-left" 
              type="primary"
              @click="outCate"></el-button>
            <el-button icon="el-icon-arrow-right" 
              type="primary"
              @click="intoCate"></el-button>
          </el-col>
          <el-col :span="10">
            <h4 style="height: 48px; line-height: 48px;">当前分类:
              <el-select placeholder="请选择" :value="curCate.name"
                @change="chgCateOpts">
                <el-option
                  v-for="item in cateOpts"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </h4>
            <el-table
              border
              :data="CateDishes"
              style="width: 100%; margin-top: 18px;">
              <el-table-column
                type="selection"
                width="60">
              </el-table-column>
              <el-table-column
                label="名称"
                prop="name"
                width="120">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="备用图片" name="pics">
        备用图片
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Dish',
  data: () => ({
    msg: 'Dish',
    activeTab: 'category',
    cateOpts: [
      {
        id: 1,
        name: '大荤',
        desc: 'abc'
      },
      {
        id: 2,
        name: '大素',
        desc: 'nihao'
      },
      {
        id: 3,
        name: '荤素搭配',
        desc: 'fhidad'
      }
    ],
    dishes: [
      {
        imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        name: '红烧肉',
        price: '28.2',
        id: 1
      },
      {
        imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        name: '红烧肉',
        price: '28.2',
        id: 2
      },
      {
        imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        name: '红烧肉',
        price: '28.2',
        id: 3
      },
      {
        imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        name: '红烧肉',
        price: '28.2',
        id: 4
      }
    ],
    notCateDishes: [
      {
        id: 1,
        name: '红烧肉',
        price: '35.2'
      },
      {
        id: 2,
        name: '麻婆豆腐',
        price: '10'
      }
    ],
    CateDishes: [],
    curCate: {}
  }),
  methods: {
    chgTab: function() {},
    intoCate: function() {
      if(this.curCate.name == '') {
        this.$message.error('请先选择分类！')
        return;
      }
      console.log(this.$refs.notTable.selection)
      this.CateDishes.push(this.$refs.notTable.selection)
    },
    outCate: function() {},
    chgCateOpts: function(opt) {
      this.curCate = this.cateOpts[opt-1]
    }
  }
}
</script>
<style scoped>
.el-card img {
  width: 100%;
  height: auto;
}
.el-card .card-main {
  padding: 12px;
  text-align: right;
}
.el-card .card-main span {
  display: block;
  height: 28px;
  line-height: 28px;
}
.el-card .card-main > span:nth-child(1) {
  float: left;
}
.el-card .card-main > span:nth-child(2) {
  color: #f56c6c;
}
.el-card .card-bottom {
  padding: 0 12px 12px 12px;
}
</style>