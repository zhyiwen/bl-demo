<template>
  <div class="box">
    <van-nav-bar title="工单详情" left-arrow fixed />
    <div class="content">
      <van-cell-group>
        <van-field :label="申请人" v-model="formData.name" input-align="right"/>
        <van-field :label="工单编号" v-model="formData.number" input-align="right"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData:{
        name: "张三",
        number: "456856"
      }
    };
  }
};
</script>
