<script setup>
const tableData = [
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  },
  {
    name: '林振杰',
    class_name: '高三(3)班',
    manager: '林振杰',
    enrtydate: '2024-03-01'
  }
]
</script>

<template>
  <el-card class="student-headcount">
    <template #header>
      <div class="card-header">
        <h2 class="title">学生名单</h2>
      </div>
    </template>
    <el-table :data="tableData">
      <el-table-column fixed prop="name" label="学生姓名" />
      <el-table-column prop="class_name" label="班级" />
      <el-table-column prop="manager" label="班主任" />
      <el-table-column prop="enrtydate" label="入学时间" />
      <el-table-column fixed="right" label="操作" width="60">
        <template #default>
          <el-button link type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-button
        type="primary"
        plain
        color="#1047f7"
        @click="$router.push('/studentManagement')"
        >查看所有</el-button
      >
    </template>
  </el-card>
</template>

<style lang="scss" scoped>
.student-headcount {
  width: 790px;
  height: 497px;
  margin-left: 20px;

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

    .el-table__row {
      height: 43px;

      .el-button {
        color: #f59b22;
      }

      .el-table_1_column_1 {
        color: #333;
      }

      .el-table_1_column_ {
        &2 {
          color: #aaa;
        }

        &3 {
          color: #aaa;
        }

        &4 {
          color: #aaa;
        }
      }
    }
  }

  &:deep(.el-card__footer) {
    padding: 0;
    text-align: center;
    border: 0;

    .el-button {
      margin-top: 13px;
      // margin-bottom: 23px;
      width: 250px;
      border-width: 2px;
      border-color: #1047f7;
    }
  }
}
</style>
