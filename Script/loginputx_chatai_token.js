const $msg = (...a) => {
  const [title = "", subtitle = "", body = ""] = a;
  
  // 通知
  if (typeof $notification !== "undefined") {
    $notification.post(title, subtitle, body);
  }

  // 日志兜底（非常关键）
  console.log(`[${title}] ${subtitle} ${body}`);
};

const headers = $request?.headers || {};

console.log("==== ChataiToken Script Triggered ====");
console.log(JSON.stringify(headers));

let auth =
  headers.Authorization ||
  headers.authorization;

if (!auth) {
  $msg("Chatai Token", "失败", "未找到 Authorization");
  $done({});
  return;
}

// 去 Bearer
auth = auth.replace(/^Bearer\s+/i, "");

$msg("Chatai Token", "获取成功", auth);

$done({});