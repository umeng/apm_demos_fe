// #ifdef MP-WEIXIN
import { init } from "@umengfe/mini-apm/build/wx.esm";
init({
  pageFilter: { mode: "ignore", rules: [] },
  appKey: "appkey",
});
// #endif

// #ifdef MP-ALIPAY
import { init } from "@umengfe/mini-apm/build/alipay.esm";
init({
  pageFilter: { mode: "ignore", rules: [] },
  appKey: "appkey",
});
// #endif

// #ifdef H5
import { init } from "@umengfe/apm";
init({
  pageFilter: { mode: "ignore", rules: [] },
  pid: "appkey",
  logLevel:3,
});
// #endif
