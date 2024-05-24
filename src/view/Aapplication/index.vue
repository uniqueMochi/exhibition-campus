<script setup>
import { ref } from 'vue'

const eduServices = ref([
  { id: 1, text: '考勤记录明细' },
  { id: 2, text: '请假管理' },
  { id: 3, text: '成绩查询' },
  { id: 4, text: '学分计算规则' },
  { id: 5, text: '网上报名' },
  { id: 6, text: '课程表' },
  { id: 7, text: '图书管理' }
])
</script>

<template>
  <div class="container">
    <el-card shadow="never">
      <div class="container_head">
        <span class="title">应用管理</span>
      </div>

      <div class="container-main">
        <!-- 教育服务 -->
        <div class="item education">
          <div class="title">教育服务</div>
          <ul class="item-nav">
            <li v-for="item in eduServices" :key="item.id">
              <el-card shadow="hover">{{ item.text }}</el-card>
            </li>
          </ul>
        </div>
        <!-- 后勤管理 -->
        <div class="item logistics">
          <div class="title">后勤管理</div>
          <ul class="item-nav">
            <li><el-card>2</el-card></li>
            <li><el-card>2</el-card></li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.container_head {
  display: flex;
  margin: 12px 0;
  .title {
    height: 35px;
    line-height: 35px;
    font-weight: 700;
    font-size: 18px;
    color: #333333;
    padding-left: 20px;
    border-left: 5px solid #1047f7;
  }
}

.item {
  .item-nav {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 25px;
      margin-right: 19px;

      .el-card {
        width: 250px;
        padding: 22px 0;
        text-align: center;
      }
    }
  }
}
</style>
