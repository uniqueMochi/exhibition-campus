<script setup>
import StudentStatistics from './conponment/StudentStatistics.vue'
import BillStatistics from './conponment/BillStatistics.vue'
</script>
<template>
  <div class="container">
    <div class="statistics">
      <!-- 学生统计 -->
      <StudentStatistics />
      <BillStatistics />
    </div>
    <div class="headcount">
      <div class="teacher-headcount">老师名单</div>
      <div class="student-headcount">学生名单</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  .statistics {
    display: flex;
  }

  .headcount {
    margin-top: 32px;
    display: flex;

    .teacher-headcount {
      flex: 1;
      background-color: #f0f0f0;
    }

    .student-headcount {
      width: 790px;
      height: 497px;
      margin-left: 20px;
      background-color: #f5f5f5;
    }
  }
}
</style>
