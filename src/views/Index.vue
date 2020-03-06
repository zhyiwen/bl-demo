<template>
  <div class="box">
    <van-nav-bar
      title="首页"
      :border="false"
      class="theme-bg"
      fixed
    ></van-nav-bar>
    <van-tabbar v-model="tabActive">
      <van-tabbar-item replace icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace icon="flag-o">
        GIS地图
      </van-tabbar-item>
      <van-tabbar-item></van-tabbar-item>
      <van-tabbar-item replace icon="chat-o" info="5">
        消息
      </van-tabbar-item>
      <van-tabbar-item replace icon="user-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
    <div class="content">
      <div v-if="(tabActive == 0)">首页</div>
      <div v-else-if="(tabActive == 1)">GIS地图</div>
      <div v-else-if="(tabActive == 2)">消息</div>
      <div v-else-if="(tabActive == 3)">我的</div>
    </div>
  </div>
</template>

<script>
// import InfoBox from "@/components/InfoBox";
export default {
  name: "home",
  data() {
    return {
      tabActive: 0
    };
  },
  watch:{

  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
