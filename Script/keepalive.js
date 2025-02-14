function addConnectionHeader(details) {
    var headers = details.requestHeaders;
    headers.push({name: 'Connection', value: 'keep-alive'});
    return {requestHeaders: headers};
}

chrome.webRequest.onBeforeSendHeaders.addListener(
    addConnectionHeader,
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
);
