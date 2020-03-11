<template>
  <div class="bl-date-picker">
    <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="value"
      :label="label"
      :placeholder="placeholder"
      @click="showPicker = true"
      input-align="right"
      is-link
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        type="date"
        @confirm="onConfirm"
        @cancel="showPicker = false"
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showPicker: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  props: {
    label: String,
    placeholder: String,
  },
  watch: {},
  mounted() {},
  methods: {
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    onConfirm(time) {
      this.value = time.toLocaleDateString();
      this.showPicker = false;
      this.$emit("getData", this.value);
    }
    // onConfirm(value) {
    //   this.value = value;
    //   this.showPicker = false;
    //   this.$emit("getData", this.value);
    // }
  }
};
</script>
