<template>
  <view class="hot-conatiner">
    <image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
    <view class="search-box">
      <my-search placeholderText="自定义组件"></my-search>
    </view>
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
  .search-box {
    padding: 0 16px;
    margin-bottom: $uni-spacing-col-base;
  }
}
</style>
