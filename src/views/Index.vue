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
            <van-grid-item icon="todo-list-o" text="待办工单" to="/form" />
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
      <div v-else-if="tabActive == 1">
        <div class="nCoV">
          <div class="ncov-top">
            <p class="title">
              <img src="../assets/img/head_title.png" alt="" />
            </p>
          </div>
          <div class="data-cont">
            <van-grid :column-num="3" :border="false">
              <van-grid-item>
                <div class="data orange">
                  <strong>{{ ncov.currentConfirmedCount }}</strong>
                  <p>现存确诊</p>
                  <span
                    >较昨日 <i>{{ sum(ncov.currentConfirmedIncr) }}</i></span
                  >
                </div>
              </van-grid-item>
              <van-grid-item>
                <div class="data yellow">
                  <strong>{{ ncov.suspectedCount }}</strong>
                  <p>现存疑似</p>
                  <span
                    >较昨日 <i>{{ sum(ncov.suspectedIncr) }}</i></span
                  >
                </div>
              </van-grid-item>
              <van-grid-item>
                <div class="data cyan">
                  <strong>{{ ncov.seriousCount }}</strong>
                  <p>现存重症</p>
                  <span
                    >较昨日 <i>{{ sum(ncov.seriousIncr) }}</i></span
                  >
                </div>
              </van-grid-item>
              <van-grid-item>
                <div class="data red">
                  <strong>{{ ncov.confirmedCount }}</strong>
                  <p>累计确诊</p>
                  <span
                    >较昨日 <i>{{ sum(ncov.confirmedIncr) }}</i></span
                  >
                </div>
              </van-grid-item>
              <van-grid-item>
                <div class="data blue">
                  <strong>{{ ncov.deadCount }}</strong>
                  <p>累计死亡</p>
                  <span
                    >较昨日 <i>{{ sum(ncov.deadIncr) }}</i></span
                  >
                </div>
              </van-grid-item>
              <van-grid-item>
                <div class="data green">
                  <strong>{{ ncov.curedCount }}</strong>
                  <p>累计治愈</p>
                  <span
                    >较昨日 <i>{{ sum(ncov.curedIncr) }}</i></span
                  >
                </div>
              </van-grid-item>
            </van-grid>
            <p class="data-from">数据来源：截至{{ date }} | 来源：丁香园</p>
          </div>
        </div>
      </div>
      <div v-else-if="tabActive == 2">
        <div class="msg-cont">
          <van-pull-refresh
            v-model="isLoading"
            success-text="刷新成功"
            @refresh="onRefresh"
          >
            <div class="msg-group">
              <div class="msg-item van-row">
                <div class="msg-img">
                  <img
                    src="https://img.alicdn.com/imgextra/i4/2590951958/O1CN01GHaJj41QKo4ky0KSi_!!2590951958.jpg"
                    alt=""
                  />
                </div>
                <div class="msg-text">
                  <p class="msg-title">张译文</p>
                  <p class="msg-desc">
                    轻轻地，我走了。正如我轻轻地来。我挥一挥衣袖，不带走一片云彩。那河岸的金柳
                  </p>
                </div>
              </div>
              <div class="msg-item van-row">
                <div class="msg-img">
                  <img
                    src="https://img.alicdn.com/imgextra/i4/2590951958/O1CN01GHaJj41QKo4ky0KSi_!!2590951958.jpg"
                    alt=""
                  />
                </div>
                <div class="msg-text">
                  <p class="msg-title">张译文</p>
                  <p class="msg-desc">
                    轻轻地，我走了。正如我轻轻地来。我挥一挥衣袖，不带走一片云彩。那河岸的金柳
                  </p>
                </div>
              </div>
              <div class="msg-item van-row">
                <div class="msg-img">
                  <img
                    src="https://img.alicdn.com/imgextra/i4/2590951958/O1CN01GHaJj41QKo4ky0KSi_!!2590951958.jpg"
                    alt=""
                  />
                </div>
                <div class="msg-text">
                  <p class="msg-title">张译文</p>
                  <p class="msg-desc">
                    轻轻地，我走了。正如我轻轻地来。我挥一挥衣袖，不带走一片云彩。那河岸的金柳
                  </p>
                </div>
              </div>
            </div>
          </van-pull-refresh>
        </div>
      </div>
      <div v-else-if="tabActive == 3">我的</div>
    </div>
  </div>
</template>

<script>
import "echarts/theme/macarons.js";
import InfoBox from "@/components/InfoBox";
export default {
  name: "index",
  data() {
    return {
      tabActive: 0,
      titleShow: "综合展示",
      ncov: "",
      date: "",
      rumors: "",
      isLoading: false,
    };
  },
  watch: {},
  created() {},
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
    InfoBox,
  },
  methods: {
    chart1() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById("echarts_1"),
        "macarons"
      );
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          top: "center",
          data: ["已巡查", "未巡查"],
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
                position: "center",
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              { value: 135, name: "已巡查" },
              { value: 310, name: "未巡查" },
            ],
          },
        ],
      });
    },
    getdate(e) {
      var now = new Date(e),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        now.toTimeString().substr(0, 8)
      );
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    sum(e) {
      if (e > 0) {
        return "+" + e;
      } else {
        return e;
      }
    },
  },
  mounted() {
    this.chart1();
    // 疫情统计
    this.axios
      .get("https://lab.isaaclin.cn/nCoV/api/overall", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        withCredentials: false,
        timeOut: 1000,
      })
      .then((response) => {
        var self = this;
        self.ncov = response.data.results[0];
        self.date = self.getdate(self.ncov.updateTime);
        console.log(self.ncov);
        // console.log(self.getdate(self.ncov.updateTime));
      })
      .catch(function(error) {
        console.log(error);
      });

    // 谣言
    // this.axios
    //   .get("https://lab.isaaclin.cn/nCoV/api/rumors?num=all",{
    //     headers: {
    //       'Accept': "application/json",
    //       "Content-Type": "application/json;charset=utf-8"
    //     },
    //     withCredentials: false
    //   })
    //   .then(response => {
    //     var self = this;
    //     self.rumors = response.data.results;
    //     console.log(self.rumors);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // let axios = this.axios;

    // let ApiUrl = "https://lab.isaaclin.cn/nCoV";

    // function getNcovOverall() {
    //   return axios.get(ApiUrl + "/api/overall", {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json;charset=utf-8"
    //     },
    //     withCredentials: false
    //   });
    // }

    // function getNcovRumors() {
    //   return axios.get(ApiUrl + "/api/rumors?num=all", {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json;charset=utf-8"
    //     },
    //     withCredentials: false
    //   });
    // }

    // axios
    //   .all([getNcovOverall(), getNcovRumors()])
    //   .then(
    //     axios.spread(function(overall, rumors) {
    //       var self = this;
    //       self.ncov = overall.data.results[0];
    //       self.date = self.getdate(self.ncov.updateTime);
    //       self.rumors = rumors.data.results;
    //       console.log(overall.data);
    //       console.log(rumors.data);
    //     })
    //   )
    //   .catch(
    //     axios.spread(function(error) {
    //       // 两个请求现在都执行完成
    //       console.log(error);
    //     })
    //   );
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_color";
// 实时疫情
.nCoV {
  position: absolute;
  // background: linear-gradient(to bottom, $theme-color 5%, #fff 80%);
  background: #fff;
  top: 46px;
  right: 0;
  bottom: 50px;
  left: 0;
}
.ncov-top {
  height: 40.8vw;
  background-size: cover;
  position: relative;
  .title {
    text-align: center;
    margin: 0;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 40px;
    img {
      width: 100%;
    }
  }
  &::before {
    content: "";
    font-size: 0;
    line-height: 0;
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 48.533vw;
    background: url(../assets/img/head_bg_new.png) top;
    background-size: cover;
  }
}
.data-cont {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .data {
    strong {
      color: inherit;
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
      text-align: center;
    }
    p {
      display: block;
      text-align: center;
      margin: 0;
      font-size: 13px;
      color: #777;
    }
    span {
      display: block;
      text-align: center;
      font-size: 10px;
      color: #b8b8b8;
      i {
        font-style: normal;
      }
    }
    &.orange {
      color: #ff6034;
      i {
        color: #ff6034;
      }
    }
    &.yellow {
      color: #f9c054;
      i {
        color: #f9c054;
      }
    }
    &.cyan {
      color: #49acd4;
      i {
        color: #49acd4;
      }
    }
    &.red {
      color: #98041e;
      i {
        color: #98041e;
      }
    }
    &.blue {
      color: #6489b1;
      i {
        color: #6489b1;
      }
    }
    &.green {
      color: #0cdc9b;
      i {
        color: #0cdc9b;
      }
    }
  }
  .data-from {
    margin: 0;
    background: rgba($theme-color, 0.2);
    border-top: 1px solid $theme-color;
    font-size: 12px;
    color: $theme-color;
    padding: 3px 10px;
  }
}

// 消息
.msg-item {
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  .msg-img {
    float: left;
    width: 46px;
    height: 46px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #eee;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .msg-text {
    float: left;
    padding-left: 10px;
    width: calc(100% - 48px);
    box-sizing: border-box;
    .msg-title {
      margin: 0;
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;
      color: #444;
    }
    .msg-desc {
      margin: 0;
      color: #777;
      font-size: 12px;
      width: 100%;
      text-overflow: ellipsis;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>
