console.log("ChataiToken script executed");

const headers = $request && $request.headers ? $request.headers : {};

let auth =
  headers.Authorization ||
  headers.authorization;

console.log("headers:", JSON.stringify(headers));

if (auth) {
  auth = auth.replace(/^Bearer\s+/i, "");

  console.log("token:", auth);

  $notification.post(
    "Chatai Token",
    "获取成功",
    auth
  );
} else {
  console.log("no Authorization header");
}

$done({});