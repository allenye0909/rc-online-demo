const allen = { appkey: "vnroth0kvahzo", value: "allen", token: "37GlFWd0MztWEhQb6ixrS6ynOhNw/ADqVIl7FZ6ScJQ=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "allen" }
const jack = { appkey: "vnroth0kvahzo", value: "jack", token: "/j/O3Utm340sd7VauWc8lPTPm2EGLmNf0ZMlrsMyRyo=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "jack" }
const test = { "code": 200, "userId": "test", "token": "IHfcNqNn1wAsd7VauWc8lBanIFO7dI79XIuf+p23t7U=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", appkey: "vnroth0kvahzo", targetId: "allen", inviteId: "jack", groupId: "group1" }
const Config = {
  // 私有云服务环境下必填
  navi: '',
  // 非必填
  mediaServer: '',
  ...location.search.includes("allen") ? allen : location.search.includes("jack") ? jack : test,
  // ...allen,
  // ...jack,
  // ...test,

  logLevel: location.search.includes("0") ? 0 : 1


  // 用户
  // appkey: "",
  // token: "",
};

