<template>
  <view>我的</view>
  <VerifyCode></VerifyCode>
  <view class="iconfont icon-guanyu"></view>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import VerifyCode from "@/component/verifyCode";
export default defineComponent({
  components: { VerifyCode },
  setup() {
    const ctxIst = getCurrentInstance();
    onMounted(() => {});
  },
});
</script>
