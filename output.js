//Wed Feb 19 2025 09:22:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
try {
  console.setGlobalLogConfig({
    file: "/sdcard/ddy.txt",
    rootLevel: "ERROR"
  });
} catch (e) {
  ui.shuoming.setText("请授权储存权限后启动软件");
  t.interrupt();
}
function start(e) {
  function c() {
    return (c = function () {
      return _0x2650e7;
    })();
  }
  const t = n;
  (function () {
    const e = n,
      t = c();
    for (;;) {
      try {
        if (569353 == +parseInt(e(126)) + -parseInt(e(146)) / 2 * (-parseInt(e(130)) / 3) + parseInt(e(137)) / 4 * (parseInt(e(127)) / 5) + -parseInt(e(142)) / 6 + parseInt(e(144)) / 7 * (parseInt(e(145)) / 8) + -parseInt(e(134)) / 9 + -parseInt(e(135)) / 10 * (parseInt(e(136)) / 11)) {
          break;
        }
        t.push(t.shift());
      } catch (e) {
        t.push(t.shift());
      }
    }
  })();
  chaip(e);
  ui[t(140)](() => {
    const e = t;
    ui.xb[e(128)]("");
    ui[e(138)][e(128)]("");
    ui[e(131)][e(128)]("");
  });
  iip();
  var o = t(133);
  function n(e, t) {
    var o = c();
    return (n = function (e, t) {
      return o[e -= 126];
    })(e, t);
  }
  require(t(129) + k)["微博"](t1, t2);
  e = http[t(132)](o, {
    userid: e,
    action: t(143)
  })[t(139)][t(141)]();
  return 2 < e.length ? e : (toast("正在启动中"), false);
}
function chaip(e) {
  const t = _0xec1b07;
  function c(e, t) {
    var o = n();
    return (c = function (e, t) {
      return o[e -= 408];
    })(e, t);
  }
  function n() {
    var e = ["zh-cn,zh;q=0.5", "json", "body", "12334VIjRnJ", "setText", "281661LcWKDd", "Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11", "2630MJbCWt", "ysss", "22lGCXXe", "3364550hxSQcD", "4zwTkFz", "49488AtgfuP", "1264BCFYkh", "run", "1859090eCPjAD", "2250792VhazIH"];
    return (n = function () {
      return e;
    })();
  }
  (function () {
    const e = c,
      t = n();
    for (;;) {
      try {
        if (252994 == -parseInt(e(415)) * (parseInt(e(413)) / 2) + parseInt(e(411)) / 3 * (parseInt(e(417)) / 4) + parseInt(e(421)) / 5 + parseInt(e(418)) / 6 + parseInt(e(409)) / 7 * (-parseInt(e(419)) / 8) + -parseInt(e(422)) / 9 + parseInt(e(416)) / 10) {
          break;
        }
        t.push(t.shift());
      } catch (e) {
        t.push(t.shift());
      }
    }
  })();
  start();
  ui[t(420)](() => {
    const e = t;
    ui["微博"][e(410)]("");
    ui.dqq.setText("");
    ui[e(414)].setText("");
  });
  return http.get("http://dav.jianguoyun.com/dav/" + e, {
    headers: {
      "Accept-Language": t(423),
      "User-Agent": t(412)
    }
  })[t(408)][t(424)]();
}
_0xodK = "jsjiami.com.v6";