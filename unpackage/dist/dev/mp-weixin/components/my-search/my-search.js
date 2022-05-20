"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/search.png";
const _sfc_main = {
  name: "my-search",
  props: {
    placeholderText: {
      type: String,
      default: "\u641C\u7D22"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _imports_0,
    b: common_vendor.t($props.placeholderText)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8ad86a50"]]);
wx.createComponent(Component);
