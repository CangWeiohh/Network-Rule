const headers = $request?.headers || {};

let auth =
  headers.Authorization ||
  headers.authorization;

if (!auth) $done({});

const token = auth.replace(/^Bearer\s+/i, "");

$notification.post(
  "Chatai Token",
  "长按复制",
  token
);

console.log(token);

$done({});