<template>
  <el-card class="teacher-headcount">
    <template #header>
      <div class="card-header">
        <h2 class="title">老师名单</h2>
      </div>
    </template>
    <ul class="teacherInfo">
      <li class="teacherInfo-item" v-for="item in 8" :key="item">
        <el-avatar
          v-if="true"
          :size="36"
          src="https://mochil-web-eadnews.oss-cn-guangzhou.aliyuncs.com/1400ed8e-8deb-4f6c-9617-24ac4753b20e.jpg"
        />
        <el-avatar v-else :size="36"> user </el-avatar>

        <!-- 老师信息 -->
        <div class="info">
          <div class="name">龙之介</div>
          <span class="detailInfo">
            <span class="length_of_service">工龄：10年</span>
            <span class="student_count">学生：293个</span>
          </span>
        </div>

        <!-- 查看 -->
        <span class="examine">查看</span>
      </li>
    </ul>
    <template #footer>
      <el-button
        type="primary"
        color="#1047f7"
        @click="$router.push('/tecaherManagement')"
        plain
      >
        查看所有
      </el-button>
    </template>
  </el-card>
</template>

<style lang="scss" scoped>
.teacher-headcount {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  & :deep(.el-card__header) {
    padding: 0 20px;
    color: #7f7f7f;
    border: 0;

    .title {
      margin: 10px 0;
    }
  }

  &:deep(.el-card__body) {
    flex: 1;
    padding: 0 20px;

    .teacherInfo-item {
      display: flex;
      margin-top: 12px;

      .info {
        flex: 1;
        margin: 0 20px;

        .name {
          font-size: 16px;
          color: #000000;
          margin-bottom: 2px;
        }

        .detailInfo {
          color: #aaaaaa;

          .student_count {
            margin-left: 20px;
          }
        }
      }

      .examine {
        color: #f59b22;
        line-height: 36px;
        cursor: pointer;
      }
    }
  }

  &:deep(.el-card__footer) {
    padding: 0;
    text-align: center;
    border: 0;

    .el-button {
      margin-top: 8px;
      margin-bottom: 23px;
      width: 250px;
      border-width: 2px;
      border-color: #1047f7;
    }
  }
}
</style>
