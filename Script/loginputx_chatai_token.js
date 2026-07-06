const headers = $request?.headers || {};

let auth =
  headers.Authorization ||
  headers.authorization;

if (!auth) {
  $done({});
  return;
}

// 去掉 Bearer
const token = auth.replace(/^Bearer\s+/i, "");

// ✅ 只做两件事：复制 + 通知
$clipboard = token;

$notification.post(
  "Chatai Token",
  "已复制到剪贴板",
  token
);

$done({});