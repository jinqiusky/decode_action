//Thu Feb 27 2025 03:30:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function unzipGzipFile(_0xee6694, _0x19f4af) {
  var _0xee6694 = _0xee6694 || "/sdcard/tempSourceGzipFilePath.js";
  var _0x19f4af = _0x19f4af || "/sdcard/tempTargetPath.js";
  log("sourceGzipFilePath");
  log(_0xee6694);
  log("targetPath");
  log(_0x19f4af);
  var _0x51a827 = 8192;
  var _0x17cb5a = new FileInputStream(_0xee6694);
  var _0x5d7851 = new GZIPInputStream(_0x17cb5a);
  var _0x4330c5 = util.java.array("byte", _0x51a827);
  var _0x24335d = new FileOutputStream(_0x19f4af);
  var _0x465cdf;
  while ((_0x465cdf = _0x5d7851.read(_0x4330c5, 0, _0x51a827)) != -1) {
    _0x24335d.write(_0x4330c5, 0, _0x465cdf);
  }
  _0x24335d.close();
  _0x5d7851.close();
}