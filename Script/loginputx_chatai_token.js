const headers = $request.headers || {};

let auth =
  headers.Authorization ||
  headers.authorization;

console.log("[ChataiToken] headers => " + JSON.stringify(headers));

if (auth) {
  auth = auth.replace(/^Bearer\s+/i, "");

  console.log("[ChataiToken] token => " + auth);

  $notification.post(
    "Chatai Token",
    "获取成功",
    auth
  );
} else {
  console.log("[ChataiToken] 未找到 Authorization");
}

$done({});