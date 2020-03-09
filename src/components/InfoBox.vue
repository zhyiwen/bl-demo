<template>
  <div class="info-box">
    <div class="info-hd">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_color";
.info-box {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
  .info-hd{
    position: relative;
    font-size: 0.9rem;
    color: #444;
    padding-left: 12px;
    font-weight: bold;
    &::before{
      content: '';
      position: absolute;
      top: calc(50% - 8px);
      left: 0;
      width: 3px;
      height: 16px;
      background: $theme-color;
    }
  }
}
</style>
