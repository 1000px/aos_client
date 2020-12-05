<template>
  <div class="container">
    <el-table
      :data="categories"
      style="width: 100%">
      <el-table-column prop="order" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="desc" label="说明"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" 
            @click="editCate(scope.$index, scope.row)"
            type="primary">编辑</el-button>
          <el-button size="mini" 
            @click="delCate(scope.$index, scope.row)"
            type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-button round type="primary" icon="el-icon-plus" @click="addCate">添加分类</el-button>

    <el-dialog title="菜单分类" :visible.sync="cateEditVisible">
      <el-form :model="cateInfo">
        <el-form-item label="名称：">
          <el-input v-model="cateInfo.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="说明：">
          <el-input type="textarea" v-model="cateInfo.desc" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cateEditVisible=false">取消</el-button>
        <el-button type="primary" @click="commitCate">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data: () => ({
    msg: 'Category',
    search: '',
    cateEditVisible: false,
    cateInfo: {
      id: '',
      name: '',
      desc: ''
    },
    categories: [
      {
        order: 1,
        name: '大荤',
        desc: '肉食者的狂欢'
      },
      {
        order: 2,
        name: '全素',
        desc: '健康的饮食习惯'
      },
      {
        order: 3,
        name: '荤素搭配',
        desc: '香甜美妙的食物'
      }
    ]
  }),
  methods: {
    editCate: function (index, obj) {
      this.cateEditVisible = true
      this.cateInfo = obj
    },
    addCate: function () {
      this.cateInfo = {
        id: '',
        name: '',
        desc: ''
      }
      this.cateEditVisible = true
    },
    commitCate: function () {
      // 将改变提交到后台，根据id是否存在判断当前改变是新增还是修改
      this.cateEditVisible = false
    }
  }
}
</script>
<style scoped>

</style>