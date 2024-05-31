<script setup>
import { ref } from 'vue'
const eduServices = ref([
  {
    id: 's001',
    text: '考勤记录明细',
    icon: 'icon-kaoqinbaobiao',
    path: '/attendance'
  },
  {
    id: 's002',
    text: '请假管理',
    icon: 'icon-jiabanqingjiaguanli'
  },
  { id: 's003', text: '成绩查询', icon: 'icon-chaxun' },
  {
    id: 's004',
    text: '学分计算规则',
    icon: 'icon-kaoqin-copy'
  },
  { id: 's005', text: '网上报名', icon: 'icon-Internet' },
  {
    id: 's006',
    text: '课程表',
    icon: 'icon-kechengbiao'
  },
  {
    id: 's007',
    text: '图书管理',
    icon: 'icon-money-bank'
  }
])

const logisticsServices = ref([
  {
    id: 's008',
    text: '电子邮件',
    icon: 'icon-email'
  },
  {
    id: 's009',
    text: '发布公告',
    icon: 'icon-fabugonggao'
  },
  {
    id: 's010',
    text: '财务管理',
    icon: 'icon-caiwuguanli'
  },
  {
    id: 's011',
    text: '预约订餐',
    icon: 'icon-dingcan'
  }
])
</script>

<template>
  <div class="container">
    <el-card shadow="never" class="box outermost">
      <div class="container_head">
        <span class="title">应用管理</span>
      </div>

      <div class="container-main">
        <!-- 教育服务 -->
        <div class="item education">
          <div class="title">教育服务</div>
          <ul class="item-nav education-nav">
            <li v-for="item in eduServices" :key="item.id">
              <el-card
                shadow="hover"
                style="cursor: pointer"
                @click="$router.push(item.path)"
              >
                <i class="circle" />
                <span :class="['iconfont', item.icon]"></span>
                <span class="text">{{ item.text }}</span>
              </el-card>
            </li>
          </ul>
        </div>
        <!-- 后勤管理 -->
        <div class="item logistics">
          <div class="title">后勤管理</div>
          <ul class="item-nav logistics-nav">
            <li v-for="item in logisticsServices" :key="item.id">
              <el-card shadow="hover" style="cursor: pointer">
                <i class="circle" />
                <span :class="['iconfont', item.icon]"></span>
                {{ item.text }}
              </el-card>
            </li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.outermost {
  border: 0;
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

.item {
  margin-top: 55px;

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .item-nav {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-top: 25px;
      margin-right: 19px;

      .el-card {
        position: relative;
        padding-left: 70px;
        max-height: 105px;
        width: 250px;
        height: 105px;
        line-height: 105px;
        font-size: 16px;
        box-sizing: border-box;

        :deep(.el-card__body) {
          padding: 0 20px;

          .iconfont {
            position: absolute;
            left: 50px;
            font-size: 20px;
            color: #333333;
          }
        }
      }

      &:nth-child(1) {
        .iconfont {
          font-size: 20px !important;
          top: -1px;
        }
      }

      &:nth-child(2) {
        .iconfont {
          font-size: 25px !important;
        }
      }

      &:nth-child(3) {
        .iconfont {
          font-size: 25px !important;
        }
      }

      &:nth-child(4) {
        .iconfont {
          font-size: 25px !important;
          top: -2px;
        }
      }

      &:nth-child(5) {
        .iconfont {
          font-size: 30px !important;
          top: 1px;
          left: 45px !important;
        }
      }

      &:nth-child(6) {
        .iconfont {
          font-size: 25px !important;
        }
      }

      &:nth-child(7) {
        .iconfont {
          font-size: 25px !important;
        }
      }
    }
  }

  .circle {
    position: absolute;
    top: 46px;
    left: 40px;
    width: 22px;
    height: 22px;
    opacity: 0.9;
    border-radius: 11px;
    background-color: #f59b22;
  }

  .logistics-nav {
    li {
      &:nth-child(1) {
        .iconfont {
          font-size: 28px !important;
          top: 1px;
        }
      }

      &:nth-child(2) {
        .iconfont {
          font-size: 24px !important;
          font-weight: 700;
        }
      }

      &:nth-child(3) {
        .iconfont {
          font-size: 28px !important;
        }
      }

      &:nth-child(4) {
        .iconfont {
          font-size: 26px !important;
        }
      }
    }

    .circle {
      opacity: 0.9;
      background: #02bfbf !important;
    }
  }
}
</style>
