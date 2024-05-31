<script setup>
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'
/* 方式 */
const modeVal = ref('')
/* mode列表 */
const modeOpt = [
  {
    value: '方式1',
    label: '按姓名A-Z'
  },
  {
    value: '方式2',
    label: '按日期↑'
  },
  {
    value: '方式3',
    label: '按日期↓'
  }
]

const selectMode = (e) => {
  console.log(e)
}

const value2 = ref('')

const shortcuts = [
  {
    text: '上一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      console.log(start, end)
      return [start, end]
    }
  },
  {
    text: '上个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      console.log(start, end)
      return [start, end]
    }
  }
]

/* 表单数据 */
const tableData = ref([])

/* 获取数据 */
onMounted(async () => {
  const res = await axios.get('https://yapi.pro/mock/408195/attendance')
  tableData.value = res.data
})
</script>
<template>
  <div class="container">
    <el-card class="outermost" shadow="never">
      <PageHeader>考勤记录明细</PageHeader>
      <el-card shadow="never">
        <div class="screen">
          <!-- 年级 -->
          <div class="item">
            <span class="title">年级</span>
            <el-select
              v-model="modeVal"
              placeholder=""
              style="width: 150px"
              @change="selectMode"
            >
              <el-option
                v-for="item in modeOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                placement="bottom-start"
              />
            </el-select>
          </div>
          <!-- 班级 -->
          <div class="item">
            <span class="title">班级</span>
            <el-select
              v-model="modeVal"
              placeholder=""
              style="width: 150px"
              @change="selectMode"
            >
              <el-option
                v-for="item in modeOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                placement="bottom-start"
              />
            </el-select>
          </div>
          <!-- 考勤时间 -->
          <div class="item">
            <span class="title">考勤时间</span>
            <el-date-picker
              v-model="value2"
              type="daterange"
              unlink-panels
              range-separator="到"
              start-placeholder="起始时间"
              end-placeholder="终止时间"
              :shortcuts="shortcuts"
            />
          </div>
          <div class="flex-grow" />
          <div class="item">
            <el-input
              v-model="input"
              :prefix-icon="Search"
              style="width: 190px"
              placeholder="请输入姓名"
              clearable
            />
          </div>
        </div>
        <!-- table表格 -->
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column fixed prop="name" label="姓名" />
            <el-table-column prop="clazz" label="班级" />
            <el-table-column prop="gender" label="性别" width="100" />
            <el-table-column prop="stuId" label="学号" />
            <el-table-column prop="attendanceTime" label="考勤时间" />
            <el-table-column prop="morning" label="早上" />
            <el-table-column prop="noon" label="中午" />
            <el-table-column prop="night" label="晚上" />
            <el-table-column fixed="right" label="操作">
              <template #default>
                <el-button
                  type="primary"
                  size="small"
                  @click="handleClick"
                  class="examine-btn"
                >
                  查看
                </el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="centerDialogVisible = true"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 15, 20, 30, 50]"
            background
            layout="total, sizes, prev, pager, next, jumper "
            :total="400"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          >
          </el-pagination>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card__body) {
  padding: 0;
}
.item {
  margin-left: 20px;

  &:last-child {
    margin-right: 20px;
  }
}
.el-select {
  margin-left: 12px;
}

:deep(.el-date-editor) {
  margin-left: 12px;
}
.screen {
  display: flex;
  height: 96px;
  line-height: 96px;
}

.table {
  &:deep(.el-table__row) {
    height: 50px;
    line-height: 50px;
  }
}

.pagination {
  margin-top: 20px;
}

.flex-grow {
  flex-grow: 1;
}
.outermost {
  padding: 0 !important;
  border: 0;

  > :deep(.el-card__body) {
    padding: 0;
  }
}

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
