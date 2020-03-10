<template>
  <div class="box">
    <van-nav-bar title="工单详情" left-arrow fixed />
    <div class="content">
      <van-cell-group>
        <van-field label="姓名" v-model="formData.name" input-align="right" />
        <van-field
          label="身份证号"
          v-model="formData.number"
          input-align="right"
        />
        <bl-picker label="性别" :data="sexSelect" @getData="getSex"></bl-picker>
        <van-cell center title="vip">
          <van-switch
            clearable
            v-model="formData.vip"
            required
            input-align="right"
            size="20px"
          ></van-switch>
        </van-cell>
        <bl-picker label="购买方式" :data="buySelect" @getData="getBuy"></bl-picker>
        <bl-date-picker label="选择时间" placeholder="请选择时间" @getData="getDate"></bl-date-picker>
      </van-cell-group>
      <div class="btn-cont">
        <van-button type="info" round block @click="submit">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import BlPicker from "@/components/BlPicker";
import BlDatePicker from "@/components/BlDatePicker";
export default {
  data() {
    return {
      sexSelect: ["男", "女"],
      buySelect: ["微信","支付宝","信用卡","云闪付"],
      formData: {
        name: "张三",
        number: "",
        sex: "",
        vip: false,
        buyType:"",
        date:""
      }
    };
  },
  components: {
    BlPicker,
    BlDatePicker
  },
  mounted() {},
  methods: {
    getSex(data) {
      this.formData.sex = data;
    },
    getBuy(data) {
      this.formData.buyType = data;
    },
    getDate(data) {
      this.formData.date = data;
    },
    submit() {
      console.log(this.formData);
    }
  }
};
</script>
