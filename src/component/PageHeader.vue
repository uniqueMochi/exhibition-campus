<script setup>
import { ArrowLeft } from '@element-plus/icons-vue'
</script>
<template>
  <!-- 考勤记录 -->

  <div class="container_head">
    <el-button
      class="goback-btn"
      type="primary"
      :icon="ArrowLeft"
      @click="$router.back()"
      text
    />
    <span class="title"><slot></slot></span>
  </div>
</template>

<style lang="scss" scoped>
.container_head {
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

  .el-button {
    margin-top: -7px;
    height: 24px;
  }
}
</style>
