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
$theme-color: #006f6c;
$bg-color:#ededef;
.info-box {
  background: #fff;
  margin-bottom: 5px;
  padding: 10px;
  .info-hd{
    position: relative;
    font-size: 0.9rem;
    color: #444;
    padding-left: 12px;
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
