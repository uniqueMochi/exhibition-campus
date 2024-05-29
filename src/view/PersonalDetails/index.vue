<script setup>
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<template>
  <div class="container">
    <el-card class="outermost" shadow="never">
      <div class="container_head">
        <el-button class="goback-btn" type="primary" :icon="ArrowLeft" text />
        <span class="title">教师管理</span>
      </div>

      <div class="container-main">
        <div class="common-layout">
          <el-container>
            <el-aside width="250px">
              <el-card class="aside" style="border: 0">
                <el-card class="base" shadow="hover">
                  <ul>
                    <!-- 用户基本信息 -->
                    <li class="baseInfo">
                      <ul>
                        <li class="avatar">
                          <el-avatar
                            v-if="flase"
                            :size="88"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                          />

                          <el-avatar :size="88" v-else> 龙之介 </el-avatar>
                        </li>
                        <li class="name">龙之介</li>
                        <li class="designation">高级架构师</li>
                      </ul>
                    </li>

                    <li class="item entryTime">
                      <span class="lable">加入时间</span>
                      <div class="flex-grow" />
                      <span class="prop">2020-12-11</span>
                    </li>
                    <li class="item workname">
                      <span class="lable">工龄</span>
                      <div class="flex-grow" />
                      <span class="prop">2020-12-11</span>
                    </li>
                    <li class="item stuCount">
                      <span class="lable">学生</span>
                      <div class="flex-grow" />
                      <span class="prop">2020-12-11</span>
                    </li>
                  </ul>
                </el-card>

                <el-card class="detail" shadow="hover">
                  <ul>
                    <li class="item about">
                      <span class="lable">关于老师</span>
                      <span class="prop"
                        >是一位深受学生喜爱和信任的好老师！老师英语专业学士，英语专业八级。具有丰富的耶鲁视线英语教学经验。善于发现孩子的性格特点，抓住孩子的学习兴趣。</span
                      >
                    </li>
                    <li class="item">
                      <span class="lable">性别</span>
                      <div class="flex-grow" />
                      <span class="prop">男</span>
                    </li>
                    <li class="item">
                      <span class="lable">教育</span>
                      <div class="flex-grow" />
                      <span class="prop">博士学位</span>
                    </li>
                    <li class="item">
                      <span class="lable">联系电话</span>
                      <div class="flex-grow" />
                      <span class="prop">183-9848-9737</span>
                    </li>
                    <li class="item">
                      <span class="lable">电子邮件</span>
                      <div class="flex-grow" />
                      <span class="prop">3191214319@qq.com</span>
                    </li>
                    <li class="item">
                      <span class="lable">联系地址</span>
                      <div class="flex-grow" />
                      <span class="prop">北京海淀区</span>
                    </li>
                    <li class="item">
                      <span class="lable">加入时间</span>
                      <div class="flex-grow" />
                      <span class="prop">2020-12-11</span>
                    </li>
                  </ul>
                </el-card>
              </el-card>
            </el-aside>
            <el-main>
              <el-card>
                <el-tabs
                  v-model="activeName"
                  class="demo-tabs"
                  @tab-click="handleClick"
                >
                  <el-tab-pane label="教师介绍" name="first">
                    <div class="text"></div>
                  </el-tab-pane>
                  <el-tab-pane label="照片墙" name="second">Config</el-tab-pane>
                </el-tabs>
              </el-card>
            </el-main>
          </el-container>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
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

.el-main {
  flex: 1;
  margin-left: 20px;
  background: pink;
  padding: 0;

  .el-tabs {
    :deep(.el-tabs__content) {
      margin-top: 32px;
    }
  }
}

.el-aside {
  .aside {
    background-color: transparent;
    :deep(.el-card__body) {
      padding: 0;

      .baseInfo {
        height: 198px;
        text-align: center;
        background: #f2f2f2;

        .el-avatar {
          margin-top: 24px;
        }
        .name {
          margin: 12px 0 8px;
        }
        .designation {
          font-size: 12px;
          color: #aaa;
        }
      }

      .item {
        display: flex;
        font-size: 14px;
        line-height: 46px;
        width: 100%;
        padding: 0 12px;

        &:nth-child(3) {
          border-top: 1px solid #f2f2f2;
          border-bottom: 1px solid #f2f2f2;
        }
      }

      .lable {
        font-size: 14px;
        color: #333;
      }

      .prop {
        color: #aaa;
      }
    }
  }

  .detail {
    margin-top: 10px;
    .about {
      flex-wrap: wrap;
      .prop {
        font-size: 14px;
        color: #7f7f7f;
        line-height: 20px;
        text-indent: 2em;
      }
    }
  }
}
</style>
