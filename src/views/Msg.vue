<template>
  <div class="box">
    <van-nav-bar
      title="消息"
      right-text="全部已读"
      :border="false"
      class="theme-bg"
      fixed
      @click-right="onClickRight"
    ></van-nav-bar>
    <tab-bar></tab-bar>
    <div class="content">
      <div class="msg-item-group">
        <div class="msg-item">
          <van-image
            round
            width="32px"
            height="32px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/logo.png"
            class="msg-img"
          />
          <div class="msg-content">
            <h3>关于 Vant</h3>
            <p>
              Vant 是一套轻量、可靠的移动端 Vue
              组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </p>
          </div>
        </div>
        <div class="msg-item">
          <van-image
            round
            width="32px"
            height="32px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/logo.png"
            class="msg-img"
          />
          <div class="msg-content">
            <h3>关于 Vant</h3>
            <p>
              Vant 是一套轻量、可靠的移动端 Vue
              组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </p>
          </div>
        </div>
        <div class="msg-item">
          <van-image
            round
            width="32px"
            height="32px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/logo.png"
            class="msg-img"
          />
          <div class="msg-content">
            <h3>关于 Vant</h3>
            <p>
              Vant 是一套轻量、可靠的移动端 Vue
              组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
export default {
  data() {
    return {};
  },
  components: {
    TabBar
  },
  methods: {
    // onClickLeft() {
    //   this.$router.go(-1);
    // },
    onClickRight() {
      // Toast('按钮');
    }
  }
};
</script>

<style lang="scss" scoped>
.msg-item-group {
  background: #fff;
  .msg-item {
    display: flex;
    padding: 10px 16px;
    border-bottom: 1px solid #e8e8e8;
    .msg-img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
    .msg-content {
      padding-top: 4px;
      h3 {
        margin: 0;
        font-size: 1rem;
        line-height: 20px;
      }
      p {
        margin: 8px 0 0;
        font-size: 0.8rem;
        line-height: 20px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
