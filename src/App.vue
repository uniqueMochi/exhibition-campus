<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { Bell, InfoFilled } from '@element-plus/icons-vue'

/* 当前进去页面激活索引 */
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

/* 用户操作菜单显示 */
const show = ref(false)

/* 弹窗显示 */
const centerDialogVisible = ref(false)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header height="72px">
        <!-- logo -->
        <h1 class="logo"><a href="/" title="信息e展校园">信息e展校园</a></h1>

        <!-- 主菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo impMenu"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#1047f7"
          text-color="#aaaaaa"
          router
        >
          <el-menu-item index="/">系统首页</el-menu-item>
          <el-menu-item index="2">教师管理</el-menu-item>
          <el-menu-item index="3">学生管理</el-menu-item>
          <el-menu-item index="4">应用管理</el-menu-item>
        </el-menu>

        <!-- 用户模块 -->
        <ul class="user">
          <li class="user-item">
            <el-icon color="#409efc" class="no-inherit" :size="24">
              <Bell style="cursor: pointer" />
            </el-icon>
          </li>
          <li class="user-item">
            <el-icon color="#409efc" class="no-inherit" :size="24">
              <InfoFilled style="cursor: pointer" />
            </el-icon>
          </li>
          <li class="user-item">
            <el-avatar
              :size="50"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              @click="show = !show"
            />
            <transition name="el-zoom-in-top">
              <div v-show="show" class="transition-box">
                <el-menu
                  background-color="transparent"
                  active-text-color="#303133"
                >
                  <el-menu-item index="1">个人设置</el-menu-item>
                  <el-menu-item index="2" @click="centerDialogVisible = true"
                    >退出操作</el-menu-item
                  >
                </el-menu>
              </div>
            </transition>
          </li>
        </ul>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>

  <el-dialog
    v-model="centerDialogVisible"
    title="退出系统"
    width="500"
    align-center
  >
    <span>你确定要退出系统吗?</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="danger" @click="centerDialogVisible = false">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.el-header {
  display: flex;
  border-bottom: 1px solid var(--el-menu-border-color);

  .logo {
    margin: 0;
    height: 100%;
    background: url('@/assets/logo.png') no-repeat;
    width: 300px;
    background-repeat: no-repeat;
    background-size: contain;

    overflow: hidden;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: transparent;
      text-indent: -9999;
    }
  }

  .el-menu {
    margin-left: 20%;
    flex: 1;
    height: 100%;
    border-bottom: 0;
  }

  .impMenu {
    .el-menu-item {
      font-size: 20px;
      font-weight: bold;

      is-active {
        border-bottom: 4px solid var(--el-menu-active-color);
      }
    }
  }

  .user {
    height: 100%;
    line-height: 71px;
    display: flex;

    .user-item {
      flex: 1;
      padding: 10px 20px 0;

      .el-avatar {
        cursor: pointer;
      }
    }
  }
}

.transition-box {
  position: fixed;
  right: 20px;
  top: 90px;
  background-color: #ffffff;
  text-align: center;
  color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 4px;

  .el-menu {
    padding: 0;
    margin: 0;
    border: 0;

    :deep(.el-menu-item) {
      padding-left: 10px;
      font-weight: normal;
      font-size: 16px;
    }
  }
}
</style>
