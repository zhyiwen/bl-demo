<template>
  <div class="box">
    <van-nav-bar
      :title="titleShow"
      :border="false"
      class="theme-bg"
      fixed
    ></van-nav-bar>
    <van-tabbar v-model="tabActive">
      <van-tabbar-item replace icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace icon="hot-o">
        实时疫情
      </van-tabbar-item>
      <van-tabbar-item replace icon="chat-o" info="5">
        消息
      </van-tabbar-item>
      <van-tabbar-item replace icon="user-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
    <div class="content">
      <div v-if="tabActive == 0">
        <div class="link-cont">
          <van-grid :column-num="4" :border="false">
            <van-grid-item icon="todo-list-o" text="待办工单" to="/workorderDetails" />
            <van-grid-item icon="friends-o" text="应急小组" to="/" />
            <van-grid-item icon="balance-list-o" text="钱款" to="/" />
            <van-grid-item icon="service-o" text="应急小修" to="/" />
            <van-grid-item icon="cluster-o" text="组织架构" to="/" />
            <van-grid-item icon="chart-trending-o" text="数据统计" to="/" />
            <van-grid-item icon="notes-o" text="事件" to="/" />
            <van-grid-item icon="apps-o" text="更多" to="/" />
          </van-grid>
        </div>
        <info-box title="基本信息">
          <div class="base-cont">
            <van-grid :border="false" :column-num="2" :center="false">
              <van-grid-item>
                <p class="base-text">全市道路（条）</p>
                <strong class="base-num">21</strong>
              </van-grid-item>
              <van-grid-item>
                <p class="base-text">当日巡查到位率（%）</p>
                <strong class="base-num">68.75</strong>
              </van-grid-item>
              <van-grid-item>
                <p class="base-text">管辖总里程（公里）</p>
                <strong class="base-num">1105</strong>
              </van-grid-item>
              <van-grid-item>
                <p class="base-text">当日巡查总里程（公里）</p>
                <strong class="base-num">140</strong>
              </van-grid-item>
            </van-grid>
          </div>
        </info-box>
        <info-box title="巡查到位率统计">
          <div id="echarts_1" style="width:100%; height:200px;"></div>
        </info-box>
      </div>
      <div v-else-if="tabActive == 1">实时疫情</div>
      <div v-else-if="tabActive == 2">消息</div>
      <div v-else-if="tabActive == 3">我的</div>
    </div>
  </div>
</template>

<script>
import InfoBox from "@/components/InfoBox";
export default {
  name: "index",
  data() {
    return {
      tabActive: 0,
      titleShow: "综合展示"
    };
  },
  watch: {},
  mounted() {
    this.chart1();
    console.log(this.axios)
    this.axios.get('https://lab.isaaclin.cnhttps//lab.isaaclin.cn/nCoV/')
      .then(response => {
        let data = response.data.bpi
        console.log(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  created() {
    
  },
  updated() {
    if (this.tabActive == 0) {
      this.titleShow = "综合展示";
    } else if (this.tabActive == 1) {
      this.titleShow = "实时疫情";
    } else if (this.tabActive == 2) {
      this.titleShow = "消息";
    } else if (this.tabActive == 3) {
      this.titleShow = "我的";
    }
  },
  components: {
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
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          top: "center",
          data: ["已巡查", "未巡查"]
        },
        color: ["#4395ff", "#d8d8d8"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["60%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 135, name: "已巡查" },
              { value: 310, name: "未巡查" }
            ]
          }
        ]
      });
    },
  }
};
</script>

<style lang="scss" scoped></style>
