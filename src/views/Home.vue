<template>
  <div class="box">
    <van-nav-bar title="首页" :border="false" class="theme-bg" fixed></van-nav-bar>
    <tab-bar></tab-bar>
    <div class="content">
      <div class="index-top theme-bg">
        <h5>今日警告</h5>
        <van-row>
          <van-col span="12" class="top-data">
            <strong>10</strong>
            <p>已处理</p>
          </van-col>
          <van-col span="12" class="top-data">
            <strong>5</strong>
            <p>未处理</p>
          </van-col>
        </van-row>
      </div>
      <info-box title="资产状态">
        <div id="echarts_1" style="width:100%; height:200px"></div>
      </info-box>
      <info-box title="资产类型">
        <div id="echarts_2" style="width:100%; height:200px"></div>
      </info-box>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
import InfoBox from "@/components/InfoBox";
export default {
  name: "home",
  mounted() {
    this.chart1();
    this.chart2();
  },
  components: {
    TabBar,
    InfoBox
  },
  methods: {
    chart1() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echarts_1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ["#008b7d", "#fe6164", "#b8b8b8"],
        legend: {
          orient: "vertical",
          top: 50,
          left: "left",
          data: ["正常", "告警", "离线"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "65%",
            center: ["60%", "50%"],
            data: [
              { value: 335, name: "正常" },
              { value: 31, name: "告警" },
              { value: 24, name: "离线" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    chart2() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echarts_2"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color: ["#008b7d", "#fe6164", "#b8b8b8"],
        legend: {
          bottom: 5,
          data: ["正常", "告警", "离线"]
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 30,
          top: 20,
          containLabel: true
        },
        xAxis: {
          show: false,
          type: "value",
          splitLine: { show: false }
        },
        yAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: ["环网柜", "杆塔", "互感器", "开闭所", "变压器"]
        },
        series: [
          {
            name: "正常",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [320, 302, 301, 334, 390]
          },
          {
            name: "告警",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [120, 132, 101, 134, 90]
          },
          {
            name: "离线",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [220, 182, 191, 234, 290]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.index-top {
  padding-bottom: 20px;
  text-align: center;
  // border-bottom-left-radius: 50px;
  // border-bottom-right-radius: 50px;
  > h5 {
    font-size: 1rem;
    font-weight: 100;
    margin: 0;
    line-height: 50px;
  }
  .top-data {
    strong {
      font-size: 1.2rem;
    }
    p {
      margin: 0;
      font-size: 0.8rem;
    }
  }
}
</style>
