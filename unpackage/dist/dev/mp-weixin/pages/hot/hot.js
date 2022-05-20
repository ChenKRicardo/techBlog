"use strict";
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/static/images/logo.png";
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _imports_0,
    b: common_vendor.p({
      placeholderText: "\u81EA\u5B9A\u4E49\u7EC4\u4EF6"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-41251cbc"]]);
wx.createPage(MiniProgramPage);
