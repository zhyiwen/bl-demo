<template>
  <div class="box">
    <van-nav-bar title="工单详情" left-arrow fixed @click-left="back" />
    <div class="content">
      <van-cell-group>
        <van-field label="姓名" v-model="formData.name" input-align="right" />
        <van-field
          label="身份证号"
          v-model="formData.number"
          input-align="right"
        />
        <bl-picker label="性别" :data="sexSelect" @getData="getSex"></bl-picker>
        <van-cell center title="是否复工">
          <van-switch
            clearable
            v-model="formData.work"
            required
            input-align="right"
            size="20px"
          ></van-switch>
        </van-cell>
        <bl-date-picker
          label="复工时间"
          placeholder="请选择时间"
          @getData="getDate"
        ></bl-date-picker>
        <!-- <van-cell center title="体温">
          <van-radio-group v-model="temperature" direction="horizontal">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </van-cell> -->
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
      formData: {
        name: "",
        number: "",
        sex: "",
        work: false,
        date: "",
        temperature: "1"
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
    getDate(data) {
      this.formData.date = data;
    },
    back() {
      window.history.go(-1);
    },
    submit() {
      console.log(this.formData);
    }
  }
};
</script>
