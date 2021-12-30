const allen = { appkey: "vnroth0kvahzo", value: "allen", token: "37GlFWd0MztWEhQb6ixrS6ynOhNw/ADqVIl7FZ6ScJQ=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "allen", targetId: "jack" }
const jack = { appkey: "vnroth0kvahzo", value: "jack", token: "/j/O3Utm340sd7VauWc8lPTPm2EGLmNf0ZMlrsMyRyo=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "jack", targetId: "allen" }
const test = { "code": 200, "userId": "test", "token": "IHfcNqNn1wAsd7VauWc8lBanIFO7dI79XIuf+p23t7U=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", appkey: "vnroth0kvahzo", targetId: "allen", inviteId: "jack", groupId: "group1", userId: "test" }
const Config = {
  // 私有云服务环境下必填
  navi: '',
  // 非必填
  mediaServer: '',
  ...location.search.includes("allen") ? allen : location.search.includes("jack") ? jack : test,
  // ...allen,
  // ...jack,
  // ...test,

  logLevel: location.search.includes("logLevel") ? 0 : null,
  isHaveUser: location.search.includes("allen") || location.search.includes("jack") || location.search.includes("test")


  // 用户
  // appkey: "",
  // token: "",
};

