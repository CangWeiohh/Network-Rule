let body = JSON.parse($response.body);
/**
 * @url: https://appapi-pki.chehezhi.cn:18443/hznz/sys_managementVersion/ios/selectVersion
 * @body: json
{
    "times": "3ms",
    "code": 200,
    "infoId": "b17ff7e40deb4b07b9dc08c732fe20a4",
    "data": {
        "content": "新增 | 支持百度地图位置发送到车；\n优化 | 哨兵模式增加首页状态展示；\n新增 | 哪吒GT驾驶达人增加排行；\n优化 | 修复已知问题；",
        "updateMode": "1",
        "name": "6.1.1"
    },
    "message": "成功"
} 
*/
body = JSON.stringify({
    "code": 0,
    "msg": "ok",
    "data": {
        "times": "3ms",
        "code": 200,
        "infoId": null,
        "data": null
    }
})
$done({ body });
