const allen = { appkey: "kj7swf8oks5h2", token: "5CSrDk0iEhZGA1kXqdGsGMVZrzNyMZk7ftmgyTzh3q0=@af01.cn.rongnav.com;af01.cn.rongcfg.com", userId: "allen", targetId: "jack", inviteId: "test", groupId: "group1", }
const jack = { appkey: "kj7swf8oks5h2", token: "RmDai+rn1zZnRsqSIi3hm5iWejilT+g4mKEYibOjX7E=@af01.cn.rongnav.com;af01.cn.rongcfg.com", userId: "jack", targetId: "allen", inviteId: "test", groupId: "group1", }
const test = { appkey: "kj7swf8oks5h2", token: "JIcZGRVYACFnRsqSIi3hm1DKxFEkcMcziWFSKBIw9eg=@af01.cn.rongnav.com;af01.cn.rongcfg.com", userId: "test", targetId: "allen", inviteId: "allen", groupId: "group1", }
const user1 = { appkey: "kj7swf8oks5h2", token: "FMocZSlCDOdGA1kXqdGsGGd0pB3UKnlWjxVQ3XX//hY=@af01.cn.rongnav.com;af01.cn.rongcfg.com", userId: "user1", targetId: "user2", inviteId: "test", groupId: "group1" }
const user2 = { appkey: "kj7swf8oks5h2", token: "UUXzdvpsgyhGA1kXqdGsGGd0pB3UKnlWWzYPbDpHv3U=@af01.cn.rongnav.com;af01.cn.rongcfg.com", userId: "user2", targetId: "user1", inviteId: "test", groupId: "group1" }
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

