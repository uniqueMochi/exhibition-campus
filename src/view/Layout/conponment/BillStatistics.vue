<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      name: '张雪',
      xData: ['2020-02', '2020-03', '2020-04', '2020-05'], //横坐标数据
      yData: [30, 132, 80, 134] //纵坐标数据，与横坐标对应
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          text: '收入/费用报告',
          subtext: 'Fake Data'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['支出', '收入']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            restore: { show: true },
            magicType: { show: true, type: ['line', 'bar'] },
            dataView: { show: true, readOnly: false },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['2023/01', '2023/02', '2023/03', '2023/04', '2023/05']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '支出',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6],

            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '收入',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          }
        ]
      }
      const myChart = echarts.init(this.$refs.mychart) // 图标初始化
      myChart.setOption(option) // 渲染页面
      //随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>
<template>
  <el-card style="max-width: 628px">
    <div class="bill-statistics">
      <div
        class="echart"
        ref="mychart"
        id="mychart"
        :style="{ float: 'left', height: '340px', width: '100%' }"
      />
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.bill-statistics {
  margin-left: 20px;
  width: 628px;
  height: 296px;
}
</style>
