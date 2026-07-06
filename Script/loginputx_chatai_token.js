const headers = $request.headers;

let auth =
    headers.Authorization ||
    headers.authorization;

if (auth) {
    // 去掉 Bearer 前缀
    auth = auth.replace(/^Bearer\s+/i, "");

    $notification.post(
        "Chatai Token",
        "已获取 Authorization",
        auth
    );
}

$done({});