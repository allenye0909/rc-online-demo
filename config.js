const allen = { appkey: "vnroth0kvahzo", token: "37GlFWd0MztWEhQb6ixrS6ynOhNw/ADqVIl7FZ6ScJQ=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "allen", targetId: "jack", inviteId: "test", groupId: "group1", }
const jack = { appkey: "vnroth0kvahzo", token: "/j/O3Utm340sd7VauWc8lPTPm2EGLmNf0ZMlrsMyRyo=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "jack", targetId: "allen", inviteId: "test", groupId: "group1", }
const test = { appkey: "vnroth0kvahzo", token: "IHfcNqNn1wAsd7VauWc8lBanIFO7dI79XIuf+p23t7U=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "test", targetId: "allen", inviteId: "allen", groupId: "group1", }
const user1 = { appkey: "vnroth0kvahzo", token: "/n7HE8ezz+dWEhQb6ixrSy9LfehknYvGSsWtVhCVjPI=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "user1", targetId: "user2", inviteId: "test", groupId: "group1" }
const user2 = { appkey: "vnroth0kvahzo", token: "AO39MwGwG8RWEhQb6ixrS3WvBHl/dBPfB4iJSMqWTu8=@5q2p.cn.rongnav.com;5q2p.cn.rongcfg.com", userId: "user2", targetId: "user1", inviteId: "test", groupId: "group1" }
const Config = {
  // 私有云服务环境下必填
  navi: '',
  // 非必填
  mediaServer: '',
  ...location.search.includes("allen") ? allen : location.search.includes("jack") ? jack : location.search.includes("user1") ? user1 : location.search.includes("user2") ? user2 : test,
  // ...allen,
  // ...jack,
  // ...test,

  logLevel: location.search.includes("logLevel") ? 0 : null,
  isHaveUser: location.search.includes("allen") || location.search.includes("jack") || location.search.includes("test") || location.search.includes("user1") || location.search.includes("user2")


  // 用户
  // appkey: "",
  // token: "",
};

