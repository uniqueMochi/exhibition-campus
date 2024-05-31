<script setup>
import { ref } from 'vue'
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const labels = ref([
  { id: 1, label: '英语功底扎实' },
  { id: 2, label: '外教老师' },
  { id: 3, label: '科学受教' }
])

const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]
</script>
<template>
  <div class="container">
    <el-card class="outermost" shadow="never">
      <PageHeader>教师介绍</PageHeader>

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
                            v-if="true"
                            :size="88"
                            src="https://mochil-web-eadnews.oss-cn-guangzhou.aliyuncs.com/1400ed8e-8deb-4f6c-9617-24ac4753b20e.jpg"
                          />

                          <el-avatar :size="88" v-else> 龙之介 </el-avatar>
                        </li>
                        <li class="name">龙之介</li>
                        <li class="designation">高级架构师</li>
                      </ul>
                    </li>

                    <li class="item entryTime">
                      <span class="label">加入时间</span>
                      <div class="flex-grow" />
                      <span class="prop">2020-12-11</span>
                    </li>
                    <li class="item workname">
                      <span class="label">工龄</span>
                      <div class="flex-grow" />
                      <span class="prop">3年</span>
                    </li>
                    <li class="item stuCount">
                      <span class="label">学生</span>
                      <div class="flex-grow" />
                      <span class="prop">999人</span>
                    </li>
                  </ul>
                </el-card>

                <el-card class="detail" shadow="hover">
                  <ul>
                    <li class="item about">
                      <span class="label">关于老师</span>
                      <span class="prop"
                        >是一位深受学生喜爱和信任的好老师！老师英语专业学士，英语专业八级。具有丰富的耶鲁视线英语教学经验。善于发现孩子的性格特点，抓住孩子的学习兴趣。</span
                      >
                    </li>
                    <li class="item">
                      <span class="label">性别</span>
                      <div class="flex-grow" />
                      <span class="prop">男</span>
                    </li>
                    <li class="item">
                      <span class="label">教育</span>
                      <div class="flex-grow" />
                      <span class="prop">博士学位</span>
                    </li>
                    <li class="item">
                      <span class="label">联系电话</span>
                      <div class="flex-grow" />
                      <span class="prop">183-9848-9737</span>
                    </li>
                    <li class="item">
                      <span class="label">电子邮件</span>
                      <div class="flex-grow" />
                      <span class="prop">3191214319@qq.com</span>
                    </li>
                    <li class="item">
                      <span class="label">联系地址</span>
                      <div class="flex-grow" />
                      <span class="prop">北京海淀区</span>
                    </li>
                    <li class="item">
                      <span class="label">加入时间</span>
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
                    <el-scrollbar>
                      <div class="introduce">
                        英语专业学士，英语专业八级，语感和英文表达能力比较强。从事少儿英语教学工作多年，经验丰富。热爱少儿英语教育，善于观察孩子学习中的优点与潜力，并将自己发现的问题与家长沟通、有针对性地帮助孩子提高。很欣赏也一直实践着童话大王郑渊洁的一句话“好孩子都是鼓励出来的！&nbsp;&nbsp;
                        &nbsp;&nbsp;
                        长期从事于少儿英语教学工作，有丰富的授课经验。英语功底扎实，发音标准，表达流利。性格活泼开朗，对孩子饱含热情与爱心，善于与孩子交流。讲课思路清晰，认真负责，深受小朋友和家长的喜爱！“永远用欣赏的眼光看学生，永远用宽容的心态面对学生！”&nbsp;&nbsp;
                        &nbsp;&nbsp;
                        学生眼里的我，是一个自然优雅、充满热情、热爱生活、热爱学生、热爱教育工作的好老师。他们说："您的热情点燃我们每一个人对生活的爱，您教学的严谨，鞭策我们每一个人认真求知，您优雅的举止，影响我们每一个人去追求心灵的高贵"。
                        在学生眼里，我是那个课堂上激情四射、知识渊博，对自己的教与他们的学近乎严苛的师长；是一个课堂外坦率随性，可以海阔天空畅聊天下的朋友；是那私底下细心关怀，能诉心声的知己。他们说，在人生这样一段特殊的经历中，有一位您这样的教师，是无比幸运和幸福的。
                      </div>
                      <div class="skill">
                        <div class="title">技能</div>
                        <span
                          class="label"
                          v-for="(item, index) in labels"
                          :key="index"
                        >
                          <el-button type="primary" round plain>{{
                            item.label
                          }}</el-button>
                        </span>
                      </div>
                    </el-scrollbar>
                  </el-tab-pane>
                  <el-tab-pane label="照片墙" name="second">
                    <el-scrollbar v-if="urls.length" height="663px">
                      <ul>
                        <li
                          class="item"
                          v-for="(url, index) in urls"
                          :key="url"
                        >
                          <div class="picture">
                            <el-image
                              :src="url"
                              :preview-src-list="urls"
                              :max-scale="7"
                              :min-scale="0.2"
                              :initial-index="index"
                            />
                          </div>
                          <span class="hint">教师生活</span>
                        </li>
                      </ul>
                    </el-scrollbar>
                    <el-empty v-else description="该用户没有上传照片哦~" />
                  </el-tab-pane>
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
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

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

.el-main {
  display: flex;
  margin-left: 20px;
  background: pink;
  padding: 0;

  .el-tabs {
    width: 938px;
    :deep(.el-tabs__content) {
      flex: 1;
      margin-top: 32px;

      .introduce {
        font-size: 14px;
        font-weight: normal;
        text-align: LEFT;
        color: #7f7f7f;
        line-height: 22px;
      }

      .skill {
        margin-top: 24px;
        .title {
          margin-bottom: 20px;
          color: #333333;
          font-weight: normal;
          font-size: 14px;
        }

        .label {
          margin-right: 20px;
        }
      }

      ul {
        display: flex;
        flex-wrap: wrap;
      }

      .item {
        display: flex;
        flex-direction: column;
        width: 459px;
        height: 350px;
        margin-bottom: 32px;

        &:nth-child(2n) {
          margin-left: 20px;
        }
        .hint {
          flex: 1;
          padding-top: 16px;
          text-align: center;
        }
      }
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

      .label {
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
