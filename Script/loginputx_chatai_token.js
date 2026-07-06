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

// ====== Loon 原生通知 ======
$notification.post("落格AI问答Token", "已获取", token);

console.log(token);

$done({});