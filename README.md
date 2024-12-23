<html>
<head>
    <title>CometChat Demo</title>
    <script src="https://cdn.cometchat.com/v3.0.0/cometchat.min.js"></script>
    <style>
        /* 自定义聊天组件样式 */
        .cometchat-container {
            width: 400px;
            height: 600px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div id="chat-container"></div>

    <script>
        // 初始化 CometChat
        CometChat.init({
            appId: "2686555f812ae17b",
            region: "us",
            authKey: "c5a167029db45d1f0d00cd59cf8b7ac5606a75b1"
        }).then(
            () => {
                // 初始化成功后，创建聊天组件
                const chatWidget = CometChat.createWidget({
                    widgetId: "my-chat-widget", // 聊天组件 ID
                    type: "user", // 聊天类型，可以是 user、group 等
                    userJid: "your_user_jid", // 用户 JID，需要替换为实际的用户 JID
                    style: {
                        backgroundColor: "#f0f0f0",
                        color: "#333"
                    }
                });

                // 将聊天组件添加到 DOM
                document.getElementById("chat-container").appendChild(chatWidget);
            },
            (error) => {
                console.error("初始化失败:", error);
            }
        );
    </script>
</body>
</html>
