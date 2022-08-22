# uni-app

# 1. 注册友盟+账号(如已经注册可忽略)

# 2.友盟官网申请appkey(需要分别申请各个平台的appkey)
[web](https://apm.umeng.com/web/dash/list)

[小程序](https://apm.umeng.com/web/dash/list)
# 3.配置域名白名单等
 [微信小程序](https://developer.umeng.com/docs/193624/detail/364307) 

 [支付宝小程序](https://developer.umeng.com/docs/193624/detail/364308)
# 4.创建uni-app框架下的app
  参考 https://uniapp.dcloud.net.cn/quickstart-cli.html
# 5.安装sdk
```bash
cd path-to-uniappproject
yarn add @umengfe/apm --save
yarn add @umengfe/mini-apm --save
```

# 6.利用条件编译集成sdk
[uapm.js](./src/uapm.js)
参考 7 中 各个平台的集成文档，修改初始化的参数配置
***./src/uapm.js***
```js
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
```

在[main.js](./src/main.js)中引入[uapm.js](./src/uapm.js)

***./src/main.js***

```js
import Vue from 'vue'
import App from './App'
import './uapm';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

```
# 7 参考集成文档
[参考h5文档](https://developer.umeng.com/docs/193624/detail/432099)

[微信小程序](https://developer.umeng.com/docs/193624/detail/364307)

[支付宝小程序](https://developer.umeng.com/docs/193624/detail/364308)