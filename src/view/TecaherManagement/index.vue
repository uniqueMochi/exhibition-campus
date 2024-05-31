<script setup>
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import router from '@/router'
import axios from 'axios'

const input1 = ref('')

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
    label: '按入职日期↑'
  },
  {
    value: '方式3',
    label: '按入职日期↓'
  }
]

const selectMode = (e) => {
  console.log(e)
}

/* 部门 */
const deptVal = ref('')
/* 部门选项列表 */
const deptOpt = [
  {
    value: '部门1',
    label: '无根门'
  },
  {
    value: '部门2',
    label: '勾八门'
  }
]

const selectDept = (e) => {
  console.log(e)
}

const handleClick = () => {
  console.log('click')
  /* 跳转至详情页 */
  router.push('/details')
}

const tableData = ref([])
onMounted(async () => {
  const res = await axios.get('https://yapi.pro/mock/408195/teacher')
  console.log(res.data)
  tableData.value = res.data
})
/* 当前页 */
const currentPage = ref(1)

const handleCurrentChange = (val) => {
  currentPage.value = val
  console.log(currentPage.value)
}

/* 一页显示多少 */
const pageSize = ref(10)
const handleSizeChange = (val) => {
  pageSize.value = val
  console.log(pageSize.value)
}

const centerDialogVisible = ref(false)
</script>
<template>
  <div class="container">
    <el-card shadow="never">
      <div class="container_head">
        <span class="title">教师管理</span>
        <div class="flex-grow" />
        <el-input
          v-model="input1"
          style="width: 240px"
          placeholder="Please Input"
          :prefix-icon="Search"
        />
      </div>
      <div class="container_main">
        <div class="toolbar">
          <!-- 新增&导出导入 -->
          <ul class="tool">
            <li class="tool-item">
              <el-button color="#1047f7">新增教师</el-button>
            </li>
            <li class="tool-item"><el-button>批量导出</el-button></li>
            <li class="tool-item"><el-button>批量导入</el-button></li>
          </ul>
          <div class="flex-grow" />
          <!-- 筛选 -->
          <ul class="select">
            <li class="selectTool-item">
              <span class="title">排序方式</span>
              <el-select
                v-model="modeVal"
                placeholder=""
                style="width: 240px"
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
            </li>
            <li class="selectTool-item">
              <span class="title">所在单位</span>
              <el-select
                v-model="deptVal"
                placeholder=""
                style="width: 240px"
                @change="selectDept"
              >
                <el-option
                  v-for="item in deptOpt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </li>
          </ul>
        </div>

        <!-- table表格 -->
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column fixed prop="name" label="姓名" />
            <el-table-column prop="dept" label="部门" />
            <el-table-column prop="gender" label="性别" width="100" />
            <el-table-column prop="education" label="教育" />
            <el-table-column prop="phone" label="联系电话" />
            <el-table-column prop="email" label="电子邮件" width="200" />
            <el-table-column prop="entrydate" label="入职时间" />
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
      </div>
    </el-card>
  </div>

  <el-dialog
    v-model="centerDialogVisible"
    title="警告"
    width="500"
    align-center
  >
    <span>你确定要删除该教师吗</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="danger" @click="centerDialogVisible = false">
          删除
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
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

.container_main {
  .toolbar {
    display: flex;
    padding: 0px 40px 0px 58px;
    height: 64px;
    line-height: 64px;
    background-color: #f2f2f2;
    .tool {
      display: flex;

      .tool-item {
        margin-left: 20px;

        &:nth-child(n + 2) {
          .el-button {
            color: #1047f7;
            border-color: #1047f7;

            &:hover {
              background-color: #416cf8;
              color: #fff;
            }
          }
        }
      }
    }

    .select {
      display: flex;
      .selectTool-item {
        .title {
          margin-left: 48px;
          margin-right: 6px;
          font-size: 14px;
          color: #777;
        }
      }
    }
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
}
</style>
