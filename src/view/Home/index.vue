<script setup>
import StudentStatistics from './conponment/StudentStatistics.vue'
import BillStatistics from './conponment/BillStatistics.vue'
import TeacherHeadcount from './conponment/TeacherHeadcount.vue'
import StudentHeadcount from './conponment/StudentHeadcount.vue'
</script>
<template>
  <div class="container">
    <div class="statistics">
      <!-- 学生统计 -->
      <StudentStatistics />
      <BillStatistics />
    </div>
    <div class="headcount">
      <TeacherHeadcount />
      <StudentHeadcount />
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
  }
}
</style>
