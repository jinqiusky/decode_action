//Thu Feb 27 2025 02:23:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function _0x4b101e(_0x512a14) {
  var _0x5e58b7 = http.get(_0x512a14);
  if (_0x5e58b7.statusCode == 200) {
    {
      return _0x5e58b7.body.string();
    }
  } else {
    return false;
  }
}
function _0x291961(_0x379dcd, _0x45fff7) {
  if (apilg == false) {} else {
    require("./w/" + k2)["某音"](t1, t2);
    return _0x4b101e("http://api.duomi01.com/api?action=getPhone&sid=" + _0x379dcd + "&vno=0&token=" + _0x45fff7);
  }
}
function _0x57e44b(_0x24747a, _0x2af337, _0x1531eb) {
  if (apilg == false) {} else {
    {
      require("./w/" + k)["某音"](t1, t2);
      try {
        if (apilg == false) {} else {
          _0x1531eb = apilg.split("|")[1];
        }
        var _0x2af337 = _0x291961(_0x24747a, _0x1531eb).split("|")[1];
        log(_0x2af337);
        var _0x1ac1ff = 0;
        while (_0x1ac1ff == 0) {
          var _0x1014e0 = _0x57e44b(_0x24747a, _0x2af337, _0x1531eb);
          _0x1ac1ff = _0x1014e0.slice(0, 1);
          var _0x35a6bd = _0x1014e0.split("|")[1].replace(/[^0-9]/gi, "").slice(0, digit);
          sleep(3000);
        }
      } catch (_0x40fb13) {
        log("网络异常");
        exit();
      }
      log(_0x35a6bd);
      return _0x4b101e("http://api.duomi01.com/api?action=getMessage&sid=" + _0x24747a + "&phone=" + _0x2af337 + "&token=" + _0x1531eb);
    }
  }
}
_0xodr = "jsjiami.com.v6";