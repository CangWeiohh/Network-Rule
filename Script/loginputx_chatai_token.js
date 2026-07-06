const token =
  ($request?.headers?.authorization || $request?.headers?.Authorization)
  ?.replace(/^Bearer\s+/i, "");

if (!token) $done({});

console.log("\n");
console.log(token);
console.log("\n");
console.log("\n");

const url =
  "https://api.day.app/wpgnnhHjPuze3cscmxSFyU/ChataiToken/" +
  encodeURIComponent(token) +
  "?autoCopy=1&automaticallyCopy=1";

// ✅ Loon 正确网络请求方式（关键）
$httpClient.get(url, function (err, resp, data) {
  console.log("BARK ERR:", err);
  console.log("BARK STATUS:", resp?.status);
  console.log("BARK DATA:", data);
});

// ====== Loon 原生通知 ======
// $notification.post("落格AI问答Token已获取", "", token);

console.log(token);

$done({});