let { appkey, token, targetId, userId, logLevel, isHaveUser } = Config;

// console.log(RongIMLib, RCRTC) // 顶级变量
const { installer: rtcInstaller, RCRTCClient, RCTrack, RCFrameRate, RCResolution, RCLivingType, RCRTCCode } = RCRTC;

// 初始化 IM
RongIMLib.init({
    appkey,
    // logLevel
});

/**
 * 监听消息通知
 */
const Events = RongIMLib.Events;
RongIMLib.addEventListener(Events.MESSAGES, (event) => {
    console.log('received messages', event.messages);
});

/**
 * 监听 IM 连接状态变化
 */
RongIMLib.addEventListener(Events.CONNECTING, () => {
    console.log('onConnecting');
});
RongIMLib.addEventListener(Events.CONNECTED, () => {
    console.log('onConnected');
});
RongIMLib.addEventListener(Events.DISCONNECT, () => {
    console.log('onDisconnect');
});

console.log("token:", token)
RongIMLib.connect(token)
    .then((user) => {
        console.log("链接成功, 链接用户 id 为: ", user.data.userId);
    })
    .catch((error) => {
        console.log("链接失败: ", error);
    });
