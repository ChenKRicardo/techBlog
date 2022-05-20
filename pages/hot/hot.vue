<template>
  <view class="hot-conatiner">
    <image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hot-conatiner {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 8rem;
  }
}
</style>
