/*************************************

项目名称：指南针定位——解锁订阅
下载地址：https://apps.apple.com/cn/app/%E6%8C%87%E5%8D%97%E9%92%88-%E7%BB%8F%E7%BA%AC%E5%BA%A6%E5%AE%9A%E4%BD%8D%E6%B5%B7%E6%8B%94%E6%B5%8B%E9%87%8F%E4%BB%AA/id1597253813
软件版本：1.2.8
更新时间：2023-9-3

**************************************

[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/CangWeiohh/Network-Rule/main/Script/znzdw.js

[mitm]

hostname = buy.itunes.apple.com

*************************************/


var anni = {};
var anni01 = JSON.parse(typeof $response != "undefined" && $response.body || null);
var headers = {};
for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
  }
}
var UA = $request.headers['user-agent'];
var uaProductMapping = {
  'GPSMaker': {product_id: 'theodolite_vip_year'},
};
var receipt = {
  "quantity": "1",
  "purchase_date_ms": "1686776705000",
  "expires_date": "2099-12-31 05:05:05 Etc\/GMT",
  "expires_date_pst": "2099-12-31 05:05:05 America\/Los_Angeles",
  "is_in_intro_offer_period": "false",
  "transaction_id": "999999999999999",
  "is_trial_period": "false",
  "original_transaction_id": "999999999999999",
  "purchase_date": "2023-06-15 05:05:05 Etc\/GMT",
  "product_id": "888888888888888",
  "original_purchase_date_pst": "2023-06-15 05:05:05 America\/Los_Angeles",
  "in_app_ownership_type": "PURCHASED",
  "subscription_group_identifier": "20877951",
  "original_purchase_date_ms": "1686776705000",
  "web_order_line_item_id": "999999999999999",
  "expires_date_ms": "4102347905000",
  "purchase_date_pst": "2023-06-15 05:05:05 America\/Los_Angeles",
  "original_purchase_date": "2023-06-15 05:05:05 Etc\/GMT"
}
var renewal = {
  "expiration_intent": "1",
  "product_id": "888888888888888",
  "is_in_billing_retry_period": "0",
  "auto_renew_product_id": "888888888888888",
  "original_transaction_id": "999999999999999",
  "auto_renew_status": "0"
}
for (var uaKey in uaProductMapping) {
  if (UA && UA.includes(uaKey)) {
    var productInfo = uaProductMapping[uaKey];
    var product_id = productInfo.product_id;
    receipt.product_id = product_id;
    renewal.product_id = product_id;
    renewal.auto_renew_product_id = product_id;
    anni01.receipt.in_app = [receipt];
    anni01.latest_receipt_info = [receipt];
    anni.pending_renewal_info = [renewal];
    break;
  }
}
anni = anni01;
$done({ body: JSON.stringify(anni) });