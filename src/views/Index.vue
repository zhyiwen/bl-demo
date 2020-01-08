<template>
  <div class="box">
    <van-nav-bar title="首页" class="theme-bg" fixed></van-nav-bar>
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
