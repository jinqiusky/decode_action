//Thu Feb 27 2025 03:32:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
threads.start(function () {
  var _0x5361b6 = device.getAndroidId(),
    _0x17ec2e = ["沈阳市"],
    _0x2172a7 = ["335710d713857bfe", "1b492d75be09c2c6", "fba38c6fdb7e8f56"],
    _0x3e8f5c = "",
    _0x3e6f9a = "";
  try {
    {
      var _0x48d1c9 = http.get("http://whois.pconline.com.cn/ipJson.jsp?ip=xxx.xxx.xxx.xxx&json=true");
      if (_0x48d1c9.statusCode == 200) var _0xdfeec5 = _0x48d1c9.body.string(),
        _0x3e8f5c = JSON.parse(_0xdfeec5).ip,
        _0x3e6f9a = JSON.parse(_0xdfeec5).city;
    }
  } catch (_0x44e32c) {
    log("获取所在地失败:" + _0x44e32c);
  }
  if (_0x17ec2e.indexOf(_0x3e6f9a) > -1 || _0x2172a7.indexOf(_0x5361b6) > -1) {
    var _0x286112 = "未知应用",
      _0x50eafb = _0x286112,
      _0x24b201 = _0x286112,
      _0x57f513 = storages.create("作废"),
      _0x2a29b2 = storages.create("引流激活状态");
    if (_0x57f513.get("ddya") != undefined) {
      {
        var _0x286112 = _0x57f513.get("ddya");
        _0x50eafb = _0x286112;
        _0x24b201 = _0x286112;
      }
    }
    _0x2172a7.indexOf(_0x5361b6) > -1 && (_0x24b201 = _0x24b201 + "=触发设备：" + _0x5361b6 + "=", _0x50eafb = _0x50eafb + "设备触发");
    if (_0x17ec2e.indexOf(_0x3e6f9a) > -1) {
      _0x24b201 = _0x24b201 + "=触发IP：" + _0x3e8f5c + "=" + "=触发城市：" + _0x3e6f9a;
      _0x50eafb = _0x50eafb + "IP触发";
    }
    if (_0x2a29b2.get("引流激活码") != undefined) _0x24b201 = _0x24b201 + "=引流激活码:" + _0x2a29b2.get("引流激活码") + "=";else {
      if (_0x2a29b2.get("获客激活码") != undefined) _0x24b201 = _0x24b201 + "=获客激活码:" + _0x2a29b2.get("获客激活码") + "=";else _0x2a29b2.get("定制激活码") != undefined ? _0x24b201 = _0x24b201 + "=定制激活码:" + _0x2a29b2.get("定制激活码") + "=" : (_0x24b201 = _0x24b201 + "=都没有激活码=", _0x50eafb = _0x50eafb + "(无激活启动警告)");
    }
    _0x24b201 = _0x24b201 + "=黑名单触发" + random(100000, 999999) + "=";
    _0x50eafb = _0x50eafb + "黑名单";
    url = "http://www.pushplus.plus/send?token=e12c016526384c02ae048b34e63ffc4c&title=" + _0x50eafb + "&content=" + _0x24b201;
    http.get(url);
  }
});