<template>
  <div class="bl-picker">
    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      :label="label"
      v-model="value"
      :placeholder="placeholder"
      input-align="right"
      @click="showPicker = true"
      is-link
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="data"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showPicker: false
    };
  },
  props:{
    label: String,
    placeholder: String,
    data: Array
  },
  watch:{
  },
  mounted(){
    
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
      this.$emit("getData", this.value);
    }
  }
};
</script>
