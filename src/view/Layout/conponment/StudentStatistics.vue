<script setup>
import { ref } from 'vue'

/* 进度条高度 */
const strokeWidth = ref(10)
</script>
<template>
  <div class="stu-statistics">
    <!-- 学生统计模块 -->
    <el-card shadow="hover" class="stu-total">
      <template #header>
        <div class="card-header">
          <h2>学生总数</h2>
        </div>
      </template>
      <h2 class="count">3250</h2>
      <el-progress
        :stroke-width="strokeWidth"
        :percentage="80"
        color="#6301be"
      />
      <p class="tips">20天内增加</p>
    </el-card>

    <el-card shadow="hover" class="freshman-variation">
      <template #header>
        <div class="card-header">
          <h2>新生</h2>
        </div>
      </template>
      <h2 class="count">230</h2>
      <el-progress
        :stroke-width="strokeWidth"
        :percentage="50"
        color="#d8001b"
      />
      <p class="tips">25天内增加</p>
    </el-card>

    <el-card shadow="hover" class="class-total">
      <template #header>
        <div class="card-header">
          <h2>总课程</h2>
        </div>
      </template>
      <h2 class="count">3</h2>
      <el-progress
        :stroke-width="strokeWidth"
        :percentage="76"
        color="#1047f7"
      />
      <p class="tips">20天内增加</p>
    </el-card>

    <el-card shadow="hover" class="charge-statistics">
      <template #header>
        <div class="card-header">
          <h2>收费</h2>
        </div>
      </template>
      <h2 class="count">￥355000.00</h2>
      <el-progress
        :stroke-width="strokeWidth"
        :percentage="56"
        color="#f59b22"
      />
      <p class="tips">30天内增加</p>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.stu-statistics {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  background-color: #f5f5f5;

  .el-card {
    width: 290px;
    margin-left: 20px;
    margin-bottom: 20px;

    h2 {
      margin: 0;
    }
    &:nth-child(2n + 1) {
      margin-left: 0px;
    }

    &:nth-child(n + 3) {
      margin-bottom: 0px;
    }

    :deep(.el-card__header) {
      border-bottom: 0;
      padding: 16px;
      .card-header {
        color: #7f7f7f;
      }
    }

    :deep(.el-card__body) {
      padding: 0 16px;
      .count {
        margin: 0;
      }

      .el-progress-bar__outer {
        margin: 6px 0 12px 0;
        border-radius: 2px;

        .el-progress-bar__inner {
          border-radius: 2px;
        }
      }

      .tips {
        font-size: 12px;
        color: #aaaaaa;
      }
    }
  }
}
</style>
