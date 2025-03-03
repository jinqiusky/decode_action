//Mon Mar 03 2025 10:07:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0x261714) {
  var _0x15f44c = {};
  function _0x5a470f(_0xdbce02) {
    if (_0x15f44c[_0xdbce02]) {
      return _0x15f44c[_0xdbce02].exports;
    }
    _0x15f44c[_0xdbce02] = {
      i: _0xdbce02,
      l: false,
      exports: {}
    };
    var _0x1a31a5 = _0x15f44c[_0xdbce02];
    _0x261714[_0xdbce02].call(_0x1a31a5.exports, _0x1a31a5, _0x1a31a5.exports, _0x5a470f);
    _0x1a31a5.l = true;
    return _0x1a31a5.exports;
  }
  _0x5a470f.m = _0x261714;
  _0x5a470f.c = _0x15f44c;
  _0x5a470f.d = function (_0x1288ee, _0x39742d, _0x55f226) {
    !_0x5a470f.o(_0x1288ee, _0x39742d) && Object.defineProperty(_0x1288ee, _0x39742d, {
      enumerable: true,
      get: _0x55f226
    });
  };
  _0x5a470f.r = function (_0x1afc01) {
    typeof Symbol !== "undefined" && Symbol.toStringTag && Object.defineProperty(_0x1afc01, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(_0x1afc01, "__esModule", {
      value: true
    });
  };
  _0x5a470f.t = function (_0x295427, _0x48213c) {
    if (_0x48213c & 1) {
      _0x295427 = _0x5a470f(_0x295427);
    }
    if (_0x48213c & 8) {
      return _0x295427;
    }
    if (_0x48213c & 4 && typeof _0x295427 === "object" && _0x295427 && _0x295427.__esModule) {
      return _0x295427;
    }
    var _0x118d4a = Object.create(null);
    _0x5a470f.r(_0x118d4a);
    Object.defineProperty(_0x118d4a, "default", {
      enumerable: true,
      value: _0x295427
    });
    if (_0x48213c & 2 && typeof _0x295427 != "string") {
      for (var _0xcc3ffc in _0x295427) _0x5a470f.d(_0x118d4a, _0xcc3ffc, function (_0x55fd08) {
        return _0x295427[_0x55fd08];
      }.bind(null, _0xcc3ffc));
    }
    return _0x118d4a;
  };
  _0x5a470f.n = function (_0x528206) {
    var _0x2162f9 = _0x528206 && _0x528206.__esModule ? function _0x5c78bc() {
      return _0x528206.default;
    } : function _0x5768a0() {
      return _0x528206;
    };
    _0x5a470f.d(_0x2162f9, "a", _0x2162f9);
    return _0x2162f9;
  };
  _0x5a470f.o = function (_0x3b194c, _0x148319) {
    return Object.prototype.hasOwnProperty.call(_0x3b194c, _0x148319);
  };
  _0x5a470f.p = "";
  return _0x5a470f(_0x5a470f.s = 11);
})([function (_0x5854ac, _0x5e8327) {
  var _0x3e09aa = {
    get_statusBarHeight: function () {
      var _0x176f05 = context.getResources();
      var _0x2b9af1 = _0x176f05.getDimensionPixelSize(_0x176f05.getIdentifier("status_bar_height", "dimen", "android"));
      return _0x2b9af1;
    },
    createPopWin: function () {
      var _0x1ef068 = new android.widget.PopupWindow();
      var _0x508e74 = new android.transition.Fade();
      _0x508e74.setDuration(200);
      _0x1ef068.setEnterTransition(_0x508e74);
      var _0x5eeaa1 = new android.transition.Fade();
      _0x5eeaa1.setDuration(200);
      _0x5eeaa1.setMode(android.transition.Visibility.MODE_OUT);
      _0x1ef068.setExitTransition(_0x5eeaa1);
      _0x1ef068.setWidth(device.width);
      _0x1ef068.setHeight(device.height);
      _0x1ef068.setClippingEnabled(false);
      _0x1ef068.setFocusable(true);
      _0x1ef068.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x1ef068.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      return _0x1ef068;
    },
    checkServer: function () {
      if (auto.service == null) {
        dialogs.build({
          title: "提示",
          content: "请开启无障碍服务,若开启后任无法正常显示,关闭无障碍,重新开启",
          positive: "立即开启",
          negative: "取消"
        }).on("positive", function () {
          app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
          });
        }).on("negative", function () {
          toast("取消");
        }).show();
        return false;
      }
      if (!floaty.checkPermission()) {
        confirm("请开启悬浮窗权限").then(function (_0x3b071d) {
          if (_0x3b071d) {
            try {
              app.startActivity({
                packageName: "com.android.settings",
                className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
                data: "package:" + context.getPackageName()
              });
            } catch (_0x48211e) {
              floaty.requestPermission();
            }
          }
        });
        return false;
      }
      return true;
    },
    isScreenCapture: false,
    requestScreenCapture: function () {
      if (_0x3e09aa.isScreenCapture == false) {
        threads.start(function () {
          var _0x5207c4 = text("允许").findOne(1000);
          _0x5207c4 != null && (log("允许"), _0x5207c4.click(), _0x3e09aa.isScreenCapture = true);
          var _0x448673 = text("立即开始").findOne(1000);
          _0x448673 != null && (log("立即开始"), _0x448673.click(), _0x3e09aa.isScreenCapture = true);
        });
        var _0x512c03 = requestScreenCapture();
        sleep(2000);
        return _0x512c03;
      }
    }
  };
  _0x3e09aa.captureScreen_and_save = function () {
    var _0x221c90 = "/sdcard/DCIM/Camera/";
    var _0x208acb = new Date().getTime() + "." + random(100, 999) + ".jpg";
    var _0x37d9b3 = _0x221c90 + _0x208acb;
    log(_0x208acb);
    var _0x127e98 = images.captureScreen(_0x37d9b3);
    media.scanFile(_0x37d9b3);
    sleep(1000);
    return _0x37d9b3;
  };
  _0x3e09aa.checkAutoServer = function () {
    if (auto.service == null) {
      toast("依次点击：'无障碍'-'AutoKwai'-'确定'");
      dialogs.build({
        title: "请求权限",
        content: "无障碍服务",
        positive: "立即开启",
        negative: "取消"
      }).on("positive", function () {
        app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
      }).show();
      return false;
    }
    return true;
  };
  _0x3e09aa.waitTime = function (_0x471e78, _0x68c8b9) {
    var _0x1315e0 = _0x471e78;
    var _0x3b4808 = _0x68c8b9 || "倒计时";
    while (_0x1315e0 >= 0) {
      _0x471e78 == 0 ? log(_0x3b4808) : log(_0x3b4808 + "--" + _0x1315e0);
      _0x1315e0 != 0 && sleep(500);
      _0x1315e0--;
    }
  };
  _0x3e09aa.openApp = function (_0x35258d) {
    launchApp(_0x35258d);
  };
  _0x3e09aa.bezier_curves = function (_0xa848de, _0x5e40fd) {
    var _0x30b978 = 3 * (_0xa848de[1].x - _0xa848de[0].x);
    var _0x1cdce5 = 3 * (_0xa848de[2].x - _0xa848de[1].x) - _0x30b978;
    var _0x3adc9e = _0xa848de[3].x - _0xa848de[0].x - _0x30b978 - _0x1cdce5;
    var _0x148637 = 3 * (_0xa848de[1].y - _0xa848de[0].y);
    var _0x328d12 = 3 * (_0xa848de[2].y - _0xa848de[1].y) - _0x148637;
    var _0x2097e3 = _0xa848de[3].y - _0xa848de[0].y - _0x148637 - _0x328d12;
    var _0x2d62e5 = _0x5e40fd * _0x5e40fd;
    var _0xd9445 = _0x2d62e5 * _0x5e40fd;
    var _0x374038 = {
      x: 0,
      y: 0
    };
    _0x374038.x = _0x3adc9e * _0xd9445 + _0x1cdce5 * _0x2d62e5 + _0x30b978 * _0x5e40fd + _0xa848de[0].x;
    _0x374038.y = _0x2097e3 * _0xd9445 + _0x328d12 * _0x2d62e5 + _0x148637 * _0x5e40fd + _0xa848de[0].y;
    return _0x374038;
  };
  _0x3e09aa.swipeRandom = function (_0x5e0ae0, _0x4e6f01, _0x1e0d00, _0x5c9ec4, _0x4e0706) {
    var _0xdc4216 = [_0x4e0706];
    var _0x4ee61c = [];
    var _0x4cd4ce = {
      x: _0x5e0ae0,
      y: _0x4e6f01
    };
    var _0x249b1d = 0;
    var _0x5f58e8 = {
      x: random(_0x5e0ae0 - _0x249b1d, _0x5e0ae0 + 100),
      y: random(_0x4e6f01, _0x4e6f01 + 50)
    };
    var _0x3d7085 = {
      x: random(_0x1e0d00 - _0x249b1d, _0x1e0d00 + 100),
      y: random(_0x5c9ec4, _0x5c9ec4 + 50)
    };
    var _0x1d3918 = {
      x: _0x1e0d00,
      y: _0x5c9ec4
    };
    _0x4ee61c.push(_0x4cd4ce);
    _0x4ee61c.push(_0x5f58e8);
    _0x4ee61c.push(_0x3d7085);
    _0x4ee61c.push(_0x1d3918);
    for (var _0x55c4bd = 0; _0x55c4bd < 1; _0x55c4bd += 0.1) {
      var _0x37cfe8 = [parseInt(_0x3e09aa.bezier_curves(_0x4ee61c, _0x55c4bd).x), parseInt(_0x3e09aa.bezier_curves(_0x4ee61c, _0x55c4bd).y)];
      _0xdc4216.push(_0x37cfe8);
    }
    _0x3e09aa.showIconLine(_0xdc4216);
    gesture.apply(0, _0xdc4216);
  };
  _0x3e09aa.readlines = function (_0x59b2df) {
    files.ensureDir(_0x59b2df);
    !files.exists(_0x59b2df) && files.create(_0x59b2df);
    var _0x386102 = files.open(_0x59b2df, "r").readlines();
    return _0x386102;
  };
  _0x3e09aa.showConsole = function () {
    var _0xfe30eb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "日志";
    var _0x164347 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : device.width * 0.45;
    var _0x180562 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : device.width * 0.35;
    var _0x227117 = threads.start(function () {
      try {
        console.show(true);
        ui.run(function () {
          var _0x4ddd66 = runtime.console;
          var _0x1888d9 = _0x4ddd66.class.getDeclaredField("mConsoleFloaty");
          _0x1888d9.setAccessible(true);
          mConsoleFloaty = _0x1888d9.get(_0x4ddd66);
          var _0x11596a = mConsoleFloaty.getExpandedView();
          var _0x5c2422 = _0x11596a.parent;
          var _0x33c04f = _0x5c2422.findViewById(context.getResources().getIdentifier("title", "id", context.getPackageName()));
          drawable = _0x33c04f.parent.getBackground().mutate();
          drawable.setCornerRadius(0);
          var _0x57b339 = _0x5c2422.findViewById(context.getResources().getIdentifier("minimize", "id", context.getPackageName()));
          var _0x531439 = _0x5c2422.findViewById(context.getResources().getIdentifier("move_or_resize", "id", context.getPackageName()));
          _0x531439.setVisibility(8);
          var _0x3fb4c1 = _0x5c2422.findViewById(context.getResources().getIdentifier("close", "id", context.getPackageName()));
          _0x3fb4c1.setVisibility(8);
          var _0x262c47 = _0x5c2422.findViewById(context.getResources().getIdentifier("move_cursor", "id", context.getPackageName()));
          _0x262c47.setVisibility(0);
          _0x262c47.setTranslationX(_0x164347 * 0.8);
          _0x262c47.setTranslationY(_0x180562 * 0.75);
          var _0x47481b = _0x5c2422.findViewById(context.getResources().getIdentifier("console", "id", context.getPackageName()));
          drawable = _0x47481b.getBackground().mutate();
          drawable.setCornerRadius(0);
          px1 = device.width * 0.1 - 35;
          py1 = -35;
          console.setTitle(_0xfe30eb, "#ff5722", 24);
          console.setLogSize(9);
          console.setPosition(px1, py1);
          console.setSize(_0x164347, _0x180562);
          console.setCanInput(false);
          console.setMaxLines(100);
          setTimeout(function () {
            console.setPosition(px1, py1);
            console.setSize(_0x164347, _0x180562);
          }, 500);
          setTimeout(function () {
            console.setSize(_0x164347, _0x180562);
          }, 2000);
        });
      } catch (_0x28c36d) {
        log("showConsole", _0x28c36d);
      }
    });
    return _0x227117;
  };
  _0x3e09aa.clearConsole = function () {
    console.clear();
  };
  _0x3e09aa.closeConsole = function () {
    console.clear();
    console.hide();
  };
  _0x3e09aa.chenckMonitorEnd = function (_0x280005) {
    var _0x166a68 = threads.start(function () {
      try {
        events.observeKey();
        events.setKeyInterceptionEnabled("volume_up", true);
        events.onKeyDown("volume_up", function (_0x50e969) {
          dialogs.build({
            title: "提示",
            content: "确定要停止吗?",
            positive: "确定",
            negative: "取消"
          }).on("positive", function () {
            _0x280005();
          }).show();
        });
      } catch (_0x25ba6f) {
        log("chenckMonitorEnd", _0x25ba6f);
      }
    });
    return _0x166a68;
  };
  _0x3e09aa.chencVoiceUp = function (_0x1a0941) {
    var _0xf90233 = threads.start(function () {
      try {
        events.observeKey();
        events.setKeyInterceptionEnabled("volume_up", true);
        events.onceKeyDown("volume_up", function (_0x5acf8d) {
          _0x1a0941();
        });
      } catch (_0xc39b73) {
        log("chenckMonitorEnd", _0xc39b73);
      }
    });
    return _0xf90233;
  };
  _0x3e09aa.checkTimeEnd = function (_0x5ec736, _0x522fbf) {
    var _0xfc2c3 = threads.start(function () {
      var _0x598ecf = 0;
      var _0x1a11ad = _0x5ec736 * 60;
      console.log("[设定时长]：" + _0x1a11ad + "秒");
      setInterval(function () {
        _0x598ecf == _0x1a11ad && (log("结束"), _0x522fbf());
        _0x598ecf++;
      }, 1000);
    });
    return _0xfc2c3;
  };
  _0x3e09aa.checkVersion = function () {
    dialogs.build({
      title: "发现可以使用的新版本！",
      content: "新版本：0稳定版-AutoKwai\n\n更新内容：",
      positive: "立即下载",
      negative: "取消"
    }).on("positive", function () {
      app.openUrl("https://www.lanzous.com/b05gilch");
    }).show();
  };
  _0x3e09aa.stop = function () {
    console.clear();
    console.hide();
    home();
  };
  var _0x11ea03 = storages.create("wzke:CODE88");
  _0x3e09aa.mStatus = 1;
  _0x3e09aa.actionSleep = function (_0xf01c9f, _0x74748c) {
    if (_0xf01c9f == undefined) {
      _0xf01c9f = "title";
    }
    if (_0x74748c == undefined) {
      _0x74748c = 1;
    }
    log(_0xf01c9f, _0x74748c, "s");
    sleep(1000 * _0x74748c);
  };
  _0x3e09aa.showIcon = function (_0x43630a, _0x2001ad) {
    var _0x4c5e56 = floaty.rawWindow("\n        <frame id=\"id_1\" w=\"10\" h=\"20\" alpha=\"1\">\n            <img w=\"10\" h=\"10\" src=\"#ee534f\" circle=\"true\" />\n        </frame>\n    ");
    _0x4c5e56.setPosition(_0x43630a, _0x2001ad);
    _0x4c5e56.setTouchable(false);
    setTimeout(function () {
      _0x4c5e56.close();
    }, 2000);
  };
  _0x3e09aa.showIconLine = function (_0x161590) {
    var _0x455485 = function _0x28d2d9(_0x3e7e2b) {
      threads.start(function () {
        var _0x28cec2 = floaty.rawWindow("\n                <frame gravity=\"center\">\n                    <img alpha=\"0.3\" w=\"12\" h=\"12\" radius=\"45\" src=\"#ee534f\" ></img>\n                </frame>\n            ");
        var _0x5327f6 = _0x161590[_0x3e7e2b];
        _0x28cec2.setPosition(_0x5327f6[0], _0x5327f6[1]);
        _0x28cec2.setTouchable(false);
        setTimeout(function () {
          _0x28cec2.close();
        }, 1000);
      });
    };
    for (var _0x2a55bb = 1; _0x2a55bb < _0x161590.length; _0x2a55bb++) {
      _0x455485(_0x2a55bb);
    }
    sleep(1000);
  };
  _0x3e09aa.wakeUp = function () {
    if (!device.isScreenOn()) {
      device.wakeUp();
      sleep(1000);
      var _0x2b9084 = device.width / 10;
      var _0x59aa37 = device.height / 10;
      var _0x36a5cb = _0x2b9084 * 5;
      var _0x3438a1 = _0x59aa37 * 7;
      var _0xefe650 = _0x2b9084 * 6;
      var _0x3ff217 = _0x59aa37 * 2;
      gesture(500, [_0x36a5cb, _0x3438a1], [_0xefe650, _0x3ff217]);
      sleep(1000);
      home();
    }
  };
  _0x3e09aa.actionSwipUp = function () {
    for (var _0x3c4754 = 0; _0x3c4754 < 1; _0x3c4754++) {
      var _0x4e7f23 = device.width * 0.7 + random(0, 20);
      var _0x1130c5 = device.height * 0.7;
      var _0x267632 = device.width * 0.8 + random(20, 40);
      var _0x462083 = device.height * 0.1;
      var _0x61d70d = random(100, 120);
      _0x3e09aa.swipeRandom(_0x4e7f23, _0x1130c5, _0x267632, _0x462083, _0x61d70d);
      sleep(1000);
    }
  };
  _0x3e09aa.actionSwipRight = function () {
    var _0xa1a26f = device.width * 0.7 + random(0, 100);
    var _0x5e8bc8 = device.height * 0.6 + random(0, 50);
    var _0x4bb3ac = device.width * 0.2 + random(0, 100);
    var _0x333cec = device.height * 0.5 + random(0, 50);
    var _0xfe0715 = random(100, 200);
    _0x3e09aa.swipeRandom(_0xa1a26f, _0x5e8bc8, _0x4bb3ac, _0x333cec, _0xfe0715);
    sleep(1000);
  };
  _0x3e09aa.getStatusBarHight = function () {
    try {
      var _0x4f74df = context.getResources();
      var _0x3a512d = _0x4f74df.getIdentifier("status_bar_height", "dimen", "android");
      var _0xecf9d6 = _0x4f74df.getDimensionPixelSize(_0x3a512d);
      return _0xecf9d6;
    } catch (_0x551fd2) {
      return 0;
    }
  };
  _0x3e09aa.setFullWin = function () {
    importClass(android.view.WindowManager);
    importClass(android.view.View);
    importClass(android.graphics.Color);
    var _0x3bd438 = activity.getWindow();
    _0x3bd438.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    _0x3bd438.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    _0x3bd438.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
    _0x3bd438.setStatusBarColor(Color.TRANSPARENT);
  };
  _0x3e09aa.logTime = function () {
    var _0x1527b7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "time";
    function _0x24718f(_0x16b1eb) {
      return _0x16b1eb < 10 ? "0" + _0x16b1eb : _0x16b1eb;
    }
    function _0x663cc1(_0x5e3d47) {
      var _0x2786e9 = new Date(_0x5e3d47);
      var _0x4321c6 = _0x2786e9.getFullYear();
      var _0x2cf7fb = _0x2786e9.getMonth() + 1;
      var _0x1addd0 = _0x2786e9.getDate();
      var _0x4299dd = _0x2786e9.getHours();
      var _0x58f6e6 = _0x2786e9.getMinutes();
      var _0x4f4a52 = _0x2786e9.getSeconds();
      return _0x4321c6 + "-" + _0x24718f(_0x2cf7fb) + "-" + _0x24718f(_0x1addd0) + " " + _0x24718f(_0x4299dd) + ":" + _0x24718f(_0x58f6e6) + ":" + _0x24718f(_0x4f4a52);
    }
    var _0x472108 = new Date();
    var _0x472108 = _0x663cc1(_0x472108.getTime()) + "-" + _0x472108.getMilliseconds();
    log(_0x1527b7 + " :", _0x472108);
  };
  _0x3e09aa.getPercent = function (_0x583735) {
    var _0x21e8af = {
      w: (100 * _0x583735.bounds().width() / device.width).toFixed(1),
      h: (100 * _0x583735.bounds().height() / device.height).toFixed(1)
    };
    return _0x21e8af;
  };
  importClass(android.graphics.drawable.GradientDrawable);
  importClass(android.graphics.Color);
  _0x3e09aa.setBackgroundRoundedRectangle = function (_0x5e4895) {
    var _0x1b5a96 = new GradientDrawable();
    _0x1b5a96.setShape(GradientDrawable.RECTANGLE);
    _0x1b5a96.setStroke(2, colors.parseColor("#e8e8e8"));
    _0x1b5a96.setCornerRadius(10);
    _0x5e4895.setBackground(_0x1b5a96);
  };
  _0x3e09aa.setBackgroundRoundedRectangleGradient = function (_0x18c2a3, _0x57b627, _0x5e5682, _0x117e16) {
    if (_0x117e16 == undefined) {
      _0x117e16 = 20;
    }
    var _0x1af6d5 = new GradientDrawable();
    var _0x456e25 = util.java.array("int", 2);
    _0x456e25[0] = colors.parseColor(_0x57b627);
    _0x456e25[1] = colors.parseColor(_0x5e5682);
    _0x1af6d5.setShape(GradientDrawable.RECTANGLE);
    _0x1af6d5.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);
    _0x1af6d5.setColors(_0x456e25);
    _0x1af6d5.setStroke(0, colors.parseColor("#fbdaae"));
    _0x1af6d5.setCornerRadius(_0x117e16);
    GradientDrawable;
    _0x18c2a3.setBackground(_0x1af6d5);
  };
  _0x3e09aa.setBtnRadius = function (_0x467351) {
    var _0x2695f2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#009688";
    var _0x8b691f = new GradientDrawable();
    _0x8b691f.setShape(GradientDrawable.RECTANGLE);
    _0x8b691f.setStroke(3, colors.parseColor(_0x2695f2));
    _0x8b691f.setCornerRadius(20);
    _0x8b691f.setColor(colors.parseColor(_0x2695f2));
    _0x467351.setBackground(_0x8b691f);
  };
  _0x3e09aa.getVersionName = function (_0xf503ef) {
    var _0x2621be = "暂无版本信息，请检查是否安装相关应用";
    try {
      var _0x53cccd = context.getPackageManager().getPackageInfo(_0xf503ef, 0);
      _0x2621be = _0x53cccd.versionName;
    } catch (_0x42e555) {}
    return _0x2621be;
  };
  _0x3e09aa.alertImg = function (_0x3865da) {
    var _0x463bea = new android.widget.PopupWindow();
    var _0x3c592 = new android.transition.Fade();
    _0x3c592.setDuration(200);
    _0x463bea.setEnterTransition(_0x3c592);
    var _0x4b5b1d = new android.transition.Fade();
    _0x4b5b1d.setDuration(200);
    _0x4b5b1d.setMode(android.transition.Visibility.MODE_OUT);
    _0x463bea.setExitTransition(_0x4b5b1d);
    _0x463bea.setWidth(device.width);
    _0x463bea.setHeight(device.height);
    _0x463bea.setClippingEnabled(false);
    _0x463bea.setFocusable(true);
    var _0x520956 = ui.inflate("\n        <drawer >\n            <vertical id=\"viewpager\"  >\n                <card w=\"*\" h=\"*\">\n                    <img circle=\"true\" bg=\"#000000\" alpha=\"0.5\" />\n                    <img padding=\"30 60 \" src=\"".concat(_0x3865da, "\" />\n                    <vertical w=\"*\" h=\"*\" gravity=\"center\"  >\n                        <text gravity=\"center\" color=\"red\" textStyle=\"bold\" textSize=\"60\" text=\"此\" />\n                        <text gravity=\"center\" color=\"red\" textStyle=\"bold\" textSize=\"60\" text=\"界\" />\n                        <text gravity=\"center\" color=\"red\" textStyle=\"bold\" textSize=\"60\" text=\"面\" />\n                        <text gravity=\"center\" color=\"red\" textStyle=\"bold\" textSize=\"60\" text=\"开\" />\n                        <text gravity=\"center\" color=\"red\" textStyle=\"bold\" textSize=\"60\" text=\"始\" />\n                    </vertical>\n\n\n                </card>\n            </vertical>\n        </drawer>\n    "));
    _0x463bea.setContentView(_0x520956);
    parent = activity.getWindow().getDecorView();
    _0x463bea.showAtLocation(parent, android.view.Gravity.LEFT, -1, -1);
    _0x520956.viewpager.click(function () {
      _0x463bea.dismiss();
    });
  };
  _0x3e09aa.checkAppVersionAndLaunch = function (_0x687bf8, _0xc2b863) {
    var _0x3498f1 = app.getPackageName(_0x687bf8);
    var _0x210432 = "";
    var _0x1be753 = context.getPackageManager().getInstalledPackages(0).toArray();
    for (var _0x2d3e29 in _0x1be753) {
      if (_0x1be753[_0x2d3e29].packageName.toString() === _0x3498f1) {
        _0x210432 = _0x1be753[_0x2d3e29].versionName;
        log("版本：", _0x210432);
        if (_0x210432 === _0xc2b863) {
          app.launchApp(_0x687bf8);
          return true;
        }
      }
    }
    toast("请安装：" + _0xc2b863 + "版本" + _0x687bf8);
    return false;
  };
  _0x5854ac.exports = _0x3e09aa;
}, function (_0x43b238, _0x2ed86c) {
  var _0x443938 = {
    host: "".concat("https://admin.syjfs.com/"),
    themeList: [{
      skin: "星辰蓝",
      primary: "#287efe",
      text: "#ffffff",
      banner: _0x443938.host + "/static/imgs/banner3.png",
      splashImg: _0x443938.host + "/static/imgs/splash1.png",
      runDataBg: _0x443938.host + "/static/imgs/runDataBg4.png",
      avatar: _0x443938.host + "/static/imgs/avatar.png",
      loginBg: _0x443938.host + "/static/imgs/loginbg1.png"
    }, {
      skin: "海棠红",
      primary: "#ce6372",
      text: "#3c3c3b",
      banner: "https://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/banner_pink.jpg",
      splashImg: _0x443938.host + "/static/imgs/splash1.png",
      runDataBg: _0x443938.host + "/static/imgs/runDataBg4.png",
      avatar: _0x443938.host + "/static/imgs/avatar.png",
      loginBg: _0x443938.host + "/static/imgs/loginbg1.png"
    }, {
      skin: "藕客",
      primary: "#287efe",
      text: "#287efe",
      banner: _0x443938.host + "/static/imgs/ok/banner3.png",
      splashImg: _0x443938.host + "/static/imgs/ok/splash1.png",
      runDataBg: _0x443938.host + "/static/imgs/ok/runDataBg4.png",
      avatar: _0x443938.host + "/static/imgs/ok/avatar.png",
      loginBg: _0x443938.host + "/static/imgs/ok/loginbg1.png"
    }]
  };
  var _0x3b7956 = storages.create("wzke:config");
  _0x443938.getSkinType = function () {
    var _0x270481 = app.getAppName("com.jf.junke") === "藕客" ? 2 : 0;
    var _0x1f3dad = _0x3b7956.get("skinType") != undefined ? _0x3b7956.get("skinType") : _0x270481;
    _0x1f3dad > _0x443938.themeList.length - 1 && (_0x1f3dad = 0);
    return _0x1f3dad;
  };
  _0x443938.setSkinType = function (_0x479121) {
    _0x3b7956.put("skinType", parseInt(_0x479121));
  };
  _0x443938.selectedTabIndicatorColor = "#b7f9a2";
  _0x443938.selectedTabIndicatorHeight = 4;
  _0x443938.Theme = _0x443938.themeList[0];
  _0x443938.setSkin = function () {
    var _0x499c24 = _0x443938.getSkinType();
    _0x443938.Theme = _0x443938.themeList[_0x499c24];
    ui.statusBarColor(_0x443938.Theme.primary);
    switch (_0x499c24) {
      case 0:
        _0x443938.bgColor = "#287efe";
        _0x443938.color1 = "#287efe";
        _0x443938.color2 = "#287efe";
        _0x443938.color3 = "#e0e5f3";
        _0x443938.colorButton = "#6A5ACD";
        _0x443938.selectedTabIndicatorColor = "#f1b567";
        break;
      case 1:
        _0x443938.bgColor = "#ce6372";
        _0x443938.color1 = "#ce6372";
        _0x443938.color2 = "#ce6372";
        _0x443938.color3 = "#d6b6b5";
        _0x443938.colorButton = "#f9a580";
        break;
      default:
        _0x443938.bgColor = "#287efe";
        _0x443938.color1 = "#287efe";
        _0x443938.color2 = "#287efe";
        _0x443938.color3 = "#e0e5f3";
        _0x443938.colorButton = "#6A5ACD";
        _0x443938.selectedTabIndicatorColor = "#f1b567";
        break;
    }
  };
  _0x443938.setSkin();
  _0x43b238.exports = _0x443938;
}, function (_0x36af66, _0x4e8ef5, _0x516f31) {
  var _0x18418e = _0x516f31(1);
  var _0x26eb3c = _0x18418e.mt;
  var _0x53098d = _0x516f31(0);
  var _0x5495a = _0x516f31(7);
  function _0x56fc8a() {
    var _0x25f556 = this;
    _0x25f556.win = null;
    _0x25f556.interval = null;
    _0x25f556.time = 0;
    _0x25f556.isRun = -1;
    _0x25f556.statusBarHight = 0;
    _0x25f556.index = function () {
      var _0x58d337 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : device.width * 0;
      var _0x32ecb3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : device.height * 0;
      _0x58d337 = parseInt(_0x58d337);
      thread = threads.start(function () {
        sleep(200);
        _0x25f556.win == null && _0x25f556.show(_0x58d337, _0x32ecb3);
      });
      return thread;
    };
    importClass(android.animation.ObjectAnimator);
    importClass(android.animation.ValueAnimator);
    importClass(android.view.animation.LinearInterpolator);
    var _0x49e773 = "@drawable/ic_eject_black_48dp";
    var _0x2ec4c6 = "";
    _0x25f556.show = function (_0x15d468, _0x47e6e6) {
      _0x25f556.statusBarHight = _0x25f556.getStatusBarHight();
      _0x25f556.statusBarHight <= 80 && (_0x47e6e6 += _0x25f556.statusBarHight);
      var _0x301f70 = parseInt(device.width * 0.1);
      "ui";
      _0x2ec4c6 = floaty.rawWindow("\n            <frame id=\"f\" w=\"auto\" h=\"auto\"  >\n                <img w=\"*\" h=\"*\" src=\"#000000\" alpha=\"0.5\" radius=\"2\" scaleType=\"center\" borderWidth=\"0px\" borderColor=\"#e6e6e6cc\" />\n                <vertical w=\"*\" h=\"*\" gravity=\"center\" >\n                    <frame padding=\"2\" w=\"".concat(_0x301f70, "px\" h=\"").concat(_0x301f70, "px\" gravity=\"center\" alpha=\"1\">\n                        <img id=\"bg1\" w=\"*\" h=\"*\" src=\"#ee534f\" radius=\"2\" scaleType=\"center\" />\n                        <img padding=\"2\" id=\"stop\" w=\"*\" h=\"*\" src=\"@drawable/ic_highlight_off_black_48dp\" tint=\"#ffffff\" gravity=\"center\" layout_gravity=\"center\" />\n                    </frame>\n                    <vertical id=\"time\" padding=\"2 1 0 1\" >\n                        <horizontal padding=\"-1\" gravity=\"center|bottom\">\n                            <text textSize=\"12\" id=\"time0\" textColor=\"#ffffff\" text=\"00\"></text>\n                            <text textSize=\"6\" marginBottom=\"1\" textColor=\"#ffffff\">时</text>\n                        </horizontal>\n                        <horizontal padding=\"-1\" gravity=\"center|bottom\">\n                            <text textSize=\"12\" id=\"time1\" textColor=\"#ffffff\" text=\"00\"></text>\n                            <text textSize=\"6\" marginBottom=\"1\" textColor=\"#ffffff\">分</text>\n                        </horizontal>\n                        <horizontal padding=\"-1\" gravity=\"center|bottom\">\n                            <text textSize=\"12\" id=\"time2\" textColor=\"#ffffff\" text=\"00\"></text>\n                            <text textSize=\"6\" marginBottom=\"1\" textColor=\"#ffffff\">秒</text>\n                        </horizontal>\n                    </vertical>\n                    <frame padding=\"2\" w=\"").concat(_0x301f70, "px\" h=\"").concat(_0x301f70, "px\" gravity=\"center\" alpha=\"1\">\n                        <img id=\"bg2\" w=\"*\" h=\"*\" src=\"#3aa8f7\" radius=\"2\" scaleType=\"center\" />\n                        <img padding=\"2\" id=\"start\" rotation=\"90\" w=\"*\" h=\"*\" src=\"@drawable/ic_eject_black_48dp\" tint=\"#ffffff\" gravity=\"center\" layout_gravity=\"center\" />\n                    </frame>\n                </vertical>\n            </frame>\n        "));
      _0x25f556.win = _0x2ec4c6;
      _0x2ec4c6.setPosition(_0x15d468, _0x47e6e6);
      _0x25f556.isRun = 0;
      _0x2ec4c6.stop.on("click", function () {
        _0x25f556.isRun = -1;
        _0x25f556.clickExit();
      });
      ui.run(function () {
        _0x25f556.animator = ObjectAnimator.ofFloat(_0x2ec4c6.start, "rotation", 90, 360);
        _0x25f556.animator.setDuration(6000);
        _0x25f556.animator.setRepeatCount(-1);
        _0x25f556.animator.setInterpolator(new LinearInterpolator());
        _0x25f556.animator.setRepeatMode(ValueAnimator.RESTART);
      });
      _0x2ec4c6.start.on("click", function () {
        _0x2ec4c6.start.attr("src") == _0x49e773 ? (_0x25f556.startAnimation(), _0x25f556.clickStart()) : (_0x25f556.stopAnimation(), _0x25f556.clickStop());
      });
      ui.run(function () {
        _0x25f556.time = 0;
        _0x25f556.interval = setInterval(function () {
          _0x25f556.isRun == 1 && _0x25f556.time++;
          var _0x2125d6 = _0x25f556.time % 60;
          var _0x3bf482 = Math.floor(_0x25f556.time / 60) % 60;
          var _0xc8bdab = Math.floor(_0x25f556.time / 3600) % 100;
          var _0x421dad = ("0" + _0xc8bdab).slice(-2);
          var _0x2a0935 = ("0" + _0x3bf482).slice(-2);
          var _0x2a732f = ("0" + _0x2125d6).slice(-2);
          _0x2ec4c6.time0.setText(_0x421dad);
          _0x2ec4c6.time1.setText(_0x2a0935);
          _0x2ec4c6.time2.setText(_0x2a732f);
          _0x2125d6 === 59 && _0x5495a.addRunTime();
        }, 1000);
      });
      _0x2ec4c6.time.setOnTouchListener(function (_0xc75670, _0x5b18aa) {
        try {
          switch (_0x5b18aa.getAction()) {
            case _0x5b18aa.ACTION_DOWN:
              return true;
            case _0x5b18aa.ACTION_MOVE:
              var _0x1a3429 = _0x5b18aa.getRawY() - parseInt(device.width * 0.15);
              _0x25f556.statusBarHight > 80 && (_0x1a3429 -= _0x25f556.statusBarHight);
              _0x1a3429 <= device.height * 0 && (_0x1a3429 = device.height * 0);
              _0x1a3429 >= device.height * 0.2 && (_0x1a3429 = device.height * 0.2);
              _0x2ec4c6.setPosition(_0x15d468, _0x1a3429);
              return true;
            case _0x5b18aa.ACTION_UP:
              return true;
            default:
              return true;
          }
        } catch (_0x42d517) {
          log("滑动错误", _0x42d517);
        }
      });
    };
    _0x25f556.startAnimation = function () {
      ui.run(function () {
        _0x2ec4c6.start.attr("src", "ic_stop_black_48dp");
        _0x25f556.animator.start();
        _0x25f556.isRun = 1;
      });
    };
    _0x25f556.clickStart = function () {};
    _0x25f556.stopAnimation = function () {
      ui.run(function () {
        _0x2ec4c6.start.attr("src", _0x49e773);
        _0x25f556.animator.end();
        _0x2ec4c6.start.attr("rotation", "90");
        _0x25f556.isRun = -1;
      });
    };
    _0x25f556.clickStop = function () {};
    _0x25f556.clickExit = function () {
      dialogs.build({
        title: "提示",
        content: "确认要关闭吗?",
        positive: "确认",
        negative: "取消"
      }).on("positive", function () {
        toast("关闭");
        _0x25f556.close();
        setTimeout(function () {
          exit();
        }, 200);
      }).show();
    };
    _0x25f556.ClickListener = function (_0xa93ef) {
      _0xa93ef.clickStart != undefined && (_0x25f556.clickStart = _0xa93ef.clickStart);
      _0xa93ef.clickStop != undefined && (_0x25f556.clickStop = _0xa93ef.clickStop);
      _0xa93ef.clickExit != undefined && (_0x25f556.clickExit = _0xa93ef.clickExit);
    };
    _0x25f556.close = function () {
      clearInterval(_0x25f556.interval);
      _0x25f556.win.close();
      _0x25f556.win = null;
      floaty.closeAll();
    };
    _0x25f556.getStatusBarHight = function () {
      try {
        var _0x1c97ac = context.getResources();
        var _0x4a6e30 = _0x1c97ac.getIdentifier("status_bar_height", "dimen", "android");
        var _0x175c5e = _0x1c97ac.getDimensionPixelSize(_0x4a6e30);
        return _0x175c5e;
      } catch (_0x51e179) {
        return 0;
      }
    };
  }
  _0x36af66.exports = _0x56fc8a;
}, function (_0x520b18, _0x3f5734, _0x155678) {
  var _0x47780d = _0x155678(1);
  var _0x277a00 = _0x155678(0);
  var _0x51a1c3 = _0x155678(7);
  function _0x154b25() {
    var _0x707f54 = this;
    _0x707f54.appName = "抖音";
    var _0x233134 = _0x155678(0);
    var _0x18091f = new (_0x155678(5))();
    this.launchAppJS = function () {
      version = -1;
      var _0x2aada9 = "com.ss.android.ugc.aweme.lite";
      var _0x2a3acf = context.getPackageManager().getInstalledPackages(0).toArray();
      for (var _0x19c298 in _0x2a3acf) {
        if (_0x2a3acf[_0x19c298].packageName.toString() === _0x2aada9) {
          version = _0x2a3acf[_0x19c298].versionName;
        }
      }
      log("极速 :", version);
      app.launch(_0x2aada9);
      return true;
    };
    this.launchAppHs = function () {
      version = -1;
      var _0x184dcf = "com.ss.android.ugc.live";
      var _0x18a10e = context.getPackageManager().getInstalledPackages(0).toArray();
      for (var _0x54641e in _0x18a10e) {
        if (_0x18a10e[_0x54641e].packageName.toString() === _0x184dcf) {
          version = _0x18a10e[_0x54641e].versionName;
        }
      }
      log("火山 :", version);
      app.launch(_0x184dcf);
      return true;
    };
    this.launchApp = function () {
      var _0x40136d = _0x707f54.getDyVersion();
      app.launch("com.ss.android.ugc.aweme");
      log("DY :", _0x40136d);
      return true;
    };
    this.getDyVersion = function () {
      var _0x515c3d = "com.ss.android.ugc.aweme";
      var _0x3b5636 = context.getPackageManager().getInstalledPackages(0).toArray();
      for (var _0x541ef0 in _0x3b5636) {
        if (_0x3b5636[_0x541ef0].packageName.toString() === _0x515c3d) {
          return _0x3b5636[_0x541ef0].versionName;
        }
      }
    };
    this.waitApp = function () {
      auto.waitFor();
      depth(this.ids.p1_1.depth).id(this.ids.p1_1.id).waitFor();
    };
    this.waitForThisView = function () {
      var _0x4a8c71 = "androidx.viewpager.widget.ViewPager";
      var _0x128227 = className(_0x4a8c71).findOne();
    };
    this.getThisView = function () {
      var _0x1ca7fc = null;
      var _0x55af0b = null;
      try {
        var _0x39588b = className("androidx.viewpager.widget.ViewPager").idContains(":id/viewpager").filter(function (_0x260f59) {
          return _0x260f59.bounds().width() > 0 && _0x260f59.bounds().height() > 0;
        });
        _0x1ca7fc = _0x39588b.findOne(20000);
        if (_0x1ca7fc == null) {
          return null;
        }
        for (var _0x11a63b = 0; _0x11a63b < _0x1ca7fc.childCount(); _0x11a63b++) {
          var _0x2310c8 = _0x1ca7fc.child(_0x11a63b);
          if (_0x2310c8.bounds().width() > 0 && _0x2310c8.bounds().height() > 0) {
            _0x55af0b = _0x1ca7fc.child(_0x11a63b);
            break;
          }
        }
        return _0x55af0b;
      } catch (_0x3cf669) {
        log("getThisView", _0x3cf669);
        return thisView;
      }
    };
    this.getViewType = function () {
      try {
        var _0x3e0c5b = _0x707f54.getThisView();
        if (_0x3e0c5b == null) {
          return "未知";
        }
        var _0x37a5cb = text("点击进入直播间").filter(function (_0x4c1938) {
          return _0x4c1938.bounds().width() > 0 && _0x4c1938.bounds().height() > 0;
        });
        var _0x370ee5 = _0x3e0c5b.findOne(_0x37a5cb);
        if (_0x370ee5 != null) {
          log("视频类型 : 直播");
          return "直播";
        }
        var _0x374498 = idContains(":id/desc").textEndsWith(" 广告").filter(function (_0x58fa43) {
          return _0x58fa43.bounds().width() > 0 && _0x58fa43.bounds().height() > 0;
        });
        var _0x4e759c = _0x3e0c5b.findOne(_0x374498);
        if (_0x4e759c != null) {
          log("视频类型 : 广告");
          return "广告";
        }
        var _0x3cd7d5 = text("回关").filter(function (_0xa289cd) {
          return _0xa289cd.bounds().width() > 0 && _0xa289cd.bounds().height() > 0;
        });
        var _0x4cdfdc = _0x3e0c5b.findOne(_0x3cd7d5);
        if (_0x4cdfdc != null) {
          log("视频类型 : 回关");
          return "回关";
        }
        log("视频类型 : 视频");
        return "视频";
      } catch (_0x1fae85) {
        log("getViewType", _0x1fae85);
        return "未知2";
      }
    };
    _0x707f54.isFollowUesr = function () {
      log("观看信息： 是否已关注");
      var _0xe106b6 = className("TextView").filter(function (_0x444486) {
        if (_0x444486.bounds().width() > 0 && _0x444486.bounds().height() > 0) {
          if (_0x444486.text() == "你的好友" || _0x444486.text() == "你的朋友" || _0x444486.text() == "你的关注") {
            log("用户类型: " + _0x444486.text());
            return true;
          }
        }
        return false;
      });
      var _0x1b10ad = _0xe106b6.findOnce();
      if (_0x1b10ad != null) {
        return true;
      }
      return false;
    };
    this.watchShipinInfo = function () {
      var _0xa1e095 = {
        name: "",
        desc: "",
        dianzanshu: -1,
        pinglunshu: -1
      };
      try {
        _0xa1e095.name = _0x707f54.getShipinUsername();
        _0xa1e095.desc = _0x707f54.getTitleDesc();
        _0xa1e095.dianzanshu = _0x707f54.getDianZanShu();
        _0xa1e095.pinglunshu = _0x707f54.getPinglunShu();
        return _0xa1e095;
      } catch (_0x5c892f) {
        log("watchShipinInfo.error", _0x5c892f);
        return _0xa1e095;
      }
    };
    this.getShipinUsername = function () {
      try {
        var _0x56d18f = _0x707f54.getThisView();
        var _0x3be708 = _0x56d18f.findOne(idContains(":id/title").className("android.widget.TextView"));
        if (_0x3be708 == null) {
          return "";
        }
        log("用户昵称: ", _0x3be708.text());
        return _0x3be708.text();
      } catch (_0x218346) {
        log("getShipinUsername", _0x218346);
        return "";
      }
    };
    this.titleContain = function (_0x2c1070) {
      var _0x19f9d9 = _0x707f54.getShipinUsername();
      for (var _0x40419c = 0; _0x40419c < _0x2c1070.length; _0x40419c++) {
        var _0x547787 = _0x2c1070[_0x40419c];
        if (_0x19f9d9.includes(_0x547787)) {
          log("标题中包含 : " + _0x547787);
          return true;
        }
      }
      return false;
    };
    this.getTitleDesc = function () {
      try {
        var _0x568331 = _0x707f54.getThisView();
        if (_0x568331 == null) {
          return "";
        }
        var _0x4c00c9 = _0x568331.findOne(idContains(":id/desc"));
        if (_0x4c00c9 == null) {
          return "";
        }
        log("视频文案: ", _0x4c00c9.text());
        return _0x4c00c9.text();
      } catch (_0x3a7874) {
        log("getTitleDesc", _0x3a7874);
        return "";
      }
    };
    this.descContain = function (_0x9ca6b9) {
      var _0x2ae669 = _0x707f54.getTitleDesc();
      for (var _0x2512b4 = 0; _0x2512b4 < _0x9ca6b9.length; _0x2512b4++) {
        var _0x4e4879 = _0x9ca6b9[_0x2512b4];
        if (_0x2ae669.includes(_0x4e4879)) {
          log("文案中包含 : " + _0x4e4879);
          return true;
        }
      }
      return false;
    };
    this.checkNum = function (_0x4e0f6a) {
      _0x4e0f6a = _0x4e0f6a + "";
      if (_0x4e0f6a.includes("万")) {
        _0x4e0f6a = _0x4e0f6a.replace("万", "");
        _0x4e0f6a = _0x4e0f6a * 10000;
      } else {
        _0x4e0f6a.includes("亿") && (_0x4e0f6a = _0x4e0f6a.replace("亿", ""), _0x4e0f6a = _0x4e0f6a * 100000000);
      }
      return _0x4e0f6a;
    };
    this.handlerStr = function _0x54fc36(_0x1382c1) {
      var _0x3741c7 = /(1[0-9]{2,10})|([0-9]{3,4})?[0-9]{7,8}|[\d\w]+\b@[a-zA-ZA-z0-9]+.[a-z]+/g;
      var _0x12f4e0 = _0x1382c1.replace(/\s|[(]|[)]|[（]|[）]|[-]*/g, "");
      var _0x2000b1 = _0x12f4e0.match(_0x3741c7);
      if (_0x2000b1 == null) {
        return null;
      }
      for (var _0x554550 = 0; _0x554550 < _0x2000b1.length; _0x554550++) {
        var _0x45d7e1 = _0x2000b1[_0x554550];
        if (_0x45d7e1.length == 11) {
          return _0x45d7e1;
        }
      }
      return null;
    };
    this.watchUsercenterTel = function () {
      var _0x5b94b1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var _0x5239f5 = textStartsWith("IP：").findOnce();
      if (_0x5239f5 != null) {
        var _0x41148b = _0x5239f5.parent().parent().childCount();
        log(_0x41148b);
        if (_0x41148b >= 2) {
          return true;
        }
      }
      return false;
      log("获取电话：");
      sleep(1000);
      try {} catch (_0x114df7) {
        log("watchUsercenterTel", _0x114df7);
        return null;
      }
    };
    this.getUsercenter_data = function () {
      var _0x3fcd1b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "获赞";
      try {
        var _0x1e00a4 = -1;
        var _0x3f6767 = text(_0x3fcd1b).className("android.widget.TextView").filter(function (_0x2f70e9) {
          return _0x2f70e9.bounds().width() > 0 && _0x2f70e9.bounds().height() > 0;
        });
        var _0x2fb4e4 = _0x3f6767.findOnce();
        if (_0x2fb4e4 != null) {
          var _0x39705d = className("android.widget.TextView").filter(function (_0x381446) {
            if (_0x381446.text() != _0x3fcd1b) {
              return true;
            }
          });
          var _0x2070e0 = _0x2fb4e4.parent().findOne(_0x39705d);
          if (_0x2070e0 != null) {
            _0x1e00a4 = parseInt(_0x707f54.checkNum(_0x2070e0.text()));
            if (_0x1e00a4 !== _0x1e00a4) {
              _0x1e00a4 = 0;
            }
          }
        }
        log(_0x3fcd1b, ":", _0x1e00a4);
        return _0x1e00a4;
      } catch (_0x36dcd1) {
        log("getUsercenter_data.error", _0x3fcd1b);
        return -1;
      }
    };
    this.getUsercenter_zuopin = function () {
      var _0x2c254f = -1;
      var _0xb67d2f = textStartsWith("作品").id("android:id/text1").findOne(3000);
      _0xb67d2f != null && (str = _0xb67d2f.text(), str = str.replace("作品", ""), str = str.replace(" ", ""), str == "" ? _0x2c254f = 0 : _0x2c254f = parseInt(_0x707f54.checkNum(str)));
      log("作品 :", _0x2c254f);
      return _0x2c254f;
    };
    this.watchUercenterInfo = function () {
      var _0x52ad26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      sleep(2000);
      var _0xefe046 = {
        totalzan: _0x707f54.getUsercenter_data("获赞"),
        totalguanzhu: _0x707f54.getUsercenter_data("关注"),
        fensi: _0x707f54.getUsercenter_data("粉丝"),
        id: "",
        name: "",
        remark: "",
        zuopin: _0x707f54.getUsercenter_zuopin(),
        xihuan: 0
      };
      try {
        if (_0x52ad26 && _0x707f54.JumpUsercenterToMore()) {
          var _0x181835 = _0x707f54.watchMoreInfo();
          _0xefe046.id = _0x181835.id;
          _0xefe046.name = _0x181835.name;
          back();
        }
        sleep(1000);
        return _0xefe046;
      } catch (_0x159b23) {
        log("watchUercenterInfo", _0x159b23);
        return _0xefe046;
      }
    };
    _0x707f54.watchUserCenterZuopinShu = function () {
      var _0x364054 = 0;
      var _0x3de080 = textStartsWith("作品").id("android:id/text1").findOne(3000);
      if (_0x3de080 != null) {
        var _0x38b858 = _0x3de080.text().replace("作品", "");
        _0x38b858 == "" ? _0x38b858 = 0 : 1;
        _0x364054 = parseInt(_0x38b858);
      }
      log("作品数：" + _0x364054);
      return _0x364054;
    };
    this.watchUserSex = function () {
      toastLog("观看信息:用户性别");
      sleep(2000);
      var _0x111e4b = -1;
      try {
        var _0x337311 = "/sdcard/1/man.jpg";
        var _0x944473 = _0x47780d.host + "/static/imgs/man.jpg";
        var _0x5549a2 = "/sdcard/1/women.jpg";
        var _0x50b28a = _0x47780d.host + "/static/imgs/women.jpg";
        var _0x125e68 = threads.disposable();
        threads.start(function () {
          if (!files.exists(_0x337311)) {
            var _0x176959 = http.get(_0x944473);
            _0x176959.statusCode == 200 && (files.create("/sdcard/1/"), files.writeBytes(_0x337311, _0x176959.body.bytes()));
          }
          if (!files.exists(_0x5549a2)) {
            var _0x176959 = http.get(_0x50b28a);
            _0x176959.statusCode == 200 && (files.create("/sdcard/1/"), files.writeBytes(_0x5549a2, _0x176959.body.bytes()));
          }
          var _0x4300bf = {
            threshold: 0.7
          };
          sleep(500);
          var _0x1171c1 = captureScreen();
          var _0xff7c16 = images.read(_0x337311);
          var _0x233190 = findImage(_0x1171c1, _0xff7c16, _0x4300bf);
          _0x233190 && (_0x111e4b = 1, log("男"));
          var _0x2666d5 = images.read(_0x5549a2);
          var _0x2b15c8 = findImage(_0x1171c1, _0x2666d5, _0x4300bf);
          _0x2b15c8 && (_0x111e4b = 2, log("女"));
          _0xff7c16.recycle();
          _0x2666d5.recycle();
          _0x125e68.setAndNotify(_0x111e4b);
        });
        var _0x507377 = parseInt(_0x125e68.blockedGet());
        return _0x507377;
      } catch (_0x598b0f) {
        log("httpload", _0x598b0f);
        return _0x111e4b;
      }
    };
    this.watchMoreInfo = function () {
      try {
        toastLog("获取信息");
        var _0x432452 = textStartsWith("抖音号: ").findOne(3000);
        var _0x63d3eb = {};
        _0x432452 != null && (_0x63d3eb.id = _0x432452.text().replace("抖音号: ", ""), _0x63d3eb.name = _0x432452.parent().parent().child(0).child(0).text(), log("id: " + _0x63d3eb.id), log("昵称: " + _0x63d3eb.name));
        sleep(2000);
        return _0x63d3eb;
      } catch (_0x274c7b) {
        log("getName", _0x274c7b);
        return false;
      }
    };
    _0x707f54.clickUsercenterGuanzhu = function () {
      toastLog("用户中心:点击关注");
      sleep(1000);
      try {
        var _0x105a1e = className("android.widget.TextView").filter(function (_0x4aff63) {
          if (_0x4aff63.bounds().width() > 0 && _0x4aff63.bounds().height() > 0) {
            return true;
          }
          return false;
        });
        var _0x5e173f = _0x105a1e.text("关注").clickable(true).findOne(1000);
        _0x5e173f != null ? _0x5e173f.click() : toastLog("已经关注");
        sleep(1000);
        _0x51a1c3.addRunData("follow");
        _0x51a1c3.addRunData("visit");
      } catch (_0x4f5fcb) {
        log("clickUsercenterGuanzhu", _0x4f5fcb);
        return false;
      }
    };
    this.clickGuanzhu = function () {
      toastLog("观看视频: 点击关注");
      sleep(1000);
      try {
        var _0x4cba26 = null;
        var _0x408473 = device.width * 0.8;
        var _0x38661b = device.height * 0.2;
        var _0x176c46 = device.width;
        var _0x2754ae = device.height * 0.8;
        var _0x51fd34 = className("android.widget.ImageView").boundsInside(_0x408473, _0x38661b, _0x176c46, _0x2754ae).filter(function (_0x7157d) {
          var _0x23b301 = _0x7157d.bounds().width() > 0 && _0x7157d.bounds().width() <= 84 && _0x7157d.bounds().height() > 0 && _0x7157d.bounds().height() <= 84;
          return _0x23b301;
        });
        var _0x4cba26 = _0x51fd34.findOnce();
        _0x4cba26 != null && _0x4cba26.parent().click();
        sleep(1000);
      } catch (_0x1f19c8) {
        log("clickGuanzhu", _0x1f19c8);
        return false;
      }
      _0x51a1c3.addRunData("follow");
    };
    _0x707f54.getDianZanShu = function () {
      try {
        var _0x728bbe = 0;
        var _0x4a94e3 = device.width * 0.8;
        var _0x23ac7e = device.height * 0.15;
        var _0x595963 = device.width - 10;
        var _0x851063 = parseInt(device.height * 0.65);
        var _0x44ab2d = className("TextView").boundsInside(_0x4a94e3, _0x23ac7e, _0x595963, _0x851063).filter(function (_0xda5cce) {
          return _0xda5cce.bounds().width() > 0 && _0xda5cce.bounds().height() > 0 && _0xda5cce.text() != "";
        });
        var _0x4b9879 = _0x44ab2d.clickable(true).findOnce();
        if (_0x4b9879 != null) {
          var _0x728bbe = _0x4b9879.text();
          if (_0x728bbe == "赞") {
            _0x728bbe = "0";
          }
          _0x728bbe = parseInt(_0x707f54.checkNum(_0x728bbe));
        }
        log("视频点赞: ", _0x728bbe);
        return _0x728bbe;
      } catch (_0x4cdd0f) {
        log("getDianZanShu", _0x4cdd0f);
        return -1;
      }
    };
    this.clickDianzan = function () {
      log("观看视频: 点击小星星");
      var _0x539278 = device.width * 0.8;
      var _0x2c7690 = device.height * 0.15;
      var _0x5e0fe0 = device.width;
      var _0x4239aa = parseInt(device.height * 0.8);
      var _0xe6ec2b = className("android.widget.LinearLayout").descContains("点赞，喜欢").boundsInside(_0x539278, _0x2c7690, _0x5e0fe0, _0x4239aa).filter(function (_0x107725) {
        return _0x107725.bounds().width() > 0 && _0x107725.bounds().height() > 0;
      });
      var _0x1ce6a0 = _0xe6ec2b.clickable(true).findOnce();
      _0x1ce6a0 != null && (_0x1ce6a0.click(), sleep(1000));
      _0x51a1c3.addRunData("like");
    };
    _0x707f54.getPinglunObj = function () {
      try {
        var _0x2d651c = null;
        var _0x3485d6 = device.width * 0.8;
        var _0x64dd74 = device.height * 0.15;
        var _0x9940d4 = device.width;
        var _0x11f5a3 = device.height * 0.8;
        var _0x4ade5b = className("TextView").boundsInside(_0x3485d6, _0x64dd74, _0x9940d4, _0x11f5a3).filter(function (_0xad55dd) {
          if (_0xad55dd.bounds().width() <= 0 || _0xad55dd.bounds().height() <= 0 || _0xad55dd.text() == "") {
            return false;
          }
          return true;
        });
        var _0x95c36 = _0x4ade5b.find();
        if (_0x95c36.length == 0) {
          return null;
        }
        var _0x2d651c = _0x95c36[1];
        return _0x2d651c;
      } catch (_0xb0069) {
        log("getPinglunObj", _0xb0069);
        return null;
      }
    };
    _0x707f54.getPinglunShu = function () {
      var _0x253228 = 0;
      try {
        var _0x47b354 = device.width * 0.8;
        var _0x319b65 = device.height * 0.15;
        var _0x13fdec = device.width;
        var _0x47838c = device.height * 0.8;
        var _0x8d5149 = idContains(":id/comment_container").boundsInside(_0x47b354, _0x319b65, _0x13fdec, _0x47838c).filter(function (_0x27e4f9) {
          return _0x27e4f9.bounds().width() > 0 && _0x27e4f9.bounds().height() > 0;
        });
        var _0x203f41 = _0x8d5149.findOne(2000);
        if (_0x203f41 != null) {
          var _0x3186ee = _0x203f41.child(0);
          var _0x673a82 = _0x3186ee.getContentDescription();
          _0x673a82 = _0x673a82.replace("评论", "");
          _0x673a82 = _0x673a82.replace("，按钮", "");
          if (_0x673a82 == "写评论" || _0x673a82 == "抢首评") {
            _0x673a82 = "0";
          }
          _0x253228 = parseInt(_0x707f54.checkNum(_0x673a82));
        }
        log("视频评论: ", _0x253228);
        return _0x253228;
      } catch (_0x401afb) {
        log("getPinglunShu", _0x401afb);
        return -1;
      }
    };
    this.clickPinlunqu = function () {
      log("打开页面 : 评论区");
      sleep(1000);
      try {
        var _0x1eeeec = device.width * 0.8;
        var _0x121a5d = device.height * 0.15;
        var _0x1a7641 = device.width;
        var _0x25f062 = device.height * 0.8;
        var _0x253b1a = idContains(":id/comment_container").boundsInside(_0x1eeeec, _0x121a5d, _0x1a7641, _0x25f062).filter(function (_0x476501) {
          return _0x476501.bounds().width() > 0 && _0x476501.bounds().height() > 0;
        });
        var _0x48ab49 = _0x253b1a.findOne(2000);
        if (_0x48ab49 == null) {
          log("打开页面 : 评论区 失败");
          return;
        }
        _0x48ab49.click();
        sleep(2000);
        var _0x4ab8a5 = desc("返回，按钮").findOnce();
        _0x4ab8a5 != null && (_0x4ab8a5.click(), sleep(2000));
        return true;
      } catch (_0x26bb31) {
        log("clickPinlunqu", _0x26bb31);
        return false;
      }
    };
    this.closePinlunquOnce = function () {
      log("界面检验:  2");
      var _0x34d0e6 = className("android.view.View").clickable(true).desc("返回，按钮").findOnce();
      _0x34d0e6 != null && (log("关闭输入法"), _0x34d0e6.click(), sleep(2000));
      log("界面检验:  1");
      var _0x432399 = className("android.widget.ImageView").filter(function (_0x353125) {
        return _0x353125.bounds().width() > 0 && _0x353125.bounds().height() > 0 && _0x353125.bounds().centerY() < device.height * 0.6;
      });
      var _0x880ef5 = _0x432399.desc("关闭").clickable(true).findOnce();
      _0x880ef5 != null && (log("关闭页面 : 关闭"), _0x880ef5.click(), sleep(2000));
    };
    this.clickShoucang = function () {
      log("观看视频: 点击收藏");
      var _0x138998 = device.width * 0.8;
      var _0x3ff3a9 = device.height * 0.15;
      var _0x21211c = device.width;
      var _0x2a2b0c = parseInt(device.height * 0.8);
      var _0x398354 = className("android.widget.LinearLayout").descContains("未选中，收藏").boundsInside(_0x138998, _0x3ff3a9, _0x21211c, _0x2a2b0c).filter(function (_0x3c67e5) {
        return _0x3c67e5.bounds().width() > 0 && _0x3c67e5.bounds().height() > 0;
      });
      var _0x32b849 = _0x398354.clickable(true).findOnce();
      _0x32b849 != null && (_0x32b849.click(), sleep(1000));
    };
    this.play_media = function (_0x4803f1) {
      var _0x319424 = new android.media.MediaPlayer();
      _0x319424.setDataSource(context, android.media.RingtoneManager.getDefaultUri(android.media.RingtoneManager.TYPE_RINGTONE));
      _0x319424.prepare();
      _0x319424.start();
      threads.start(function () {
        sleep(_0x4803f1 * 1000);
        if (_0x319424.isPlaying()) {
          _0x319424.stop();
        }
      });
      return _0x319424;
    };
    this.getZuopinPubdate = function () {
      var _0x297ff1 = filter(function (_0x385381) {
        return _0x385381.bounds().width() > 0 && _0x385381.bounds().height() > 0;
      });
      var _0x37dac2 = _0x297ff1.descStartsWith("发布时间：").className("android.widget.TextView").findOnce();
      if (_0x37dac2) {
        var _0xc497c0 = _0x37dac2.desc().toString();
        var _0xd601d4 = _0xc497c0.match(/\d{4}-\d{2}-\d{2}/);
        if (_0xd601d4) {
          log("发布日期：" + _0xd601d4[0]);
          return _0xd601d4[0];
        }
      }
      return null;
    };
    _0x707f54.getPositionDistance = function () {
      var _0x43845e = device.width * 0;
      var _0x4bc575 = device.height * 0.5;
      var _0xa26bf8 = device.width * 0.5;
      var _0x522e93 = parseInt(device.height);
      var _0x4b0298 = className("android.widget.TextView").textContains("km").boundsInside(_0x43845e, _0x4bc575, _0xa26bf8, _0x522e93).filter(function (_0x4593f6) {
        return _0x4593f6.bounds().width() > 0 && _0x4593f6.bounds().height() > 0;
      });
      var _0x51df07 = _0x4b0298.findOnce();
      if (_0x51df07 != null) {
        var _0x56cd97 = _0x51df07.text();
        _0x56cd97 = _0x56cd97.replace("km", "");
        _0x56cd97 = _0x56cd97.replace(">", "");
        _0x56cd97 = parseFloat(_0x56cd97);
        return _0x56cd97;
      }
      return -1;
    };
    this.isPinglunquPhone = function () {
      var _0x3a70f3 = className("android.widget.TextView").filter(function (_0x530743) {
        if (_0x530743.bounds().width() > 0 && _0x530743.bounds().height() > 0) {
          if (_0x530743.text() == "官方电话 详情") {
            return true;
          }
          if (_0x530743.text() == "联系电话 详情") {
            return true;
          }
          if (_0x530743.text() == "联系我们 详情") {
            return true;
          }
        }
        return false;
      });
      var _0x144df2 = _0x3a70f3.findOnce();
      if (_0x144df2 != null) {
        return true;
      }
      return false;
    };
    _0x707f54.jumpToMainpage = function () {
      app.startActivity({
        data: "snssdk1128://feed?type=2"
      });
    };
    _0x707f54.jumpToUsercenter = function () {
      app.startActivity({
        action: "android.intent.action.VIEW",
        data: "snssdk1128://user/profile/72673737181?refer=web&gd_label=click_wap_download_follow&type=need_follow&needlaunchlog=1",
        packageName: "com.ss.android.ugc.aweme"
      });
    };
    this.jumpUsercenterToPhone = function () {
      var _0x4ea1cc = textContains("[label] 查看门店").filter(function (_0x265820) {
        return _0x265820.bounds().width() > 0 && _0x265820.bounds().height() > 0;
      });
      var _0x4e078f = _0x4ea1cc.findOnce();
      if (_0x4e078f == null) {
        return false;
      }
      _0x4e078f.parent().click();
      sleep(3000);
      uc2 = text("电话").clickable(true).filter(function (_0x4afba5) {
        return _0x4afba5.bounds().width() > 0 && _0x4afba5.bounds().height() > 0;
      });
      var _0x5eadda = uc2.findOnce();
      if (_0x5eadda == null) {
        back();
        sleep(2000);
        return false;
      }
      click(_0x5eadda.bounds().centerX(), _0x5eadda.bounds().centerY());
      sleep(2000);
      return true;
    };
    this.isHavePosionPhone = function () {
      var _0x379bb8 = id("com.ss.android.ugc.aweme:id/okp").filter(function (_0x46fe64) {
        return _0x46fe64.bounds().width() > 0 && _0x46fe64.bounds().height() > 0;
      });
      var _0x59239a = _0x379bb8.findOnce();
      if (_0x59239a == null) {
        return false;
      }
      _0x59239a.parent().parent().parent().click();
      sleep(1000);
      uc2 = text("电话").clickable(true).filter(function (_0x5c7791) {
        return _0x5c7791.bounds().width() > 0 && _0x5c7791.bounds().height() > 0;
      });
      var _0x55be9d = uc2.findOne(2000);
      return _0x55be9d == null ? (log("未发现电话"), back(), sleep(1000), false) : (log("发现电话"), back(), sleep(1000), true);
    };
    this.jumpShipinToPostionPhone = function () {
      var _0x1e7c25 = id("com.ss.android.ugc.aweme:id/okp").filter(function (_0x124074) {
        return _0x124074.bounds().width() > 0 && _0x124074.bounds().height() > 0;
      });
      var _0x484be2 = _0x1e7c25.findOnce();
      if (_0x484be2 == null) {
        return false;
      }
      _0x484be2.parent().parent().parent().click();
      sleep(2000);
      uc2 = text("电话").clickable(true).filter(function (_0x3fd0c9) {
        return _0x3fd0c9.bounds().width() > 0 && _0x3fd0c9.bounds().height() > 0;
      });
      var _0x4e41d8 = uc2.findOnce();
      if (_0x4e41d8 == null) {
        back();
        sleep(2000);
        return false;
      }
      click(_0x4e41d8.bounds().centerX(), _0x4e41d8.bounds().centerY());
      sleep(2000);
      return true;
    };
    this.backShipinToPostionPhone = function () {
      click("取消");
      sleep(2000);
      back();
      sleep(2000);
    };
    this.isUsercenterPhone = function () {
      var _0x1ee16e = className("android.widget.TextView").filter(function (_0xf3c8e5) {
        if (_0xf3c8e5.text() == "[label] 查看门店") {
          return true;
        }
        if (_0xf3c8e5.text() == "[label] 官方电话") {
          return true;
        }
        if (_0xf3c8e5.text() == "[label] 联系方式") {
          return true;
        }
        if (_0xf3c8e5.text() == "[label] 联系电话") {
          return true;
        }
        if (_0xf3c8e5.text() == "[label] 联系我们") {
          return true;
        }
        return false;
      });
      var _0x559c05 = _0x1ee16e.findOnce();
      if (_0x559c05 == null) {
        return false;
      }
      return true;
    };
    this.textSend = function (_0x199477) {
      toastLog("开始留言");
      if (_0x199477 == "") {
        return false;
      }
      sleep(1000);
      try {
        var _0x33e539 = text("联系客服").findOne(500);
        var _0x5df058 = text("抖音店铺").findOne(500);
        if (_0x33e539 != null || _0x5df058 != null) {
          var _0x42b109 = _0x33e539.parent().parent().parent().child(0);
          _0x42b109.click();
          sleep(1000);
        }
        if (!setText(_0x199477)) {
          input(_0x199477);
        }
        sleep(2000);
        var _0x115a5d = desc("发送").findOne(3000);
        if (_0x115a5d != null) {
          _0x115a5d.click();
        } else {
          var _0x1ada07 = desc("返回，按钮").findOnce();
          _0x1ada07 != null && (_0x1ada07.click(), sleep(2000));
        }
        sleep(2000);
        return true;
      } catch (_0x426bc9) {
        log("textSend", _0x426bc9);
        return false;
      }
    };
    _0x707f54.pinglun = function (_0x4602bf) {
      var _0xb73a35 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      toastLog("开始评论");
      sleep(1000);
      try {
        if (_0x4602bf != "") {
          var _0x10a6ee = 0;
          var _0x2fad14 = device.height * 0.7;
          var _0x630478 = device.width;
          var _0x4c1c27 = device.height * 2;
          var _0x559f27 = boundsInside(_0x10a6ee, _0x2fad14, _0x630478, _0x4c1c27).filter(function (_0x1fadf5) {
            return _0x1fadf5.bounds().width() > 0 && _0x1fadf5.bounds().height() > 0;
          });
          var _0xd24f03 = _0x559f27.className("android.widget.EditText").clickable(true).findOne(3000);
          _0xd24f03 && (_0xd24f03.click(), sleep(2000), _0x707f54.actionPinglunSend(_0x4602bf, _0xb73a35));
        }
      } catch (_0x5d1fcf) {
        log("pinglun", _0x5d1fcf);
        return false;
      }
    };
    this.pinglunHuifuDianzan = function (_0x2f2aff) {
      toastLog("评论点赞");
      sleep(2000);
      _0x2f2aff == undefined && (_0x2f2aff = 1);
      try {
        var _0x32f08c = desc("表情").findOne(3000);
        var _0x37bfb9 = _0x32f08c.parent().parent().parent().parent();
        var _0x494a59 = _0x37bfb9.parent().findOne(className("androidx.recyclerview.widget.RecyclerView"));
        if (_0x494a59 == null) {
          toastLog("评论区点赞失败");
          sleep(2000);
          return false;
        }
        var _0x3e28ba = _0x2f2aff;
        for (var _0x528d50 = 0; _0x528d50 < _0x494a59.childCount(); _0x528d50++) {
          var _0x3de37b = _0x494a59.child(_0x528d50);
          if (_0x3de37b.getContentDescription() != null) {
            toastLog("评论点赞:" + _0x3e28ba);
            var _0x1974fe = _0x3de37b.findOne(clickable(true).className("android.view.View"));
            _0x1974fe.click();
            sleep(1000);
            _0x3e28ba--;
          }
          if (_0x3e28ba == 0) {
            break;
          }
        }
      } catch (_0x53892d) {
        toastLog("评论区点赞失败");
        sleep(2000);
        log("pinglunHuifuDianzan", _0x53892d);
        return false;
      }
    };
    this.pinglunHuifu = function (_0x1ffcdb, _0x10d99b) {
      try {
        toastLog("评论操作:楼层回复");
        var _0x53a776 = desc("表情").findOne(3000);
        var _0x1f21f0 = _0x53a776.parent().parent().parent().parent();
        var _0x8f22c4 = _0x1f21f0.findOne(className("androidx.recyclerview.widget.RecyclerView"));
        if (_0x8f22c4 == null) {
          return false;
        }
        var _0x57b156 = _0x1ffcdb;
        for (var _0x47c489 = 0; _0x47c489 < _0x8f22c4.childCount(); _0x47c489++) {
          var _0xc23807 = _0x8f22c4.child(_0x47c489);
          if (_0xc23807.getContentDescription() != null) {
            var _0x1f21f0 = _0xc23807.findOne(text("回复"));
            _0x1f21f0.click();
            sleep(2000);
            _0x707f54.actionPinglunSend(_0x10d99b);
            sleep(2000);
            _0x57b156--;
          }
          if (_0x57b156 == 0) {
            break;
          }
        }
      } catch (_0x104fa6) {
        log("pinglunHuifu", _0x104fa6);
        return false;
      }
    };
    _0x707f54.testZhongzihao = function (_0x360620) {
      var _0x4024d8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _0x4cbc22 = _0x18091f.msg10007({
        start: _0x360620,
        count: _0x4024d8
      });
      var _0x4fbf35 = _0x4cbc22.data;
      for (var _0x19b73e = 0; _0x19b73e < _0x4fbf35.length; _0x19b73e++) {
        var _0x3f073d = _0x4fbf35[_0x19b73e];
        var _0x485ca5 = _0x3f073d.dy_id;
        log(_0x19b73e, _0x485ca5);
        var _0x5775ae = _0x707f54.jumpMainToFensi("testZhongzihao", _0x485ca5);
        for (var _0x8cdb3f = 0; _0x5775ae && _0x8cdb3f < 5; _0x8cdb3f++) {
          back();
          sleep(1000);
        }
        !_0x5775ae && log("-----------------------------", _0x485ca5, "----------------------------");
      }
    };
    this.jumpMainToFensi = function (_0x12cd53) {
      var _0x3d9fa9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      log("搜索:", "开始");
      sleep(1000);
      var _0x498bee = device.width * 0.5;
      var _0x7bc13b = device.height * 0;
      var _0x563e2f = device.width;
      var _0x4c651f = device.height * 0.5;
      var _0x6e8872 = boundsInside(_0x498bee, _0x7bc13b, _0x563e2f, _0x4c651f).filter(function (_0x2dfe57) {
        return _0x2dfe57.bounds().width() > 0 && _0x2dfe57.bounds().height() > 0;
      });
      var _0x3ff0dc = _0x6e8872.className("android.widget.Button").desc("搜索").findOnce();
      if (_0x3ff0dc == null) {
        log("搜索:", "返回1");
        back();
        sleep(2500);
        return false;
      }
      log("搜索:", "进入搜索页");
      var _0x3d7b8b = _0x3ff0dc.parent().parent().parent().click();
      sleep(2000);
      if (!_0x3d7b8b) {
        var _0x22f177 = _0x3ff0dc.parent().parent().click();
        sleep(2000);
        !_0x22f177 && (_0x3ff0dc.click(), sleep(2000));
      }
      var _0x5a9174 = className("android.widget.EditText").findOnce();
      if (_0x5a9174 == null) {
        log("搜索:", "返回2");
        back();
        sleep(2500);
        return false;
      }
      if (_0x12cd53 == "J2.zidong") {
        log("搜索:", "1");
        var _0x368eb5 = _0x18091f.msg10005();
        sleep(1000);
        _0x3d9fa9 = _0x368eb5.data;
        log("搜索:", _0x3d9fa9);
      }
      _0x5a9174.setText(_0x3d9fa9);
      sleep(2000);
      var _0x360936 = desc("搜索").findOne(1000);
      if (_0x360936 == null) {
        log("搜索:", "未发现搜索按钮");
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      click(_0x360936.bounds().centerX(), _0x360936.bounds().centerY());
      sleep(3000);
      log("搜索:", "进入用户中心");
      var _0x498bee = device.width * 0.1;
      var _0x7bc13b = device.height * 0.1;
      var _0x563e2f = device.width;
      var _0x4c651f = device.height * 0.95;
      var _0x58a360 = boundsInside(_0x498bee, _0x7bc13b, _0x563e2f, _0x4c651f).filter(function (_0x1d5509) {
        return _0x1d5509.bounds().width() > 0 && _0x1d5509.bounds().height() > 0;
      });
      var _0x7b2088 = _0x58a360.textContains("抖音号：" + _0x3d9fa9).findOne(2000);
      if (_0x7b2088 == null) {
        _0x7b2088 = descContains("， 粉丝:").textEndsWith("，按钮").findOne(5000);
        if (_0x7b2088 == null) {
          log("搜索:", "未发现此用户");
          back();
          sleep(3000);
          back();
          sleep(3000);
          back();
          sleep(3000);
          return false;
        }
      }
      click(_0x7b2088.bounds().centerX(), _0x7b2088.bounds().centerY());
      sleep(3000);
      log("搜索:", "进入粉丝列表");
      var _0x27ba6f = _0x707f54.isPrivateOrBan();
      var _0x4b11d1 = _0x707f54.getUsercenter_data("粉丝");
      if (!_0x27ba6f || _0x4b11d1 >= 0 && _0x4b11d1 <= 500 || _0x4b11d1 >= 10000) {
        !_0x27ba6f && log("搜索:", "私密账号");
        _0x4b11d1 <= 500 && log("搜索:", "粉丝小于500");
        _0x4b11d1 >= 10000 && log("搜索:", "粉丝大于1万");
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x4b11d1 >= 8000;
      var _0x4ceea6 = text("粉丝").findOne(1000);
      if (_0x4ceea6 == null) {
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x4ceea6.parent().click();
      sleep(3000);
      var _0x5b7f41 = _0x707f54.getUsercenter_data("粉丝");
      if (_0x5b7f41 != -1) {
        log("搜索", "进入粉丝列表失败");
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x18091f.addSeedRunCout(_0x3d9fa9);
      return true;
    };
    this.jumpMainToSearchUserList = function () {
      var _0x3eea7f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      log("搜索:", "开始");
      sleep(1000);
      var _0x4d457c = device.width * 0.5;
      var _0x53ea63 = device.height * 0;
      var _0x34d7d8 = device.width;
      var _0x2f1fec = device.height * 0.5;
      var _0x3f230f = boundsInside(_0x4d457c, _0x53ea63, _0x34d7d8, _0x2f1fec).filter(function (_0x25cef7) {
        return _0x25cef7.bounds().width() > 0 && _0x25cef7.bounds().height() > 0;
      });
      var _0x1dfdd6 = _0x3f230f.className("android.widget.Button").desc("搜索").findOnce();
      if (_0x1dfdd6 == null) {
        log("搜索:", "返回1");
        back();
        sleep(2500);
        return false;
      }
      log("搜索:", "进入搜索页");
      var _0x5571d7 = _0x1dfdd6.parent().parent().parent().click();
      sleep(2000);
      if (!_0x5571d7) {
        var _0x46e9f6 = _0x1dfdd6.parent().parent().click();
        sleep(2000);
        !_0x46e9f6 && (_0x1dfdd6.click(), sleep(2000));
      }
      var _0x545265 = className("android.widget.EditText").findOnce();
      if (_0x545265 == null) {
        log("搜索:", "返回2");
        back();
        sleep(2500);
        return false;
      }
      log("搜索:", _0x3eea7f);
      _0x545265.setText(_0x3eea7f);
      sleep(2000);
      var _0x37f595 = desc("搜索").findOne(1000);
      if (_0x37f595 == null) {
        log("搜索:", "未发现搜索按钮");
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      click(_0x37f595.bounds().centerX(), _0x37f595.bounds().centerY());
      sleep(3000);
      var _0x3bc4a1 = id("android:id/text1").text("用户").className("android.widget.Button").findOnce();
      if (_0x3bc4a1 == null) {
        log("搜索:", "未发现用户按钮");
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x3bc4a1.parent().parent().click();
      sleep(3000);
      _0x3bc4a1 = id("android:id/text1").text("用户").className("android.widget.Button").findOnce();
      if (_0x3bc4a1 && !_0x3bc4a1.selected()) {
        log("搜索", "进入用户列表失败");
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      return true;
    };
    this.clickSearchinput = function (_0x108a2f) {
      toastLog("开始搜索");
      var _0x4a0480 = className("android.widget.Button").desc("搜索").findOne(10000);
      if (_0x4a0480 == null) {
        return false;
      }
      _0x4a0480.parent().parent().click();
      sleep(2000);
      className("android.widget.EditText").findOne().setText(_0x108a2f);
      sleep(2000);
      var _0x4a0480 = desc("搜索").findOne();
      click(_0x4a0480.bounds().centerX(), _0x4a0480.bounds().centerY());
      return true;
    };
    this.zhibopinglun = function (_0x32b92b) {
      log("直播弹幕: ");
      sleep(1000);
      var _0x29b200 = _0x707f54.getThisView();
      if (_0x29b200 == null) {
        return false;
      }
      var _0x3e0484 = _0x29b200.findOne(text("说点什么..."));
      if (_0x3e0484 == null) {
        return false;
      }
      _0x3e0484.click();
      sleep(1000);
      log(_0x32b92b);
      _0x707f54.textSend(_0x32b92b);
      sleep(1000);
    };
    this.JumpShipinToUsercenter = function () {
      toastLog("进入个人中心");
      try {
        var _0x4762f5 = _0x707f54.getThisView();
        var _0x3e5da3 = _0x4762f5.findOne(idContains(":id/title").className("android.widget.TextView"));
        if (_0x3e5da3 == null) {
          toastLog("进入个人中心失败");
          return false;
        }
        _0x3e5da3.click();
        sleep(3000);
        var _0x377db6 = textStartsWith("作品 ").findOnce();
        if (_0x377db6 == null) {
          return false;
        }
        _0x51a1c3.addRunData("visit");
        return true;
      } catch (_0x7fe350) {
        log("JumpShipinToUsercenter", _0x7fe350);
        return false;
      }
    };
    this.jumpUsercenterTouxiang = function () {
      try {
        log("进入头像点赞");
        sleep(1000);
        var _0x2be06a = desc("用户头像").findOnce();
        if (_0x2be06a == null) {
          return false;
        }
        _0x2be06a.click();
        sleep(3000);
        var _0xbd634a = text("点赞").findOnce();
        _0xbd634a != null && (log("头像点赞"), _0xbd634a.parent().parent().click(), sleep(2000));
        back();
        sleep(2000);
      } catch (_0x3b0e97) {
        log("jumpUsercenterTouxiang", _0x3b0e97);
        return false;
      }
    };
    this.JumpUsercenterToMore = function () {
      try {
        toastLog("进入更多");
        sleep(2000);
        var _0x5163a2 = desc("更多").findOne(3000);
        if (_0x5163a2 == null) {
          return false;
        }
        _0x5163a2.click();
        sleep(2000);
        return true;
      } catch (_0x269edf) {
        log("JumpUsercenterToMore", _0x269edf);
        return false;
      }
    };
    this.checkUserCenterZuopinNum = function () {
      try {
        var _0x22c375 = className("android.widget.HorizontalScrollView").find();
        if (_0x22c375.length > 0) {
          var _0x26dd28 = _0x22c375[_0x22c375.length - 1];
          _0x26dd28.child(0).child(0).selected() == false && (_0x26dd28.child(0).child(0).click(), sleep(2000));
        }
      } catch (_0x3ba940) {
        log("作品", _0x3ba940);
      }
    };
    this.JumpUsercenterToFirstzuopin = function () {
      var _0x19efdf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _0x5890cf;
      _0x707f54.checkUserCenterZuopinNum();
      _0x5890cf = _0x19efdf ? [false, false] : false;
      try {
        var _0x1dae30 = filter(function (_0x3c38d1) {
          var _0x36228f = _0x3c38d1.children();
          return _0x3c38d1.bounds().width() > 0 && _0x3c38d1.bounds().height() > 0 && _0x36228f.findOne(text("置顶")) == null && _0x36228f.find(className("android.widget.ImageView")).length > 1;
        });
        var _0x107a11 = _0x1dae30.idContains(":id/container").findOnce();
        if (_0x107a11 == null) {
          var _0x10d251 = filter(function (_0x15520) {
            return _0x15520.bounds().width() > 0 && _0x15520.bounds().height() > 0 && _0x15520.children().findOne(text("置顶")) == null;
          });
          _0x107a11 = _0x10d251.idContains(":id/container").findOnce();
          if (_0x107a11 == null) {
            return _0x5890cf;
          } else {
            log("视频作品");
            var _0x27920f = _0x107a11.findOne(clickable(true));
            if (_0x27920f != null) {
              _0x27920f.click();
              log("跳转页面：作品");
              sleep(3000);
              _0x5890cf = _0x19efdf ? [true, false] : true;
              return _0x5890cf;
            }
          }
        } else {
          log("图文作品");
          var _0x27920f = _0x107a11.findOne(clickable(true));
          if (_0x27920f != null) {
            _0x27920f.click();
            log("跳转页面：作品");
            sleep(3000);
            _0x5890cf = _0x19efdf ? [true, true] : true;
            return _0x5890cf;
          }
        }
        return _0x5890cf;
      } catch (_0xd3ecb9) {
        log("跳转到作品：", _0xd3ecb9);
        return _0x5890cf;
      }
    };
    this.JumpMoreToFasixin = function () {
      try {
        toastLog("进入发私信");
        sleep(2000);
        var _0x1c9fe3 = text("发私信").className("android.widget.TextView").findOne(3000);
        if (!_0x1c9fe3) {
          _0x1c9fe3 = text("分享主页").findOne(3000);
          if (!_0x1c9fe3) {
            _0x1c9fe3 = text("分享名片").findOne(3000);
            if (!_0x1c9fe3) {
              return false;
            }
          }
        }
        var _0x5c7a0b = _0x1c9fe3.parent().parent().child(1);
        _0x5c7a0b.click();
        sleep(2000);
        return true;
      } catch (_0x292ad0) {
        log("JumpMoreToFasixin", _0x292ad0);
        return false;
      }
    };
    this.watchStart = function (_0x6bf828, _0x1894f9) {
      log(_0x6bf828, _0x1894f9, "s");
      sleep(1000 * _0x1894f9);
    };
    this.watchSleep = function (_0x42e662, _0x599053) {
      if (_0x42e662 == undefined) {
        _0x42e662 = "title";
      }
      if (_0x599053 == undefined) {
        _0x599053 = 1;
      }
      log(_0x42e662, _0x599053, "s");
      sleep(1000 * _0x599053);
    };
    this.closeTip = function () {
      threads.start(function () {
        while (true) {
          sleep(1000);
          if (text("发现通讯录朋友").findOnce()) {
            click("拒绝");
          }
          if (text("立即升级").findOnce()) {
            click("以后再说");
          }
        }
      });
      threads.start(function () {
        while (true) {
          sleep(1000);
          if (text("点击设置头像").findOnce() && text("评论成功").findOnce()) {
            back();
          }
          if (text("我知道了").findOnce()) {
            click("我知道了");
          }
        }
      });
      threads.start(function () {
        var _0x4af1ab = java.lang.Runtime.getRuntime();
        while (true) {
          _0x4af1ab.gc();
          sleep(10000);
        }
      });
    };
    _0x707f54.isPrivateOrBan = function () {
      if (text("私密帐号").findOnce()) {
        log("私密帐号");
        return false;
      }
      if (text("私密账号").findOnce()) {
        log("私密账号");
        return false;
      }
      if (text("帐号已被封禁").findOnce()) {
        log("帐号已被封禁");
        return false;
      }
      if (text("帐号已经注销").findOnce()) {
        log("帐号已经注销");
        return false;
      }
      return true;
    };
    _0x707f54.isUserCenterLanV = function () {
      var _0x246758 = textContains("抖音号：").findOnce();
      if (_0x246758) {
        log("不是蓝V用户");
        return false;
      } else {
        log("蓝V用户");
      }
      return true;
    };
    _0x707f54.actionPinglunSend = function (_0x4e3c16) {
      var _0x233108 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _0x44a3c5 = _0x4e3c16.split("\n");
      var _0x2c7ed = "";
      if (_0x233108) {
        var _0x3e5b63 = _0x18091f.getHuashu();
        _0x3e5b63.code === 1 && (_0x2c7ed = _0x3e5b63.data.content);
      } else {
        _0x2c7ed = _0x44a3c5[random(0, _0x44a3c5.length - 1)];
      }
      log("发送评论: " + _0x2c7ed);
      sleep(1000);
      if (_0x2c7ed == "") {
        var _0x7c9f47 = desc("返回，按钮").findOnce();
        _0x7c9f47 != null && (_0x7c9f47.click(), sleep(2000));
        log("话术不能为空");
        return false;
      }
      var _0x7e1e57 = 0;
      var _0x16426d = device.height * 0.2;
      var _0x36c164 = device.width;
      var _0xf04e3c = device.height * 0.8;
      var _0x1531fb = boundsInside(_0x7e1e57, _0x16426d, _0x36c164, _0xf04e3c).filter(function (_0x533669) {
        return _0x533669.bounds().width() > 0 && _0x533669.bounds().height() > 0;
      });
      !setText(_0x2c7ed) && input(_0x2c7ed);
      sleep(2000);
      var _0x91eb9 = text("发送").find();
      if (_0x91eb9.length == 0) {
        log("未发现发送按钮");
        _0x707f54.close_shurufa();
      } else {
        var _0x30aee8 = _0x91eb9[0];
        _0x30aee8.parent().click() == false && _0x30aee8.click();
      }
      sleep(2000);
    };
    _0x707f54.close_shurufa = function () {
      var _0x5d026d = desc("返回，按钮").findOnce();
      _0x5d026d != null && (_0x5d026d.click(), sleep(2000));
    };
    _0x707f54.actionPinglunqu = function (_0x4b48a5, _0x13e6f0, _0x4060a5) {
      var _0x161adf = [];
      while (_0x4b48a5 > 0) {
        while (_0x4b48a5 > 0) {
          var _0x4a7b6c = _0x707f54.getPinglunUser(_0x161adf, _0x4060a5);
          if (_0x4a7b6c == null) {
            break;
          }
          _0x4b48a5--;
          var _0x2bedf5 = _0x4a7b6c.find(className("android.view.ViewGroup"));
          _0x2bedf5.length > 1 && (log("楼层点赞"), _0x2bedf5[1].click(), sleep(500));
          _0x13e6f0 != "" && (log("楼层回复"), _0x4a7b6c.click(), sleep(1000), _0x707f54.actionPinglunSend(_0x13e6f0));
          sleep(100);
        }
        if (_0x4b48a5 <= 0) {
          log("任务楼层结束");
          break;
        }
        var _0x319c23 = text("暂无评论").findOnce();
        if (_0x319c23 != null && _0x319c23.bounds().height() > 0 && _0x319c23.bounds().width() > 0) {
          log("暂无评论");
          break;
        }
        var _0x421cb0 = text("暂时没有更多了").findOnce();
        if (_0x421cb0 != null && _0x421cb0.bounds().height() > 0 && _0x421cb0.bounds().width() > 0) {
          log("暂时没有更多了");
          break;
        }
        var _0x3ffc9b = text("期待你的评论").findOnce();
        if (_0x3ffc9b != null && _0x3ffc9b.bounds().height() > 0 && _0x3ffc9b.bounds().width() > 0) {
          log("期待你的评论");
          break;
        }
        var _0x5bc4e3 = text("平等表达，友善交流").findOnce();
        if (_0x5bc4e3 != null && _0x5bc4e3.bounds().height() > 0 && _0x5bc4e3.bounds().width() > 0) {
          log("平等表达，友善交流");
          break;
        }
        var _0x526e97 = textEndsWith("点击评论").findOnce();
        if (_0x526e97 != null && _0x526e97.bounds().height() > 0 && _0x526e97.bounds().width() > 0) {
          log("平等表达，友善交流");
          break;
        }
        var _0x1d5e21 = device.width * 0.4 + random(-20, 20);
        var _0x408942 = device.height * 0.8 + random(-20, 20);
        var _0x13f3da = device.width * 0.6 + random(-20, 20);
        var _0x5d860e = device.height * 0.4 + random(-20, 20);
        swipe(_0x1d5e21, _0x408942, _0x13f3da, _0x5d860e, 2000);
        sleep(2000);
      }
    };
    _0x707f54.getPinglunUser = function (_0x3a5eef, _0x10e75c) {
      if (_0x3a5eef.length >= 20) {
        _0x3a5eef.shift();
      }
      var _0x15264e = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x19eb5a) {
        return _0x19eb5a.bounds().width() > 0 && _0x19eb5a.bounds().height() > 0;
      });
      var _0x4b21c9 = _0x15264e.findOne(3000);
      if (_0x4b21c9 == null) {
        return null;
      }
      for (var _0x5f594d = 0; _0x5f594d < _0x4b21c9.childCount(); _0x5f594d++) {
        var _0x535084 = _0x4b21c9.child(_0x5f594d);
        var _0x30b564 = _0x535084.findOne(idContains(":id/title"));
        var _0x572770 = _0x535084.findOne(idContains(":id/content"));
        if (_0x30b564 == null || _0x572770 == null) {
          continue;
        }
        var _0x522402 = _0x30b564.text();
        var _0x52db4f = _0x572770.text();
        if (_0x3a5eef.indexOf(_0x522402) == -1 && _0x707f54.keysContain(_0x10e75c, _0x52db4f)) {
          log("楼层：", _0x522402, _0x52db4f);
          _0x3a5eef.push(_0x522402);
          return _0x535084;
        }
      }
      return null;
    };
    _0x707f54.keysContain = function (_0x33ab9c, _0x5efc23) {
      if (_0x33ab9c == "") {
        return true;
      }
      var _0x1c0ba8 = _0x33ab9c.split("+");
      for (var _0x492901 = 0; _0x492901 < _0x1c0ba8.length; _0x492901++) {
        var _0x20a591 = _0x1c0ba8[_0x492901];
        if (_0x5efc23.includes(_0x20a591)) {
          log("评论:", _0x5efc23, " .包含:", _0x20a591);
          return true;
        }
      }
      return false;
    };
    _0x707f54.actioSwiperUp = function () {
      log("滑动视频: 下一个");
      var _0x9fa129 = device.width * 0.7 + random(-20, 20);
      var _0x2ee59a = device.height * 0.65;
      var _0x51dde7 = device.width * 0.7 + random(-20, 20);
      var _0x4edb50 = device.height * 0.15;
      var _0x1d77b4 = random(150, 200);
      swipe(_0x9fa129, _0x2ee59a, _0x51dde7, _0x4edb50, _0x1d77b4);
      sleep(2000);
    };
    _0x707f54.actioSwiperDown = function () {
      var _0x44c2c0 = device.width * 0.55 + random(-20, 20);
      var _0x4b8f88 = device.height * 0.95;
      var _0x12feaf = device.width * 0.5 + random(-20, 20);
      var _0x39b2a4 = device.height * 0.4;
      var _0x5657c0 = random(100, 120);
      swipe(_0x12feaf, _0x39b2a4, _0x44c2c0, _0x4b8f88, _0x5657c0);
      sleep(2000);
    };
    _0x707f54.action_usercenter_1 = function (_0x156074, _0x451da3, _0x1d5f0c, _0x20675d, _0x2ff81c, _0x8180d4, _0xd684c7, _0x1b5a90, _0xa926aa) {
      if (!_0x707f54.isPrivateOrBan()) {
        return false;
      }
      _0x451da3 = parseInt(_0x451da3);
      _0x1d5f0c = parseInt(_0x1d5f0c);
      _0x20675d = parseInt(_0x20675d);
      _0x2ff81c = parseInt(_0x2ff81c);
      _0x8180d4 = parseInt(_0x8180d4);
      _0xd684c7 = parseInt(_0xd684c7);
      _0x1b5a90 = parseInt(_0x1b5a90);
      var _0x32d51c = 0;
      var _0x436355 = _0x451da3;
      var _0x4215c5 = _0x451da3 + _0x1d5f0c;
      var _0x140eef = _0x451da3 + _0x1d5f0c + _0x20675d;
      var _0x8eb624 = _0x451da3 + _0x1d5f0c + _0x20675d + _0x2ff81c;
      var _0x310242 = _0x451da3 + _0x1d5f0c + _0x20675d + _0x2ff81c + _0x8180d4;
      var _0x37f699 = _0x451da3 + _0x1d5f0c + _0x20675d + _0x2ff81c + _0x8180d4 + _0xd684c7;
      var _0x21d4ae = _0x451da3 + _0x1d5f0c + _0x20675d + _0x2ff81c + _0x8180d4 + _0xd684c7 + _0x1b5a90;
      var _0x2e3f19 = random(0, _0x21d4ae);
      _0x2e3f19 >= _0x32d51c && _0x2e3f19 < _0x436355 && (log("头像点赞"), sleep(2000), _0x707f54.jumpUsercenterTouxiang());
      _0x2e3f19 >= _0x436355 && _0x2e3f19 < _0x4215c5 && (log("关注"), sleep(2000), _0x707f54.clickUsercenterGuanzhu(), _0x51a1c3.addRunData("follow"));
      _0x2e3f19 >= _0x4215c5 && _0x2e3f19 < _0x140eef && (log("视频赞"), _0x707f54.JumpUsercenterToFirstzuopin() && (log("视频观看：" + _0xa926aa + "s"), sleep(_0xa926aa * 1000), _0x707f54.clickDianzan(), _0x51a1c3.addRunData("like"), sleep(1000), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x2e3f19 >= _0x140eef && _0x2e3f19 < _0x8eb624 && (log("评论赞"), _0x707f54.JumpUsercenterToFirstzuopin() && (sleep(3000), _0x707f54.clickPinlunqu() && (_0x707f54.actionPinglunqu(3, "", ""), log("页面跳转：关闭评论区"), back(), sleep(2000), _0x707f54.closePinlunquOnce()), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x2e3f19 >= _0x8eb624 && _0x2e3f19 < _0x310242 && (log("评论"), _0x707f54.JumpUsercenterToFirstzuopin() && (sleep(3000), _0x156074 != "" && _0x707f54.clickPinlunqu() && (_0x707f54.pinglun(_0x156074), log("页面跳转：关闭评论区"), back(), sleep(2000), _0x707f54.closePinlunquOnce()), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x2e3f19 >= _0x310242 && _0x2e3f19 < _0x37f699 && (log("视频收藏"), _0x707f54.JumpUsercenterToFirstzuopin() && (sleep(3000), _0x707f54.clickShoucang(), sleep(1000), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x2e3f19 >= _0x37f699 && _0x2e3f19 < _0x21d4ae && (log("留痕"), sleep(2000), _0x51a1c3.addRunData("visit"));
    };
    _0x707f54.actionUesrCenterSixin = function (_0x54012b) {
      var _0x4546f3 = _0x54012b.split("\n");
      var _0x4e3117 = _0x4546f3[random(0, _0x4546f3.length - 1)];
      _0x4e3117 != "" && _0x707f54.JumpUsercenterToMore() && _0x707f54.JumpMoreToFasixin() && (_0x707f54.textSend(_0x4e3117), back(), sleep(2000));
    };
  }
  _0x520b18.exports = _0x154b25;
}, function (_0x1e3edb, _0x3bf4f1, _0x4201e2) {
  function _0x1a715b() {
    var _0x408560 = _0x4201e2(1);
    var _0x12e46e = this;
    var _0x55a08c = "8Cvyu7Lq5GX123123dLasdFQw";
    var _0x462ab9 = storages.create("wzke:CODE88");
    var _0x5aad01 = "1.8.6";
    this.version = _0x5aad01;
    var _0x3f51a5 = _0x408560.host + "/auto/login/i";
    var _0x2ae58e = _0x408560.host + "/auto/login/getTime";
    var _0x1dfd6e = _0x408560.Theme.loginBg;
    var _0x590090 = _0x408560.Theme.text;
    this.index = function (_0x13579a, _0x49d623) {
      var _0xd5ab49 = this.getDevice();
      var _0x3b2dd3 = _0xd5ab49.androidId;
      if (_0x3b2dd3 == "" || _0x3b2dd3 == "unknown" || _0x3b2dd3 == undefined) {
        alert("无法识别设备号,请联系管理人员");
        return false;
      }
      _0x3b2dd3 = _0x3b2dd3.substring(0, 10);
      ui.layout("\n            <vertical w=\"*\" h=\"*\"  >\n                <img src=\"".concat(_0x1dfd6e, "\" scaleType=\"centerCrop\" w=\"*\" h=\"*\" />\n\n                <vertical marginTop=\"-380\" padding=\"20dp 120 20dp 20dp\">\n                    <text id=\"hello\" textColor=\"").concat(_0x590090, "\" textStyle=\"bold\" w=\"*\" gravity=\"center\" textSize=\"24sp\" text=\"设备激活\"></text>\n\n                    <input h=\"0\" id=\"phone\" text=\"\" hint=\"输入手机号\" value=\"13888888888\" w=\"*\" inputType=\"number\" />\n\n                    <input id=\"jihuoma\" solid=\"red\" text=\"\" padding=\"30 16\" hint=\"请输入激活码\" textColorHint=\"").concat(_0x590090, "\" textColor=\"").concat(_0x590090, "\" gravity=\"center\" w=\"*\" inputType=\"text\" />\n\n\n                    <button id=\"checkJihuoma\" textSize=\"24sp\" textColor=\"#ffffff\" padding=\"5\" bg=\"#26a69a\" margin=\"50 30\" text=\"开始使用\" h=\"50\" w=\"*\" />\n\n                </vertical>\n            </vertical>\n        "));
      var _0x13b189 = _0x4201e2(1);
      var _0x4e986e = _0x13b189.bgColor;
      ui.statusBarColor("#1450FF");
      var _0x4497c5 = [colors.parseColor(_0x590090), colors.parseColor(_0x590090)];
      try {
        var _0xca7d40 = function _0x21cf6c(_0x533b4b, _0x103a1b) {
          var _0x55dd5a = _0x56aaa1(_0x103a1b[0], _0x103a1b[1]);
          _0x533b4b.setBackgroundTintList(_0x55dd5a);
        };
        var _0x56aaa1 = function _0x51d731(_0x4c8c1b, _0x22ced8) {
          var _0x4f4884 = [_0x22ced8, _0x4c8c1b];
          var _0x475d86 = new Array();
          _0x475d86[0] = [android.R.attr.state_focused];
          _0x475d86[1] = [android.R.attr.state_enabled];
          var _0x543ae4 = new ColorStateList(_0x475d86, _0x4f4884);
          return _0x543ae4;
        };
        var _0xc17c78 = function _0x4d20ca(_0x46d59f) {
          importClass(android.graphics.LinearGradient);
          importClass(android.graphics.BitmapShader);
          importClass(android.graphics.Shader);
          var _0xd44a93 = util.java.array("int", 2);
          _0xd44a93[0] = colors.parseColor(_0x13b189.color1);
          _0xd44a93[1] = colors.parseColor(_0x13b189.color2);
          var _0x14d5d0 = new LinearGradient(0, 0, 100, 100, _0xd44a93, null, Shader.TileMode.CLAMP);
          _0x46d59f.getPaint().setShader(_0x14d5d0);
          _0x46d59f.invalidate();
        };
        var _0x514df9 = function _0x493e9a(_0x345519) {
          importClass(android.graphics.drawable.GradientDrawable);
          gradientDrawable = new GradientDrawable();
          var _0x430b6c = util.java.array("int", 2);
          _0x430b6c[0] = colors.parseColor("#3aa8f7");
          _0x430b6c[1] = colors.parseColor("#1e86e4");
          gradientDrawable.setShape(GradientDrawable.RECTANGLE);
          gradientDrawable.setOrientation(GradientDrawable.Orientation.TL_BR);
          gradientDrawable.setColors(_0x430b6c);
          gradientDrawable.setCornerRadius(25);
          gradientDrawable.setSize(50, 50);
          _0x345519.setBackground(gradientDrawable);
        };
        _0xca7d40(ui.jihuoma, _0x4497c5);
        _0x514df9(ui.checkJihuoma);
      } catch (_0x1291af) {
        log(_0x1291af);
      }
      var _0x3b0a6a = _0xd5ab49.androidId;
      if (_0x3b0a6a == "" || _0x3b0a6a == undefined || _0x3b0a6a == "unknown") {
        alert("无法识别设备号,请联系管理人员");
        return false;
      }
      ui.checkJihuoma.click(function () {
        var _0x5c6c81 = "13888888888";
        var _0x3f8850 = String(ui.jihuoma.getText());
        if (_0x3f8850.length <= 8) {
          return alert("错误的激活码!");
        }
        var _0x54a549 = /^[0-9a-zA-Z]+$/;
        if (_0x54a549.test(_0x3f8850) == false) {
          return alert("错误的激活码!");
        }
        _0x2a9a41(_0x3f8850, _0x5c6c81);
      });
      function _0x2a9a41(_0x3370ac, _0x2ac88c) {
        var _0x3858d9 = dialogs.build({
          title: "登录中...",
          progress: {
            max: -1
          },
          cancelable: false
        }).show();
        var _0x22957e = {
          jihuoma: _0x3370ac,
          phone: _0x2ac88c,
          version: _0x5aad01
        };
        _0x12e46e.msg1000(_0x22957e, function (_0x53c414) {
          _0x3858d9.dismiss();
          _0x53c414 && _0x53c414.code == 1 ? (_0x12e46e.saveLoginInfo(_0x53c414.data), _0x49d623(_0x53c414.data)) : alert(_0x53c414.msg);
        });
      }
      var _0x40ae59 = _0x12e46e.getLoginInfo();
      if (_0x40ae59 != "") {
        ui.jihuoma.setText(_0x40ae59.jihuoma);
        if (_0x40ae59.phone != undefined) {
          ui.phone.setText(_0x40ae59.phone);
        }
        var _0x4a2ef8 = _0x12e46e.getTime();
        var _0x5db92d = 7200;
        _0x40ae59.time + _0x5db92d > _0x4a2ef8 && _0x40ae59.status != -1 && _0x49d623(_0x40ae59);
      }
    };
    this.getLoginInfo = function () {
      var _0x2e4568 = _0x462ab9.get("loginInfo");
      return _0x2e4568 == undefined ? "" : (_0x2e4568.androidId = device.getAndroidId(), _0x2e4568);
    };
    this.saveLoginInfo = function (_0x10cf75) {
      _0x462ab9.put("loginInfo", _0x10cf75);
    };
    this.getDevice = function () {
      var _0x45ebac = new Object();
      _0x45ebac.androidId = device.getAndroidId();
      _0x45ebac.fingerprint = device.fingerprint;
      _0x45ebac.serial = device.serial;
      return _0x45ebac;
    };
    this.getTime = function () {
      var _0x5529f3 = threads.disposable();
      threads.start(function () {
        try {
          var _0x461052 = http.postJson(_0x2ae58e, "getTime");
          _0x5529f3.setAndNotify(_0x461052.body.string());
        } catch (_0x5f3aab) {
          _0x5529f3.setAndNotify(_0x5f3aab);
        }
      });
      return _0x5529f3.blockedGet();
    };
    this.post = function (_0x43befe, _0x27e90a) {
      var _0x18c889 = threads.disposable();
      threads.start(function () {
        try {
          var _0x58d081 = _0x12e46e.getTime();
          var _0x3d8b6b = {
            opt: _0x43befe,
            token: _0x55a08c,
            time: _0x58d081,
            device: _0x12e46e.getDevice(),
            data: _0x27e90a
          };
          _0x3d8b6b = _0x12e46e.JsonEncode(_0x3d8b6b);
          var _0x25853a = _0x3f51a5 + "?o=" + _0x43befe;
          res = http.postJson(_0x25853a, {
            putData: _0x3d8b6b
          });
          res = JSON.parse(res.body.string());
          _0x18c889.setAndNotify(res);
        } catch (_0x5642f9) {
          exit();
          _0x18c889.setAndNotify(404);
        }
      });
      return _0x18c889.blockedGet();
    };
    this.postAsyn = function (_0x5dc2b8, _0x4c176b, _0xa7f1ec) {
      var _0x32ac31 = events.emitter(threads.currentThread());
      threads.start(function () {
        try {
          var _0x2bf6ca = _0x12e46e.getTime();
          var _0x3dbb4d = _0x12e46e.getDevice();
          var _0x3dd00f = {
            opt: _0x5dc2b8,
            token: _0x55a08c,
            time: _0x2bf6ca,
            device: _0x3dbb4d,
            data: _0x4c176b
          };
          _0x3dd00f = _0x12e46e.JsonEncode(_0x3dd00f);
          var _0x3c1a1c = _0x3f51a5 + "?o=" + _0x5dc2b8;
          res = http.postJson(_0x3c1a1c, {
            putData: _0x3dd00f
          });
          res = JSON.parse(res.body.string());
          _0x32ac31.emit("result", res);
        } catch (_0x45e9f8) {
          toast("请求错误,请检查网络");
          exit();
          _0x32ac31.emit("result", 404);
        }
      });
      _0x32ac31.on("result", function (_0x8b4904) {
        threads.currentThread();
        _0xa7f1ec(_0x8b4904);
      });
    };
    this.JsonEncode = function (_0x380424) {
      return this.encode(JSON.stringify(_0x380424));
    };
    this.decode = function (_0x443efd) {
      var _0x4ac179 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs";
      var _0x3d43e3 = "";
      for (var _0x1fd8f5 = 1; _0x1fd8f5 < _0x443efd.length;) {
        var _0x5b86d2 = _0x4ac179.indexOf(_0x443efd[_0x1fd8f5]);
        if (_0x5b86d2 == -1) {
          var _0x551cfa = _0x443efd[_0x1fd8f5];
        } else {
          var _0x551cfa = _0x4ac179[(_0x5b86d2 + 59) % 62];
        }
        _0x3d43e3 += _0x551cfa;
        _0x1fd8f5 = _0x1fd8f5 + 3;
      }
      return _0x3d43e3;
    };
    this.encode = function (_0x359ba6) {
      var _0x5b44c5 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs";
      var _0x28bc1b = "";
      for (var _0x394bad = 0; _0x394bad < _0x359ba6.length; _0x394bad++) {
        var _0x102929 = _0x5b44c5.indexOf(_0x359ba6[_0x394bad]);
        if (_0x102929 == -1) {
          var _0x643b82 = _0x359ba6[_0x394bad];
        } else {
          var _0x643b82 = _0x5b44c5[(_0x102929 + 3) % 62];
        }
        var _0x10a4b5 = parseInt(Math.random() * 62, 10);
        var _0x3dfe93 = parseInt(Math.random() * 62, 10);
        _0x28bc1b += _0x5b44c5[_0x10a4b5] + _0x643b82 + _0x5b44c5[_0x3dfe93];
      }
      return _0x28bc1b;
    };
    this.msg1000 = function (_0x5ce649, _0x15ddcd) {
      this.postAsyn(1000, _0x5ce649, function (_0x490de9) {
        _0x15ddcd(_0x490de9);
      });
    };
    this.msg1001 = function (_0x20d73a) {
      var _0x167fb1 = this.post(1001, _0x20d73a);
      return _0x167fb1;
    };
  }
  _0x1e3edb.exports = _0x1a715b;
}, function (_0x546522, _0x449977, _0x260357) {
  var _0x5f3152 = _0x260357(1);
  function _0x53dd4c() {
    var _0x31a2a4 = this;
    var _0x4dd74a = "8Cvyu7Lq5GXdLFQw";
    var _0x34f74c = _0x5f3152.host + "/auto";
    var _0x3fb561 = _0x5f3152.host + "/auto/index/getTime";
    this.jztk = function (_0xe59c99) {
      var _0x9dafe3 = threads.disposable();
      threads.start(function () {
        try {
          var _0x4f49da = http.postJson(_0x34f74c + "/comment/save", _0xe59c99).body.string();
          _0x9dafe3.setAndNotify(JSON.parse(_0x4f49da));
        } catch (_0xf30208) {
          log("jztkErr = ", _0xf30208);
          _0x9dafe3.setAndNotify(404);
        }
      });
      return _0x9dafe3.blockedGet();
    };
    this.getHuashu = function () {
      var _0xa2ec4b = threads.disposable();
      threads.start(function () {
        try {
          var _0x37950e = http.postJson(_0x34f74c + "/huashu/getHuashu", {}).body.string();
          _0xa2ec4b.setAndNotify(JSON.parse(_0x37950e));
        } catch (_0x4e5638) {
          log("getHuashuErr = ", _0x4e5638);
          _0xa2ec4b.setAndNotify({
            code: 0
          });
        }
      });
      return _0xa2ec4b.blockedGet();
    };
    this.addSeedRunCout = function (_0x119d5c) {
      return _0x31a2a4.postUrl("/Zhongzi/run", {
        dy_id: _0x119d5c
      });
    };
    this.msg10003 = function (_0x3a8282) {
      sleep(1000);
      var _0x41a073 = this.post2(10003, _0x3a8282);
      sleep(1000);
    };
    this.msg10004 = function (_0xc5a7c9) {
      undefined == _0xc5a7c9 && (_0xc5a7c9 = {});
      var _0x2ab279 = new (_0x260357(4))();
      var _0x48384d = _0x2ab279.getLoginInfo();
      _0xc5a7c9.androidId = _0x48384d.androidId;
      _0xc5a7c9.jihuoma = _0x48384d.jihuoma;
      _0xc5a7c9.customerId = _0x48384d.customerId;
      var _0x5599f0 = this.post2(10004, _0xc5a7c9);
      if (_0x5599f0.code == -1) {
        return null;
      }
      var _0xc5a7c9 = {
        opt: _0x5599f0.data.opt,
        link: _0x5599f0.data.link,
        str: _0x5599f0.data.str
      };
      return _0xc5a7c9;
    };
    this.msg10005 = function (_0x256c1c) {
      undefined == _0x256c1c && (_0x256c1c = {});
      var _0x3c7d19 = new (_0x260357(4))();
      var _0x430767 = _0x3c7d19.getLoginInfo();
      _0x256c1c.androidId = _0x430767.androidId;
      _0x256c1c.jihuoma = _0x430767.jihuoma;
      _0x256c1c.customerId = _0x430767.customerId;
      var _0x534ac8 = this.post2(10005, _0x256c1c);
      if (_0x534ac8.code == -1) {
        return null;
      }
      var _0x256c1c = {
        opt: 10005,
        data: _0x534ac8.data
      };
      return _0x256c1c;
    };
    this.msg10006 = function (_0x17795a) {
      _0xb1bd43 = {};
      var _0xce312 = new (_0x260357(4))();
      var _0x32af38 = _0xce312.getLoginInfo();
      _0xb1bd43.androidId = _0x32af38.androidId;
      _0xb1bd43.jihuoma = _0x32af38.jihuoma;
      _0xb1bd43.customerId = _0x32af38.customerId;
      _0xb1bd43.dy_id = _0x17795a;
      var _0x9314b3 = this.post2(10006, _0xb1bd43);
      if (_0x9314b3.code == -1) {
        return null;
      }
      var _0xb1bd43 = {
        opt: 10006,
        data: _0x9314b3.data
      };
      return _0xb1bd43;
    };
    this.msg10007 = function (_0x59af96) {
      undefined == _0x59af96 && (_0x59af96 = {});
      var _0x5cd2c3 = new (_0x260357(4))();
      var _0x4e8289 = _0x5cd2c3.getLoginInfo();
      _0x59af96.androidId = _0x4e8289.androidId;
      _0x59af96.jihuoma = _0x4e8289.jihuoma;
      _0x59af96.customerId = _0x4e8289.customerId;
      var _0x3c87ea = this.post2(10007, _0x59af96);
      if (_0x3c87ea.code == -1) {
        return null;
      }
      var _0x59af96 = {
        opt: 10007,
        data: _0x3c87ea.data
      };
      return _0x59af96;
    };
    this.post = function (_0x4be0e3, _0x1f7d75) {
      var _0x15f886 = threads.disposable();
      threads.start(function () {
        try {
          var _0x3babbb = {
            opt: _0x4be0e3,
            token: _0x4dd74a,
            time: timmThis.getTime(),
            device: _0x31a2a4.getDevice(),
            data: _0x1f7d75
          };
          _0x3babbb = _0x31a2a4.JsonEncode(_0x3babbb);
          res = http.postJson(_0x34f74c + "?o=" + _0x4be0e3, {
            putData: _0x3babbb
          });
          _0x15f886.setAndNotify(JSON.parse(res.body.string()));
        } catch (_0x82f4d8) {
          log("err = ", _0x82f4d8);
          _0x15f886.setAndNotify(404);
        }
      });
      return _0x15f886.blockedGet();
    };
    this.post2 = function (_0xe6ca3e, _0xc31e5) {
      var _0x2b4d39 = threads.disposable();
      threads.start(function () {
        try {
          var _0x562596 = {
            opt: _0xe6ca3e,
            token: _0x4dd74a,
            time: _0x31a2a4.getTime(),
            device: _0x31a2a4.getDevice()
          };
          var _0x3afea7 = {
            putData: _0x31a2a4.JsonEncode(_0x562596),
            data: _0x31a2a4.json(_0xc31e5)
          };
          var _0xbe201f = http.postJson(_0x34f74c + "?o=" + _0xe6ca3e, _0x3afea7);
          _0xbe201f = JSON.parse(_0xbe201f.body.string());
          _0x2b4d39.setAndNotify(_0xbe201f);
        } catch (_0x191173) {
          log("err = ", _0x191173);
          _0x2b4d39.setAndNotify(404);
        }
      });
      return _0x2b4d39.blockedGet();
    };
    this.postUrl = function (_0x276445, _0x209c86) {
      var _0x3ddb45 = threads.disposable();
      threads.start(function () {
        try {
          var _0x3a7ffd = http.postJson(_0x34f74c + _0x276445, _0x209c86).body.string();
          _0x3ddb45.setAndNotify(_0x3a7ffd);
        } catch (_0x46f321) {
          log("err = ", _0x46f321);
          _0x3ddb45.setAndNotify(_0x46f321);
        }
      });
      return _0x3ddb45.blockedGet();
    };
    this.postAsyn2 = function (_0xa84184, _0x16b76e, _0x2a3e1d) {
      var _0x1f5f7b = events.emitter(threads.currentThread());
      threads.start(function () {
        try {
          var _0x53bfa0 = {
            opt: _0xa84184,
            token: _0x4dd74a,
            time: _0x31a2a4.getTime(),
            device: _0x31a2a4.getDevice()
          };
          var _0x45231c = {
            putData: _0x31a2a4.JsonEncode(_0x53bfa0),
            data: _0x31a2a4.json(_0x16b76e)
          };
          var _0x381651 = http.postJson(_0x34f74c + "?o=" + _0xa84184, _0x45231c);
          _0x381651 = JSON.parse(_0x381651.body.string());
          _0x1f5f7b.emit("result", _0x381651);
        } catch (_0x30ade7) {
          _0x1f5f7b.emit("result", _0x30ade7);
        }
      });
      _0x1f5f7b.on("result", function (_0x5da84a) {
        threads.currentThread();
        _0x2a3e1d(_0x5da84a);
      });
    };
    this.test = function () {
      log("MyHttpsAppSocket.test");
    };
    this.getDevice = function () {
      var _0x231812 = new Object();
      _0x231812.androidId = device.getAndroidId();
      _0x231812.fingerprint = device.fingerprint;
      _0x231812.serial = device.serial;
      return _0x231812;
    };
    this.getTime = function () {
      var _0x254d7f = threads.disposable();
      threads.start(function () {
        try {
          var _0x1569ad = http.postJson(_0x3fb561, "getTime");
          _0x254d7f.setAndNotify(_0x1569ad.body.string());
        } catch (_0x1571c3) {
          _0x254d7f.setAndNotify(_0x1571c3);
        }
      });
      return _0x254d7f.blockedGet();
    };
    this.json = function (_0x5aa239) {
      var _0x339c12 = JSON.stringify(_0x5aa239);
      return _0x339c12;
    };
    this.JsonEncode = function (_0x1db648) {
      var _0x383014 = JSON.stringify(_0x1db648);
      return this.encode(_0x383014);
    };
    this.decode = function (_0x1488e0) {
      var _0x247191 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs";
      var _0x1bbd2d = "";
      for (var _0x4221df = 1; _0x4221df < _0x1488e0.length;) {
        var _0x33a034 = _0x247191.indexOf(_0x1488e0[_0x4221df]);
        if (_0x33a034 == -1) {
          var _0x497af7 = _0x1488e0[_0x4221df];
        } else {
          var _0x497af7 = _0x247191[(_0x33a034 + 59) % 62];
        }
        _0x1bbd2d += _0x497af7;
        _0x4221df = _0x4221df + 3;
      }
      return _0x1bbd2d;
    };
    this.encode = function (_0x45f247) {
      var _0x3820bd = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs";
      var _0x15d67a = "";
      for (var _0x58b3c6 = 0; _0x58b3c6 < _0x45f247.length; _0x58b3c6++) {
        var _0x24b38c = _0x3820bd.indexOf(_0x45f247[_0x58b3c6]);
        if (_0x24b38c == -1) {
          var _0x4de340 = _0x45f247[_0x58b3c6];
        } else {
          var _0x4de340 = _0x3820bd[(_0x24b38c + 3) % 62];
        }
        var _0x5ec84c = parseInt(Math.random() * 62, 10);
        var _0x1fbde0 = parseInt(Math.random() * 62, 10);
        _0x15d67a += _0x3820bd[_0x5ec84c] + _0x4de340 + _0x3820bd[_0x1fbde0];
      }
      return _0x15d67a;
    };
    this.msgForm = function (_0x47ab9d, _0x30bf03, _0x5b327d) {
      var _0x30bf03 = {
        code: _0x47ab9d,
        msg: _0x30bf03,
        data: _0x5b327d
      };
      return _0x30bf03;
    };
    this.run = function () {};
  }
  _0x546522.exports = _0x53dd4c;
}, function (_0x250236, _0x3528dd) {
  function _0x4f12d2() {
    var _0x9603e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var _0x52557b = this;
    var _0x51f427 = [];
    _0x51f427 = ["首页", "Home"];
    _0x52557b["首页"] = _0x51f427[_0x9603e];
    _0x51f427 = ["功能", "Func"];
    _0x52557b["功能"] = _0x51f427[_0x9603e];
    _0x51f427 = ["其他", "Other"];
    _0x52557b["其他"] = _0x51f427[_0x9603e];
    _0x51f427 = ["个人", "Personal"];
    _0x52557b["个人"] = _0x51f427[_0x9603e];
    _0x51f427 = ["开启权限", "Basic permissions"];
    _0x52557b["基础权限"] = _0x51f427[_0x9603e];
    _0x51f427 = ["无障碍权限", "Accessibility services "];
    _0x52557b["无障碍服务"] = _0x51f427[_0x9603e];
    _0x51f427 = ["*每次启动可能需要再次开启", "*If it cannot be displayed, close accessibility, reopen or close all software, and restart the phone"];
    _0x52557b.tip1 = _0x51f427[_0x9603e];
    _0x51f427 = ["悬浮窗权限", "Suspension window"];
    _0x52557b["悬浮窗"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "*一次开启永久生效";
    _0x51f427[1] = "*Permission to open the suspended window, otherwise the normal operation of the function will be affected";
    _0x52557b.tip2 = _0x51f427[_0x9603e];
    _0x51f427[0] = "温馨提示";
    _0x51f427[1] = "Remark";
    _0x52557b["备注"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "1. 安卓7.0，3g内存，1920*1080像素以上";
    _0x51f427[1] = "1. Mobile phone system Android 7.0, 3G memory, 1920 * 1080 pixels or more";
    _0x52557b["备注1"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "2. 推荐小米和魅族,系统稳定,价格便宜";
    _0x51f427[1] = "2. The mobile phone recommends a meter and a family. The system is stable and the price is cheap";
    _0x52557b["备注2"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "3. 其他品牌:近两年旗舰机型全适配,低端机型90%可使用,自行尝试";
    _0x51f427[1] = "3. Flagship models of other brands are fully compatible, and more than 90% of low-end models can be used. Try it yourself";
    _0x52557b["备注3"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "个人中心";
    _0x51f427[1] = "Personal Center";
    _0x52557b["个人中心"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "设备号";
    _0x51f427[1] = "Equipment number";
    _0x52557b["设备号"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "激活码";
    _0x51f427[1] = "Activation code";
    _0x52557b["激活码"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "语言";
    _0x51f427[1] = "language";
    _0x52557b["语言"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "版本号";
    _0x51f427[1] = "Version number";
    _0x52557b["版本号"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "帮助中心";
    _0x51f427[1] = "Help";
    _0x52557b["帮助中心"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "产品版本";
    _0x51f427[1] = "Version";
    _0x52557b["产品版本"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "唞音下载";
    _0x51f427[1] = "download";
    _0x52557b["短视频下载"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "问题反馈";
    _0x51f427[1] = "Problem feedback";
    _0x52557b["问题反馈"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "退出系统";
    _0x51f427[1] = "sign out";
    _0x52557b["退出"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "精准引流";
    _0x51f427[1] = "Precise drainage";
    _0x52557b["精准引流"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "垂直引流";
    _0x51f427[1] = "Vertical drainage";
    _0x52557b["垂直引流"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "TTK 国际版";
    _0x51f427[1] = "TTK International";
    _0x52557b.ttk = _0x51f427[_0x9603e];
    _0x51f427[0] = "不限版本,多界面";
    _0x51f427[1] = "Unlimited version, multi interfac";
    _0x52557b.tip3 = _0x51f427[_0x9603e];
    _0x51f427[0] = "返回";
    _0x51f427[1] = "Back";
    _0x52557b["返回"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "功能介绍";
    _0x51f427[1] = "Back";
    _0x52557b["功能介绍"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "关注,点赞,评论,关键词文案";
    _0x51f427[1] = "follow,fabulous,comment,keywordRetrieval";
    _0x52557b["关注点赞评论"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "运行界面";
    _0x51f427[1] = "Operation interface";
    _0x52557b["运行界面"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "观看个数";
    _0x51f427[1] = "Number of views";
    _0x52557b["观看个数"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "关注概率";
    _0x51f427[1] = "Concerned probability";
    _0x52557b["关注概率"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "点赞概率";
    _0x51f427[1] = "Operation interface";
    _0x52557b["点赞概率"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "评论概率";
    _0x51f427[1] = "Operation interface";
    _0x52557b["评论概率"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "评论内容";
    _0x51f427[1] = "Operation interface";
    _0x52557b["评论内容"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "视频关键词";
    _0x51f427[1] = "Video keywords";
    _0x52557b["视频关键词"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "换行隔开,多条随机";
    _0x51f427[1] = "Operation interface";
    _0x52557b["换行多条"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "观看间隔";
    _0x51f427[1] = "Operation interface";
    _0x52557b["观看间隔"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "开始";
    _0x51f427[1] = "Start";
    _0x52557b["开始"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "保存成功";
    _0x51f427[1] = "Save Success";
    _0x52557b["保存成功"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "更新内容";
    _0x51f427[1] = "Update Content";
    _0x52557b["更新内容"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "最新版";
    _0x51f427[1] = "Save Success";
    _0x52557b["最新版"] = _0x51f427[_0x9603e];
    _0x51f427[0] = "需扣扣";
    _0x51f427[1] = "Need QQ";
    _0x52557b["需扣扣"] = _0x51f427[_0x9603e];
    _0x52557b.pinglun = "你别说，你还真别说\n在哪里跌倒，就在哪里睡一觉\n你人还怪好嘞\n那年你双手插兜不知道什么是冻手\n看到你这么会拍，我就放心了\n你在吃饭和睡觉之间选择了发抖音\n你记住 你别管记住了什么 你就记住\n刷到这个我的情绪很激动，想让我平静下下来，请再发一条\n背景音乐是什么\n还未老，想低保，小小年纪苦恼苦恼\n为什么我胖，因为我有心事，难瘦\n你来编，他来赞，看完我得去充电\n我在听，你在讲，随便刷刷不敢想\n每天醒来的第一件事就是想睡觉\n婶可忍叔不可忍，让开，我要评论了\n每当我找到成功的钥匙，就有人把锁换了\n我一生气就想买东西，一买东西旧的花q，一花qq就少，q一少我就生气\n我的人生只有两件事不会，这不会那不会\n小时候我总纠结长大了上清华还是北大，后来长大了也就长大了\n特别能吃苦 这几个字，我想了想，我做到了五分之四\n总感觉夏天洗澡，等于帮蚊子洗菜\n人家减重减的是腰，为啥我减的是脑细胞\n喜欢一个人是藏不住的，喜欢两个人才需要藏\n大家好，我是鳌拜妹妹熬夜\n我大概是病了，一想到没前心就隐隐作痛\n我一直觉得我性格挺好的，直到遇见性格和我一样的，真想踹两脚\n保持年轻的最好办法就是：多吃蔬菜，多运动，外加谎报年龄\n要早点睡哦，熬夜，对手机不好\n最近不知道怎么的，老是觉得自己最近不知道怎么的\n我就是有点胖，不然我是很瘦的\n如果你肯花一点时间来了解我，你就会发现，你浪费了一点时间\n最近感觉头皮有点痒，不会是要长脑子了吧\n情况就是这么个情况，具体什么情况还得看情况\n生活已经很苦了，所以能怪别人的，就不要怪自己\n梦想还是要有的，万一别人问你\n满脑子的智慧，硬生生撑大了我的脸\n希望大家能走出舒适圈，让我进去\n谁能想到我相貌平平，居然是龙的传人\n";
  }
  _0x250236.exports = _0x4f12d2;
}, function (_0x5e4025, _0x368ce) {
  var _0x4f6532 = {
    addRunTime: function () {
      var _0x52a497 = _0x1cde26.contains("runTime") ? _0x1cde26.get("runTime") : 0;
      var _0x43a64a = parseInt(_0x52a497) + 60;
      _0x1cde26.put("runTime", _0x43a64a);
    },
    getRunTime: function () {
      var _0x908dd = _0x1cde26.contains("runTime") ? _0x1cde26.get("runTime") : 0;
      var _0x278e7e = Math.floor(_0x908dd / 60) % 60;
      var _0xd7fd6d = Math.floor(_0x908dd / 3600);
      return {
        hours: _0xd7fd6d,
        minutes: _0x278e7e
      };
    },
    addRunData: function (_0x43d0fb) {
      var _0x5cc2d8 = _0x1cde26.contains(_0x43d0fb) ? _0x1cde26.get(_0x43d0fb) : 0;
      var _0x2270b9 = parseInt(_0x5cc2d8) + 1;
      _0x1cde26.put(_0x43d0fb, _0x2270b9);
    },
    getRunData: function (_0x175f31) {
      return _0x1cde26.contains(_0x175f31) ? _0x1cde26.get(_0x175f31) : 0;
    },
    getTotal: function () {
      var _0x4dbe4e = _0x1cde26.contains("follow") ? _0x1cde26.get("follow") : 0;
      var _0x347094 = _0x1cde26.contains("like") ? _0x1cde26.get("like") : 0;
      var _0x214f05 = _0x1cde26.contains("visit") ? _0x1cde26.get("visit") : 0;
      return parseInt(_0x4dbe4e) + parseInt(_0x347094) + parseInt(_0x214f05);
    },
    clearRunDataIfNeed: function () {
      var _0x168b2d = new Date();
      var _0xfddbca = _0x168b2d.getDate();
      var _0x1d4ed2 = _0x1cde26.contains("lastCleanDay") ? _0x1cde26.get("lastCleanDay") : 0;
      _0xfddbca !== _0x1d4ed2 && (_0x1cde26.clear(), _0x1cde26.put("lastCleanDay", _0xfddbca));
    },
    clear: function () {
      _0x1cde26.clear();
    }
  };
  var _0x1cde26 = storages.create("runDataStore");
  _0x5e4025.exports = _0x4f6532;
}, function (_0x1faa55, _0x44f208, _0x49db81) {
  function _0x44d1d5() {
    var _0x40dea8 = this;
    var _0x1873a6 = _0x49db81(0);
    var _0x286167 = new (_0x49db81(5))();
    this.launchApp = function () {
      if (!launch("com.smile.gifmaker")) {
        alert("请下载快手");
        return false;
      }
      return true;
    };
    this.watchSleep = function (_0x3186e3, _0x36e32e) {
      var _0x2a661c = _0x36e32e;
      while (_0x2a661c > 0) {
        log(_0x3186e3, _0x2a661c);
        sleep(1000);
        _0x2a661c--;
      }
    };
    this.checkNum = function (_0x6aa669) {
      if (_0x6aa669.includes("万")) {
        _0x6aa669 = _0x6aa669.replace("万", "");
        _0x6aa669 = _0x6aa669 * 10000;
      } else {
        _0x6aa669.includes("亿") && (_0x6aa669 = _0x6aa669.replace("亿", ""), _0x6aa669 = _0x6aa669 * 100000000);
      }
      return _0x6aa669;
    };
    this.clickGuanzhu = function () {
      log("观看视频: 点击关注");
      sleep(1000);
      try {
        var _0xe66367 = device.width * 0.8;
        var _0x11f71d = device.height * 0.2;
        var _0x2247e5 = device.width;
        var _0x494fa5 = device.height * 0.8;
        var _0x480292 = className("android.widget.ImageView").id("com.smile.gifmaker:id/slide_play_right_follow_button").boundsInside(_0xe66367, _0x11f71d, _0x2247e5, _0x494fa5).filter(function (_0x28ec5c) {
          return _0x28ec5c.bounds().width() > 0 && _0x28ec5c.bounds().height() > 0;
        });
        var _0x11f4e3 = _0x480292.findOne(1000);
        _0x11f4e3 != null && (_0x11f4e3.click(), sleep(1000));
      } catch (_0x5b0c34) {
        log("clickGuanzhu", _0x5b0c34);
        return false;
      }
    };
    this.clickDianzan = function () {
      toastLog("观看视频: 点击喜欢");
      sleep(1000);
      try {
        try {
          var _0x42aae0 = className("TextView").id("like_count_view").visibleToUser().findOne(2000);
          _0x42aae0 != null && (_0x42aae0.parent().click(), sleep(1000));
        } catch (_0x5e5301) {
          log("clickDianzan", _0x5e5301);
          return false;
        }
      } catch (_0x1a42c1) {
        log("clickDianzan", _0x1a42c1);
        return false;
      }
    };
    this.getDianZanShu = function () {
      var _0x26cd6d = -1;
      try {
        var _0x2b99a1 = className("android.widget.TextView").id("com.smile.gifmaker:id/like_count_view").visibleToUser().findOne(1000);
        if (_0x2b99a1 == null) {
          return _0x26cd6d;
        }
        _0x26cd6d = _0x2b99a1.text();
        _0x26cd6d = _0x40dea8.checkNum(_0x26cd6d);
        return _0x26cd6d;
      } catch (_0x4b4a62) {
        log("getDianZanShu", _0x4b4a62);
        return _0x26cd6d;
      }
    };
    this.clickPinglunqu = function () {
      toastLog("观看视频: 点击评论区");
      sleep(1000);
      try {
        try {
          var _0x48d9f1 = device.width * 0.8;
          var _0x189657 = device.height * 0.2;
          var _0x4ae266 = device.width;
          var _0x267534 = device.height * 0.8;
          var _0x18678c = className("TextView").id("comment_count_view").boundsInside(_0x48d9f1, _0x189657, _0x4ae266, _0x267534).filter(function (_0x24c7d0) {
            return _0x24c7d0.bounds().width() > 0 && _0x24c7d0.bounds().height() > 0;
          });
          var _0x504862 = _0x18678c.findOne(3000);
          _0x504862 != null && (_0x504862.parent().click(), sleep(1000));
          return true;
        } catch (_0x2efeef) {
          log("clickDianzan", _0x2efeef);
          return false;
        }
      } catch (_0x19a897) {
        log("clickDianzan", _0x19a897);
        return false;
      }
    };
    this.getPinglunShu = function () {
      var _0x2746b5 = -1;
      try {
        var _0x21f98a = device.width * 0.8;
        var _0x5d59f1 = device.height * 0.2;
        var _0xf5da6c = device.width;
        var _0x58a123 = device.height * 0.8;
        var _0x277810 = className("TextView").id("comment_count_view").boundsInside(_0x21f98a, _0x5d59f1, _0xf5da6c, _0x58a123).filter(function (_0x49bb37) {
          return _0x49bb37.bounds().width() > 0 && _0x49bb37.bounds().height() > 0;
        });
        var _0x5064c5 = _0x277810.findOne(3000);
        if (_0x5064c5 == null) {
          return _0x2746b5;
        }
        _0x2746b5 = _0x5064c5.text();
        _0x2746b5 = _0x40dea8.checkNum(_0x2746b5);
        return _0x2746b5;
      } catch (_0x158cc9) {
        log("getPinglunShu", _0x158cc9);
        return _0x2746b5;
      }
    };
    this.getUsername = function () {
      try {
        var _0x51fef5 = className("TextView").id("user_name_text_view").filter(function (_0x287ebd) {
          return _0x287ebd.bounds().width() > 0 && _0x287ebd.bounds().height() > 0;
        });
        var _0x223e31 = _0x51fef5.findOne(3000);
        if (_0x223e31 == null) {
          return null;
        }
        return _0x223e31.text();
      } catch (_0x358147) {
        log("getUsername", _0x358147);
        return false;
      }
    };
    this.jumpShipinToUercenter = function () {
      log("界面跳转: 到视频用户中心");
      sleep(1000);
      try {
        var _0x17c89a = className("TextView").id("user_name_text_view").filter(function (_0x59eb06) {
          return _0x59eb06.bounds().width() > 0 && _0x59eb06.bounds().height() > 0;
        });
        var _0x5d5449 = _0x17c89a.findOne(3000);
        if (_0x5d5449 == null) {
          log("fail");
          return false;
        }
        _0x5d5449.click();
        sleep(2000);
        return true;
      } catch (_0x5c316b) {
        log("jumpShipinToUercenter", _0x5c316b);
        return false;
      }
    };
    _0x40dea8.jumpUercenterToFisetshipin = function () {
      log("界面跳转: 第一个作品");
      sleep(1000);
      try {
        var _0x538c2a = device.width * 0.4;
        var _0x2755b3 = device.height * 0.6;
        var _0x2db073 = device.width * 0.4;
        var _0x1c6a02 = device.height * 0.2;
        swipe(_0x538c2a, _0x2755b3, _0x2db073, _0x1c6a02, 2000);
        sleep(1000);
        var _0x112f31 = id("player_cover_container").filter(function (_0x5383e6) {
          return _0x5383e6.bounds().width() > 0 && _0x5383e6.bounds().height() > 0;
        });
        var _0xea1016 = _0x112f31.findOne(3000);
        if (_0xea1016 == null) {
          return false;
        }
        _0xea1016.click();
        sleep(2000);
        return true;
      } catch (_0x352afb) {
        log("jumpUercenterToFisetshipin", _0x352afb);
        return false;
      }
    };
    _0x40dea8.closePinglunquOnce = function () {
      textEndsWith("条评论").findOnce() && (back(), sleep(2000));
    };
    _0x40dea8.jumpNextShipin = function () {
      log("下一个视频");
      var _0x3b3b14 = device.width * 0.7 + random(-20, 20);
      var _0x1de8c0 = device.height * 0.8;
      var _0x3d8db0 = device.width * 0.7 + random(-20, 20);
      var _0xde731e = device.height * 0.1;
      swipe(_0x3b3b14, _0x1de8c0, _0x3d8db0, _0xde731e, 300);
      sleep(1000);
    };
    _0x40dea8.jumpNextPage = function () {
      log("滑动页面");
      var _0x6607f9 = device.width * 0.7 + random(-20, 20);
      var _0x3ecdb9 = device.height * 0.8;
      var _0x4700c4 = device.width * 0.7 + random(-20, 20);
      var _0x10f626 = device.height * 0.1;
      swipe(_0x6607f9, _0x3ecdb9, _0x4700c4, _0x10f626, 500);
      sleep(2000);
    };
    this.getShipinDesc = function () {
      try {
        var _0x3eb1de = className("TextView").id("element_caption_label").filter(function (_0x326102) {
          return _0x326102.bounds().width() > 0 && _0x326102.bounds().height() > 0;
        });
        var _0x358269 = _0x3eb1de.findOne(3000);
        if (_0x358269 == null) {
          return "";
        }
        return _0x358269.text();
      } catch (_0x5c00fb) {
        log("getShipinDesc", _0x5c00fb);
        return "";
      }
    };
    _0x40dea8.getUsercenterInfo = function () {
      log("用户中心: 观看信息");
      var _0x42392f = {
        fensi: 0,
        guanzhu: 0,
        huozan: 0,
        sex: "",
        zuopin: 0
      };
      try {
        var _0x806db5 = text("粉丝").findOnce();
        if (_0x806db5 != null) {
          var _0x4c356a = _0x806db5.parent().child(0).text();
          _0x42392f.fensi = parseInt(_0x40dea8.checkNum(_0x4c356a));
          log("粉丝: " + _0x42392f.fensi);
        }
        var _0x806db5 = text("关注").findOnce();
        if (_0x806db5 != null) {
          var _0x162818 = _0x806db5.parent().child(0).text();
          _0x42392f.guanzhu = parseInt(_0x40dea8.checkNum(_0x162818));
          log("关注: " + _0x42392f.guanzhu);
        }
        var _0x806db5 = text("获赞").findOnce();
        if (_0x806db5 != null) {
          var _0x447b4c = _0x806db5.parent().child(0).text();
          _0x42392f.huozan = parseInt(_0x40dea8.checkNum(_0x447b4c));
          log("获赞: " + _0x42392f.huozan);
        }
        var _0x806db5 = id("label_name").findOnce();
        _0x806db5 != null && (_0x42392f.sex = _0x806db5.text(), log("性别: " + _0x42392f.sex));
        var _0x806db5 = textStartsWith("作品 ").findOnce();
        if (_0x806db5 != null) {
          var _0x220c17 = _0x806db5.text().replace("作品 ", "");
          _0x42392f.zuopin = parseInt(_0x220c17);
          log("作品: " + _0x42392f.zuopin);
        }
        return _0x42392f;
      } catch (_0xa6228c) {
        log("getShipinDesc", _0xa6228c);
      }
    };
    _0x40dea8.actionUercenterGuanzhu = function () {
      log("用户中心: 关注");
      sleep(1000);
      try {
        var _0xa7d3c6 = id("header_follow_button").findOne(2000);
        if (_0xa7d3c6 == null) {
          log("已关注");
          return false;
        }
        _0xa7d3c6.click();
        sleep(1000);
      } catch (_0x4fdc51) {
        log("actionUercenterGuanzhu", _0x4fdc51);
        return "";
      }
    };
    _0x40dea8.actionUercenterSixin = function (_0x54a199) {
      log("用户中心: 发私信");
      sleep(1000);
      if (_0x54a199 == "" || _0x54a199 == undefined) {
        return false;
      }
      var _0xa48f73 = _0x54a199.split("\n");
      var _0x13b6e0 = _0xa48f73[random(0, _0xa48f73.length - 1)];
      try {
        var _0x313783 = text("发私信").findOne(2000);
        if (_0x313783 == null) {
          return false;
        }
        log("跳转页面: 私信");
        _0x313783.click();
        sleep(2000);
        if (!setText(_0x13b6e0)) {
          input(_0x13b6e0);
        }
        sleep(2000);
        var _0x11a704 = id("send_btn").findOne(2000);
        _0x11a704 != null && (_0x11a704.click(), sleep(2000));
        log("跳转页面: 返回用户中心");
        sleep(1000);
        back();
        sleep(2000);
      } catch (_0x92c1d) {
        log("actionUercenterSixin", _0x92c1d);
        return "";
      }
    };
    _0x40dea8.sixinInfoCondition = function (_0x51168a, _0xcf22b9) {
      if (_0x51168a.fensi < _0xcf22b9.page3fensiMin || _0x51168a.fensi > _0xcf22b9.page3fensiMax) {
        log("信息筛选: 粉丝数不符");
        return false;
      }
      if (_0x51168a.huozan < _0xcf22b9.page3HuozanMin || _0x51168a.huozan > _0xcf22b9.page3HuozanMax) {
        log("信息筛选: 获赞数不符");
        return false;
      }
      if (_0x51168a.guanzhu < _0xcf22b9.page3GuanzhuMin || _0x51168a.guanzhu > _0xcf22b9.page3GuanzhuMax) {
        log("信息筛选: 关注数不符");
        return false;
      }
      if (_0x51168a.zuopin < _0xcf22b9.page3ZuopinMin || _0x51168a.zuopin > _0xcf22b9.page3ZuopinMax) {
        log("信息筛选: 作品数不符");
        return false;
      }
      log("信息筛选: 信息符合");
      return true;
    };
    _0x40dea8.pinglun = function (_0x3db46c) {
      var _0x248abc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      log("开始评论");
      sleep(1000);
      o = id("com.smile.gifmaker:id/text_holder_container_layout").clickable(true).findOnce();
      o != null ? (o.click(), sleep(2000)) : click("发条有爱评论~") && sleep(2000);
      _0x40dea8.textSend(_0x3db46c, _0x248abc);
    };
    this.textSend = function (_0x1ee5af) {
      var _0x11f2ba = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      toastLog("开始留言");
      if (_0x11f2ba) {
        var _0x46852f = _0x286167.getHuashu();
        _0x46852f.code === 1 && (_0x1ee5af = _0x46852f.data.content);
      } else {
        var _0x5979bd = _0x1ee5af.split("\n");
        _0x1ee5af = _0x5979bd[random(0, _0x5979bd.length - 1)];
      }
      if (!_0x1ee5af) {
        log("内容为空");
        return false;
      }
      sleep(1000);
      if (!setText(_0x1ee5af)) {
        input(_0x1ee5af);
      }
      sleep(2000);
      var _0x7dc910 = text("发送").desc("发送").findOne(3000);
      _0x7dc910 != null && (click(_0x7dc910.bounds().centerX(), _0x7dc910.bounds().centerY()), sleep(3000));
      text("发送").desc("发送").findOnce() && (back(), sleep(2000));
    };
    _0x40dea8.isShipin = function () {
      if (_0x40dea8.getDianZanShu() != -1 && _0x40dea8.getPinglunShu() != -1) {
        if (id("slide_play_right_link_icon").visibleToUser().findOnce()) {
          return "广告";
        }
        log("视频");
        return "视频";
      }
      if (text("点击进入直播间").visibleToUser().findOne(2000)) {
        log("直播间");
        return "直播间";
      }
      log("其他");
      return "其他";
    };
    _0x40dea8.getPinglunUser = function (_0x6b6787, _0x1d366a) {
      _0x6b6787.length > 20 && _0x6b6787.shift();
      var _0x22f397 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x2cae28) {
        return _0x1873a6.getPercent(_0x2cae28).w > 99 && _0x2cae28.bounds().height() > 0;
      });
      var _0x1a975d = _0x22f397.findOne(3000);
      try {
        for (var _0x5e0bf4 = 0; _0x5e0bf4 < _0x1a975d.childCount(); _0x5e0bf4++) {
          var _0x3b9b14 = _0x1a975d.child(_0x5e0bf4);
          if (_0x3b9b14.childCount() < 4) {
            continue;
          }
          if (_0x3b9b14.findOne(text("作者")) != null) {
            log("跳过作者");
            continue;
          }
          var _0x2a6bab = _0x3b9b14.findOne(id("com.smile.gifmaker:id/comment"));
          if (_0x2a6bab == null) {
            continue;
          }
          var _0x120d8d = _0x2a6bab.text();
          if (_0x6b6787.indexOf(_0x120d8d) == -1 && _0x40dea8.keysContain(_0x1d366a, _0x120d8d)) {
            log("评论内容: ", _0x120d8d, "  ;包含内容:", _0x1d366a);
            _0x6b6787.push(_0x120d8d);
            return _0x3b9b14;
          }
        }
        return null;
      } catch (_0x540bbb) {
        log("获取评论列表失败,请打开评论区");
        return null;
      }
    };
    _0x40dea8.keysContain = function (_0x1c5244, _0x1a5458) {
      if (_0x1c5244 == "") {
        return true;
      }
      var _0x2bb9fb = _0x1c5244.split("+");
      for (var _0x2d0ee3 = 0; _0x2d0ee3 < _0x2bb9fb.length; _0x2d0ee3++) {
        if (_0x1a5458.includes(_0x2bb9fb[_0x2d0ee3])) {
          return true;
        }
      }
      return false;
    };
    _0x40dea8.userCenterContidion = function (_0x5062ac, _0xc39b1) {
      if (_0x5062ac.huozan < _0xc39b1.totalzanMin || _0x5062ac.huozan > _0xc39b1.totalguanzhu) {
        log("获赞数值: 范围不符");
        return false;
      }
      if (_0x5062ac.guanzhu < _0xc39b1.totalguanzhuMin || _0x5062ac.guanzhu > _0xc39b1.totalguanzhuMax) {
        log("关注数值: 范围不符");
        return false;
      }
      if (_0x5062ac.fensi < _0xc39b1.fensiMin || _0x5062ac.fensi > _0xc39b1.fensiMax) {
        log("粉丝数值: 范围不符");
        return false;
      }
      if (_0x5062ac.zuopin < _0xc39b1.zuopinMin || _0x5062ac.zuopin > _0xc39b1.zuopinMax) {
        log("作品数值: 范围不符");
        return false;
      }
      return true;
    };
    this.closeTip = function () {
      var _0x5c8e05 = threads.start(function () {
        setInterval(function () {
          try {
            if (text("立即重播").findOnce()) {
              click("立即重播");
            }
          } catch (_0x5ac6e3) {
            log("closeTip", _0x5ac6e3);
          }
        }, 1000);
      });
      return _0x5c8e05;
    };
    this.checkHuakuai = function () {
      threads.start(function () {
        var _0x2ad03c = text("拖动滑块").findOnce();
        var _0x585567 = text("向右拖动滑块填充拼图").findOnce();
        _0x2ad03c && _0x585567 && (alert("请拖动滑块后,重新开始任务"), threads.shutDownAll());
        sleep(1000);
      });
    };
  }
  _0x1faa55.exports = _0x44d1d5;
}, function (_0x5f4a36, _0x5b4a6b, _0x110cbe) {
  var _0x35142a = _0x110cbe(0);
  var _0x5ce6aa = {
    test: function () {
      log("test");
    },
    actionGuanzhu: function () {
      log("action: follow");
      sleep(1000);
      var _0x36459c = device.width * 0.8;
      var _0x4a3ce9 = device.height * 0.4;
      var _0x134037 = device.width;
      var _0x2bb6e4 = device.height * 0.7;
      var _0x40bcca = descStartsWith("Follow ").className("android.widget.Button").boundsInside(_0x36459c, _0x4a3ce9, _0x134037, _0x2bb6e4).findOnce();
      _0x40bcca && _0x40bcca.click();
      sleep(2000);
      var _0x2091d1 = id("com.zhiliaoapp.musically:id/cap").findOnce();
      _0x2091d1 && _0x2091d1.click();
    },
    actionDianzan: function () {
      log("action: fabulous");
      sleep(1000);
      var _0x474d02 = device.width * 0.8;
      var _0x4577d6 = device.height * 0.15;
      var _0x54ab34 = device.width;
      var _0x494801 = device.height * 0.8;
      var _0x39e133 = className("android.widget.Button").boundsInside(_0x474d02, _0x4577d6, _0x54ab34, _0x494801).filter(function (_0x48c7e1) {
        return _0x48c7e1.bounds().width() > 0 && _0x48c7e1.bounds().height() > 0 && _0x48c7e1.text() != "" && _0x48c7e1.text() != "LIVE";
      });
      var _0x2661c2 = _0x39e133.find();
      if (_0x2661c2.length > 0) {
        var _0x3c8c44 = _0x2661c2[0];
        click(_0x3c8c44.bounds().centerX(), _0x3c8c44.bounds().top);
      }
    },
    jumpClickPinglunqu: function () {
      log("action: Open comment area");
      sleep(1000);
      try {
        var _0x366c43 = device.width * 0.8;
        var _0x56c9a0 = device.height * 0.15;
        var _0x13fd6d = device.width;
        var _0x45e3ea = device.height * 0.8;
        var _0x538f99 = boundsInside(_0x366c43, _0x56c9a0, _0x13fd6d, _0x45e3ea).filter(function (_0xaa8999) {
          return _0xaa8999.bounds().width() > 0 && _0xaa8999.bounds().height() > 0 && _0xaa8999.text() != "" && _0xaa8999.text() != "LIVE";
        });
        var _0x7f2b2 = _0x538f99.className("android.widget.Button").find();
        if (_0x7f2b2.length > 0) {
          var _0x202cb1 = _0x7f2b2[1];
          click(_0x202cb1.bounds().centerX(), _0x202cb1.bounds().top);
          sleep(2000);
          return true;
        } else {
          return false;
        }
      } catch (_0x3ae5af) {
        return false;
      }
    },
    jumpCloseinglunqu: function () {
      log("action: close comment area");
      sleep(1000);
      back();
      sleep(3000);
    },
    actionPinglun: function (_0x2ef57e) {
      var _0x574d55 = _0x2ef57e.split("\n");
      var _0x359294 = _0x574d55[random(0, _0x574d55.length - 1)];
      if (_0x2ef57e == "") {
        return false;
      }
      log("action: ", _0x359294);
      sleep(1000);
      if (!setText(_0x359294)) {
        input(_0x359294);
      }
      sleep(1000);
      var _0xa93e31 = desc("Post comment").findOnce();
      _0xa93e31 && _0xa93e31.click();
    },
    getShipinDesc: function () {
      var _0x15b8e8 = "";
      var _0x25d64f = device.width * 0;
      var _0x5e4b30 = device.height * 0.5;
      var _0x4b6cd0 = device.width;
      var _0x4c8c6b = device.height;
      var _0x1906b3 = boundsInside(_0x25d64f, _0x5e4b30, _0x4b6cd0, _0x4c8c6b).filter(function (_0x2d7c4e) {
        return _0x2d7c4e.bounds().width() > 0 && _0x2d7c4e.bounds().height() > 0;
      });
      var _0x59c00b = _0x1906b3.id("com.zhiliaoapp.musically:id/desc").findOnce();
      _0x59c00b && (_0x15b8e8 = _0x59c00b.text());
      log(_0x15b8e8);
      return _0x15b8e8;
    },
    checkDescContainWords: function (_0xbd4436, _0x434564) {
      if (_0x434564 == "") {
        return true;
      }
      if (_0xbd4436 == "") {
        return false;
      }
      var _0x39a0a3 = _0x434564.split("\n");
      for (var _0x5c3a0a = 0; _0x5c3a0a < _0x39a0a3.length; _0x5c3a0a++) {
        var _0x472c4f = _0x39a0a3[_0x5c3a0a];
        if (_0xbd4436.includes(_0x472c4f)) {
          log("containWords: " + _0x472c4f);
          return true;
        }
      }
      log("keywords fail");
      return false;
    },
    shipinSwiperUp: function () {
      log("action: swiperUp");
      sleep(2000);
      var _0x4dceeb = device.width * 0.7 + random(-20, 20);
      var _0x22246f = device.height * 0.65;
      var _0x260852 = device.width * 0.7 + random(-20, 20);
      var _0x143d78 = device.height * 0.15;
      var _0x4f35dd = random(150, 200);
      swipe(_0x4dceeb, _0x22246f, _0x260852, _0x143d78, _0x4f35dd);
      sleep(2000);
    },
    pageSwiperUp: function () {
      log("action: swiperUp");
      sleep(2000);
      var _0x49d4a7 = device.width * 0.7 + random(-20, 20);
      var _0x289685 = device.height * 0.85;
      var _0x52a23f = device.width * 0.7 + random(-20, 20);
      var _0x1b124a = device.height * 0.2;
      var _0x48b3b5 = random(600, 900);
      swipe(_0x49d4a7, _0x289685, _0x52a23f, _0x1b124a, _0x48b3b5);
      sleep(2000);
    },
    jumpUserCenterToZuopin: function () {
      var _0x534e32 = id("com.zhiliaoapp.musically:id/cover").findOnce();
      return _0x534e32 && _0x534e32.parent() ? (_0x534e32.parent().click(), sleep(3000), true) : false;
    }
  };
  _0x5f4a36.exports = _0x5ce6aa;
}, function (_0x20ef9f, _0x3f1c93, _0x171180) {
  function _0x3c60c6(_0x3c752e, _0x5d21ae) {
    var _0x194073 = this;
    var _0x423c18 = _0x171180(1);
    var _0x4bd97b = _0x423c18.bgColor;
    var _0x759e6 = _0x171180(6);
    this.index = function () {
      _0x194073.view();
    };
    this.view = function () {
      var _0x1f9811 = _0x3c752e.getLanguageType();
      var _0x59d1a7 = new _0x759e6(_0x1f9811.languageType);
      var _0x4b0b0f = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical>\n                  \n                    <text bg=\"#ffffff\" paddingTop=\"".concat(_0x4b0b0f, "px\" id=\"back\" textColor=\"black\" padding=\"15 10\" textSize=\"18dp\" text=\" ").concat(_0x59d1a7["返回"], "\" />  \n                \n                    <ScrollView>\n                    <vertical bg=\"#ffffff\">\n                        <text text=\"Tk观看\" margin=\"10 10 10 20\"  gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />   \n                        <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                       \n                        <horizontal  padding=\"20 0 20 0\" w=\"*\" h=\"auto\">                        \n                            <text gravity=\"left|center\"  minHeight=\"40\"textColor=\"black\" text=\"").concat(_0x59d1a7["功能介绍"], ":  \" />\n                            <vertical >\n                                <text marginTop=\"10\" gravity=\"left|top\" minHeight=\"40\"    text=\"").concat(_0x59d1a7["关注点赞评论"], "\"  bg=\"#ffffff\" />           \n                            </vertical>\n                                     \n                        </horizontal>\n                        <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <horizontal  padding=\"20 0 20 0\" w=\"*\" h=\"auto\">                        \n                            <text gravity=\"left|center\"  h=\"40\" textColor=\"black\" text=\"").concat(_0x59d1a7["运行界面"], ":  \" />\n                            <vertical marginTop=\"5\">\n                                <text gravity=\"left|center\"  h=\"30\"    text=\"1. Home - For you\"  bg=\"#ffffff\" />      \n                                <text gravity=\"left|center\"  h=\"30\"    text=\"2. Home - Follo\"  bg=\"#ffffff\" />      \n                                <text gravity=\"left|center\"  h=\"30\"    text=\"3. Discover - video\"  bg=\"#ffffff\" />                 \n                                <text gravity=\"left|center\"  h=\"30\"    text=\"4. Profile - video\"  bg=\"#ffffff\" />                 \n                            </vertical>\n                                     \n                        </horizontal>\n                        <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <horizontal weightSum=\"10\"    >\n                            <text   layout_weight=\"3\" paddingLeft=\"20\"  textColor=\"black\" text=\"").concat(_0x59d1a7["观看个数"], "\" />\n                            <input  layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\"  gravity=\"right\" id=\"page1ShipinCount\"  inputType=\"number\"  bg=\"#ffffff\" />               \n                        </horizontal>\n                        <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <horizontal weightSum=\"10\"    >\n                            <text   layout_weight=\"3\" paddingLeft=\"20\"   textColor=\"black\" text=\"").concat(_0x59d1a7["关注概率"], "（0-100%）\" />\n                            <input  layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1GuanzhuRate\"  inputType=\"number\"  bg=\"#ffffff\" />               \n                        </horizontal>\n                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <horizontal weightSum=\"10\"   >\n                            <text   layout_weight=\"3\" paddingLeft=\"20\"  textColor=\"black\" text=\"").concat(_0x59d1a7["点赞概率"], "（0-100%）\" />\n                            <input  layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1DianzanRate\"  inputType=\"number\"  bg=\"#ffffff\" />               \n                        </horizontal>\n                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <horizontal weightSum=\"10\"   >\n                            <text   layout_weight=\"3\" paddingLeft=\"20\"  textColor=\"black\" text=\"").concat(_0x59d1a7["评论概率"], "（0-100%）\" />\n                            <input  layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1PinglunRate\"  inputType=\"number\"  bg=\"#ffffff\" />               \n                        </horizontal>\n                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <frame  padding=\"20 0 20 0\" w=\"*\" h=\"auto\">                        \n                            <text   marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"").concat(_0x59d1a7["评论内容"], " （").concat(_0x59d1a7["换行多条"], "）\" />\n                            <input  marginTop=\"25\"  hint=\"Please enter\" h=\"auto\" gravity=\"left|top\"  minLines=\"3\" id=\"page1PinglunWords\"   bg=\"#ffffff\" />               \n                        </frame>\n                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n\n                        <frame id=\"page1KeywordsItem\" padding=\"20 0 20 0\" w=\"*\" h=\"auto\" >                        \n                            <text   marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"").concat(_0x59d1a7["视频关键词"], " （").concat(_0x59d1a7["换行多条"], "）\" />\n                            <input  marginTop=\"25\"  hint=\"Please enter\" h=\"auto\" gravity=\"left|top\"  minLines=\"3\" id=\"page1Keywords\"   bg=\"#ffffff\" />               \n                        </frame>\n                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        \n                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                            <text   layout_weight=\"3\" paddingLeft=\"20\"  textColor=\"black\" text=\"").concat(_0x59d1a7["观看间隔"], " \" />\n                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                <text    textColor=\"black\" text=\"min:\" />\n                                <input id=\"page1WatchTimeMin\"  minWidth=\"50\" gravity=\"center\"    inputType=\"number\"  bg=\"#ffffff\" />    \n                                <text    textColor=\"black\" text=\"max:\" />\n                                <input  id=\"page1WatchTimeMax\" paddingRight=\"30\" gravity=\"right\"  minWidth=\"80\" inputType=\"number\"  bg=\"#ffffff\" />   \n                            </horizontal>          \n                        </horizontal> \n                        <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                        <button id=\"page1Save\" bg=\"").concat(_0x4bd97b, "\" layout_margin='30'  textSize=\"20\" layout_gravity=\"center\" text=\"").concat(_0x59d1a7["开始"], " \"  w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                    </vertical>\n                    </ScrollView>          \n                </vertical>\n            </drawer>\n        "));
      if (_0x5d21ae == 1) {
        ui.page1KeywordsItem.attr("h", "0");
      }
      ui.back.click(function () {
        _0x3c752e.view(1);
      });
      _0x194073.initPage1();
      ui.page1Save.click(function () {
        _0x194073.page1Save();
      });
    };
    var _0x47588b = storages.create("wzke:TKK1");
    _0x194073.getPage1Data = function () {
      var _0xa5e6cd = {
        page1ShipinCount: _0x47588b.get("page1ShipinCount") != undefined ? _0x47588b.get("page1ShipinCount") : 3,
        page1WatchTimeMin: _0x47588b.get("page1WatchTimeMin") != undefined ? _0x47588b.get("page1WatchTimeMin") : 1,
        page1WatchTimeMax: _0x47588b.get("page1WatchTimeMax") != undefined ? _0x47588b.get("page1WatchTimeMax") : 3,
        page1GuanzhuRate: _0x47588b.get("page1GuanzhuRate") != undefined ? _0x47588b.get("page1GuanzhuRate") : 100,
        page1DianzanRate: _0x47588b.get("page1DianzanRate") != undefined ? _0x47588b.get("page1DianzanRate") : 100,
        page1DianzanMin: _0x47588b.get("page1DianzanMin") != undefined ? _0x47588b.get("page1DianzanMin") : 0,
        page1DianzanMax: _0x47588b.get("page1DianzanMax") != undefined ? _0x47588b.get("page1DianzanMax") : 100000,
        page1PinglunRate: _0x47588b.get("page1PinglunRate") != undefined ? _0x47588b.get("page1PinglunRate") : 100,
        page1PinglunMin: _0x47588b.get("page1PinglunMin") != undefined ? _0x47588b.get("page1PinglunMin") : 0,
        page1PinglunMax: _0x47588b.get("page1PinglunMax") != undefined ? _0x47588b.get("page1PinglunMax") : 100000,
        page1PinglunWords: _0x47588b.get("page1PinglunWords") != undefined ? _0x47588b.get("page1PinglunWords") : "1\n2\n3",
        page1Keywords: _0x47588b.get("page1Keywords") != undefined ? _0x47588b.get("page1Keywords") : ""
      };
      return _0xa5e6cd;
    };
    _0x194073.initPage1 = function () {
      var _0x2ec608 = _0x194073.getPage1Data();
      ui.page1ShipinCount.setText(_0x2ec608.page1ShipinCount + "");
      ui.page1WatchTimeMin.setText(_0x2ec608.page1WatchTimeMin + "");
      ui.page1WatchTimeMax.setText(_0x2ec608.page1WatchTimeMax + "");
      ui.page1GuanzhuRate.setText(_0x2ec608.page1GuanzhuRate + "");
      ui.page1DianzanRate.setText(_0x2ec608.page1DianzanRate + "");
      ui.page1PinglunRate.setText(_0x2ec608.page1PinglunRate + "");
      ui.page1PinglunWords.setText(_0x2ec608.page1PinglunWords);
      ui.page1Keywords.setText(_0x2ec608.page1Keywords);
    };
    _0x194073.page1Save = function () {
      _0x47588b.put("page1ShipinCount", parseInt(ui.page1ShipinCount.text()));
      _0x47588b.put("page1WatchTimeMin", parseInt(ui.page1WatchTimeMin.text()));
      _0x47588b.put("page1WatchTimeMax", parseInt(ui.page1WatchTimeMax.text()));
      _0x47588b.put("page1GuanzhuRate", parseInt(ui.page1GuanzhuRate.text()));
      _0x47588b.put("page1DianzanRate", parseInt(ui.page1DianzanRate.text()));
      _0x47588b.put("page1PinglunRate", parseInt(ui.page1PinglunRate.text()));
      _0x47588b.put("page1PinglunWords", ui.page1PinglunWords.text());
      _0x47588b.put("page1Keywords", ui.page1Keywords.text());
      dialogs.build({
        title: "success",
        positive: "save and start",
        negative: "save"
      }).on("positive", function () {
        _0x194073.start();
      }).on("negative", function () {
        toast("success");
      }).show();
    };
    var _0x412530 = _0x171180(0);
    var _0x4b35a7 = _0x171180(9);
    var _0x57a8ce = new (_0x171180(2))();
    this.start = function () {
      if (!_0x412530.checkServer()) {
        return false;
      }
      _0x412530.showConsole("journal");
      log("Please enter the required video page of TTK");
      home();
      _0x57a8ce.index();
      _0x57a8ce.ClickListener({
        clickStart: function _0x152d0d() {
          threads.start(function () {
            _0x194073.action();
          });
        },
        clickStop: function _0x54f2fd() {
          threads.shutDownAll();
          log("stop");
        },
        clickExit: function _0x57b3ea() {
          dialogs.build({
            title: "Are you sure you want to close",
            positive: "ok",
            negative: "cancel"
          }).on("positive", function () {
            _0x57a8ce.close();
            _0x412530.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x7a428 = _0x194073.getPage1Data();
      _0x412530.actionSleep("Start countdown: ", 3);
      for (var _0x44308b = 0; _0x44308b < _0x7a428.page1ShipinCount; _0x44308b++) {
        _0x412530.actionSleep("watch: ", 3);
        var _0xf95233 = true;
        if (_0x5d21ae == 2) {
          var _0x3ef0fe = _0x4b35a7.getShipinDesc();
          _0xf95233 = _0x4b35a7.checkDescContainWords(_0x3ef0fe, _0x7a428.page1Keywords);
        }
        if (_0xf95233 && random(1, 100) < _0x7a428.page1GuanzhuRate) {
          _0x4b35a7.actionGuanzhu();
        }
        if (_0xf95233 && random(1, 100) < _0x7a428.page1DianzanRate) {
          _0x4b35a7.actionDianzan();
        }
        _0xf95233 && random(1, 100) < _0x7a428.page1PinglunRate && _0x4b35a7.jumpClickPinglunqu() && (_0x4b35a7.actionPinglun(_0x7a428.page1PinglunWords), _0x4b35a7.jumpCloseinglunqu());
        _0x4b35a7.shipinSwiperUp();
      }
      alert("END");
    };
  }
  _0x20ef9f.exports = _0x3c60c6;
}, function (_0x108c10, _0x2f25ef, _0x243dc6) {
  "ui";

  var _0x415faa = _0x243dc6(1);
  var _0x4b213f = storages.create("wzke:CODE88");
  _0x4b213f.get("version") == undefined && _0x4b213f.put("version", "1.1.9");
  var _0x701a22 = _0x4b213f.get("version");
  _0x243dc6(12);
  var _0x4087c4 = _0x415faa.host + "/static/imgs/ok/splash1.png";
  ui.layout("\n    <frame w=\"*\" h=\"*\" bg=\"#287efe\">\n        <img id=\"splash\" w=\"240\" h=\"240\" layout_gravity=\"center\" src=\"".concat(_0x4087c4, "\" />\n        <vertical padding=\"16 0 16 80\" h=\"auto\" layout_gravity=\"bottom\">\n            <text gravity=\"center\" id=\"progressText\" textSize=\"16\" textColor=\"#ffffff\" text=\"").concat("版本号: v" + _0x701a22, "\"></text>\n        </vertical>\n    </frame>\n"));
  ui.statusBarColor(_0x415faa.bgColor);
  var _0x1188b9 = new android.view.animation.ScaleAnimation(0.3, 1, 0.3, 1, android.view.animation.Animation.RELATIVE_TO_SELF, 0.5, android.view.animation.Animation.RELATIVE_TO_SELF, 0.5);
  _0x1188b9.setDuration(800);
  _0x1188b9.setFillAfter(true);
  _0x1188b9.setAnimationListener(new android.view.animation.Animation.AnimationListener({
    onAnimationStart: function _0x1769ea(_0x4493f0) {},
    onAnimationEnd: function _0x9875e(_0x2842b8) {
      _0x409d3e();
    },
    onAnimationRepeat: function _0xdb91cc(_0x2b76f0) {}
  }));
  ui.splash.startAnimation(_0x1188b9);
  var _0x31f9f8 = function _0x610cbd() {
    var _0x65ded = threads.disposable();
    var _0x4e9c35 = {
      result: false
    };
    threads.start(function () {
      try {
        var _0xe76f92 = http.get(_0x415faa.host + "web/index/getOem").body.json();
        _0x701a22 < _0xe76f92 && (codePath = engines.myEngine().cwd() + "/main.js", files.write(codePath, http.get(_0x415faa.host + "web/index/getCode").body.string()), _0x4b213f.put("version", _0xe76f92), _0x4e9c35 = {
          result: true
        });
      } catch (_0x1ed0d1) {
        log(_0x1ed0d1);
      }
      _0x65ded.setAndNotify(_0x4e9c35);
    });
    return _0x65ded.blockedGet();
  };
  var _0x3765ee = _0x31f9f8();
  _0x3765ee.result === true && alert("版本更新完成，请重新启动！").then(function () {
    exit();
  });
  function _0x409d3e() {
    var _0x30e1c4 = new (_0x243dc6(4))();
    var _0x4e4fb6 = new (_0x243dc6(13))();
    _0x30e1c4.index("", function (_0x5bb2b1) {
      _0x5bb2b1 != "" && _0x4e4fb6.index(_0x5bb2b1);
    });
    var _0x1bad81 = false;
    ui.emitter.on("back_pressed", function (_0x3fe6f6) {
      !_0x1bad81 ? (toast("再按一次退出"), _0x1bad81 = true, isCanFinishTimeout = setTimeout(function () {
        _0x1bad81 = false;
      }, 2000), _0x3fe6f6.consumed = true) : (clearTimeout(isCanFinishTimeout), _0x3fe6f6.consumed = true, exit());
    });
  }
}, function (_0x463db7, _0x4fb69a, _0x2ed758) {
  "ui";

  var _0x4b3462 = _0x2ed758(1);
  function _0x546c3f() {
    ui.Widget.call(this);
    this.defineAttr("src", function (_0x2ca1b1, _0x4731ac, _0x48e1b7, _0x2cee4f) {
      _0x2ca1b1._img.attr("src", _0x48e1b7);
    });
    this.defineAttr("text", function (_0x30a5df, _0x2203e8, _0x18d9c8, _0x266b9a) {
      _0x30a5df._text.setText(_0x18d9c8);
    });
    this.defineAttr("bgColor", function (_0x259554, _0x200612, _0x3eebc4, _0x400cb1) {
      _0x259554._img.attr("tint", _0x3eebc4);
      _0x259554._text.setTextColor(colors.parseColor(_0x3eebc4));
    });
    this.render = function () {
      var _0x1c58cf = "";
      _0x1c58cf += "<card id=\"_card\" w=\"auto\" h=\"auto\"  margin=\"5 0 -5 0\"  cardCornerRadius=\"0\" cardElevation=\"0\" cardBackgroundColor=\"#00000000\"  cardUseCompatPadding=\"true\" >";
      _0x1c58cf += "    <horizontal margin=\"10 0 15 0\" h=\"auto\" gravity=\"center_vertical\" >";
      _0x1c58cf += "        <img id=\"_img\" tint=\"#000000\" gravity=\"center_vertical\" src=\"@drawable/ic_dashboard_black_48dp\" h=\"*\" w=\"18sp\" baselineAlignBottom=\"false\" bg=\"?selectableItemBackgroundBorderless\"/>";
      _0x1c58cf += "        <text id=\"_text\"  marginLeft=\"5\"  gravity=\"center_vertical\" textStyle=\"bold\"  textColor=\"#000000\" textSize=\"16sp\" />";
      _0x1c58cf += "    </horizontal>";
      _0x1c58cf += "</card>";
      return _0x1c58cf;
    };
  }
  util.extend(_0x546c3f, ui.Widget);
  ui.registerWidget("btnIcon", _0x546c3f);
  function _0x153671() {
    ui.Widget.call(this);
    this.defineAttr("src", function (_0x54121b, _0xa71e13, _0x3abb66, _0x308357) {
      _0x54121b._src.attr("src", _0x3abb66);
    });
    this.defineAttr("text", function (_0x5b2543, _0x4a485f, _0x4821a6, _0x48c323) {
      _0x5b2543._text.setText(_0x4821a6);
    });
    this.defineAttr("bg", function (_0x339e41, _0x12c554, _0xe3492c, _0x5de13e) {
      _0x339e41._bg.attr("src", _0x4b3462.color1);
    });
    this.defineAttr("tip", function (_0x11d8c3, _0x1af5d2, _0x361afd, _0x1218ce) {});
    this.defineAttr("tip2", function (_0x53e4d3, _0x5a1558, _0x1e278e, _0x1831b2) {});
    this.onFinishInflation = function (_0x23c32c) {};
    this.render = function () {
      var _0x4b018b = "<vertical>";
      _0x4b018b += "<card alpha=\"1\"  margin=\"0\" id=\"_cardView\"  cardCornerRadius=\"15\" cardElevation=\"0\" cardUseCompatPadding=\"true\" cardBackgroundColor=\"#ffffff\" >";
      _0x4b018b += " <horizontal layout_gravity=\"center\" gravity=\"center\" >";
      _0x4b018b += "\t<frame   margin=\"2\" layout_gravity=\"center\"  w=\"auto\" h=\"auto\" padding=\"2\"  alpha=\"1\" >";
      _0x4b018b += "\t\t<img id=\"_bg\" w=\"42\" h=\"42\"  radius=\"12\" scaleType=\"center\" />";
      _0x4b018b += "\t\t<img id=\"_src\" w=\"25\" h=\"25\" src=\"@drawable/ic_mic_none_black_48dp\" tint=\"#ffffff\"  layout_gravity=\"center\" />";
      _0x4b018b += "\t</frame>";
      _0x4b018b += " </horizontal>";
      _0x4b018b += "</card>";
      _0x4b018b += "\t<vertical  margin=\"-10 -2\" layout_gravity=\"right|center\"   gravity=\"center\"   >";
      _0x4b018b += "\t\t<text  id=\"_text\" gravity=\"center\"    textSize=\"12\" textColor=\"#000000\"  text=\"内容\" />";
      _0x4b018b += "\t</vertical>";
      _0x4b018b += "</vertical>";
      return _0x4b018b;
    };
  }
  importClass(android.graphics.drawable.GradientDrawable);
  function _0x10001a(_0x5e98e1, _0x1bab55, _0x2256cf) {
    var _0x5432e4 = new GradientDrawable();
    var _0x179f91 = util.java.array("int", 3);
    _0x179f91[0] = colors.parseColor(_0x2256cf);
    _0x179f91[1] = colors.parseColor(_0x1bab55);
    _0x179f91[2] = colors.parseColor(_0x1bab55);
    _0x5432e4.setOrientation(GradientDrawable.Orientation.TL_BR);
    _0x5432e4.setColors(_0x179f91);
    _0x5432e4.setStroke(2, colors.parseColor("#ffffff"));
    _0x5432e4.setCornerRadius(25);
    _0x5e98e1.setBackground(_0x5432e4);
  }
  util.extend(_0x153671, ui.Widget);
  ui.registerWidget("icon2", _0x153671);
  function _0x35d980() {
    ui.Widget.call(this);
    this.defineAttr("src", function (_0xedc896, _0xb43fbe, _0x54d21c, _0x514178) {
      _0xedc896._src.attr("src", _0x54d21c);
    });
    this.defineAttr("_title", function (_0x54aa52, _0x594677, _0x4b956b, _0xd2249b) {
      _0x54aa52._title.setText(_0x4b956b);
    });
    this.defineAttr("_content1", function (_0x2e5ed4, _0x12d9c2, _0x2ca06c, _0x1d9f50) {
      _0x2e5ed4._content1.attr("h", "wrap_content");
      _0x2e5ed4._content1.setText(_0x2ca06c);
    });
    this.defineAttr("_content2", function (_0x5a1975, _0x11be02, _0x5ecb7d, _0x549a22) {
      _0x5a1975._content2.attr("h", "wrap_content");
      _0x5a1975._content2.setText(_0x5ecb7d);
    });
    this.defineAttr("_content3", function (_0x384880, _0x41e9b8, _0x151709, _0x1c50e6) {
      _0x384880._content3.attr("h", "wrap_content");
      _0x384880._content3.setText(_0x151709);
    });
    this.defineAttr("_content4", function (_0x2f119b, _0x5a3546, _0x3bc832, _0x442996) {
      _0x2f119b._content4.attr("h", "wrap_content");
      _0x2f119b._content4.setText(_0x3bc832);
    });
    this.onFinishInflation = function (_0x134614) {
      _0x134614._content.attr("h", "wrap_content");
      _0x134614._more.click(function () {
        var _0x362a7b = _0x134614._content.attr("h");
        _0x362a7b == "wrap_content" && (_0x134614._content.attr("h", "0"), _0x134614._img.attr("rotationX", "180"));
        _0x362a7b == "0" && (_0x134614._content.attr("h", "wrap_content"), _0x134614._img.attr("rotationX", "0"));
      });
    };
    this.render = function () {
      var _0x2ede6a = "";
      _0x2ede6a += "\t<vertical id=\"sdfsdf\" margin=\"5 0\"  gravity=\"center\"  layout_gravity=\"left|center\" >";
      _0x2ede6a += "\t    <horizontal id=\"_more\" gravity=\"center_vertical\">";
      _0x2ede6a += "\t\t    <text id=\"_title\" textSize=\"15\" layout_weight=\"1\"   textColor=\"#1A3657\"  text=\"\" />";
      _0x2ede6a += "\t\t    <img  id=\"_img\" gravity=\"right\"  padding=\"2\"   w=\"30\" h=\"30\" src=\"@drawable/ic_expand_more_black_48dp\" tint=\"#8C8C8C\"  layout_gravity=\"center\" />";
      _0x2ede6a += "\t    </horizontal>";
      _0x2ede6a += "\t    <vertical id=\"_content\" h=\"wrap_content\" padding=\"12 3\" >";
      _0x2ede6a += "\t\t    <text id=\"_content1\"  textSize=\"14\" h=\"0\"   textColor=\"#4D4D4D\"   />";
      _0x2ede6a += "\t\t    <text id=\"_content2\"  textSize=\"14\" h=\"0\" paddingTop=\"3\"  textColor=\"#4D4D4D\"   />";
      _0x2ede6a += "\t\t    <text id=\"_content3\" textSize=\"14\" h=\"0\" paddingTop=\"3\"   textColor=\"#4D4D4D\"   />";
      _0x2ede6a += "\t\t    <text id=\"_content4\"  textSize=\"14\" h=\"0\" paddingTop=\"3\"   textColor=\"#4D4D4D\"   />";
      _0x2ede6a += "\t    </vertical>";
      _0x2ede6a += "\t</vertical>";
      return _0x2ede6a;
    };
  }
  util.extend(_0x35d980, ui.Widget);
  ui.registerWidget("textFold", _0x35d980);
  function _0x9563a6() {
    ui.Widget.call(this);
    var _0x41af02 = 0;
    this.defineAttr("value", function (_0x46ff8d, _0x6ba0eb, _0x1ece7a, _0x34ed6d) {
      _0x46ff8d._value.setText(_0x1ece7a.toString());
    });
    this.defineAttr("minValue", function (_0x1951a9, _0x443925, _0x8c0680, _0x73c618) {
      _0x41af02 = parseInt(_0x8c0680) || 0;
    });
    this.onFinishInflation = function (_0x11a823) {
      _0x11a823._decrement.click(function () {
        var _0x27d7fb = parseInt(_0x11a823._value.getText());
        if (!isNaN(_0x27d7fb) && _0x27d7fb > _0x41af02) {
          _0x11a823._value.setText((_0x27d7fb - 1).toString());
        }
      });
      _0x11a823._increment.click(function () {
        var _0x18ba56 = parseInt(_0x11a823._value.getText());
        !isNaN(_0x18ba56) && _0x11a823._value.setText((_0x18ba56 + 1).toString());
      });
    };
    this.render = function () {
      var _0x360699 = "";
      _0x360699 += "<vertical id=\"stepper\" margin=\"5\" gravity=\"center\">";
      _0x360699 += "    <horizontal gravity=\"center\">";
      _0x360699 += "        <button id=\"_decrement\" text=\"-\" borderRadius=\"6\"  w=\"40\" h=\"40\" gravity=\"center\" layout_gravity=\"center\"/>";
      _0x360699 += "        <text id=\"_value\" textSize=\"18sp\" margin=\"5\" textColor=\"#000000\" />";
      _0x360699 += "        <button id=\"_increment\" text=\"+\" borderRadius=\"6\"  w=\"40\" h=\"40\" gravity=\"center\" layout_gravity=\"center\"/>";
      _0x360699 += "    </horizontal>";
      _0x360699 += "</vertical>";
      return _0x360699;
    };
  }
  util.extend(_0x9563a6, ui.Widget);
  ui.registerWidget("Stepper", _0x9563a6);
  function _0x254fdc() {
    ui.Widget.call(this);
    this.defineAttr("title", function (_0x34cadb, _0x3b9fb9, _0x57e4d2, _0x2a988f) {
      _0x34cadb._title.setText(_0x57e4d2);
    });
    this.defineAttr("bg", function (_0x49431b, _0x2284bc, _0x59bc3a, _0x57f0e3) {
      _0x49431b._card.setCardBackgroundColor(android.graphics.Color.parseColor(_0x59bc3a));
    });
    this.render = function () {
      var _0x58f7f4 = "";
      _0x58f7f4 += "<card id=\"_card\" w=\"*\" h=\"wrap_content\" cardCornerRadius=\"0\"  cardElevation=\"4\" >";
      _0x58f7f4 += "    <horizontal id=\"_content\" w=\"*\" h=\"wrap_content\" paddingTop=\"99px\" paddingBottom=\"10px\" gravity=\"center_vertical\">";
      _0x58f7f4 += "        <horizontal id=\"_backButton\" gravity=\"center_vertical\" margin=\"16 6 16 6\" bg=\"?selectableItemBackgroundBorderless\" >";
      _0x58f7f4 += "            <img id=\"_backButtonIcon\" tint=\"#ffffff\" src=\"@drawable/ic_keyboard_arrow_left_black_48dp\" h=\"24dp\" w=\"24dp\" />";
      _0x58f7f4 += "            <text id=\"_backButtonText\" text=\"返回\" textColor=\"#ffffff\" textSize=\"16sp\" marginLeft=\"2dp\"/>";
      _0x58f7f4 += "        </horizontal>";
      _0x58f7f4 += "        <text id=\"_title\" text=\"Title\" gravity=\"center\"   textColor=\"#ffffff\" textSize=\"20sp\" flex=\"1\" marginLeft=\"-90\"  layout_width=\"match_parent\" layout_gravity=\"center\"/>";
      _0x58f7f4 += "    </horizontal>";
      _0x58f7f4 += "</card>";
      return _0x58f7f4;
    };
  }
  util.extend(_0x254fdc, ui.Widget);
  ui.registerWidget("MyAppBar", _0x254fdc);
  var _0x4966f1 = function () {
    importClass(android.graphics.PorterDuff);
    importClass(android.content.res.ColorStateList);
    importClass(android.graphics.drawable.LayerDrawable);
    var _0x3d6fd6 = context.getResources();
    var _0xb4599c = _0x3d6fd6.getDisplayMetrics().density;
    util.extend(_0x6ed8b8, ui.Widget);
    function _0x6ed8b8() {
      ui.Widget.call(this);
      this.defineAttr("trackColor", function (_0x2fcdb5, _0x3173ec, _0xfe90ee, _0xbd2ea5) {
        _0x2fcdb5.widget.track_color = _0xfe90ee;
      });
    }
    _0x6ed8b8.prototype.track_color = "#4cb0f9";
    _0x6ed8b8.prototype.render = function () {
      return "<Switch />";
    };
    _0x6ed8b8.prototype.onViewCreated = function (_0x278e8c) {
      _0x278e8c.createColorStateList = function (_0x2dce05, _0x296f52) {
        return _0x247fa5(_0x2dce05, _0x296f52);
      };
      _0x278e8c.setTrackTintMode(PorterDuff.Mode.SRC_OUT);
      var _0x7fe964 = _0x278e8c.getTrackDrawable().getDrawable(0);
      _0x7fe964.setCornerRadius(_0x4ca1d9(15));
      var _0x68fd26 = new LayerDrawable([_0x7fe964]);
      _0x68fd26.setLayerWidth(0, _0x4ca1d9(38));
      _0x68fd26.setPadding(_0x4ca1d9(2.5), _0x4ca1d9(1.5), _0x4ca1d9(2.5), _0x4ca1d9(1.5));
      _0x278e8c.setTrackDrawable(_0x68fd26);
    };
    _0x6ed8b8.prototype.onFinishInflation = function (_0x522877) {
      _0x522877.setThumbTintList(_0x247fa5("#FFFFFF", "#FFFFFF"));
      _0x522877.setTrackTintList(_0x247fa5("#7A999999", _0x522877.widget.track_color));
    };
    function _0x4ca1d9(_0x2ccff3) {
      return parseInt(Math.floor(_0x2ccff3 * _0xb4599c + 0.5));
    }
    function _0x247fa5(_0x2e4ce1, _0x42636c) {
      var _0x46936c = new Array(2);
      _0x46936c[0] = [-android.R.attr.state_checked];
      _0x46936c[1] = [android.R.attr.state_checked];
      var _0x2ab5b7 = new Array(2);
      _0x2ab5b7[0] = colors.parseColor(_0x2e4ce1);
      _0x2ab5b7[1] = colors.parseColor(_0x42636c);
      return new ColorStateList(_0x46936c, _0x2ab5b7);
    }
    ui.registerWidget("SwitchWidget-Se7en", _0x6ed8b8);
    return _0x6ed8b8;
  }();
}, function (_0x74d9b8, _0x502a4d, _0xc11033) {
  var _0x5a897b = _0xc11033(4);
  function _0x410d7e() {
    var _0x12d745 = this;
    this.isRequestScreenCapture = false;
    this.loginInfo = "";
    var _0x54bfa0 = 0;
    var _0x326fea = 0;
    var _0x5a7699 = parseInt(new Date().getTime() / 1000);
    var _0x48d3b7 = _0xc11033(0);
    var _0x571e1e = new (_0xc11033(14))(_0x12d745);
    var _0x4b629b = new (_0xc11033(15))(_0x12d745);
    var _0xfb5c67 = new (_0xc11033(16))(_0x12d745);
    var _0x3ea245 = new (_0xc11033(17))(_0x12d745);
    var _0x52ea91 = new (_0xc11033(18))(_0x12d745);
    var _0x3792a9 = new (_0xc11033(19))(_0x12d745);
    var _0x5ec38a = new (_0xc11033(20))(_0x12d745);
    var _0x15fa6a = new (_0xc11033(21))(_0x12d745);
    var _0xae1585 = new (_0xc11033(22))(_0x12d745);
    var _0x137d22 = new (_0xc11033(23))(_0x12d745);
    var _0x48299 = new (_0xc11033(24))(_0x12d745);
    var _0x20448f = new (_0xc11033(26))(_0x12d745);
    var _0x2be420 = new (_0xc11033(27))(_0x12d745);
    var _0x8a5f05 = new (_0xc11033(28))(_0x12d745);
    var _0x31969b = new (_0xc11033(29))(_0x12d745);
    var _0x31b482 = new (_0xc11033(30))(_0x12d745);
    var _0x372153 = new (_0xc11033(31))(_0x12d745);
    var _0x2ccbb1 = new (_0xc11033(32))(_0x12d745);
    var _0x101e92 = new (_0xc11033(33))(_0x12d745);
    var _0x585ecb = new (_0xc11033(34))(_0x12d745);
    var _0x35b84e = new (_0xc11033(35))(_0x12d745);
    var _0x59daa0 = new (_0xc11033(37))(_0x12d745);
    var _0x2b9bdd = new (_0xc11033(38))(_0x12d745);
    var _0x5d2859 = new (_0xc11033(39))(_0x12d745);
    var _0x80fb79 = new (_0xc11033(40))(_0x12d745);
    var _0x1ad40b = new (_0xc11033(41))(_0x12d745);
    var _0x18a758 = new (_0xc11033(10))(_0x12d745, 1);
    var _0x435127 = new (_0xc11033(10))(_0x12d745, 2);
    var _0xcfefef = new (_0xc11033(42))(_0x12d745);
    var _0x37eb13 = new (_0xc11033(44))(_0x12d745);
    var _0x56cf8f = new (_0xc11033(45))(_0x12d745);
    var _0x24550f = new (_0xc11033(47))(_0x12d745);
    var _0x27201f = _0xc11033(1);
    var _0x1997c5 = _0xc11033(7);
    var _0x155736 = _0x48d3b7.getStatusBarHight();
    this.index = function (_0x12811d) {
      this.loginInfo = _0x12811d;
      _0x48d3b7.setFullWin();
      ui.statusBarColor(_0x27201f.bgColor);
      _0x12d745.view(0);
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
    };
    var _0x103b9a = _0xc11033(6);
    _0x12d745.LgObj = _0x103b9a;
    var _0x375f1e = _0x27201f.bgColor;
    var _0x405868 = "#999999";
    var _0x5a032c = [];
    var _0x7361cb = 0;
    function _0x16ff2() {
      ui.Widget.call(this);
      this.onFinishInflation = function (_0xd8c0bd) {
        _0x5a032c = [];
        title_list = [["主页", "@drawable/ic_home_black_48dp"], ["发现", "@drawable/ic_vibration_black_48dp"], ["个人", "@drawable/ic_perm_identity_black_48dp"]];
        for (var _0x3e0963 = 0; _0x3e0963 < title_list.length; _0x3e0963++) {
          iconName = title_list[_0x3e0963][0];
          iconImg = title_list[_0x3e0963][1];
          _0x5a032c[_0x3e0963] = ui.inflate("<vertical layout_weight=\"1\" id=\"_bg\" w=\"*\" bg=\"#ffffff\" padding=\"0 0 0 0\" gravity=\"center\" >\n                    <img id=\"_src\" marginTop=\"-5\" src=\"".concat(iconImg, "\" w=\"24\" tint=\"#6b6a6a\" />\n                    <text id=\"_text\" text=\"").concat(iconName, "\" marginBottom=\"5\" marginTop=\"-10\" w=\"auto\" textSize=\"12\" textColor=\"#6b6a6a\" /> </vertical>"), _0xd8c0bd._tabs, true);
        }
        _0x5a032c[_0x7361cb]._src.attr("tint", _0x375f1e);
        _0x5a032c[_0x7361cb]._text.setTextColor(colors.parseColor(_0x375f1e));
        _0xd8c0bd.tabs.selectedTabIndicatorColor = colors.parseColor("#ffffff");
      };
      this.render = function () {
        return "<card w=\"*\" h=\"auto\" cardElevation=\"2dp\" foreground=\"?selectableItemBackground\"><horizontal id=\"_tabs\" /><tabs id=\"tabs\" /></card>";
      };
    }
    util.extend(_0x16ff2, ui.Widget);
    ui.registerWidget("tabs-layout", _0x16ff2);
    this.view = function () {
      _0x375f1e = _0x27201f.bgColor;
      ui.layout("\n            <frame >\n                <vertical>\n                    <viewpager w=\"*\" h=\"*\" id=\"viewpagerBottom\" bg=\"#f5f8ff\" >\n                        <ScrollView><vertical w=\"*\" h=\"*\" id=\"mainPage\" ></vertical></ScrollView>\n                        <ScrollView><vertical w=\"*\" h=\"*\" id=\"dyPage\" ></vertical></ScrollView>\n                        <ScrollView><vertical w=\"*\" h=\"*\" id=\"personal\" ></vertical></ScrollView>\n                    </viewpager>\n                </vertical>\n                <tabs-layout data=\"\" layout_gravity=\"bottom\" />\n            </frame>\n        ");
      ui.tabs.setupWithViewPager(ui.viewpagerBottom);
      ui.viewpagerBottom.currentItem = _0x7361cb;
      ui.viewpagerBottom.setOnPageChangeListener({
        onPageSelected: function _0x44c116(_0x23e915) {
          _0x54bfa0 = _0x23e915;
          _0x5a032c[_0x7361cb]._src.attr("tint", _0x405868);
          _0x5a032c[_0x7361cb]._text.setTextColor(colors.parseColor(_0x405868));
          _0x5a032c[_0x23e915]._src.attr("tint", _0x375f1e);
          _0x5a032c[_0x23e915]._text.setTextColor(colors.parseColor(_0x375f1e));
          _0x7361cb = _0x23e915;
          _0x23e915 == 1 && (ui.runHour.setText(_0x1997c5.getRunTime().hours.toString()), ui.runMin.setText(_0x1997c5.getRunTime().minutes.toString()), ui.followCount.setText(_0x1997c5.getRunData("follow").toString()), ui.likeCount.setText(_0x1997c5.getRunData("like").toString()), ui.visitCount.setText(_0x1997c5.getRunData("visit").toString()), ui.totalCount.setText(_0x1997c5.getTotal().toString()));
        }
      });
      _0x7361cb == 0 ? _0x12d745.mainPage() : ui.post(function () {
        _0x12d745.mainPage();
      });
      _0x7361cb == 1 ? _0x12d745.dyPage() : ui.post(function () {
        _0x12d745.dyPage();
      });
      _0x7361cb == 2 ? _0x12d745.personal() : ui.post(function () {
        _0x12d745.personal();
      });
    };
    _0x12d745.updateColor = function (_0x495a13) {
      var _0x3238b4 = new GradientDrawable();
      var _0x1e5ac1 = util.java.array("int", 3);
      _0x1e5ac1[0] = colors.parseColor(_0x27201f.color2);
      _0x1e5ac1[1] = colors.parseColor(_0x27201f.color1);
      _0x1e5ac1[2] = colors.parseColor("#ffffff");
      _0x3238b4.setShape(GradientDrawable.RECTANGLE);
      _0x3238b4.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);
      _0x3238b4.setColors(_0x1e5ac1);
      _0x3238b4.setCornerRadius(30);
      _0x495a13.setBackground(_0x3238b4);
    };
    _0x12d745.mainPage = function () {
      var _0x4bfc3f = _0x12d745.getLanguageType();
      var _0x5d491d = new _0x103b9a(_0x4bfc3f.languageType);
      var _0x4144d9 = parseInt(device.width * 0.1);
      var _0x4ac7c6 = parseInt(device.width * 0.48);
      var _0x4e5eeb = parseInt(device.width);
      var _0x429930 = ui.inflate("\n            <vertical>\n                <frame w=\"*\" h=\"auto\" gravity=\"top|center\" >\n                    <img id=\"page1Bg\" gravity=\"center\" scaleY=\"1.2\" scaleX=\"1.2\" w=\"".concat(_0x4e5eeb, "px\" h=\"").concat(_0x4ac7c6, "px\" scaleType=\"fitXY\" marginTop=\"").concat(-_0x4144d9, "px\" />\n                    <vertical marginTop=\"").concat(_0x155736, "px\" gravity=\"center\" >\n                        <img padding=\"15 5\" id=\"pagebanner\" alpha=\"1\" h=\"").concat(_0x4ac7c6, "px\" w=\"").concat(_0x4e5eeb, "px\" scaleType=\"fitXY\" radius=\"45px\" elevation=\"4dp\" />\n                    </vertical>\n                </frame>\n                <vertical>\n                    <horizontal layoutSum=\"2\" >\n                        <vertical layout_weight=\"1\" >\n                            <card margin=\"15 6 4 6\" h=\"auto\" padding=\"5\" cardCornerRadius=\"12\" cardElevation=\"2dp\">\n                                <horizontal gravity=\"center\">\n                                    <frame margin=\"6 10\" alpha=\"1\" layout_gravity=\"center\">\n                                        <img id=\"_bg\" w=\"32\" h=\"32\" src=\"").concat(_0x27201f.color3, "\" radius=\"16\" scaleType=\"center\" />\n                                        <img id=\"_src\" w=\"18\" h=\"18\" src=\"@drawable/ic_play_circle_filled_white_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                                    </frame>\n                                    <SwitchWidget-Se7en layout_gravity=\"center\" textColor=\"#1A3657\" textSize=\"18dp\" id=\"autoFloaty\" text=\" 悬浮窗\" trackColor='").concat(_0x27201f.color1, "' checked=\"\" />\n                                </horizontal>\n                            </card>\n                        </vertical>\n                        <vertical layout_weight=\"1\" >\n                            <card margin=\"4 6 15 6\" h=\"auto\" padding=\"5\" cardCornerRadius=\"12\" cardElevation=\"2dp\">\n                                <horizontal gravity=\"center\">\n                                    <frame margin=\"6 10\" alpha=\"1\" layout_gravity=\"center\">\n                                        <img id=\"_bg\" w=\"32\" h=\"32\" src=\"").concat(_0x27201f.color3, "\" radius=\"16\" scaleType=\"center\" />\n                                        <img id=\"_src\" w=\"18\" h=\"18\" src=\"@drawable/ic_touch_app_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                                    </frame>\n                                    <SwitchWidget-Se7en layout_gravity=\"center\" textColor=\"#1A3657\" textSize=\"18dp\" id=\"autoService\" text=\" 无障碍\" trackColor='").concat(_0x27201f.color1, "' checked=\"\" />\n                                </horizontal>\n                            </card>\n                        </vertical>\n                    </horizontal>\n                </vertical>\n\n                <vertical marginBottom=\"70\" >\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"引流专区\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"icon1\" bg=\"#337ab7\" text=\"基础观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_stay_current_portrait_black_48dp\" />\n                                <icon2 id=\"icon2\" bg=\"#5cb85c\" text=\"垂直观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_perm_device_information_black_48dp\" />\n                                <icon2 id=\"J4\" bg=\"#ffc107\" text=\"点赞浏览\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_favorite_black_48dp\" />\n                            </horizontal>\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"icon3\" bg=\"#5bc0de\" text=\"普通浏览\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_bookmark_black_48dp\" />\n                                <icon2 id=\"J2_2\" alpha=\"1\" bg=\"#ffc107\" text=\"智能浏览\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_flip_to_back_black_48dp\" />\n                                <icon2 id=\"znyl\" bg=\"#0b2e64\" text=\"智能引流\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_phonelink_ring_black_48dp\" />\n                            </horizontal>\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"J1\" bg=\"#ff9800\" text=\"评论浏览\" tip=\"视频页面\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 id=\"page1\" bg=\"#5cb85c\" text=\"喜欢浏览\" tip=\"视频页面\" layout_weight=\"1\" src=\"@drawable/ic_class_black_48dp\" />\n                                <icon2 id=\"J3\" bg=\"#8bc34a\" text=\"直播浏览\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_vibration_black_48dp\" />\n                            </horizontal>\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"J2\" bg=\"#e91e63\" text=\"粉丝浏览\" tip=\"粉丝列表\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                                <icon2 alpha='0' id=\"XHS2\" bg=\"#ff5722\" text=\"占位\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 alpha=\"0\" bg=\"#009688\" text=\"占位\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"拓客专区\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"3\" >\n                                <icon2 id=\"pltk\" bg=\"#ff9800\" text=\"评论拓客\" tip=\"视频页面\" layout_weight=\"1\" src=\"@drawable/ic_speaker_notes_black_48dp\" />\n                                <icon2 id=\"icon3_1\" bg=\"#f0ad4e\" text=\"同城宣传\" tip=\"同城\" layout_weight=\"1\" src=\"@drawable/ic_supervisor_account_black_48dp\" />\n                                <icon2 id=\"icon4\" bg=\"#f0ad4e\" text=\"万能拓客\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_tablet_android_black_48dp\" />\n                            </horizontal>\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"icon6\" bg=\"#5cb85c\" text=\"行业搜索\" tip=\"搜索用户列表\" layout_weight=\"1\" src=\"@drawable/ic_my_location_black_48dp\" />\n                                <icon2 id=\"tgtk\" bg=\"#e91e63\" text=\"团购拓客\" tip=\"团购拓客\" layout_weight=\"1\" src=\"@drawable/ic_child_friendly_black_48dp\" />\n                                <icon2 id=\"jztk\" bg=\"#ffc107\" text=\"行业拓客\" tip=\"行业拓客\" layout_weight=\"1\" src=\"@drawable/ic_local_play_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"实用工具\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"icon5\" bg=\"#337ab7\" text=\"直播氛围\" tip=\"直播间\" layout_weight=\"1\" src=\"@drawable/ic_mic_none_black_48dp\" />\n                                <icon2 id=\"T1\" bg=\"#009688\" text=\"清理关注\" tip=\"取关\" layout_weight=\"1\" src=\"@drawable/ic_cancel_black_48dp\" />\n                                <icon2 id=\"B1\" bg=\"#ff5722\" text=\"AI录制\" layout_weight=\"1\" src=\"@drawable/ic_touch_app_black_48dp\" />\n                            </horizontal>\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"T2\" bg=\"#3385ff\" text=\"取消喜欢\" tip=\"粉丝列表运行\" layout_weight=\"1\" src=\"@drawable/ic_favorite_black_48dp\" />\n                                <icon2 id=\"T3\" bg=\"#00BCD4\" text=\"用户回关\" tip=\"粉丝列表运行\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                                <icon2 id=\"T4\" bg=\"#673ab7\" text=\"用户回访\" tip=\"粉丝列表运行\" layout_weight=\"1\" src=\"@drawable/ic_favorite_border_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"火山版\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"HS2\" alpha=\"1\" bg=\"#3385ff\" text=\"基础观看\" tip=\"粉丝列表运行\" layout_weight=\"1\" src=\"@drawable/ic_stay_current_portrait_black_48dp\" />\n                                <icon2 id=\"HS1\" bg=\"#009688\" text=\"粉丝观看\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                                <icon2 id=\"HS1_2\" bg=\"#009688\" text=\"智能浏览\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_album_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"极速版\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"3\">\n                                <icon2 id=\"JS2\" alpha=\"1\" bg=\"#3385ff\" text=\"基础观看\" tip=\"粉丝列表运行\" layout_weight=\"1\" src=\"@drawable/ic_stay_current_portrait_black_48dp\" />\n                                <icon2 id=\"JS1\" bg=\"#009688\" text=\"粉丝观看\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                                <icon2 id=\"JS1_2\" bg=\"#009688\" text=\"智能浏览\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_album_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon src=\"@drawable/ic_dashboard_black_48dp\" text=\"WX\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"3\" w=\"*\">\n                                <icon2 id=\"Wx1\" bg=\"#ff9800\" text=\"群抢红包\" tip=\"不限版本\" layout_weight=\"1\" src=\"@drawable/ic_drafts_black_48dp\" />\n                                <icon2 id=\"Wx2\" bg=\"#ff1100\" text=\"评论浏览\" tip=\"不限版本\" layout_weight=\"1\" src=\"@drawable/ic_mood_black_48dp\" />\n                                <icon2 alpha=\"0\" bg=\"#009688\" text=\"占位\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"筷手\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal  w=\"match_parent\"  >\n                                <icon2 id=\"K1\" bg=\"#ff4907\" text=\"行业拓客\" tip=\"不限版本\" layout_weight=\"1\" src=\"@drawable/ic_smartphone_black_48dp\" />\n                                <icon2 id=\"K2\" bg=\"#02a0e9\" text=\"评论浏览\" tip=\"不限版本\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 id=\"K3\" bg=\"#009688\" text=\"粉丝浏览\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"小红薯\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal  w=\"match_parent\"  >\n                                <icon2 id=\"XHS1\" bg=\"#0b2e64\" text=\"万能观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_phonelink_ring_black_48dp\" />\n                                <icon2 alpha='0' id=\"XHS2\" bg=\"#ff5722\" text=\"占位\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 alpha=\"0\" bg=\"#009688\" text=\"占位\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"").concat(_0x5d491d.ttk, "\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal  w=\"match_parent\"  >\n                                <icon2 id=\"Tkk1\" bg=\"#0b2e64\" text=\"普通观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_phonelink_ring_black_48dp\" />\n                                <icon2 id=\"Tkk2\" bg=\"#ff5722\" text=\"垂直观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 id=\"Tkjzyl\" bg=\"#009688\" text=\"精准引流\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                            <horizontal  w=\"match_parent\"  >\n                                <icon2 id=\"tkbdsx\" bg=\"#673ab7\" text=\"榜单私信\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_phonelink_ring_black_48dp\" />\n                                <icon2 alpha=\"0\" bg=\"#ff5722\" text=\"垂直观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 alpha=\"0\" bg=\"#009688\" text=\"精准引流\" tip=\"粉丝观看\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                    <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                        <vertical margin=\"0 10\">\n                            <btnIcon text=\"B站\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal  w=\"match_parent\"  >\n                                <icon2 id=\"BZ1\" bg=\"#ff5722\" text=\"万能观看\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_phonelink_ring_black_48dp\" />\n                                <icon2 alpha='0' id=\"BZ2\" bg=\"#ff5722\" text=\"占位\" tip=\"").concat(_0x5d491d.tip3, "\" layout_weight=\"1\" src=\"@drawable/ic_record_voice_over_black_48dp\" />\n                                <icon2 alpha=\"0\" bg=\"#009688\" text=\"占位\" tip=\"占位\" layout_weight=\"1\" src=\"@drawable/ic_face_black_48dp\" />\n                            </horizontal>\n                        </vertical>\n                    </card>\n                </vertical>\n            </vertical>\n        "));
      _0x429930.pagebanner.attr("src", _0x27201f.Theme.banner);
      _0x48d3b7.setBackgroundRoundedRectangleGradient(_0x429930.page1Bg, _0x27201f.color2, _0x27201f.color2, 200);
      _0x429930.autoService.checked = auto.service != null;
      _0x429930.autoService.on("check", function (_0x44b68b) {
        _0x44b68b && app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
        !_0x44b68b && auto.service != null && auto.service.disableSelf();
      });
      _0x429930.autoFloaty.checked = floaty.checkPermission();
      _0x429930.autoFloaty.on("check", function (_0x41538a) {
        if (!floaty.checkPermission() && _0x41538a) {
          try {
            var _0x4cde5f = app.intent({
              action: "android.settings.action.MANAGE_OVERLAY_PERMISSION",
              data: "package:" + context.getPackageName()
            });
            activity.startActivityForResult(_0x4cde5f, 1);
            activity.getEventEmitter().on("activity_result", function (_0x281fe3, _0x1b1d02, _0x3ba9f1) {
              _0x281fe3 == 1;
            });
          } catch (_0x46e2a5) {
            floaty.requestPermission();
          }
        }
      });
      _0x326fea == 0 && (_0x326fea++, ui.emitter.on("resume", function () {
        undefined != _0x429930.autoService && (_0x429930.autoService.checked = auto.service != null);
        undefined != _0x429930.autoFloaty && (_0x429930.autoFloaty.checked = floaty.checkPermission());
      }));
      _0x429930.icon1.click(function () {
        _0x571e1e.index();
      });
      _0x429930.icon2.click(function () {
        _0x4b629b.index();
      });
      _0x429930.icon3.click(function () {
        _0xfb5c67.index("普通浏览");
      });
      _0x429930.icon3_1.click(function () {
        _0xfb5c67.index("同城宣传");
      });
      _0x429930.icon4.click(function () {
        _0x3ea245.index();
      });
      _0x429930.page1.click(function () {
        _0x24550f.index();
      });
      _0x429930.icon5.click(function () {
        _0x52ea91.index();
      });
      _0x429930.icon6.click(function () {
        _0x3792a9.index();
      });
      _0x429930.B1.click(function () {
        _0x5ec38a.index();
      });
      _0x429930.J1.click(function () {
        _0x20448f.index();
      });
      _0x429930.jztk.click(function () {
        _0x15fa6a.index();
      });
      _0x429930.pltk.click(function () {
        _0xae1585.index();
      });
      _0x429930.tgtk.click(function () {
        _0x137d22.index();
      });
      _0x429930.znyl.click(function () {
        _0x48299.index();
      });
      _0x429930.J2.click(function () {
        _0x2be420.index("J2");
      });
      _0x429930.J2_2.click(function () {
        _0x2be420.index("J2_2");
      });
      _0x429930.J3.click(function () {
        _0x8a5f05.index();
      });
      _0x429930.T1.click(function () {
        _0x31969b.index();
      });
      _0x429930.T2.click(function () {
        _0x31b482.index();
      });
      _0x429930.T3.click(function () {
        _0x372153.index();
      });
      _0x429930.T4.click(function () {
        _0x2ccbb1.index();
      });
      _0x429930.J4.click(function () {
        _0x101e92.index();
      });
      _0x429930.HS1.click(function () {
        _0x2be420.index("HS1");
      });
      _0x429930.HS1_2.click(function () {
        _0x2be420.index("HS1_2");
      });
      _0x429930.HS2.click(function () {
        _0x571e1e.index("HS2");
      });
      _0x429930.JS1.click(function () {
        _0x2be420.index("JS1");
      });
      _0x429930.JS2.click(function () {
        _0x571e1e.index("JS2");
      });
      _0x429930.JS1_2.click(function () {
        _0x2be420.index("JS1_2");
      });
      _0x429930.Wx1.click(function () {
        _0x585ecb.index();
      });
      _0x429930.Wx2.click(function () {
        _0x35b84e.index();
      });
      _0x429930.K1.click(function () {
        _0x59daa0.index();
      });
      _0x429930.K2.click(function () {
        _0x2b9bdd.index();
      });
      _0x429930.K3.click(function () {
        _0x5d2859.index();
      });
      _0x429930.Tkk1.click(function () {
        _0x18a758.index();
      });
      _0x429930.Tkk2.click(function () {
        _0x435127.index();
      });
      _0x429930.Tkjzyl.click(function () {
        _0x80fb79.index();
      });
      _0x429930.tkbdsx.click(function () {
        _0x1ad40b.index();
      });
      _0x429930.BZ1.click(function () {
        _0xcfefef.index();
      });
      _0x429930.XHS1.click(function () {
        _0x56cf8f.index();
      });
      ui.mainPage.addView(_0x429930);
    };
    _0x12d745.dyPage = function () {
      var _0x33e210 = _0x12d745.getLanguageType();
      var _0x4a9343 = new _0x103b9a(_0x33e210.languageType);
      var _0x41dfe5 = _0x27201f.Theme.runDataBg;
      var _0x4e204b = parseInt(device.width * 0.5);
      var _0x191994 = parseInt(device.width);
      var _0x29e5aa = _0x27201f.Theme.text;
      var _0x242081 = ui.inflate("\n            <vertical paddingBottom=\"100\" >\n                <vertical w=\"*\" h=\"auto\" marginTop=\"".concat(_0x155736, "px\" paddingTop=\"8\" >\n                    <horizontal gravity=\"center\">\n                        <btnIcon text=\"运行数据\" src=\"@drawable/ic_timer_black_48dp\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                        <text id=\"resetRunData\" textColor=\"").concat(_0x27201f.colorButton, "\" h=\"auto\" padding=\"20 0\" gravity=\"right\" textSize=\"14sp\" w=\"*\" text=\"重置\"></text>\n                    </horizontal>\n                    <vertical h=\"").concat(_0x4e204b, "px\" w=\"").concat(_0x191994, "px\" gravity=\"center\"  >\n                        <img margin=\"15 0\" src=\"").concat(_0x41dfe5, "\" alpha=\"1\" h=\"").concat(_0x4e204b, "px\" w=\"*\" />\n                    </vertical>\n                    <vertical gravity=\"right|center\" padding=\"28 0\" marginTop=\"").concat(-_0x4e204b, "px\" h=\"").concat(_0x4e204b, "px\" w=\"").concat(_0x191994, "px\">\n                        <vertical gravity=\"center\" w=\"auto\" h=\"*\" >\n                            <horizontal gravity=\"center\">\n                                <vertical padding=\"12 6\" gravity=\"center\">\n                                    <text textColor=\"").concat(_0x29e5aa, "\" id=\"totalCount\" gravity=\"center\" textStyle=\"bold\" textSize=\"20dp\" ></text>\n                                    <text textColor=\"").concat(_0x29e5aa, "\" gravity=\"center\" textSize=\"18dp\" text=\"曝光量\"></text>\n                                </vertical>\n                                <vertical padding=\"12 6\" gravity=\"center\">\n                                    <horizontal gravity=\"center|bottom\">\n                                        <text textColor=\"").concat(_0x29e5aa, "\" id=\"runHour\" gravity=\"center\" textStyle=\"bold\" textSize=\"20dp\" ></text>\n                                        <text textColor=\"").concat(_0x29e5aa, "\" textSize=\"12dp\" padding=\"3 0\" text=\"时\"></text>\n                                        <text textColor=\"").concat(_0x29e5aa, "\" id=\"runMin\" gravity=\"center\" textStyle=\"bold\" textSize=\"20dp\" ></text>\n                                        <text textColor=\"").concat(_0x29e5aa, "\" textSize=\"12dp\" paddingLeft=\"3\" text=\"分\"></text>\n                                    </horizontal>\n                                    <text textColor=\"").concat(_0x29e5aa, "\" gravity=\"center\" textSize=\"18dp\" text=\"运行时长\"></text>\n                                </vertical>\n                            </horizontal>\n                            <horizontal gravity=\"center\">\n                                <vertical padding=\"8 6\" gravity=\"center\">\n                                    <text textColor=\"").concat(_0x29e5aa, "\" id=\"followCount\" gravity=\"center\" textStyle=\"bold\" textSize=\"18dp\" ></text>\n                                    <text textColor=\"").concat(_0x29e5aa, "\" gravity=\"center\" textSize=\"16dp\" text=\"关注\"></text>\n                                </vertical>\n                                <vertical padding=\"8 6\" gravity=\"center\">\n                                    <text textColor=\"").concat(_0x29e5aa, "\" id=\"likeCount\" gravity=\"center\" textStyle=\"bold\" textSize=\"18dp\" ></text>\n                                    <text textColor=\"").concat(_0x29e5aa, "\" gravity=\"center\" textSize=\"16dp\" text=\"点赞\"></text>\n                                </vertical>\n                                <vertical padding=\"8 6\" gravity=\"center\">\n                                    <text textColor=\"").concat(_0x29e5aa, "\" id=\"visitCount\" gravity=\"center\" textStyle=\"bold\" textSize=\"18dp\" ></text>\n                                    <text textColor=\"").concat(_0x29e5aa, "\" gravity=\"center\" textSize=\"16dp\" text=\"留痕\"></text>\n                                </vertical>\n                            </horizontal>\n                        </vertical>\n                    </vertical>\n                </vertical>\n\n                <vertical w=\"*\" h=\"auto\">\n                    <btnIcon text=\"运营知识\" src=\"@drawable/ic_help_outline_black_48dp\" bgColor=\"").concat(_0x27201f.colorButton, "\" />\n                    <card id=\"page1Tips1\" margin=\"10 0\" h=\"auto\" cardBackgroundColor=\"#ffffff\" cardCornerRadius=\"12\" cardElevation=\"2dp\" cardUseCompatPadding=\"true\"  >\n                        <vertical h=\"*\" margin=\"8 10\" >\n                            <textFold _title=\"1、内容创作\" w=\"*\"\n                                _content1=\"• 确保原创：不搬运他人视频，不进行伪搬运，自己创作独特、有创意的\"\n                                _content2=\"• 积极健康：不发布暴力与犯罪、时政有害及不实、侵犯人身权益等违反平台规则的十类行为内容。\"\n                                _content3=\"• 杜绝虚假：不进行虚假宣传、夸大产品效果等过度营销行为，不刷量。\"\n                                _content4=\"• 注意版权：不使用未经授权的视频、音乐、图片、字体等素材。\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#2A5CAA\" />\n                            <textFold _title=\"2、账号操作\" w=\"*\"\n                                _content1=\"• 正常使用：不频繁切换账号，不短时间内大量点赞、评论或关注，模拟真实用户行为。\"\n                                _content2=\"• 完善信息：填写完整的个人信息，如头像、简介等，提升账号信誉度。\"\n                                _content3=\"• 避免诱导：不在作品中诱导用户脱离平台，如留手机号、WX号等站外引流行为。\"\n                                _content4=\"• 谨慎私信：私信内容不包含违禁词、广告等违规信息。\" />\n                            <img margin=\"12 2\" h=\"1px\" w=\"*\" bg=\"#2A5CAA\" />\n                            <textFold _title=\"3、直播规范\" w=\"*\"\n                                _content1=\"• 杜绝广告：不在直播间挂二维码、WX号等做广告引流。\"\n                                _content2=\"• 传播正向：不传播消极言论、负面导向等不良信息。\"\n                                _content3=\"• 注意封面：不使用着装暴露、动作低俗等违规封面。\"\n                                _content4=\"• 合规带货：直播间不卖平台禁售商品。\" />\n                        </vertical>\n                    </card>\n                </vertical>\n\n            </vertical>\n        "));
      _0x242081.resetRunData.click(function () {
        _0x1997c5.clear();
        _0x242081.runHour.setText("0");
        _0x242081.runMin.setText("0");
        _0x242081.followCount.setText("0");
        _0x242081.likeCount.setText("0");
        _0x242081.visitCount.setText("0");
        _0x242081.totalCount.setText("0");
        toast("运行数据已重置");
      });
      ui.dyPage.addView(_0x242081);
    };
    _0x12d745.personal = function () {
      function _0x519668(_0x9e4ddb) {
        var _0x3ab192 = new Date(_0x9e4ddb * 1000);
        var _0x6ab10f = _0x3ab192.getFullYear() + "年";
        var _0x449c94 = (_0x3ab192.getMonth() + 1 < 10 ? "0" + (_0x3ab192.getMonth() + 1) : _0x3ab192.getMonth() + 1) + "月";
        var _0x10ebf8 = _0x3ab192.getDate() + "日";
        return _0x6ab10f + _0x449c94 + _0x10ebf8;
      }
      var _0x31ad3e = _0x12d745.loginInfo.confirmTime;
      var _0x4db295 = _0x12d745.loginInfo.days;
      var _0x24e92f = _0x519668(_0x31ad3e + 86400 * _0x4db295);
      _0x4db295 == undefined && (_0x24e92f = "待更新");
      var _0x37b985 = _0x12d745.loginInfo.customer_phone;
      var _0x4a95a4 = _0x12d745.loginInfo.jihuoma;
      var _0x846d75 = _0x12d745.getLanguageType();
      var _0x36d13a = new _0x103b9a(_0x846d75.languageType);
      var _0x104c79 = 0;
      var _0x1a92d0 = parseInt(device.width * 0.42);
      var _0x2d55fa = parseInt(device.width);
      var _0x49659b = parseInt(device.width * 0.08);
      var _0x286fbc = _0x27201f.Theme.avatar;
      var _0x111c1a = device.brand;
      var _0x43a777 = device.model;
      var _0x453c58 = storages.create("wzke:CODE88");
      var _0x12434e = _0x453c58.get("version") ? _0x453c58.get("version") : _0x12434e;
      var _0x4ad8a0 = _0x27201f.themeList.map(function (_0x4eac15) {
        return _0x4eac15.skin;
      });
      app.getAppName("com.jf.junke") !== "藕客" && (_0x4ad8a0 = _0x4ad8a0.filter(function (_0x58c5f2) {
        return _0x58c5f2 !== "藕客";
      }));
      var _0x22cb0c = ui.inflate("\n            <vertical id='ONE_PIECE_Team'>\n\n                <vertical w=\"*\" h=\"auto\" marginTop=\"".concat(_0x155736, "px\" gravity=\"top|center\" >\n                    <img id=\"page3Bg\" gravity=\"center\" scaleY=\"1.2\" scaleX=\"1.2\" w=\"").concat(_0x2d55fa, "px\" h=\"").concat(_0x1a92d0, "px\" scaleType=\"fitXY\" />\n                    <vertical gravity=\"center\" padding=\"15\" marginTop=\"-").concat(_0x1a92d0 + 10, "px\" h=\"").concat(_0x1a92d0, "px\" w=\"").concat(_0x2d55fa, "px\">\n                        <horizontal w=\"*\" h=\"auto\" gravity=\"center\">\n                            <vertical padding=\"15\" gravity=\"center\">\n                                <frame w=\"60\" h=\"60\" alpha=\"1\" >\n                                    <img w=\"*\" h=\"*\" src=\"#ffffff\" radius=\"45\" scaleType=\"center\" />\n                                    <img w=\"*\" h=\"*\" padding=\"10\" src=\"@drawable/ic_android_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                                </frame>\n                            </vertical>\n                            <vertical gravity=\"center\" h=\"*\" >\n                                <horizontal h=\"auto\">\n                                    <text textColor=\"#ffffff\" h=\"auto\" gravity=\"left|bottom\" textStyle=\"italic\" textSize=\"14dp\" text=\"设备：\"></text>\n                                    <text textColor=\"#ffffff\" h=\"auto\" gravity=\"left|bottom\" textStyle=\"bold\" textSize=\"18dp\" w=\"*\" text=\"").concat(_0x111c1a || "unknown", "\"></text>\n                                </horizontal>\n                                <horizontal h=\"auto\">\n                                    <text textColor=\"#ffffff\" h=\"auto\" gravity=\"left|bottom\" textStyle=\"italic\" textSize=\"14dp\" text=\"型号：\"></text>\n                                    <text textColor=\"#ffffff\" h=\"auto\" gravity=\"left|bottom\" textStyle=\"bold\" textSize=\"18dp\" text=\"").concat(_0x43a777 || "unknown", "\"></text>\n                                </horizontal>\n                            </vertical>\n                            <vertical w=\"*\" h=\"*\" margin=\"15 18\">\n                                <img w=\"28\" h=\"28\" id=\"appSetting\" src=\"@drawable/ic_settings_black_48dp\" tint=\"#ffffff\" layout_gravity=\"top|right\" />\n                            </vertical>\n                        </horizontal>\n                    </vertical>\n                </vertical>\n\n                <card margin=\"15 -25 15 6\" w=\"*\" minHeight=\"100\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                    <vertical margin=\"10\">\n                        <horizontal margin=\"5\" weightSum=\"3\" >\n                            <icon2 id=\"dyLoad\" bg=\"#ffc65b\" text=\"下载管理\" layout_weight=\"1\" src=\"@drawable/ic_assignment_returned_black_48dp\" />\n                            <icon2 id=\"updateLog\" bg=\"#5dcdfc\" text=\"更新日志\" layout_weight=\"1\" src=\"@drawable/ic_backup_black_48dp\" />\n                            <icon2 id=\"tuichu\" bg=\"#ff5722\" text=\"").concat(_0x36d13a["退出"], "\" layout_weight=\"1\" src=\"@drawable/ic_exit_to_app_black_48dp\" />\n                        </horizontal>\n                    </vertical>\n                </card>\n\n                <card margin=\"15 6\" w=\"*\" h=\"auto\" cardCornerRadius=\"12\" cardElevation=\"2dp\" >\n                    <vertical>\n                        <horizontal weightSum=\"10\" w=\"*\" h=\"40\" margin=\"18 10 18 10\" gravity=\"center_vertical\" >\n                            <frame w=\"35\" h=\"35\" alpha=\"1\" >\n                                <img w=\"*\" h=\"*\" src=\"").concat(_0x27201f.color3, "\" radius=\"45\" scaleType=\"center\" />\n                                <img w=\"*\" h=\"*\" padding=\"6\" src=\"@drawable/ic_https_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                            </frame>\n                            <text marginLeft=\"14\" layout_weight=\"3\" textSize=\"15\" gravity=\"left\" textStyle=\"bold\" textColor=\"#1A3657\" text=\"").concat(_0x36d13a["激活码"], "\" />\n                            <text layout_weight=\"7\" textSize=\"15\" gravity=\"right\" textColor=\"#1A3657\" text=\"").concat(_0x4a95a4, "\" />\n                        </horizontal>\n                        <img margin=\"12 0\" h=\"1px\" w=\"*\" bg=\"").concat(_0x27201f.color3, "\" />\n                        <horizontal weightSum=\"10\" h=\"40\" margin=\"18 10 18 10\" gravity=\"center_vertical\" >\n                            <frame w=\"35\" h=\"35\" alpha=\"1\" >\n                                <img w=\"*\" h=\"*\" src=\"").concat(_0x27201f.color3, "\" radius=\"45\" scaleType=\"center\" />\n                                <img h=\"*\" w=\"auto\" padding=\"6\" src=\"@drawable/ic_cloud_circle_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                            </frame>\n\n                            <text marginLeft=\"14\" layout_weight=\"3\" textSize=\"15\" gravity=\"left\" textStyle=\"bold\" textColor=\"#1A3657\" text=\"有效期\" />\n                            <text layout_weight=\"7\" textSize=\"15\" gravity=\"right\" textColor=\"#1A3657\" text=\"").concat(_0x24e92f, "\" />\n                        </horizontal>\n                        <img margin=\"12 0\" h=\"1px\" w=\"*\" bg=\"").concat(_0x27201f.color3, "\" />\n                        <horizontal weightSum=\"10\" h=\"40\" margin=\"18 10 18 10\" gravity=\"center_vertical\" >\n                            <frame w=\"35\" h=\"35\" alpha=\"1\" >\n                                <img w=\"*\" h=\"*\" src=\"").concat(_0x27201f.color3, "\" radius=\"45\" scaleType=\"center\" />\n                                <img h=\"*\" w=\"auto\" padding=\"6\" src=\"@drawable/ic_language_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                            </frame>\n\n                            <text marginLeft=\"14\" layout_weight=\"3\" textSize=\"15\" gravity=\"left\" textStyle=\"bold\" textColor=\"#1A3657\" text=\"").concat(_0x36d13a["语言"], "\" />\n                            <text layout_weight=\"7\" textSize=\"15\" gravity=\"right\" id=\"language\" textColor=\"#1A3657\" text=\"").concat(_0x846d75.languageName, " 〓\" />\n\n                        </horizontal>\n                        <img margin=\"12 0\" h=\"1px\" w=\"*\" bg=\"").concat(_0x27201f.color3, "\" />\n                        <horizontal weightSum=\"10\" h=\"40\" margin=\"18 10 18 10\" gravity=\"center_vertical\" >\n                            <frame w=\"35\" h=\"35\" alpha=\"1\" >\n                                <img w=\"*\" h=\"*\" src=\"").concat(_0x27201f.color3, "\" radius=\"45\" scaleType=\"center\" />\n                                <img h=\"*\" w=\"auto\" padding=\"6\" src=\"@drawable/ic_color_lens_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                            </frame>\n\n                            <text marginLeft=\"14\" layout_weight=\"3\" textSize=\"15\" gravity=\"left\" textStyle=\"bold\" textColor=\"#1A3657\" text=\"主题\" />\n                            <text layout_weight=\"7\" textSize=\"15\" gravity=\"right\" id=\"skin\" textColor=\"#1A3657\" text=\"").concat(_0x27201f.Theme.skin, " 〓\" />\n\n                        </horizontal>\n                        <img margin=\"12 0\" h=\"1px\" w=\"*\" bg=\"").concat(_0x27201f.color3, "\" />\n                        <horizontal weightSum=\"10\" h=\"40\" margin=\"18 10 18 10\" gravity=\"center_vertical\" >\n                            <frame w=\"35\" h=\"35\" alpha=\"1\" >\n                                <img w=\"*\" h=\"*\" src=\"").concat(_0x27201f.color3, "\" radius=\"45\" scaleType=\"center\" />\n                                <img h=\"*\" w=\"auto\" padding=\"6\" src=\"@drawable/ic_info_outline_black_48dp\" tint=\"").concat(_0x27201f.color1, "\" layout_gravity=\"center\" />\n                            </frame>\n\n                            <text marginLeft=\"14\" layout_weight=\"3\" textSize=\"15\" gravity=\"left\" textStyle=\"bold\" textColor=\"#1A3657\" text=\"版本号\" />\n                            <text layout_weight=\"7\" textSize=\"15\" gravity=\"right\" id=\"appVersion\" textColor=\"#1A3657\" text=\" v").concat(_0x12434e, "\" />\n\n                        </horizontal>\n\n                    </vertical>\n                </card>\n\n            </vertical>\n        "));
      _0x48d3b7.setBackgroundRoundedRectangleGradient(_0x22cb0c.page3Bg, _0x27201f.color1, "#ffffff", 0);
      _0x22cb0c.dyLoad.click(function () {
        dialogs.build({
          title: "跳转！",
          content: "即将跳转页面",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          app.openUrl("https://www.wandoujia.com/apps/7461948/history_v320201");
        }).show();
      });
      _0x22cb0c.tuichu.click(function () {
        dialogs.build({
          title: "确认退出吗?",
          positive: "确定",
          negative: "取消"
        }).on("positive", function (_0x465185) {
          exit();
        }).show();
      });
      _0x22cb0c.updateLog.click(function () {
        dialogs.build({
          title: "更新日志",
          content: "智能引流的默认评论将更符合运行视频的内容!",
          positive: "确定"
        }).on("positive", function (_0x403856) {}).show();
      });
      _0x22cb0c.appSetting.click(function () {
        app.startActivity({
          action: "android.settings.APPLICATION_DETAILS_SETTINGS",
          data: "package:" + context.getPackageName()
        });
      });
      _0x22cb0c.language.click(function () {
        var _0x244a91 = dialogs.build({
          items: ["简体中文", "English"],
          itemsSelectMode: "select"
        }).on("item_select", function (_0x4433eb, _0x319614, _0x21eaf3) {
          _0x846d75.languageType != _0x4433eb && (_0x12d745.saveLanguageInfo(_0x4433eb, _0x319614), _0x12d745.view());
        }).show();
      });
      _0x22cb0c.skin.click(function () {
        var _0x18e01f = dialogs.build({
          items: _0x4ad8a0,
          itemsSelectMode: "select"
        }).on("item_select", function (_0x729f87, _0x2e3c29, _0x10a570) {
          var _0x3ac593 = _0x27201f.getSkinType();
          _0x3ac593 != _0x729f87 && (_0x27201f.setSkinType(_0x729f87), _0x27201f.setSkin(), _0x12d745.view(0));
        }).show();
      });
      _0x22cb0c.appVersion.click(function () {
        _0x104c79++;
        _0x104c79 === 3 && (toast("版本号已重置"), _0x453c58.put("version", "1.0.0"), _0x104c79 = 0);
      });
      ui.personal.addView(_0x22cb0c);
    };
    var _0xa54a5d = storages.create("wzke:index");
    _0x12d745.getLanguageType = function () {
      var _0x51b32b = {
        languageType: _0xa54a5d.get("languageType") != undefined ? _0xa54a5d.get("languageType") : 0,
        languageName: _0xa54a5d.get("languageName") != undefined ? _0xa54a5d.get("languageName") : "简体中文"
      };
      return _0x51b32b;
    };
    _0x12d745.saveLanguageInfo = function (_0x577bba, _0x29f35a) {
      _0xa54a5d.put("languageType", parseInt(_0x577bba));
      _0xa54a5d.put("languageName", _0x29f35a);
    };
  }
  _0x74d9b8.exports = _0x410d7e;
}, function (_0x81d314, _0x1e0bbe, _0x392f51) {
  function _0x2d7906(_0x2f64e7) {
    var _0x3fd447 = this;
    var _0x23dfcd = new (_0x392f51(3))();
    var _0x2f679a = _0x392f51(0);
    var _0x5254c7 = new (_0x392f51(2))();
    var _0x79a851 = new android.widget.PopupWindow();
    _0x3fd447.opt = "";
    this.index = function (_0x408f95) {
      _0x3fd447.opt = _0x408f95;
      _0x79a851 = _0x2f679a.createPopWin();
      _0x3fd447.show();
    };
    this.show = function () {
      var _0x13db9d = _0x392f51(1);
      var _0x2f6cc8 = _0x13db9d.bgColor;
      var _0x25a37c = _0x2f679a.get_statusBarHeight();
      var _0x49eb4a = _0x2f679a.getVersionName("com.ss.android.ugc.aweme");
      var _0x4f5f17 = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"基础观看\" bg=\"".concat(_0x2f6cc8, "\" />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" radius=\"24\">\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在推荐页启动，自动观看视频，概率互动，提升账号活跃度\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x49eb4a, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\" >\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"视频个数：（个）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"shipinCout\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"点赞概率：（%）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoLikeRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"观看时长：（秒）\" layout_gravity=\"left|center\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"min\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"max\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                    </vertical>\n                                </card>\n                                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"20\" cardBackgroundColor=\"").concat(_0x2f6cc8, "\" cardUseCompatPadding=\"true\" >\n                                    <button id=\"start\" bg=\"").concat(_0x2f6cc8, "\" margin=\"5\" textSize=\"22\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\" text=\"开 始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                                </card>\n                            </vertical>\n                        </ScrollView>\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0x79a851.setContentView(_0x4f5f17);
      _0x2f64e7 = activity.getWindow().getDecorView();
      _0x79a851.showAtLocation(_0x2f64e7, android.view.Gravity.LEFT, -1, -1);
      _0x4f5f17._backButton.click(function () {
        _0x79a851.dismiss();
      });
      var _0x82ccc2 = _0x3fd447.getPage1Data();
      _0x4f5f17.shipinCout.setText(_0x82ccc2.shipinCout + "");
      _0x4f5f17.videoLikeRate.setText(_0x82ccc2.videoLikeRate + "");
      _0x4f5f17.min.setText(_0x82ccc2.min + "");
      _0x4f5f17.max.setText(_0x82ccc2.max + "");
      _0x4f5f17.start.click(function () {
        _0x3fd447.page1Save(_0x4f5f17);
        dialogs.build({
          title: "开始任务",
          content: "确定要开始吗?",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          _0x3fd447.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x84548d = storages.create("wzke:A1");
    _0x3fd447.getPage1Data = function () {
      var _0x3d52d0 = {
        shipinCout: _0x84548d.get("shipinCout") != undefined ? _0x84548d.get("shipinCout") : 500,
        videoLikeRate: _0x84548d.get("videoLikeRate") != undefined ? _0x84548d.get("videoLikeRate") : 10,
        min: _0x84548d.get("min") == undefined ? 3 : _0x84548d.get("min"),
        max: _0x84548d.get("max") == undefined ? 18 : _0x84548d.get("max")
      };
      return _0x3d52d0;
    };
    _0x3fd447.page1Save = function (_0x13ff84) {
      _0x84548d.put("shipinCout", parseInt(_0x13ff84.shipinCout.text()));
      _0x84548d.put("videoLikeRate", parseInt(_0x13ff84.videoLikeRate.text()));
      _0x84548d.put("min", parseInt(_0x13ff84.min.text()));
      _0x84548d.put("max", parseInt(_0x13ff84.max.text()));
    };
    this.start = function () {
      if (!_0x2f679a.checkServer()) {
        return false;
      }
      if (_0x3fd447.opt == "HS2") {
        if (!_0x23dfcd.launchAppHs()) {
          return false;
        }
      } else {
        if (_0x3fd447.opt == "JS2") {
          if (!_0x23dfcd.launchAppJS()) {
            return false;
          }
        } else {
          if (!_0x23dfcd.launchApp()) {
            return false;
          }
        }
      }
      _0x2f679a.showConsole("普通养号");
      _0x5254c7.index();
      _0x5254c7.ClickListener({
        clickStart: function _0x405cd8() {
          _0x3fd447.action();
        },
        clickStop: function _0x45bc42() {
          threads.shutDownAll();
        },
        clickExit: function _0x4eaad3() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x5254c7.close();
            _0x2f679a.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x524821 = _0x3fd447.getPage1Data();
      _0x23dfcd.closeTip();
      threads.start(function () {
        _0x23dfcd.watchSleep("任务开始:", 1);
        for (var _0x52eff3 = 1; _0x52eff3 <= _0x524821.shipinCout; _0x52eff3++) {
          if (_0x23dfcd.getViewType() == "视频") {
            _0x23dfcd.watchSleep("观看视频:", random(_0x524821.min, _0x524821.max));
            if (random(1, 100) < _0x524821.videoLikeRate) {
              _0x23dfcd.clickDianzan();
            }
          }
          sleep(2000);
          _0x2f679a.actionSwipUp();
        }
        alert("任务结束");
      });
    };
  }
  _0x81d314.exports = _0x2d7906;
}, function (_0x4ca815, _0x39e9e2, _0xb1cddf) {
  function _0x237f45() {
    var _0x38957e = this;
    var _0x687c15 = null;
    var _0x2beec3 = new (_0xb1cddf(3))();
    var _0xd25743 = _0xb1cddf(0);
    var _0x4d9ca2 = new (_0xb1cddf(2))();
    this.index = function () {
      _0x687c15 = _0xd25743.createPopWin();
      _0x38957e.initContent();
    };
    this.initContent = function () {
      var _0x2a96b3 = _0xb1cddf(1);
      var _0x3f1a6b = _0x2a96b3.bgColor;
      var _0x255880 = _0xd25743.get_statusBarHeight();
      var _0x5f1cf5 = _0xd25743.getVersionName("com.ss.android.ugc.aweme");
      var _0x1816f9 = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <appbar >\n                    <MyAppBar title=\"垂直观看\"  bg=\"".concat(_0x3f1a6b, "\" />\n                    </appbar>\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 功能说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在推荐页面启动，设置关键词，软件自动观看视频对文案组含有设置好的关键词的视频进行概率互动\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x5f1cf5, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n\n                                    <vertical margin=\"2\">\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"运行时长（分钟）\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" gravity=\"right\" id=\"time\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"小星星概率（%）\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" gravity=\"right\" id=\"tapRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"观看时长（秒）\" layout_gravity=\"left|center\"/>\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"min\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"max\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"关键词\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" hint=\"关键词，加号隔开\" textSizeHint=\"10\" gravity=\"right\" id=\"words\" text=\"\" bg=\"#ffffff\" />\n\n                                        </horizontal>\n                                        <text text=\"例如: 水果+苹果，文案包含，加号隔开 \" padding='10 0' />\n                                        <SwitchWidget-Se7en id=\"words_key\" text=\"反转[开启后包含关键词划走]\" padding='10 5' trackColor=\"").concat(_0x3f1a6b, "\" textColor=\"black\" checked=\"\" />\n                                    </vertical>\n                                </card>\n                                <button id=\"start\" bg=\"").concat(_0x3f1a6b, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0x1816f9._backButton.click(function () {
        _0x687c15.dismiss();
      });
      _0x1816f9.start.click(function () {
        _0x3fb44b.put("time", parseInt(_0x1816f9.time.text()));
        _0x3fb44b.put("tapRate", parseInt(_0x1816f9.tapRate.text()));
        _0x3fb44b.put("min", parseInt(_0x1816f9.min.text()));
        _0x3fb44b.put("max", parseInt(_0x1816f9.max.text()));
        _0x3fb44b.put("words", _0x1816f9.words.text());
        _0x3fb44b.put("words_key", _0x1816f9.words_key.checked);
        dialogs.build({
          title: "确定开始吗？",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x38957e.start();
        }).on("negative", function () {}).show();
      });
      var _0x5a2d0a = _0x38957e.getData();
      _0x1816f9.time.setText(_0x5a2d0a.time + "");
      _0x1816f9.tapRate.setText(_0x5a2d0a.tapRate + "");
      _0x1816f9.min.setText(_0x5a2d0a.min + "");
      _0x1816f9.max.setText(_0x5a2d0a.max + "");
      _0x1816f9.words.setText(_0x5a2d0a.words + "");
      _0x1816f9.words_key.checked = _0x5a2d0a.words_key;
      _0x687c15.setContentView(_0x1816f9);
      _0x687c15.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    var _0x3fb44b = storages.create("wzke:A2");
    _0x38957e.getData = function () {
      var _0x38d2d0 = {
        time: _0x3fb44b.get("time") == undefined ? 120 : _0x3fb44b.get("time"),
        tapRate: _0x3fb44b.get("tapRate") == undefined ? 100 : _0x3fb44b.get("tapRate"),
        min: _0x3fb44b.get("min") == undefined ? 3 : _0x3fb44b.get("min"),
        max: _0x3fb44b.get("max") == undefined ? 18 : _0x3fb44b.get("max"),
        words: _0x3fb44b.get("words") == undefined ? "" : _0x3fb44b.get("words"),
        words_key: _0x3fb44b.get("words_key") == undefined ? false : _0x3fb44b.get("words_key")
      };
      return _0x38d2d0;
    };
    this.start = function () {
      if (!_0xd25743.checkServer() || !_0x2beec3.launchApp()) {
        return false;
      }
      _0xd25743.showConsole("垂直观看");
      _0x4d9ca2.index();
      _0x4d9ca2.ClickListener({
        clickStart: function _0x2e88f9() {
          _0x38957e.action();
        },
        clickStop: function _0x5a018a() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x432409() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x4d9ca2.close();
            _0xd25743.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x563350 = _0x38957e.getData();
      var _0x616fbd = _0x563350.time;
      var _0x5ef022 = _0x563350.tapRate;
      var _0x484a33 = parseInt(_0x563350.min);
      var _0x461e7c = parseInt(_0x563350.max);
      var _0x57d269 = _0x563350.words;
      _0x2beec3.closeTip();
      _0xd25743.checkTimeEnd(_0x616fbd, function () {
        toastLog("结束");
        threads.shutDownAll();
      });
      threads.start(function () {
        _0x2beec3.watchSleep("主任务开始", 1);
        while (true) {
          var _0x4c61fd = _0x2beec3.getViewType();
          if (_0x4c61fd == "视频") {
            var _0x5b8c90 = true;
            _0x57d269 != "" && (_0x5b8c90 = _0x2beec3.descContain(_0x57d269.split("+")), _0x563350.words_key && (_0x5b8c90 = !_0x5b8c90));
            _0x2beec3.watchSleep("观看", random(_0x484a33, _0x461e7c));
            if (random(1, 100) < _0x5ef022 && _0x5b8c90) {
              _0x2beec3.clickDianzan();
            }
          }
          _0xd25743.actionSwipUp();
        }
      });
    };
  }
  _0x4ca815.exports = _0x237f45;
}, function (_0x1c78c5, _0x46f587, _0x4f732f) {
  var _0x3c6a82 = _0x4f732f(0);
  function _0x5784f9(_0x5736c8) {
    var _0x3c1f21 = _0x5736c8;
    var _0x227107 = this;
    var _0x26e8da = null;
    var _0x445530 = _0x4f732f(1);
    var _0x534041 = _0x445530.bgColor;
    var _0xca9bd0 = "";
    var _0x5a5b46 = new (_0x4f732f(6))();
    this.index = function (_0x3c4c95) {
      _0xca9bd0 = _0x3c4c95;
      _0x26e8da = _0x5bdb66.createPopWin();
      _0x227107.show();
    };
    this.show = function () {
      var _0x587197 = "在推荐页启动,自动观看视频,概率互动,提升账号活跃度";
      switch (_0xca9bd0) {
        case "同城宣传":
          _0x587197 = "在同城页启动,自动观看视频,概率互动,包含评论赞及回复";
          break;
      }
      var _0x3eea8b = _0x5bdb66.get_statusBarHeight();
      var _0x439873 = _0x5bdb66.getVersionName("com.ss.android.ugc.aweme");
      var _0x3d8b05 = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"".concat(_0xca9bd0, "\" bg=\"").concat(_0x534041, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" >\n                        <ScrollView>\n                            <vertical padding=\"10\" >\n                                <text margin=\"10\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n\n                                <text textColor=\"black\" margin=\"10 0 10 10\" >").concat(_0x587197, "</text>\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x439873, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n\n                                        <horizontal weightSum=\"10\"    >\n                                            <text paddingLeft=\"10\" layout_weight=\"3\" textColor=\"black\" text=\"运行视频个数\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"time\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" id=\"sexView\"  >\n                                            <text paddingLeft=\"10\" gravity=\"center|left\" layout_weight=\"10\" textColor=\"black\" layout_gravity=\"left\" h=\"*\"  >性别</text>\n                                            <spinner paddingRight=\"30\" gravity=\"right\" id=\"sex\" entries=\"不限|男|女\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text paddingLeft=\"10\" layout_weight=\"3\" textColor=\"black\" text=\"喜欢概率（%）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"tapRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\"    >\n                                            <text paddingLeft=\"10\" layout_weight=\"3\" textColor=\"black\" text=\"关注概率（%）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"guanzhuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\"  >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"观看时长（秒）\" layout_gravity=\"left|center\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"watchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"watchTimeMax\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\"    >\n                                            <text paddingLeft=\"10\" layout_weight=\"3\" textColor=\"black\" text=\"关键词\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" hint=\"请输入关键词\" textSizeHint=\"12\" gravity=\"right\" id=\"words\" bg=\"#ffffff\" />\n\n                                        </horizontal>\n                                        <text text=\"  *+号隔开，例如: 水果+苹果 \" />\n                                        <SwitchWidget-Se7en id=\"words_key\" text=\"反转[开启后包含关键词划走]\" padding='15 10' trackColor=\"").concat(_0x534041, "\" textColor=\"black\" checked=\"\" alpha=\"1\" />\n                                    </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x534041, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>\n                            <vertical bg=\"#ffffff\">\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n\n                                        <horizontal weightSum=\"10\" padding=\"20 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"评论概率（%）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"pinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical id=\"defultWords_show\">\n                                            <SwitchWidget-Se7en id=\"defultWords\" marginTop=\"5\" padding='8 8' checked='true' text='使用默认话术' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical padding=\"20 5 20 0\" w=\"*\" >\n                                            <horizontal h=\"25\" gravity=\"left|center\" >\n                                                <text w=\"auto\" textColor=\"black\" text=\"评论内容 换行隔开 多条随机\" />\n                                                <button w=\"40\" id=\"pinglunWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                                <button w=\"40\" id=\"pinglunWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            </horizontal>\n                                            <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"1\" id=\"pinglun\" bg=\"#ffffff\" />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"20 0 0 0\" >\n                                            <text layout_weight=\"4\" textColor=\"black\" text=\"喜欢回复楼层\" />\n                                            <input paddingRight=\"30\" layout_weight=\"6\" gravity=\"right\" id=\"huifuDeep\" inputType=\"number\" bg=\"#ffffff\" />\n\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical padding=\"20 5 20 0\" w=\"*\" >\n                                            <horizontal h=\"25\" gravity=\"left|center\" >\n                                                <text w=\"auto\" textColor=\"black\" text=\"楼层回复内容 换行隔开 多条随机\" />\n                                                <button w=\"40\" id=\"huifuCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                                <button w=\"40\" id=\"huifuPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            </horizontal>\n                                            <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"1\" id=\"huifu\" bg=\"#ffffff\" />\n                                        </vertical>\n\n                                    </vertical>\n                                </card>\n                                <button id=\"save2\" bg=\"").concat(_0x534041, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n                            </vertical>\n\n                        </ScrollView>\n\n\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      _0x3c6a82.setBackgroundRoundedRectangle(_0x3d8b05.mainbg);
      _0x3c6a82.setBackgroundRoundedRectangle(_0x3d8b05.mainbg2);
      _0x3d8b05.viewpager.setTitles(["基础设置", "视频设置", "评论设置"]);
      _0x3d8b05.tabs.setupWithViewPager(_0x3d8b05.viewpager);
      _0x3d8b05.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x445530.selectedTabIndicatorColor);
      _0x3d8b05.tabs.selectedTabIndicatorHeight = _0x445530.selectedTabIndicatorHeight;
      _0x3d8b05.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x3d8b05._backButton.click(function () {
        _0x26e8da.dismiss();
      });
      _0x3d8b05.pinglunWordsCopy.click(function () {
        setClip(_0x3d8b05.pinglun.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x3d8b05.pinglun.text(),
          positive: "好的"
        }).show();
      });
      _0x3d8b05.pinglunWordsPaste.click(function () {
        var _0x2026c2 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x2026c2,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x3d8b05.pinglun.setText(_0x2026c2);
        }).show();
      });
      _0x3d8b05.huifuCopy.click(function () {
        setClip(_0x3d8b05.huifu.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x3d8b05.huifu.text(),
          positive: "好的"
        }).show();
      });
      _0x3d8b05.huifuPaste.click(function () {
        var _0x3c258f = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x3c258f,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x3d8b05.huifu.setText(_0x3c258f);
        }).show();
      });
      _0x3d8b05.start.click(function () {
        var _0x36940d = {
          time: parseInt(_0x3d8b05.time.text()),
          sex: _0x3d8b05.sex.getSelectedItemPosition(),
          guanzhuRate: parseInt(_0x3d8b05.guanzhuRate.text()),
          tapRate: parseInt(_0x3d8b05.tapRate.text()),
          timeMin: parseInt(_0x3d8b05.watchTimeMin.text()),
          timeMax: parseInt(_0x3d8b05.watchTimeMax.text()),
          words: _0x3d8b05.words.text(),
          words_key: _0x3d8b05.words_key.checked
        };
        _0x165a38.put("baseinfo", _0x36940d);
        toast("保存成功");
        dialogs.build({
          title: "开始任务",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x227107.start();
        }).on("negative", function () {}).show();
      });
      var _0xd7d992 = _0x227107.getPage1Data();
      _0x3d8b05.time.setText(_0xd7d992.time + "");
      _0x3d8b05.sex.setSelection(_0xd7d992.sex);
      _0x3d8b05.tapRate.setText(_0xd7d992.tapRate + "");
      _0x3d8b05.guanzhuRate.setText(_0xd7d992.guanzhuRate + "");
      _0x3d8b05.watchTimeMin.setText(_0xd7d992.timeMin + "");
      _0x3d8b05.watchTimeMax.setText(_0xd7d992.timeMax + "");
      _0x3d8b05.words.setText(_0xd7d992.words);
      _0x3d8b05.words_key.checked = _0xd7d992.words_key;
      _0x227107.huashuInit(_0x3d8b05);
      _0x3d8b05.save2.click(function () {
        _0x227107.saveHuashu(_0x3d8b05);
      });
      _0x26e8da.setContentView(_0x3d8b05);
      _0x5736c8 = activity.getWindow().getDecorView();
      _0x26e8da.showAtLocation(_0x5736c8, android.view.Gravity.LEFT, -1, -1);
    };
    var _0x356d4b = new (_0x4f732f(3))();
    var _0x5bdb66 = _0x4f732f(0);
    var _0x1fddde = new (_0x4f732f(2))();
    this.start = function () {
      if (!_0x5bdb66.checkServer() || !_0x356d4b.launchApp()) {
        return false;
      }
      _0x5bdb66.showConsole(_0xca9bd0);
      log("下列界面运行");
      log("1: 首页  [同城]- [关注]- [推荐]");
      log("2: 搜索  [视频页]");
      _0x1fddde.index();
      _0x1fddde.ClickListener({
        clickStart: function _0x2fc11e() {
          _0x227107.action();
        },
        clickStop: function _0x451f69() {
          log("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x3c6a4a() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x1fddde.close();
            _0x5bdb66.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x5c5c01 = _0x227107.getPage1Data();
      var _0x3a4ca6 = _0x227107.getHuashu();
      var _0x2e6898 = _0x5c5c01.time;
      _0x356d4b.closeTip();
      threads.start(function () {
        log("任务开始");
        while (true) {
          if (_0x356d4b.getViewType() == "视频") {
            var _0x4e2467 = true;
            _0x5c5c01.words != "" && (c1 = _0x356d4b.titleContain(_0x5c5c01.words.split("+")), c2 = _0x356d4b.descContain(_0x5c5c01.words.split("+")), _0x4e2467 = c1 || c2, _0x5c5c01.words_key && (_0x4e2467 = !_0x4e2467));
            if (_0x5c5c01.sex != 0) {
              _0x5bdb66.requestScreenCapture();
              if (_0x356d4b.JumpShipinToUsercenter()) {
                var _0x44dc48 = _0x356d4b.watchUserSex();
                _0x44dc48 != _0x5c5c01.sex && (_0x4e2467 = false, log("性别不符合"));
                back();
                sleep(3000);
              }
            }
            _0x356d4b.watchSleep("观看时长: ", random(parseInt(_0x5c5c01.timeMin), parseInt(_0x5c5c01.timeMax)));
            _0x4e2467 && random(1, 100) < _0x5c5c01.guanzhuRate && _0x356d4b.clickGuanzhu();
            _0x4e2467 && random(1, 100) < _0x5c5c01.tapRate && _0x356d4b.clickDianzan();
            random(1, 100) < _0x3a4ca6.pinglunRate ? _0x4e2467 && _0x356d4b.clickPinlunqu() && (_0x356d4b.actionPinglunqu(_0x3a4ca6.huifuDeep, _0x3a4ca6.huifu, ""), _0x356d4b.pinglun(_0x3a4ca6.pinglun, _0x3a4ca6.defultWords), _0x356d4b.closePinlunquOnce()) : log("评论区未触发");
          }
          _0x2e6898--;
          if (_0x2e6898 <= 0) {
            break;
          }
          _0x356d4b.closePinlunquOnce();
          _0x5bdb66.actionSwipUp();
        }
        alert("任务结束");
        threads.shutDownAll();
      });
    };
    var _0x165a38 = storages.create("wzke:A3");
    this.getPage1Data = function () {
      var _0x4ad3b3 = _0x165a38.get("baseinfo");
      if (_0x4ad3b3 == undefined) {
        _0x4ad3b3 = {};
        _0x4ad3b3.time = 300;
        _0x4ad3b3.sex = 0;
        _0x4ad3b3.tapRate = 80;
        _0x4ad3b3.guanzhuRate = 10;
        _0x4ad3b3.timeMin = 3;
        _0x4ad3b3.timeMax = 18;
        _0x4ad3b3.words_key = false;
        _0x4ad3b3.words = "";
        _0x165a38.put("baseinfo", _0x4ad3b3);
      } else {
        if (_0x4ad3b3.words_key == undefined) {
          _0x4ad3b3.words_key = false;
        }
        if (_0x4ad3b3.sex == undefined) {
          _0x4ad3b3.sex = 0;
        }
        if (_0x4ad3b3.timeMin == undefined) {
          _0x4ad3b3.timeMin = 3;
        }
        _0x165a38.put("baseinfo", _0x4ad3b3);
      }
      return _0x165a38.get("baseinfo");
    };
    _0x227107.huashuInit = function (_0x273de6) {
      var _0x2b4249 = _0x227107.getHuashu();
      _0x273de6.pinglunRate.setText(_0x2b4249.pinglunRate + "");
      _0x273de6.defultWords.checked = _0x2b4249.defultWords;
      _0x273de6.pinglun.setText(_0x2b4249.pinglun);
      _0x273de6.huifuDeep.setText(_0x2b4249.huifuDeep + "");
      _0x273de6.huifu.setText(_0x2b4249.huifu);
    };
    this.getHuashu = function () {
      var _0x5d290f = _0x165a38.get("huashu");
      if (_0x5d290f == undefined) {
        _0x5d290f = {};
        _0x5d290f.pinglunRate = "5";
        _0x5d290f.pinglun = _0x5a5b46.pinglun;
        _0x5d290f.huifuDeep = 1;
        _0x5d290f.huifu = "";
        _0x5d290f.defultWords = false;
        _0x165a38.put("huashu", _0x5d290f);
      } else {
        if (_0x5d290f.defultWords == undefined) {
          _0x5d290f.defultWords = false;
        }
        _0x165a38.put("huashu", _0x5d290f);
      }
      return _0x165a38.get("huashu");
    };
    this.saveHuashu = function (_0x29efb7) {
      var _0x58b2fd = {
        pinglunRate: _0x29efb7.pinglunRate.text(),
        pinglun: _0x29efb7.pinglun.text(),
        huifuDeep: parseInt(_0x29efb7.huifuDeep.text()),
        huifu: _0x29efb7.huifu.text(),
        defultWords: _0x29efb7.defultWords.checked
      };
      _0x165a38.put("huashu", _0x58b2fd);
      toast("保存成功");
    };
  }
  _0x1c78c5.exports = _0x5784f9;
}, function (_0x34b2e0, _0x4c01c4, _0x4d8d90) {
  function _0x38fdf8(_0x3c9a55) {
    var _0x2b727e = this;
    var _0x3b75c0 = new (_0x4d8d90(3))();
    var _0x2e6dcc = _0x4d8d90(0);
    var _0x5e9918 = new (_0x4d8d90(2))();
    this.index = function () {
      _0x2b727e.view();
    };
    this.view = function () {
      var _0x2e0c78 = _0x4d8d90(1);
      var _0xf57c53 = _0x2e0c78.bgColor;
      var _0x55fdf5 = _0x2e6dcc.get_statusBarHeight();
      var _0x10f18e = _0x2e6dcc.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"万能拓客\"  bg=\"".concat(_0xf57c53, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                        <vertical padding=\"16\" bg=\"#ffffff\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\"\n                                 text=\"在搜索页（搜索行业、关键词）启动，自动观看视频，概率互动，包含评论赞及回复\" />\n                                 <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x10f18e, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical padding=\"16\" bg=\"#ffffff\" >\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"运行时长（分钟）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"time\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"点赞概率（%）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"tapRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"点赞范围\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input minWidth=\"40\" gravity=\"center\" id=\"dianzanMin\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input paddingRight=\"30\" id=\"dianzanMax\" gravity=\"right\" minWidth=\"60\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率（%）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"guanzhuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal h=\"0\">\n                                            <text textColor=\"black\" text=\"关注数 :\" />\n                                            <input id=\"guanzhuMin\" gravity=\"center\" marginLeft=\"20\" inputType=\"number\" text=\"\" width=\"100\" />\n                                            <text text=\"至\" textColor=\"black\" />\n                                            <input id=\"guanzhuMax\" gravity=\"center\" inputType=\"number\" text=\"\" width=\"100\" />\n                                        </horizontal>\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"滑动间隔（秒）\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input minWidth=\"40\" gravity=\"center\" id=\"timeMin\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\", 上限:\" />\n                                                <input paddingRight=\"30\" id=\"timeMax\" gravity=\"right\" minWidth=\"40\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"关键词\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" hint=\"请输入关键词\" textSizeHint=\"12\" gravity=\"right\" id=\"words\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <text text=\"  *例如: 水果+苹果,只有满足文案包含此条件的视频,加号隔开\" />\n                                    </vertical>\n                                </card>\n                                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"20\" cardBackgroundColor=\"").concat(_0xf57c53, "\" cardUseCompatPadding=\"true\" >\n                                    <button id=\"start\" bg=\"").concat(_0xf57c53, "\" margin=\"5\" textSize=\"22\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\" text=\"开 始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                                </card>\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n\n                                <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"评论概率（%）\" />\n                                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"pinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"评论数范围\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input minWidth=\"40\" gravity=\"center\" id=\"pinglunMin\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\", 上限:\" />\n                                        <input paddingRight=\"30\" id=\"pinglunMax\" gravity=\"right\" minWidth=\"60\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <text h=\"0\" text=\"  *此范围内才可以触发评论\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <frame padding=\"10 0 10 0\" w=\"*\" h=\"auto\">\n                                    <text marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"评论内容 （换行隔开,多条随机）\" />\n                                    <input marginTop=\"25\" gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"pinglun\" bg=\"#ffffff\" />\n                                </frame>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"楼层点赞概率\" />\n                                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"huifuDianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"6\" textColor=\"black\" text=\"楼层点赞层数\" />\n                                    <spinner layout_weight=\"4\" gravity=\"right\" id=\"huifuDianzanDeep\" entries=\"00|01|02\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"楼层回复概率\" />\n                                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"huifuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"6\" textColor=\"black\" text=\"回复楼层\" />\n                                    <spinner layout_weight=\"4\" gravity=\"right\" id=\"huifuDeep\" entries=\"00|01|02\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <frame padding=\"10 0 10 0\" w=\"*\" h=\"auto\">\n                                    <text marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"楼层回复 （换行隔开,多条随机）\" />\n                                    <input marginTop=\"25\" gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"huifu\" bg=\"#ffffff\" />\n                                </frame>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <button id=\"save2\" bg=\"").concat(_0xf57c53, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView>\n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n\n                                <SwitchWidget-Se7en id=\"sixinSwitch\" padding='8 8' checked='true' text='开启私信' trackColor='#003366' background='#ffffff' />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总获赞数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input minWidth=\"60\" gravity=\"center\" id=\"totalzanMin\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"totalzanMax\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总关注数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"totalguanzhuMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"totalguanzhuMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总粉丝数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"fensiMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"fensiMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总作品数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"zuopinMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"zuopinMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总喜欢数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"xihuanMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"xihuanMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <frame padding=\"10 0 0 0\" w=\"*\" h=\"auto\">\n                                    <text marginTop=\"8\" textColor=\"black\" text=\"私信内容（换行隔开,多条随机）\" />\n                                    <input marginTop=\"25\" layout_weight=\"7\" hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"sixinWords\" bg=\"#ffffff\" />\n                                </frame>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <button id=\"save3\" bg=\"").concat(_0xf57c53, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                       \n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "视频设置", "话术设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x2e0c78.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x2e0c78.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui._backButton.click(function () {
        _0x3c9a55.view();
      });
      var _0x207963 = _0x2b727e.getBaseInfo();
      ui.time.setText(_0x207963.time + "");
      ui.tapRate.setText(_0x207963.tapRate + "");
      ui.dianzanMin.setText(_0x207963.dianzanMin + "");
      ui.dianzanMax.setText(_0x207963.dianzanMax + "");
      ui.tapRate.setText(_0x207963.tapRate + "");
      ui.guanzhuRate.setText(_0x207963.guanzhuRate + "");
      ui.guanzhuMin.setText(_0x207963.guanzhuMin + "");
      ui.guanzhuMax.setText(_0x207963.guanzhuMax + "");
      ui.timeMin.setText(_0x207963.timeMin + "");
      ui.timeMax.setText(_0x207963.timeMax + "");
      ui.words.setText(_0x207963.words);
      ui.start.click(function () {
        var _0x370f8b = {
          time: parseInt(ui.time.text()),
          tapRate: parseInt(ui.tapRate.text()),
          dianzanMin: parseInt(ui.dianzanMin.text()),
          dianzanMax: parseInt(ui.dianzanMax.text()),
          guanzhuRate: parseInt(ui.guanzhuRate.text()),
          guanzhuMin: parseInt(ui.guanzhuMin.text()),
          guanzhuMax: parseInt(ui.guanzhuMax.text()),
          timeMin: parseInt(ui.timeMin.text()),
          timeMax: parseInt(ui.timeMax.text()),
          words: ui.words.text()
        };
        _0x2b727e.saveBaseInfo(_0x370f8b);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x2b727e.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      var _0x99f7fe = _0x2b727e.getHuashu();
      ui.pinglunRate.setText(_0x99f7fe.pinglunRate + "");
      ui.pinglunMin.setText(_0x99f7fe.pinglunMin + "");
      ui.pinglunMax.setText(_0x99f7fe.pinglunMax + "");
      ui.pinglun.setText(_0x99f7fe.pinglun);
      ui.huifuDianzanRate.setText(_0x99f7fe.huifuDianzanRate + "");
      ui.huifuDianzanDeep.setSelection(_0x99f7fe.huifuDianzanDeep);
      ui.huifuRate.setText(_0x99f7fe.huifuRate + "");
      ui.huifuDeep.setSelection(_0x99f7fe.huifuDeep);
      ui.huifu.setText(_0x99f7fe.huifu);
      ui.save2.click(function () {
        var _0x86ed94 = {
          pinglunRate: ui.pinglunRate.text(),
          pinglunMin: ui.pinglunMin.text(),
          pinglunMax: ui.pinglunMax.text(),
          pinglun: ui.pinglun.text(),
          huifuDianzanRate: ui.huifuDianzanRate.text(),
          huifuDianzanDeep: ui.huifuDianzanDeep.getSelectedItemPosition(),
          huifuRate: ui.huifuRate.text(),
          huifuDeep: ui.huifuDeep.getSelectedItemPosition(),
          huifu: ui.huifu.text()
        };
        _0x2b727e.saveHuashu(_0x86ed94);
        alert("保存成功");
      });
      var _0x546db3 = _0x2b727e.getInfo3();
      ui.sixinSwitch.checked = _0x546db3.sixinSwitch;
      ui.totalzanMin.setText(_0x546db3.totalzanMin + "");
      ui.totalzanMax.setText(_0x546db3.totalzanMax + "");
      ui.totalguanzhuMin.setText(_0x546db3.totalguanzhuMin + "");
      ui.totalguanzhuMax.setText(_0x546db3.totalguanzhuMax + "");
      ui.fensiMin.setText(_0x546db3.fensiMin + "");
      ui.fensiMax.setText(_0x546db3.fensiMax + "");
      ui.zuopinMin.setText(_0x546db3.zuopinMin + "");
      ui.zuopinMax.setText(_0x546db3.zuopinMax + "");
      ui.xihuanMin.setText(_0x546db3.xihuanMin + "");
      ui.xihuanMax.setText(_0x546db3.xihuanMax + "");
      ui.sixinWords.setText(_0x546db3.sixinWords);
      ui.save3.on("click", function () {
        var _0x1a96bf = {
          sixinSwitch: ui.sixinSwitch.checked,
          totalzanMin: ui.totalzanMin.text(),
          totalzanMax: ui.totalzanMax.text(),
          totalguanzhuMin: ui.totalguanzhuMin.text(),
          totalguanzhuMax: ui.totalguanzhuMax.text(),
          fensiMin: ui.fensiMin.text(),
          fensiMax: ui.fensiMax.text(),
          zuopinMin: ui.zuopinMin.text(),
          zuopinMax: ui.zuopinMax.text(),
          xihuanMin: ui.xihuanMin.text(),
          xihuanMax: ui.xihuanMax.text(),
          sixinWords: ui.sixinWords.text()
        };
        _0x2b727e.saveInfo3(_0x1a96bf);
        alert("保存成功");
      });
    };
    this.start = function () {
      if (!_0x2e6dcc.checkServer() || !_0x3b75c0.launchApp()) {
        return false;
      }
      _0x2e6dcc.showConsole("万能拓客");
      log("特别注意: 下列界面运行");
      log("1: 首页 - [同城]");
      log("2: 首页 - [关注]");
      log("3: 首页 - [推荐]");
      log("4: 搜索 - [视频页]");
      _0x5e9918.index();
      _0x5e9918.ClickListener({
        clickStart: function _0x22dfe8() {
          _0x2b727e.action();
        },
        clickStop: function _0x2f8c15() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x342563() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x5e9918.close();
            _0x2e6dcc.closeConsole();
          }).show();
        }
      });
    };
    var _0x1f5727 = new (_0x4d8d90(4))();
    var _0x56530e = _0x1f5727.getLoginInfo();
    var _0xb97398 = new (_0x4d8d90(5))();
    this.action = function () {
      var _0x3635f5 = _0x2b727e.getBaseInfo();
      var _0xe0cd6e = _0x2b727e.getHuashu();
      var _0x2c560b = _0x2b727e.getInfo3();
      var _0x4a3f5f = _0xe0cd6e.pinglun;
      var _0x123315 = _0x4a3f5f.split("\n");
      var _0x5a5eeb = _0xe0cd6e.huifu;
      var _0x2819e1 = _0x5a5eeb.split("\n");
      var _0x378ecf = _0x2c560b.sixinWords;
      var _0x476ae5 = _0x378ecf.split("\n");
      _0x3b75c0.closeTip();
      _0x2e6dcc.checkTimeEnd(_0x3635f5.time, function () {
        toastLog("时间到");
        threads.shutDownAll();
      });
      threads.start(function () {
        _0x3b75c0.watchStart("主任务开始", 3);
        while (true) {
          _0x3b75c0.watchSleep("观看", 3);
          var _0x10f6aa = _0x3b75c0.getViewType();
          if (_0x10f6aa == "视频") {
            var _0x33b521 = true;
            _0x3635f5.words != "" && (_0x33b521 = _0x3b75c0.descContain(_0x3635f5.words.split("+")));
            var _0x506112 = _0x3b75c0.getDianZanShu();
            _0x33b521 && random(1, 100) <= _0x3635f5.tapRate && _0x506112 >= _0x3635f5.dianzanMin && _0x506112 <= _0x3635f5.dianzanMax && _0x3b75c0.clickDianzan();
            _0x33b521 && random(1, 100) < _0x3635f5.guanzhuRate && _0x3b75c0.clickGuanzhu();
            var _0x1795ce = _0x3b75c0.getPinglunShu();
            var _0x54dd3d = random(1, 100) < parseInt(_0xe0cd6e.pinglunRate);
            var _0x16f96e = random(1, 100) < parseInt(_0xe0cd6e.huifuRate);
            var _0x18b4a9 = random(1, 100) < parseInt(_0xe0cd6e.huifuDianzanRate);
            if (_0x33b521 && (_0x54dd3d || _0x16f96e || _0x18b4a9) && _0x1795ce >= _0xe0cd6e.pinglunMin && _0x1795ce <= _0xe0cd6e.pinglunMax) {
              if (_0x3b75c0.clickPinlunqu()) {
                if (_0x16f96e && _0x2819e1.length > 0 && _0xe0cd6e.huifuDeep > 0) {
                  _0x3b75c0.pinglunHuifu(_0xe0cd6e.huifuDeep, _0x5a5eeb);
                }
                var _0x59cbf5 = _0x123315[random(0, _0x123315.length - 1)];
                if (_0x54dd3d && _0x59cbf5 != "") {
                  _0x3b75c0.pinglun(_0x59cbf5);
                }
                log("关闭页面: 退出评论区.");
                sleep(1000);
                back();
                sleep(1000);
              }
            }
            _0x3b75c0.closePinlunquOnce();
            if (_0x33b521 && _0x2c560b.sixinSwitch && _0x3b75c0.JumpShipinToUsercenter()) {
              var _0x3ec02e = _0x3b75c0.watchUercenterInfo();
              _0x3ec02e.keyWord = _0x3635f5.words;
              _0x3ec02e.tel = "";
              if (_0x2c560b.sixinSwitch && _0x2b727e.checkInfo3Conditionn(_0x2c560b, _0x3ec02e) && _0x3b75c0.JumpUsercenterToMore() && _0x3b75c0.JumpMoreToFasixin()) {
                var _0x59cbf5 = _0x476ae5[random(0, _0x476ae5.length - 1)];
                _0x59cbf5 != "" && _0x3b75c0.textSend(_0x59cbf5);
                back();
                sleep(1000);
              }
              sleep(1000);
              back();
            }
            _0x3b75c0.watchSleep("观看", random(_0x3635f5.timeMin, _0x3635f5.timeMax));
          }
          _0x2e6dcc.actionSwipUp();
        }
      });
    };
    this.checkInfo3Conditionn = function (_0x1801ee, _0x599b7c) {
      if (_0x599b7c.totalzan >= _0x1801ee.totalzanMin && _0x599b7c.totalzan <= _0x1801ee.totalzanMax && _0x599b7c.totalguanzhu >= _0x1801ee.totalguanzhuMin && _0x599b7c.totalguanzhu <= _0x1801ee.totalguanzhuMax && _0x599b7c.fensi >= _0x1801ee.fensiMin && _0x599b7c.fensi <= _0x1801ee.fensiMax && _0x599b7c.zuopin >= _0x1801ee.zuopinMin && _0x599b7c.zuopin <= _0x1801ee.zuopinMax && _0x599b7c.xihuan >= _0x1801ee.xihuanMin && _0x599b7c.xihuan <= _0x1801ee.xihuanMax) {
        toastLog("符合数字条件");
        sleep(2000);
        return true;
      }
      toastLog("不符合数字条件");
      sleep(2000);
      return false;
    };
    var _0xb7e3d5 = storages.create("wzke:A4");
    this.getBaseInfo = function () {
      var _0x494684 = _0xb7e3d5.get("baseinfo");
      _0x494684 == undefined && (_0x494684 = {}, _0x494684.time = 120, _0x494684.tapRate = 10, _0x494684.dianzanMin = 0, _0x494684.dianzanMax = 10000, _0x494684.guanzhuRate = 10, _0x494684.guanzhuMin = 0, _0x494684.guanzhuMax = 1000, _0x494684.timeMin = 2, _0x494684.timeMax = 10, _0x494684.words = "", _0xb7e3d5.put("baseinfo", _0x494684));
      return _0xb7e3d5.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x414b29) {
      _0xb7e3d5.put("baseinfo", _0x414b29);
    };
    this.getHuashu = function () {
      if (_0xb7e3d5.get("huashu") == undefined) {
        huashu = {};
        huashu.pinglunRate = "100";
        huashu.pinglunMin = 0;
        huashu.pinglunMax = 10000;
        huashu.pinglun = "很好看\n期待更新\n互关一下行不行";
        huashu.huifuDianzanRate = "100";
        huashu.huifuDianzanDeep = 0;
        huashu.huifuRate = "100";
        huashu.huifuDeep = 0;
        huashu.huifu = "很好\n你好\n互关";
        _0xb7e3d5.put("huashu", huashu);
      }
      return _0xb7e3d5.get("huashu");
    };
    this.saveHuashu = function (_0x56663a) {
      _0xb7e3d5.put("huashu", _0x56663a);
    };
    this.getInfo3 = function () {
      if (_0xb7e3d5.get("info3") == undefined) {
        var _0xad671 = {
          sixinSwitch: false,
          totalzanMin: 0,
          totalzanMax: 1000000,
          totalguanzhuMin: 0,
          totalguanzhuMax: 100000,
          fensiMin: 0,
          fensiMax: 1000000,
          zuopinMin: 0,
          zuopinMax: 100,
          xihuanMin: 0,
          xihuanMax: 100,
          sixinWords: "作品很不错,需要推广吗?\n你好推广更多流量\n互关\n你来我往,我关注你啦\n互粉\n作品推广了解一下"
        };
        _0xb7e3d5.put("info3", _0xad671);
      }
      return _0xb7e3d5.get("info3");
    };
    this.saveInfo3 = function (_0x2b6adb) {
      _0xb7e3d5.put("info3", _0x2b6adb);
    };
  }
  _0x34b2e0.exports = _0x38fdf8;
}, function (_0xd5f149, _0x4e6b4b, _0x3c1725) {
  function _0x490219(_0x21dce4) {
    var _0x4456df = this;
    var _0x205820 = _0x3c1725(1);
    var _0x32861b = _0x205820.bgColor;
    this.index = function () {
      _0x4456df.view();
    };
    this.view = function () {
      var _0x307ad7 = _0x369ffe.get_statusBarHeight();
      var _0x4d4d3b = _0x369ffe.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"直播氛围\"  bg=\"".concat(_0x32861b, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\">\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在直播间启动，自动观看视频，循环弹幕\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x4d4d3b, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\" >\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" alpha=\"0\" h=\"0\"  >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"主播个数\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"zhuboCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"喜欢次数\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"dianzanCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <frame padding=\"10 0 0 0\" >\n                                            <text marginTop=\"8\" textColor=\"black\" text=\"弹幕内容\" />\n                                            <input marginTop=\"25\" layout_weight=\"7\" hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"danmuWords\" bg=\"#ffffff\" />\n                                        </frame>\n                                        <text text=\"*换行隔开,多条随机,不要为空 \" />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"循环间隔\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"danmuSpace\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <text text=\"  *两次弹幕间隔时间。\" />\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"循环次数\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"danmuCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <text text=\"  *一个直播间循环喜欢和发送弹幕次数。\" />\n                                    </vertical>\n                                </card>\n\n                                <button id=\"save\" bg=\"").concat(_0x32861b, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n                            </vertical>\n                        </ScrollView>\n\n\n\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text text=\"功能说明\" gravity=\"center\" marginTop=\"10\" textColor=\"black\" textSize=\"24\" />\n\n                                <text marginTop=\"10\" textSize=\"18\" text=\"〓操作界面\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text textSize=\"16\" >1: 直播间</text>\n\n                                <text marginTop=\"20\" textSize=\"18\" text=\"〓功能\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text textSize=\"16\" >1: 自动观看</text>\n                                <text textSize=\"16\" >2: 循环弹幕</text>\n                            </vertical>\n\n                        </ScrollView>\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x205820.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x205820.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui._backButton.click(function () {
        _0x21dce4.view(1);
      });
      var _0x8b258f = _0x4456df.getInfo1();
      ui.dianzanCount.setText(_0x8b258f.dianzanCount + "");
      ui.zhuboCount.setText(_0x8b258f.zhuboCount + "");
      ui.danmuCount.setText(_0x8b258f.danmuCount + "");
      ui.danmuSpace.setText(_0x8b258f.danmuSpace + "");
      ui.danmuWords.setText(_0x8b258f.danmuWords + "");
      ui.save.click(function () {
        var _0x1e4151 = {
          dianzanCount: ui.dianzanCount.text(),
          zhuboCount: ui.zhuboCount.text(),
          danmuCount: ui.danmuCount.text(),
          danmuSpace: ui.danmuSpace.text(),
          danmuWords: ui.danmuWords.text()
        };
        _0x4456df.saveInfo1(_0x1e4151);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x4456df.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
    };
    var _0x4567d8 = new (_0x3c1725(3))();
    var _0x369ffe = _0x3c1725(0);
    var _0xea49fc = new (_0x3c1725(2))();
    var _0x359a1e = {};
    var _0x31d9ab = [];
    _0x4456df.start = function () {
      if (!_0x369ffe.checkServer() || !_0x4567d8.launchApp()) {
        return false;
      }
      _0x369ffe.showConsole("直播拓客");
      log("运行页面 : [ 直播间 ]");
      _0xea49fc.index();
      _0x31d9ab = [];
      _0xea49fc.ClickListener({
        clickStart: function _0x2a5624() {
          toastLog("开始");
          _0x4456df.action();
        },
        clickStop: function _0x1da71c() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x463eb6() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0xea49fc.close();
            _0x369ffe.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x4456df.action = function () {
      var _0x2d785d = _0x4456df.getInfo1();
      var _0x3cbb5e = _0x2d785d.zhuboCount;
      _0x3cbb5e = 1;
      var _0x2469b4 = _0x2d785d.danmuWords;
      var _0x3d73ab = _0x2469b4.split("\n");
      threads.start(function () {
        _0x4567d8.watchStart("主任务开始", 1);
        while (--_0x3cbb5e >= 0) {
          sleep(1000);
          var _0x2c4b14 = parseInt(_0x2d785d.danmuCount);
          while (--_0x2c4b14 >= 0) {
            var _0x435cad = parseInt(_0x2d785d.dianzanCount);
            _0x4456df.clickDianzan(_0x435cad);
            var _0x5e1bfc = _0x3d73ab[random(0, _0x3d73ab.length - 1)];
            _0x5e1bfc != "" && _0x4567d8.zhibopinglun(_0x5e1bfc);
            _0x4567d8.watchSleep("观看中", _0x2d785d.danmuSpace);
          }
          _0x369ffe.actionSwipUp();
        }
        alert("结束任务");
      });
    };
    _0x4456df.clickDianzan = function (_0x5a99ed) {
      log("喜欢开始: ");
      for (var _0x548645 = 0; _0x548645 < _0x5a99ed + 1; _0x548645++) {
        var _0x4f9709 = 200 + random(-50, 50);
        sleep(_0x4f9709);
        log("点击次数: " + _0x548645);
        var _0x3f0466 = device.width * 0.4 + random(-200, -100);
        var _0x562a96 = device.height * 0.38 + random(-50, 50);
        click(_0x3f0466, _0x562a96);
      }
    };
    var _0x379e4e = storages.create("wzke:A5");
    _0x4456df.getInfo1 = function () {
      var _0x1b3d61 = _0x379e4e.get("info1");
      _0x1b3d61 == undefined && (_0x1b3d61 = {}, _0x1b3d61.zhuboCount = 1, _0x1b3d61.danmuCount = 3, _0x1b3d61.danmuSpace = 10, _0x1b3d61.danmuWords = "6\n66\n666");
      _0x1b3d61.dianzanCount == undefined && (_0x1b3d61.dianzanCount = 10);
      _0x379e4e.put("info1", _0x1b3d61);
      return _0x379e4e.get("info1");
    };
    _0x4456df.saveInfo1 = function (_0x2d2abf) {
      _0x379e4e.put("info1", _0x2d2abf);
    };
  }
  _0xd5f149.exports = _0x490219;
}, function (_0xab9fc2, _0x30df9b, _0x2bb66f) {
  var _0x3fba65 = _0x2bb66f(0);
  function _0x574413(_0x59c06b) {
    var _0x16dd9a = this;
    var _0x473568 = new (_0x2bb66f(5))();
    var _0x58436d = _0x2bb66f(1);
    var _0xb402dc = _0x58436d.bgColor;
    var _0x10cc33 = new (_0x2bb66f(4))();
    var _0x5f15c1 = null;
    var _0x7eb5b0 = storages.create("wzke:A6");
    _0x16dd9a.index = function () {
      _0x5f15c1 = _0x1f7346.createPopWin();
      _0x16dd9a.initContent();
      _0x5f15c1.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    this.initContent = function () {
      var _0x47bc0e = _0x58436d.bgColor;
      var _0x7f3cb8 = _0x1f7346.get_statusBarHeight();
      var _0x49d496 = _0x1f7346.getVersionName("com.ss.android.ugc.aweme");
      var _0x10c20e = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"行业搜索\" bg=\"".concat(_0x47bc0e, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"输入行业关键词进行搜索，在搜索用户列表启动，自动观看视频，概率互动，行业精准拓客\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x49d496, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\" id=\"base\"> </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x47bc0e, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>  <vertical id=\"video\"> </vertical>    </ScrollView>\n                        <ScrollView>  <vertical id=\"userCenter\"> </vertical>    </ScrollView>\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      _0x10c20e.base.addView(_0x16dd9a.createBaseView());
      _0x10c20e.video.addView(_0x16dd9a.CreateVideoView());
      _0x10c20e.userCenter.addView(_0x16dd9a.createUserCenterView());
      _0x10c20e.viewpager.setTitles(["基础设置", "浏览设置", "私信设置"]);
      _0x10c20e.tabs.setupWithViewPager(_0x10c20e.viewpager);
      _0x10c20e.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x58436d.selectedTabIndicatorColor);
      _0x10c20e.tabs.selectedTabIndicatorHeight = _0x58436d.selectedTabIndicatorHeight;
      _0x10c20e.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x10c20e._backButton.click(function () {
        _0x5f15c1.dismiss();
      });
      _0x10c20e.start.click(function () {
        _0x7eb5b0.put("userCount", parseInt(_0x10c20e.userCount.text()));
        _0x7eb5b0.put("timeMin", parseInt(_0x10c20e.timeMin.text()));
        _0x7eb5b0.put("timeMax", parseInt(_0x10c20e.timeMax.text()));
        _0x7eb5b0.put("modelSwitch2", _0x10c20e.modelSwitch2.checked);
        dialogs.build({
          title: "提示",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x16dd9a.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x5f15c1.setContentView(_0x10c20e);
    };
    _0x16dd9a.getBaseData = function () {
      var _0xfebfa8 = {
        userCount: _0x7eb5b0.get("userCount") != undefined ? _0x7eb5b0.get("userCount") : 3,
        timeMin: _0x7eb5b0.get("timeMin") != undefined ? _0x7eb5b0.get("timeMin") : 2,
        timeMax: _0x7eb5b0.get("timeMax") != undefined ? _0x7eb5b0.get("timeMax") : 8,
        modelSwitch2: _0x7eb5b0.get("modelSwitch2") != undefined ? _0x7eb5b0.get("modelSwitch2") : false
      };
      return _0xfebfa8;
    };
    _0x16dd9a.createBaseView = function () {
      var _0x98438a = _0xb402dc;
      var _0x44e4ab = ui.inflate("\n            <vertical bg=\"#ffffff\">\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"浏览个数\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"userCount\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"主页浏览（秒）\" layout_gravity=\"left|center\" />\n                    <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                        <text textColor=\"black\" text=\"最低:\" />\n                        <input id=\"timeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                        <text textColor=\"black\" text=\"最高:\" />\n                        <input id=\"timeMax\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                    </horizontal>\n                </horizontal>\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <SwitchWidget-Se7en id=\"modelSwitch2\" text=\"电话模式\" padding='15 10' trackColor=\"".concat(_0x98438a, "\" textColor=\"black\" checked=\"\" />\n                <text padding=\"10 0 0 0\" text=\"  开启后会停止其他所有，仅关注\" />\n\n            </vertical>\n        "));
      var _0x3c72e1 = _0x16dd9a.getBaseData();
      _0x44e4ab.userCount.setText(_0x3c72e1.userCount + "");
      _0x44e4ab.timeMin.setText(_0x3c72e1.timeMin + "");
      _0x44e4ab.timeMax.setText(_0x3c72e1.timeMax + "");
      _0x44e4ab.modelSwitch2.checked = _0x3c72e1.modelSwitch2;
      return _0x44e4ab;
    };
    _0x16dd9a.getVideoData = function () {
      var _0x1fe209 = {
        videoCount: _0x7eb5b0.get("videoCount") != undefined ? _0x7eb5b0.get("videoCount") : 1,
        videoFollowRate: _0x7eb5b0.get("videoFollowRate") != undefined ? _0x7eb5b0.get("videoFollowRate") : 0,
        videoLikeRate: _0x7eb5b0.get("videoLikeRate") != undefined ? _0x7eb5b0.get("videoLikeRate") : 0,
        videoCommentMin: _0x7eb5b0.get("videoCommentMin") != undefined ? _0x7eb5b0.get("videoCommentMin") : 0,
        videoCommentMax: _0x7eb5b0.get("videoCommentMax") != undefined ? _0x7eb5b0.get("videoCommentMax") : 1000,
        videoCommentWords: _0x7eb5b0.get("videoCommentWords") != undefined ? _0x7eb5b0.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行",
        video_dianzan: _0x7eb5b0.get("video_dianzan") != undefined ? _0x7eb5b0.get("video_dianzan") : 3
      };
      return _0x1fe209;
    };
    _0x16dd9a.CreateVideoView = function () {
      var _0x27c4d9 = _0xb402dc;
      var _0x570c19 = ui.inflate("\n            <vertical bg=\"#ffffff\" >\n                <text text=\"浏览作品\" gravity=\"center\" margin=\"0 10\" textColor=\"black\" textSize=\"24\" />\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"作品数量（个）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCount\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率（%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoFollowRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"喜欢概率（%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoLikeRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"4\" textColor=\"black\" text=\"评论范围\" />\n                    <horizontal layout_weight=\"6\" gravity=\"right\">\n                        <text textColor=\"black\" text=\"下限:\" />\n                        <input minWidth=\"70\" gravity=\"center\" id=\"videoCommentMin\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                        <text textColor=\"black\" text=\"  上限:\" />\n                        <input paddingRight=\"30\" id=\"videoCommentMax\" gravity=\"right\" minWidth=\"100\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                    </horizontal>\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"评论区喜欢（个）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"video_dianzan\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <vertical padding=\"15 0 20 0\" w=\"*\" >\n                    <horizontal h=\"25\" gravity=\"left|center\" >\n                        <text w=\"auto\" textColor=\"black\" text=\"评论内容 换行隔开 多条随机\" />\n                        <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                        <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                    </horizontal>\n                    <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"videoCommentWords\" bg=\"#ffffff\" />\n                </vertical>\n\n\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"videoViewContent\" bg=\"".concat(_0x27c4d9, "\" textSize=\"20\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\" text=\"保存作品设置\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                </card>\n                <vertical h=\"400\" w=\"auto\">\n                </vertical>\n            </vertical>\n        "));
      _0x1f7346.setBtnRadius(_0x570c19.videoCommentWordsCopy, _0x27c4d9);
      _0x1f7346.setBtnRadius(_0x570c19.videoCommentWordsPaste, _0x27c4d9);
      _0x570c19.videoCommentWordsCopy.click(function () {
        setClip(_0x570c19.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x570c19.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x570c19.videoCommentWordsPaste.click(function () {
        var _0x530940 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x530940,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x570c19.videoCommentWords.setText(_0x530940);
        }).show();
      });
      var _0x50c95b = _0x16dd9a.getVideoData();
      _0x570c19.videoCount.setText(_0x50c95b.videoCount + "");
      _0x570c19.videoFollowRate.setText(_0x50c95b.videoFollowRate + "");
      _0x570c19.videoLikeRate.setText(_0x50c95b.videoLikeRate + "");
      _0x570c19.videoCommentMin.setText(_0x50c95b.videoCommentMin + "");
      _0x570c19.videoCommentMax.setText(_0x50c95b.videoCommentMax + "");
      _0x570c19.videoCommentWords.setText(_0x50c95b.videoCommentWords);
      _0x570c19.video_dianzan.setText(_0x50c95b.video_dianzan + "");
      _0x570c19.videoViewContent.click(function () {
        _0x7eb5b0.put("videoCount", parseInt(_0x570c19.videoCount.text()));
        _0x7eb5b0.put("videoFollowRate", parseInt(_0x570c19.videoFollowRate.text()));
        _0x7eb5b0.put("videoLikeRate", parseInt(_0x570c19.videoLikeRate.text()));
        _0x7eb5b0.put("videoCommentMin", parseInt(_0x570c19.videoCommentMin.text()));
        _0x7eb5b0.put("videoCommentMax", parseInt(_0x570c19.videoCommentMax.text()));
        _0x7eb5b0.put("videoCommentWords", _0x570c19.videoCommentWords.text());
        _0x7eb5b0.put("video_dianzan", parseInt(_0x570c19.video_dianzan.text()));
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x570c19;
    };
    _0x16dd9a.getUserCenterData = function () {
      var _0x53d478 = {
        userGuanzhuSwitch: _0x7eb5b0.get("userGuanzhuSwitch") != undefined ? _0x7eb5b0.get("userGuanzhuSwitch") : false,
        userSixinSwitch: _0x7eb5b0.get("userSixinSwitch") != undefined ? _0x7eb5b0.get("userSixinSwitch") : false,
        userSixinTime: _0x7eb5b0.get("userSixinTime") != undefined ? _0x7eb5b0.get("userSixinTime") : 1,
        sixinWords: _0x7eb5b0.get("sixinWords") != undefined ? _0x7eb5b0.get("sixinWords") : "你好\n好啊\n你啊"
      };
      return _0x53d478;
    };
    _0x16dd9a.createUserCenterView = function () {
      var _0x327cf9 = _0xb402dc;
      var _0x2cb078 = ui.inflate("\n            <vertical bg=\"#ffffff\">\n                <text text=\"用户中心设置\" gravity=\"center\" margin=\"0 10\" textColor=\"black\" textSize=\"24\" />\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <SwitchWidget-Se7en id=\"userGuanzhuSwitch\" text=\"用户中心关注\" padding='15 10' trackColor=\"".concat(_0x327cf9, "\" textColor=\"black\" checked=\"\" />\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <SwitchWidget-Se7en id=\"userSixinSwitch\" text=\"用户中心私信\" padding='15 10' trackColor=\"").concat(_0x327cf9, "\" textColor=\"black\" checked=\"\" />\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"私信间隔（秒）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"userSixinTime\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <vertical padding=\"15 10\" >\n                    <horizontal h=\"25\" gravity=\"left|center\" >\n                        <text textColor=\"black\" text=\"私信内容 换行隔开 多条随机 \" />\n                        <button w=\"40\" id=\"sixinWordsCopy\" margin=\"5 2\" bg=\"#ff9800\" text=\"复制\" gravity=\"center\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                        <button w=\"40\" id=\"sixinWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" gravity=\"center\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                    </horizontal>\n\n                    <input hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"sixinWords\" bg=\"#ffffff\" />\n                </vertical>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"saveSixin\" bg=\"").concat(_0x327cf9, "\" textSize=\"20\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\" text=\"保存私信设置\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                </card>\n            </vertical>\n        "));
      _0x1f7346.setBtnRadius(_0x2cb078.sixinWordsCopy, _0x327cf9);
      _0x1f7346.setBtnRadius(_0x2cb078.sixinWordsPaste, _0x327cf9);
      _0x2cb078.sixinWordsCopy.click(function () {
        setClip(_0x2cb078.sixinWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x2cb078.sixinWords.text(),
          positive: "好的"
        }).show();
      });
      _0x2cb078.sixinWordsPaste.click(function () {
        var _0x4d221e = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4d221e,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x2cb078.sixinWords.setText(_0x4d221e);
          alert("粘贴成功");
        }).show();
      });
      var _0x10705a = _0x16dd9a.getUserCenterData();
      _0x2cb078.userGuanzhuSwitch.checked = _0x10705a.userGuanzhuSwitch;
      _0x2cb078.userSixinSwitch.checked = _0x10705a.userSixinSwitch;
      _0x2cb078.userSixinTime.setText(_0x10705a.userSixinTime + "");
      _0x2cb078.sixinWords.setText(_0x10705a.sixinWords);
      _0x2cb078.saveSixin.click(function () {
        _0x7eb5b0.put("userGuanzhuSwitch", _0x2cb078.userGuanzhuSwitch.checked);
        _0x7eb5b0.put("userSixinSwitch", _0x2cb078.userSixinSwitch.checked);
        _0x7eb5b0.put("userSixinTime", parseInt(_0x2cb078.userSixinTime.text()));
        _0x7eb5b0.put("sixinWords", _0x2cb078.sixinWords.text());
        dialogs.build({
          title: "提示",
          content: "保存成功",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x2cb078;
    };
    var _0x478bf8 = new (_0x2bb66f(3))();
    var _0x1f7346 = _0x2bb66f(0);
    var _0x10914b = new (_0x2bb66f(2))();
    var _0x420c1c = [];
    _0x16dd9a.start = function () {
      if (!_0x1f7346.checkServer() || !_0x478bf8.launchApp()) {
        return false;
      }
      _0x1f7346.showConsole("行业搜索");
      log("运行页面 : [ 首页-搜索-用户列表 ]");
      _0x10914b.index();
      _0x420c1c = [];
      _0x10914b.ClickListener({
        clickStart: function _0x3c0b8b() {
          toastLog("开始");
          _0x16dd9a.action();
        },
        clickStop: function _0x7a37bd() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x28357f() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x10914b.close();
            _0x1f7346.closeConsole();
          }).show();
        }
      });
    };
    var _0x3fad5c = "";
    _0x16dd9a.action = function () {
      var _0x56f5b1 = _0x16dd9a.getBaseData();
      var _0xf1d29d = parseInt(_0x56f5b1.timeMin);
      var _0x16737e = parseInt(_0x56f5b1.timeMax);
      var _0x1bcd92 = _0x56f5b1.userCount;
      log("userCount", _0x1bcd92);
      _0x478bf8.closeTip();
      threads.start(function () {
        _0x478bf8.watchSleep("任务开始： ", 1);
        var _0x1e70ff = className("android.widget.EditText").findOnce();
        _0x1e70ff != null && (_0x3fad5c = _0x1e70ff.text());
        while (1) {
          while (1) {
            sleep(1000);
            if (_0x1bcd92 == 0) {
              break;
            }
            var _0x30f1de = _0x16dd9a.getOneUser();
            if (_0x30f1de != null) {
              var _0x5c17bf = click(_0x30f1de.bounds().centerX(), _0x30f1de.bounds().centerY());
              log("进入页面: 用户中心", _0x5c17bf);
              sleep(2000);
              _0x478bf8.watchSleep("主页浏览： ", random(_0xf1d29d, _0x16737e));
              _0x16dd9a.action2();
              sleep(2000);
              log("返回页面: 用户列表");
              back();
              sleep(2000);
              _0x1bcd92--;
            } else {
              break;
            }
          }
          if (_0x1bcd92 == 0) {
            break;
          }
          var _0x2d9a1f = device.width * 0.4 + random(-50, 50);
          var _0x57f163 = device.height * 0.85 + random(-50, 50);
          var _0x3fa166 = device.width * 0.6 + random(-50, 50);
          var _0x41ba12 = device.height * 0.25 + random(-50, 50);
          _0x1f7346.swipeRandom(_0x2d9a1f, _0x57f163, _0x3fa166, _0x41ba12, 2000);
          sleep(2000);
        }
        alert("任务结束");
      });
    };
    _0x16dd9a.getOneUser = function () {
      log("获取用户");
      sleep(2000);
      var _0x150b71 = textContains("粉丝: ").find();
      for (var _0x3ad85c = 1; _0x3ad85c < _0x150b71.length; _0x3ad85c++) {
        var _0xa44d8b = _0x150b71[_0x3ad85c];
        var _0xa4527d = _0xa44d8b.parent();
        if (_0xa4527d.bounds().centerY() > device.height * 0.8) {
          break;
        }
        if (_0xa4527d.bounds().height() < 100) {
          continue;
        }
        var _0x30fea2 = _0xa44d8b.text();
        userNameArr = _0x30fea2.split("粉丝:");
        _0x30fea2 = userNameArr[0];
        if (_0x420c1c.indexOf(_0x30fea2) == -1) {
          log("用户昵称： ", _0x30fea2);
          _0x420c1c.push(_0x30fea2);
          return _0xa44d8b;
        }
      }
      return null;
    };
    _0x16dd9a.action2 = function () {
      if (!_0x478bf8.isPrivateOrBan()) {
        return false;
      }
      var _0x2359df = _0x16dd9a.getBaseData();
      var _0x5b2b6d = _0x16dd9a.getVideoData();
      var _0x4fd925 = _0x16dd9a.getUserCenterData();
      if (_0x2359df.modelSwitch2) {
        var _0x5333a0 = _0x478bf8.watchUsercenterTel(2);
        _0x5333a0 != null && _0x478bf8.clickUsercenterGuanzhu();
        return true;
      }
      _0x4fd925.userGuanzhuSwitch && _0x478bf8.clickUsercenterGuanzhu();
      if (_0x4fd925.userSixinSwitch && _0x478bf8.JumpUsercenterToMore() && _0x478bf8.JumpMoreToFasixin()) {
        var _0x39cbf3 = _0x4fd925.sixinWords.split("\n");
        var _0x5e05d1 = _0x39cbf3[random(0, _0x39cbf3.length - 1)];
        _0x5e05d1 != "" && _0x478bf8.textSend(_0x5e05d1);
        back();
        sleep(1000);
      }
      var _0x3f8cb6 = _0x5b2b6d.videoCount;
      if (_0x3f8cb6 == 0) {
        return false;
      }
      if (_0x478bf8.JumpUsercenterToFirstzuopin() == false) {
        sleep(1000);
        return;
      }
      while (_0x3f8cb6 > 0) {
        _0x478bf8.watchSleep("观看", 2);
        if (random(1, 100) < _0x5b2b6d.videoFollowRate) {
          _0x478bf8.clickGuanzhu();
        }
        if (random(1, 100) < _0x5b2b6d.videoLikeRate) {
          _0x478bf8.clickDianzan();
        }
        var _0x2f6609 = _0x478bf8.getPinglunShu();
        _0x2f6609 >= _0x5b2b6d.videoCommentMin && _0x2f6609 <= _0x5b2b6d.videoCommentMax && _0x478bf8.clickPinlunqu() && (_0x478bf8.actionPinglunqu(_0x5b2b6d.video_dianzan, "", ""), _0x478bf8.pinglun(_0x5b2b6d.videoCommentWords), back());
        _0x478bf8.watchSleep("观看", 2);
        if (--_0x3f8cb6 <= 0) {
          break;
        }
        _0x1f7346.actionSwipUp();
        sleep(2000);
      }
      log("返回个人中心");
      back();
      sleep(2000);
    };
  }
  _0xab9fc2.exports = _0x574413;
}, function (_0x4fd939, _0x58ad23, _0x2c1cd9) {
  function _0x18c7a6(_0x3218aa) {
    var _0x1f06ca = this;
    var _0x3d341f = "/sdcard/111Record/";
    var _0x4e0dc5 = null;
    var _0x49a1fb = new (_0x2c1cd9(2))();
    var _0x10cc49 = _0x2c1cd9(0);
    var _0x2502be = _0x2c1cd9(1);
    var _0x306e1e = _0x2502be.bgColor;
    _0x1f06ca.index = function () {
      _0x1f06ca.show();
    };
    _0x1f06ca.show = function () {
      var _0x45a4cd = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"AI录制\"  bg=\"".concat(_0x306e1e, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" >\n                    <ScrollView>\n                        <vertical padding=\"16\">\n                        <card  gravity=\"center_horizontal\" margin=\"20\" h=\"180\" >\n                            <vertical gravity=\"center_horizontal\" w=\"auto\"  h=\"auto\" margin=\"20\">\n                                <text   text=\"    提示:使用功能之前\" />\n                                <text   text=\"    1.录制:点击和滑动,操作间隔至少1秒\" />\n                                <text   text=\"    2.屏幕内生效,物理按键如音量,返回等无效,\" />\n                                <text   text=\"    3.免Root录制,由于安卓未知bug,很小概率会出现问题,重启软件\" />\n                                <text   text=\"    *音量上键结束录制\"  textColor=\"red\"  />\n            \n                            </vertical>\n\n                        </card>\n                        <button marginTop=\"25\" textSize=\"18\" id=\"start\" h=\"auto\"  text=\"开始录制\" layout_gravity=\"center\" w=\"200\" style=\"Widget.AppCompat.Button.Borderless.Colored\" /> \n                        </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical padding=\"16\" >\n                                <horizontal gravity=\"center\" layout_gravityc=\"center\" marginTop=\"15\">\n                                    <text layout_gravityc=\"center\"  textColor=\"black\" text=\"循环次数 :\" />\n                                    <input layout_gravityc=\"center\"  id=\"num\" gravity=\"center\"  marginLeft=\"20\" inputType=\"number\" text=\"1\" width=\"50\" />\n                                </horizontal>\n                            <text   text=\"    列表\"  textColor=\"red\"  />\n                            <list id=\"icons\" spanCount=\"1\" h=\"*\">\n                                <horizontal w=\"*\">\n                                    <card  layout_weight=\"7\"  h=\"50\" margin=\"10 5\" cardCornerRadius=\"2dp\"\n                                        cardElevation=\"1dp\" gravity=\"center_vertical\">\n                                        <vertical padding=\"50 8\" h=\"auto\">\n                                            <text text=\"{{this.name}}\" textColor=\"#222222\" textSize=\"16sp\"/>\n                                        </vertical>\n                                        <View bg=\"#f44336\" h=\"*\" w=\"10\"/>\n                                       \n                                    </card>\n                                  \n                                </horizontal>\n                            </list>\n                            </vertical>\n\n\n                        </ScrollView>\n                    </viewpager  >\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["开始录制", "我的录制"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x2502be.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x2502be.selectedTabIndicatorHeight;
      ui.viewpager.currentItem = 0;
      ui.tabs.setTabTextColors(colors.parseColor("#66CCFF"), colors.parseColor("#6A5ACD"));
      ui.viewpager.setOnPageChangeListener({
        onPageSelected: function _0x3f02de(_0x30383f) {
          if (_0x30383f == 1) {
            var _0xb31bf2 = _0x1f06ca.getAllfile();
            var _0x232f8b = [];
            _0xb31bf2.forEach(function (_0x3338d9) {
              log(_0x3338d9);
              var _0x299bdf = _0x3338d9.replace(".js", "");
              _0x232f8b.push({
                name: _0x299bdf,
                file: _0x3d341f + _0x3338d9
              });
            });
            ui.icons.setDataSource(_0x232f8b);
          }
        }
      });
      ui._backButton.click(function () {
        _0x3218aa.view(1);
      });
      ui.start.click(function () {
        dialogs.build({
          title: "提示",
          content: "确认开始吗?",
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x1f06ca.start();
        }).show();
      });
      var _0x4b1d09 = function () {
        var _0x2fa5cd = _0x1f06ca.getAllfile();
        var _0x4c55b1 = [];
        _0x2fa5cd.forEach(function (_0x353547) {
          var _0x26a564 = _0x353547.replace(".js", "");
          _0x4c55b1.push({
            name: _0x26a564,
            file: _0x3d341f + _0x353547
          });
        });
        ui.icons.setDataSource(_0x4c55b1);
      }();
      ui.icons.on("item_click", function (_0x54c2a4, _0x220e03, _0x1f7392) {
        var _0x405615 = ui.num.text();
        dialogs.build({
          title: "提示",
          content: "[" + _0x54c2a4.name + "] 执行一下操作:" + _0x405615 + "次",
          positive: "执行任务",
          neutral: "删除",
          negative: "取消"
        }).on("positive", function () {
          _0x1f06ca.start2(_0x54c2a4.file, _0x405615);
        }).on("neutral", function () {
          log("删除", _0x54c2a4.file);
          if (files.exists(_0x54c2a4.file)) {
            files.remove(_0x54c2a4.file);
            var _0x75ed31 = _0x1f06ca.getAllfile();
            var _0x4aefbd = [];
            _0x75ed31.forEach(function (_0x4c3d3b) {
              log(_0x4c3d3b);
              var _0x2da09d = _0x4c3d3b.replace(".js", "");
              _0x4aefbd.push({
                name: _0x2da09d,
                file: _0x3d341f + _0x4c3d3b
              });
            });
            ui.icons.setDataSource(_0x4aefbd);
          }
        }).show();
      });
    };
    var _0x4c2121 = {};
    _0x1f06ca.start = function () {
      if (!_0x10cc49.checkServer()) {
        return false;
      }
      home();
      _0x49a1fb.index();
      _0x49a1fb.ClickListener({
        clickStart: function _0x40caef() {
          _0x4c2121 = {};
          _0x30a3e3 = "";
          _0x3632a8 = new Date().getTime();
          _0x4c2121.start = threads.start(function () {
            _0x1f06ca.action();
          });
        },
        clickStop: function _0x9bb963() {
          toastLog("结束录制");
          _0x4e0dc5.close();
          _0x1f06ca.savethisCode();
        },
        clickExit: function _0x2759a6() {
          toastLog("关闭");
          _0x49a1fb.close();
          _0x4e0dc5 != null && _0x4e0dc5.close();
        }
      });
    };
    var _0x30a3e3 = "";
    var _0x3632a8 = new Date().getTime();
    _0x1f06ca.savethisCode = function () {
      rawInput("请输入要保存的文件名", "", function (_0x52f7fd) {
        switch (_0x52f7fd) {
          case null:
            toastLog("取消保存");
            break;
          case "":
            _0x1f06ca.savethisCode();
            break;
          default:
            var _0xd6fbf1 = _0x52f7fd;
            toast(_0xd6fbf1 + "保存成功");
            _0xd6fbf1 = _0xd6fbf1 + ".js";
            var _0x464094 = ";sleep(2000);toast('结束任务');";
            files.write(_0x3d341f + _0xd6fbf1, _0x30a3e3 + _0x464094);
            break;
        }
      });
    };
    _0x1f06ca.action = function () {
      importClass(android.animation.ObjectAnimator);
      importClass(android.animation.ValueAnimator);
      importClass(android.view.animation.LinearInterpolator);
      importClass(android.animation.AnimatorSet);
      _0x4e0dc5 = floaty.rawWindow("\n            <frame id=\"action\" w=\"".concat(device.width, "\" h=\"").concat(device.height, "\">\n            \n                <canvas id=\"a\" w=\"*\" h=\"*\" gravity=\"center\" />\n                <frame alpha=\"0.8\"  marginTop=\"700px\" marginLeft=\"").concat(device.width * 0.5 - 60, "px\" w=\"140px\" h=\"140px\"  >\n                    <img w=\"140px\" h=\"140px\" src=\"#e91e63\" circle=\"true\" />\n                    <img  id=\"shouzhi\" w=\"100px\" h=\"100px\" src=\"@drawable/ic_touch_app_black_48dp\" tint=\"#f5e980\" gravity=\"center\" layout_gravity=\"center\" />\n                </frame>\n            </frame>\n        "));
      setInterval(function () {}, 1000);
      animatorSetPeople = new AnimatorSet();
      animatorSetPeople.setDuration(2000);
      animator = ObjectAnimator.ofFloat(_0x4e0dc5.shouzhi, "scaleX", 0.8, 1.2, 0.8);
      var _0x2e3a44 = animator;
      _0x2e3a44.setRepeatCount(-1);
      _0x2e3a44.setInterpolator(new LinearInterpolator());
      animator = ObjectAnimator.ofFloat(_0x4e0dc5.shouzhi, "scaleY", 0.8, 1.2, 0.8);
      var _0x4c1811 = animator;
      _0x4c1811.setRepeatCount(-1);
      _0x4c1811.setRepeatMode(ValueAnimator.RESTART);
      animatorSetPeople.play(_0x2e3a44).with(_0x4c1811);
      animatorSetPeople.start();
      var _0x2ef3e8 = 0;
      var _0x130f39 = 0;
      var _0x1c64be;
      var _0x58b6be = 50;
      _0x4e0dc5.action.setOnTouchListener(function (_0x52ae46, _0x105de5) {
        switch (_0x105de5.getAction()) {
          case _0x105de5.ACTION_DOWN:
            _0x2ef3e8 = _0x105de5.getRawX();
            _0x130f39 = _0x105de5.getRawY();
            _0x1c64be = new Date().getTime();
            return true;
          case _0x105de5.ACTION_UP:
            if (!(new Date().getTime() - _0x1c64be > 2000 && Math.abs(_0x105de5.getRawY() - _0x130f39) < _0x58b6be && Math.abs(_0x105de5.getRawX() - _0x2ef3e8) < _0x58b6be)) {
              Math.abs(_0x105de5.getRawY() - _0x130f39) < _0x58b6be && Math.abs(_0x105de5.getRawX() - _0x2ef3e8) < _0x58b6be ? _0x1f06ca.click(_0x2ef3e8, _0x130f39) : _0x1f06ca.swiper(_0x2ef3e8, _0x130f39, _0x105de5.getRawX(), _0x105de5.getRawY());
            }
            return true;
        }
        return true;
      });
    };
    _0x1f06ca.click = function (_0x407273, _0x34ffcd) {
      _0x407273 = parseInt(_0x407273);
      _0x34ffcd = parseInt(_0x34ffcd);
      toastLog("点击(" + _0x407273 + "," + _0x34ffcd + ")");
      threads.start(function () {
        _0x4e0dc5.setTouchable(false);
        sleep(60);
        var _0x4df1dc = function () {
          var _0x1545b8 = new Date().getTime() - _0x3632a8;
          var _0x472cce = "sleep(" + _0x1545b8 + ");\n";
          _0x472cce += "press(" + _0x407273 + "," + _0x34ffcd + "," + 1 + ");\n";
          _0x30a3e3 += _0x472cce;
          _0x3632a8 = new Date().getTime();
        }();
        press(_0x407273, _0x34ffcd, 1);
        _0x4e0dc5.setTouchable(true);
      });
    };
    _0x1f06ca.swiper = function (_0x2bc0af, _0x36e857, _0x376e6a, _0x23e3fb) {
      _0x2bc0af = parseInt(_0x2bc0af);
      _0x36e857 = parseInt(_0x36e857);
      _0x376e6a = parseInt(_0x376e6a);
      _0x23e3fb = parseInt(_0x23e3fb);
      toastLog("从(" + _0x2bc0af + "," + _0x36e857 + ")滑到(" + _0x376e6a + "," + _0x23e3fb + ")");
      threads.start(function () {
        _0x4e0dc5.setTouchable(false);
        sleep(60);
        var _0x5f0f5f = function () {
          var _0x4e4ad3 = new Date().getTime() - _0x3632a8;
          var _0x1839ac = "sleep(" + _0x4e4ad3 + ");\n";
          _0x1839ac += "swipe(" + _0x2bc0af + "," + _0x36e857 + "," + _0x376e6a + "," + _0x23e3fb + "," + 350 + ");\n";
          _0x30a3e3 += _0x1839ac;
          _0x3632a8 = new Date().getTime();
        }();
        swipe(_0x2bc0af, _0x36e857, _0x376e6a, _0x23e3fb, 350);
        _0x4e0dc5.setTouchable(true);
      });
    };
    var _0x1e0529 = {};
    _0x1f06ca.start2 = function (_0x17886a, _0x30754c) {
      if (!_0x10cc49.checkServer()) {
        return false;
      }
      home();
      _0x1e0529 = {};
      _0x1e0529.chencVoiceUp = _0x10cc49.chencVoiceUp(function () {
        toastLog("结束");
        for (var _0x469955 in _0x1e0529) {
          _0x1e0529[_0x469955].interrupt();
        }
      });
      _0x49a1fb.index();
      _0x49a1fb.ClickListener({
        clickStart: function _0x55a5fc() {
          _0x49a1fb.close();
          _0x1e0529.start = threads.start(function () {
            toast("开始运行");
            sleep(500);
            var _0x2d45c8 = {
              loopTimes: _0x30754c
            };
            engines.execScriptFile(_0x17886a, _0x2d45c8);
          });
        },
        clickStop: function _0x5e05fc() {
          mThis.end();
        }
      });
    };
    _0x1f06ca.action2 = function (_0x40e75d, _0x128cc6) {};
    _0x1f06ca.getAllfile = function () {
      var _0x1e4582 = files.listDir(_0x3d341f, function (_0x65f281) {
        return _0x65f281.endsWith(".js") && files.isFile(files.join(_0x3d341f, _0x65f281));
      });
      return _0x1e4582;
    };
  }
  _0x4fd939.exports = _0x18c7a6;
}, function (_0x5a1a14, _0x594277, _0x32f40e) {
  function _0x470b02(_0x1078de) {
    var _0x405b8e = this;
    var _0x5efe8f = _0x32f40e(1);
    var _0x4d8bf5 = new (_0x32f40e(4))();
    var _0xab71d1 = new (_0x32f40e(5))();
    _0x405b8e.index = function () {
      var _0x3a1d81 = _0x4d8bf5.getLoginInfo();
      _0x405b8e.view();
    };
    _0x405b8e.view = function () {
      var _0x4e61a2 = _0x1a15df.get_statusBarHeight();
      var _0x599e28 = _0x1a15df.getVersionName("com.ss.android.ugc.aweme");
      var _0x2a20ef = _0x5efe8f.bgColor;
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"行业拓客\" bg=\"".concat(_0x2a20ef, "\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"设置行业，评论区关键字，在主页启动，对评论区、含有设定关键字评论的用户进行精准拓客，可在管理后台查看运行数据\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x599e28, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <vertical padding=\"2\" marginTop=\"10\" id=\"bg1\" bg=\"#ffffff\">\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" bg=\"#ffffff\" >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"浏览用户个数\" bg=\"#ffffff\" />\n                                        <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"count\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" bg=\"#ffffff\"  >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"浏览用户作品个数\" />\n                                        <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"行业关键词\" />\n                                        <input paddingRight=\"20\" layout_weight=\"7\" hint=\"行业关键词\" textSizeHint=\"10\" gravity=\"right\" id=\"industry\" text=\"\" bg=\"#ffffff\" />\n\n                                    </horizontal>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"评论关键词 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"keyWords\" bg=\"#ffffff\" />\n                                    </vertical>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <SwitchWidget-Se7en id=\"sexSwitch\" marginTop=\"5\" padding='8 8' checked='false' text='性别筛选' trackColor='#2196f3' background='#ffffff' />\n\n                                    <frame h=\"0dp\" id=\"sexView\" padding=\"10 10\">\n                                        <text w=\"auto\" h=\"30dp\" layout_gravity=\"left\"  >性别 : </text>\n                                        <spinner w=\"auto\" h=\"30dp\" layout_gravity=\"right\" id=\"sex\" entries=\"女|男\" />\n                                    </frame>\n\n                                    <text text=\"  *筛选性别男女\" />\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"地区筛选 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"areaWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"areaWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"areaWords\" bg=\"#ffffff\" />\n                                    </vertical>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                </vertical>\n\n                                <button id=\"start\" bg=\"").concat(_0x2a20ef, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      var _0x16fdeb = _0x2a20ef;
      _0x1a15df.setBackgroundRoundedRectangle(ui.bg1);
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x4f15f1 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4f15f1,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x4f15f1);
        }).show();
      });
      ui.areaWordsCopy.click(function () {
        setClip(ui.areaWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.areaWords.text(),
          positive: "好的"
        }).show();
      });
      ui.areaWordsPaste.click(function () {
        var _0x4418b0 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4418b0,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.areaWords.setText(_0x4418b0);
        }).show();
      });
      ui._backButton.click(function () {
        _0x1078de.view(1);
      });
      ui.sexSwitch.on("check", function (_0x38ad98) {
        _0x38ad98 ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      var _0x3b7ce5 = _0x405b8e.getInfo1();
      ui.count.setText(_0x3b7ce5.count + "");
      ui.industry.setText(_0x3b7ce5.industry + "");
      ui.keyWords.setText(_0x3b7ce5.keyWords + "");
      ui.areaWords.setText(_0x3b7ce5.areaWords + "");
      ui.sexSwitch.checked = _0x3b7ce5.sexSwitch;
      ui.sex.setSelection(_0x3b7ce5.sex);
      ui.shipinCount.setText(_0x3b7ce5.shipinCount + "");
      ui.start.click(function () {
        var _0x57c924 = {
          count: parseInt(ui.count.text()),
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition(),
          shipinCount: ui.shipinCount.text(),
          industry: ui.industry.text(),
          keyWords: ui.keyWords.text(),
          areaWords: ui.areaWords.text()
        };
        _0x405b8e.saveInfo1(_0x57c924);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x405b8e.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x1adec6 = storages.create("wzke:J1");
    _0x405b8e.getInfo1 = function () {
      var _0x4181d7 = _0x1adec6.get("info1");
      _0x4181d7 == undefined && (_0x4181d7 = {}, _0x4181d7.industry = "", _0x4181d7.keyWords = "互关\n粉丝\n抱团", _0x4181d7.sexSwitch = false, _0x4181d7.sex = 0, _0x4181d7.shipinCount = 10, _0x1adec6.put("info1", _0x4181d7));
      _0x4181d7.sexSwitch == undefined && (_0x4181d7.sexSwitch = false);
      _0x4181d7.sex == undefined && (_0x4181d7.sex = 0);
      _0x4181d7.shipinCount == undefined && (_0x4181d7.shipinCount = 10);
      if (_0x4181d7.count == undefined) {
        _0x4181d7.count = 100;
      }
      if (_0x4181d7.areaWords == undefined) {
        _0x4181d7.areaWords = "";
      }
      if (_0x4181d7.industry == undefined) {
        _0x4181d7.industry = "";
      }
      return _0x4181d7;
    };
    _0x405b8e.saveInfo1 = function (_0x13744d) {
      _0x1adec6.put("info1", _0x13744d);
    };
    var _0x38e8d0 = new (_0x32f40e(3))();
    var _0x1a15df = _0x32f40e(0);
    var _0x3e282b = new (_0x32f40e(2))();
    this.start = function () {
      if (!_0x1a15df.checkServer() || !_0x38e8d0.launchApp()) {
        return false;
      }
      _0x1a15df.showConsole("行业拓客");
      _0x3e282b.index();
      _0x3e282b.ClickListener({
        clickStart: function _0x1e4fd4() {
          threads.start(function () {
            _0x405b8e.startAction();
          });
        },
        clickStop: function _0x246938() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x2f817e() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x3e282b.close();
            _0x1a15df.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x405b8e.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x38e8d0.closeTip();
      var _0x298c09 = _0x405b8e.getInfo1();
      var _0x2fe1f7 = _0x298c09.shipinCount;
      var _0x5f4c9b = 1;
      var _0x3892e3 = 0;
      for (var _0x26ecb9 = 0; _0x26ecb9 < 10; _0x26ecb9++) {
        var _0x165109 = _0x38e8d0.jumpMainToSearchUserList(_0x298c09.industry);
        if (_0x165109) {
          break;
        }
      }
      var _0x2abd3a = function _0x80dad3() {
        var _0xdcf3d6 = id("android:id/text1").text("用户").className("android.widget.Button").findOnce();
        var _0x2cdd4a = className("androidx.recyclerview.widget.RecyclerView").visibleToUser().findOne(5000);
        if (_0x2cdd4a == null || _0xdcf3d6 == null || _0x3892e3 >= 5) {
          for (var _0x56961c = 0; _0x56961c < 10; _0x56961c++) {
            var _0x58d143 = _0x38e8d0.jumpMainToSearchUserList(_0x298c09.industry);
            if (_0x58d143) {
              break;
            }
          }
          _0x3892e3 = 0;
          return 0;
        }
        _0x2cdd4a.children().forEach(function (_0x30774a) {
          if (_0x30774a.findOne(text("直播按钮").desc("直播按钮")) !== null) {
            log("跳过直播中用户");
            return;
          }
          if (_0x30774a.bounds().centerY() < _0x2cdd4a.bounds().top || _0x30774a.bounds().centerY() > _0x2cdd4a.bounds().bottom) {
            return;
          }
          click(_0x30774a.bounds().centerX(), _0x30774a.bounds().centerY());
          sleep(3000);
          if (_0x38e8d0.JumpUsercenterToFirstzuopin()) {
            log("当前执行用户：", _0x5f4c9b);
            _0x3892e3 = 0;
            _0x5f4c9b++;
            var _0x5b5f6f = [];
            for (var _0x548895 = 1; _0x548895 <= _0x2fe1f7; _0x548895++) {
              log("当前执行视频: ", _0x548895);
              var _0x30543a = descStartsWith("发布时间：").findOnce();
              if (_0x30543a != null) {
                if (_0x5b5f6f.indexOf(_0x30543a.text()) == -1) {
                  log(_0x30543a.text());
                  _0x5b5f6f.push(_0x30543a.text());
                } else {
                  log("当前视频已操作过");
                  _0x38e8d0.closePinlunquOnce();
                  _0x1a15df.actionSwipUp();
                  sleep(1000);
                  break;
                }
              }
              _0x38e8d0.getViewType() == "视频" && _0x38e8d0.getPinglunShu() > 0 && _0x38e8d0.clickPinlunqu() && _0x405b8e.pinglunquAction();
              _0x38e8d0.closePinlunquOnce();
              _0x1a15df.actionSwipUp();
              sleep(1000);
            }
            log("页面跳转：返回个人中心");
            back();
            sleep(2000);
          } else {
            _0x3892e3++;
            log("未进入作品" + _0x3892e3);
          }
          var _0x4e84d2 = id("com.ss.android.ugc.aweme:id/back_btn").desc("返回").findOne(3000);
          _0x4e84d2 != null && (_0x4e84d2.click(), log("返回用户列表"), sleep(2000));
          var _0x434536 = desc("返回").className("android.view.ViewGroup").findOne(3000);
          _0x434536 != null && (_0x434536.click(), log("返回用户列表"), sleep(2000));
        });
        _0x1a15df.actionSwipUp();
        if (_0x5f4c9b > _0x298c09.count) {
          return 1;
        }
      };
      var _0x479607;
      while (true) {
        _0x479607 = _0x2abd3a();
        if (_0x479607 === 0) {
          continue;
        }
        if (_0x479607 === 1) {
          break;
        }
      }
      home();
      log("任务完成");
      threads.shutDownAll();
    };
    _0x405b8e.pinglunquAction = function () {
      var _0x21d510 = [];
      var _0x3b867b = _0x405b8e.getInfo1();
      var _0x2922f1 = 0;
      for (var _0xec02b8 = 0; _0xec02b8 < 100; _0xec02b8++) {
        _0x2922f1++;
        while (true) {
          var _0x3b526a = _0x405b8e.getNewUser(_0x21d510);
          if (_0x3b526a == null) {
            break;
          }
          var _0x51a065 = _0x405b8e.isContain(_0x3b526a, _0x3b867b.keyWords);
          var _0x1c4c05 = _0x405b8e.isareaContain(_0x3b526a, _0x3b867b.areaWords);
          var _0x361664 = _0x405b8e.getCommentTime(_0x3b526a);
          if (_0x51a065 != false && _0x1c4c05 != false) {
            _0x2922f1 = 0;
            var _0x52ff5a = _0x3b526a.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
            var _0x19d511 = _0x52ff5a.bounds().centerX();
            var _0x4e824c = _0x52ff5a.bounds().centerY();
            log("跳转页面: 用户中心");
            click(_0x19d511, _0x4e824c);
            sleep(4000);
            _0x405b8e.usercenterAction(_0x51a065, _0x361664);
            log("跳转页面: 评论区");
            sleep(1000);
            back();
            sleep(2000);
          }
        }
        if (_0x2922f1 > 15) {
          log("多次未匹配到，跳过此评论区");
          break;
        }
        if (text("暂时没有更多了").findOnce()) {
          break;
        }
        if (text("部分评论来自其他子版本，因评论者未选择同步抖音，暂不支持查看").findOnce()) {
          break;
        }
        if (text("已折叠部分评论").findOnce()) {
          break;
        }
        if (textEndsWith("点击评论").findOnce()) {
          break;
        }
        var _0x142012 = textEndsWith(" 条评论").findOnce();
        var _0x444589 = device.width * 0.4 + random(-50, 50);
        var _0x38a85a = device.height * 0.8 + random(-50, 50);
        var _0x516699 = device.width * 0.6 + random(-50, 50);
        var _0x16eba8 = _0x142012 != null ? _0x142012.bounds().centerY() + 50 : device.height * 0.4;
        log("滑动页面:评论区");
        _0x1a15df.swipeRandom(_0x444589, _0x38a85a, _0x516699, _0x16eba8, 2000);
        sleep(1000);
      }
      log("评论操作: 此评论区结束");
    };
    _0x405b8e.usercenterAction = function (_0x3b2608, _0x38917c) {
      sleep(3000);
      var _0x1ede01 = _0x405b8e.getInfo1();
      if (_0x1ede01.shipinCount == 0) {
        return false;
      }
      if (!_0x38e8d0.isPrivateOrBan()) {
        return false;
      }
      if (_0x1ede01.sexSwitch && _0x1a15df.requestScreenCapture()) {
        if (_0x38e8d0.watchUserSex() != _0x1ede01.sex) {
          log("性别不符: ");
          return;
        }
      }
      log("信息同步中");
      var _0x145dd7 = _0x38e8d0.watchUercenterInfo();
      _0x145dd7.keyWord = _0x3b2608;
      _0x145dd7.tel = "";
      var _0x5e6116 = _0x4d8bf5.getLoginInfo();
      _0xab71d1.jztk({
        category: "行业拓客",
        source: "DY",
        code: _0x5e6116.jihuoma,
        tiktok_id: _0x145dd7.id,
        tiktok_nickname: _0x145dd7.name,
        tiktok_comment: _0x145dd7.keyWord,
        comment_time: _0x38917c,
        tel: _0x145dd7.tel
      });
      return true;
    };
    _0x405b8e.getCommentTime = function (_0xf178e9) {
      var _0x268324 = _0xf178e9.findOne(textMatches(/^((0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))$/));
      if (_0x268324 == null) {
        return "";
      }
      return _0x268324.text();
    };
    _0x405b8e.isContain = function (_0x5877d2, _0x1d3dc6) {
      try {
        var _0x4daa1e = _0x1d3dc6.split("\n").filter(function (_0x39b815) {
          return _0x39b815 !== "";
        });
        var _0x32a52a = _0x5877d2.findOne(id("com.ss.android.ugc.aweme:id/content"));
        var _0x5d98f6 = "";
        _0x32a52a != null && (_0x5d98f6 = _0x405b8e.filterContent(_0x32a52a.text()));
        log("评论内容: " + _0x5d98f6);
        for (var _0x53db8a in _0x4daa1e) {
          var _0xe0cccf = _0x4daa1e[_0x53db8a];
          if (_0x5d98f6.includes(_0xe0cccf)) {
            log("触发关键词:" + _0xe0cccf);
            var _0x38b10b = "关键词: [ " + _0xe0cccf + " ] --------- 评论内容: [ " + _0x5d98f6 + " ] ";
            return _0x38b10b;
          }
        }
        return false;
      } catch (_0x47ec44) {
        log("isContain", _0x47ec44);
        return false;
      }
    };
    _0x405b8e.isareaContain = function (_0x58caa9, _0x443bfd) {
      try {
        if (_0x443bfd == "") {
          return true;
        }
        var _0x1e7f13 = _0x443bfd.split("\n");
        var _0x1bd26e = _0x58caa9.findOne(textStartsWith(" · "));
        if (_0x1bd26e == null) {
          return false;
        }
        var _0x318f6f = _0x1bd26e.text();
        for (var _0x2f5f0b in _0x1e7f13) {
          var _0x6505f = _0x1e7f13[_0x2f5f0b];
          if (_0x318f6f.includes(_0x6505f)) {
            log("地区触发:" + _0x6505f);
            var _0x2fc26b = "关键词: [ " + _0x6505f + " ] --------- 地区: [ " + _0x318f6f + " ] ";
            return _0x2fc26b;
          }
        }
        log("地区未触发 : " + _0x318f6f);
        return false;
      } catch (_0x230e1a) {
        log("isContain", _0x230e1a);
        return false;
      }
    };
    _0x405b8e.filterContent = function (_0x48b902) {
      var _0x3aaa93 = "";
      var _0x38df7d = 1;
      for (var _0x515c8a = 0; _0x515c8a < _0x48b902.length; _0x515c8a++) {
        var _0x3d498f = _0x48b902.charAt(_0x515c8a);
        if (_0x3d498f == "@") {
          _0x38df7d = -1;
          continue;
        }
        if (_0x3d498f == " ") {
          _0x38df7d = 1;
          continue;
        }
        _0x38df7d == 1 && (_0x3aaa93 += _0x3d498f);
      }
      return _0x3aaa93;
    };
    _0x405b8e.getNewUser = function (_0x5c16b9) {
      log("获取用户");
      var _0x216fe4 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x3468db) {
        return _0x3468db.bounds().width() > 0 && _0x3468db.bounds().height() > 0;
      });
      var _0x40410e = _0x216fe4.findOne(3000);
      if (_0x40410e == null) {
        return null;
      }
      for (var _0x4b5159 = 0; _0x4b5159 < _0x40410e.childCount(); _0x4b5159++) {
        var _0x1d0128 = _0x40410e.child(_0x4b5159);
        var _0x3ca3e = _0x1d0128.getContentDescription();
        if (_0x3ca3e != null && _0x5c16b9.indexOf(_0x3ca3e) == -1) {
          var _0x3f6ee6 = _0x1d0128.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
          if (_0x3f6ee6.bounds().height() >= _0x3f6ee6.bounds().width() - 30) {
            _0x5c16b9.push(_0x3ca3e);
            return _0x1d0128;
          }
        }
      }
      return null;
    };
  }
  _0x5a1a14.exports = _0x470b02;
}, function (_0x3c0a36, _0x333609, _0x31e927) {
  function _0x4d050e(_0x24137c) {
    var _0x40f413 = this;
    var _0x320266 = _0x31e927(1);
    var _0x35e4eb = new (_0x31e927(4))();
    var _0x39134b = new (_0x31e927(5))();
    var _0xcd02c5 = _0x31e927(7);
    _0x40f413.index = function () {
      var _0x4e7a20 = _0x35e4eb.getLoginInfo();
      _0x40f413.view();
    };
    _0x40f413.view = function () {
      var _0x16320b = _0x320266.bgColor;
      var _0x142af3 = _0x8c3b6.get_statusBarHeight();
      var _0x211e87 = _0x8c3b6.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"评论拓客\" bg=\"".concat(_0x16320b, "\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"设置评论区关键字，在视频播放页启动，对评论区、含有设定关键字评论的用户进行评论拓客，可在管理后台查看运行数据\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x211e87, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <vertical padding=\"2\" marginTop=\"10\" id=\"bg1\" bg=\"#ffffff\">\n\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" bg=\"#ffffff\"  >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"浏览视频个数\" />\n                                        <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"评论关键词 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"keyWords\" bg=\"#ffffff\" />\n                                    </vertical>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <SwitchWidget-Se7en id=\"sexSwitch\" marginTop=\"5\" padding='8 8' checked='false' text='性别筛选' trackColor='#2196f3' background='#ffffff' />\n\n                                    <frame h=\"0dp\" id=\"sexView\" padding=\"10 10\">\n                                        <text w=\"auto\" h=\"30dp\" layout_gravity=\"left\"  >性别 : </text>\n                                        <spinner w=\"auto\" h=\"30dp\" layout_gravity=\"right\" id=\"sex\" entries=\"女|男\" />\n                                    </frame>\n\n                                    <text text=\"  *筛选性别男女\" />\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"地区筛选 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"areaWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"areaWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"areaWords\" bg=\"#ffffff\" />\n                                    </vertical>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                </vertical>\n\n                                <button id=\"start\" bg=\"").concat(_0x16320b, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      var _0x3a6932 = _0x16320b;
      _0x8c3b6.setBackgroundRoundedRectangle(ui.bg1);
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x517dd8 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x517dd8,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x517dd8);
        }).show();
      });
      ui.areaWordsCopy.click(function () {
        setClip(ui.areaWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.areaWords.text(),
          positive: "好的"
        }).show();
      });
      ui.areaWordsPaste.click(function () {
        var _0x52a029 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x52a029,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.areaWords.setText(_0x52a029);
        }).show();
      });
      ui._backButton.click(function () {
        _0x24137c.view(1);
      });
      ui.sexSwitch.on("check", function (_0x3978d6) {
        _0x3978d6 ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      var _0x5bbc74 = _0x40f413.getInfo1();
      ui.keyWords.setText(_0x5bbc74.keyWords + "");
      ui.areaWords.setText(_0x5bbc74.areaWords + "");
      ui.sexSwitch.checked = _0x5bbc74.sexSwitch;
      ui.sex.setSelection(_0x5bbc74.sex);
      ui.shipinCount.setText(_0x5bbc74.shipinCount + "");
      ui.start.click(function () {
        var _0xa49833 = {
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition(),
          shipinCount: ui.shipinCount.text(),
          keyWords: ui.keyWords.text(),
          areaWords: ui.areaWords.text()
        };
        _0x40f413.saveInfo1(_0xa49833);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x40f413.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x46e777 = storages.create("wzke:pltk");
    _0x40f413.getInfo1 = function () {
      var _0x6a1c0c = _0x46e777.get("info1");
      _0x6a1c0c == undefined && (_0x6a1c0c = {}, _0x6a1c0c.keyWords = "互关\n粉丝\n抱团", _0x6a1c0c.sexSwitch = false, _0x6a1c0c.sex = 0, _0x6a1c0c.shipinCount = 20, _0x46e777.put("info1", _0x6a1c0c));
      _0x6a1c0c.sexSwitch == undefined && (_0x6a1c0c.sexSwitch = false);
      _0x6a1c0c.sex == undefined && (_0x6a1c0c.sex = 0);
      _0x6a1c0c.shipinCount == undefined && (_0x6a1c0c.shipinCount = 20);
      if (_0x6a1c0c.areaWords == undefined) {
        _0x6a1c0c.areaWords = "";
      }
      return _0x6a1c0c;
    };
    _0x40f413.saveInfo1 = function (_0x1019f2) {
      _0x46e777.put("info1", _0x1019f2);
    };
    var _0x9b2164 = new (_0x31e927(3))();
    var _0x8c3b6 = _0x31e927(0);
    var _0x309c7f = new (_0x31e927(2))();
    this.start = function () {
      if (!_0x8c3b6.checkServer() || !_0x9b2164.launchApp()) {
        return false;
      }
      _0x8c3b6.showConsole("评论拓客");
      _0x309c7f.index();
      _0x309c7f.ClickListener({
        clickStart: function _0x3134c9() {
          threads.start(function () {
            _0x40f413.startAction();
          });
        },
        clickStop: function _0x3a93df() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x37cf46() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x309c7f.close();
            _0x8c3b6.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x40f413.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x9b2164.closeTip();
      var _0x3086fb = _0x40f413.getInfo1();
      var _0x2526ac = _0x3086fb.shipinCount;
      var _0x250ee0 = 1;
      while (true) {
        log("当前执行视频: ", _0x250ee0);
        _0x9b2164.getViewType() == "视频" && _0x9b2164.getPinglunShu() > 0 && _0x9b2164.clickPinlunqu() && (_0x40f413.pinglunquAction(), _0x9b2164.closePinlunquOnce(), _0x250ee0++);
        _0x8c3b6.actionSwipUp();
        sleep(1000);
        if (_0x250ee0 > _0x2526ac) {
          break;
        }
      }
      home();
      log("任务完成");
      threads.shutDownAll();
    };
    _0x40f413.pinglunquAction = function () {
      var _0x2d3225 = [];
      var _0x312fd2 = _0x40f413.getInfo1();
      var _0x5b35d1 = 0;
      for (var _0x435c93 = 0; _0x435c93 < 100; _0x435c93++) {
        _0x5b35d1++;
        while (true) {
          var _0x4f8645 = _0x40f413.getNewUser(_0x2d3225);
          if (_0x4f8645 == null) {
            break;
          }
          var _0x233700 = _0x40f413.isContain(_0x4f8645, _0x312fd2.keyWords);
          var _0x3930a9 = _0x40f413.isareaContain(_0x4f8645, _0x312fd2.areaWords);
          var _0x5b7fd2 = _0x40f413.getCommentTime(_0x4f8645);
          if (_0x233700 != false && _0x3930a9 != false) {
            _0x5b35d1 = 0;
            var _0x1af3e5 = _0x4f8645.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
            var _0x17a209 = _0x1af3e5.bounds().centerX();
            var _0x2015f7 = _0x1af3e5.bounds().centerY();
            log("跳转页面: 用户中心");
            click(_0x17a209, _0x2015f7);
            sleep(4000);
            _0xcd02c5.addRunData("visit");
            _0x40f413.usercenterAction(_0x233700, _0x5b7fd2);
            log("跳转页面: 评论区");
            sleep(1000);
            back();
            sleep(2000);
          }
        }
        if (_0x5b35d1 > 15) {
          log("多次未匹配到，跳过此评论区");
          break;
        }
        if (text("暂时没有更多了").findOnce()) {
          break;
        }
        if (text("部分评论来自其他子版本，因评论者未选择同步抖音，暂不支持查看").findOnce()) {
          break;
        }
        if (text("已折叠部分评论").findOnce()) {
          break;
        }
        if (textEndsWith("点击评论").findOnce()) {
          break;
        }
        var _0x24981d = textEndsWith(" 条评论").findOnce();
        var _0x7da49a = device.width * 0.4 + random(-50, 50);
        var _0x4d8b1c = device.height * 0.8 + random(-50, 50);
        var _0x168a90 = device.width * 0.6 + random(-50, 50);
        var _0x3a944b = _0x24981d != null ? _0x24981d.bounds().centerY() + 50 : device.height * 0.4;
        log("滑动页面:评论区");
        _0x8c3b6.swipeRandom(_0x7da49a, _0x4d8b1c, _0x168a90, _0x3a944b, 2000);
        sleep(1000);
      }
      log("评论操作: 此评论区结束");
    };
    _0x40f413.usercenterAction = function (_0x136e00, _0x23991f) {
      sleep(3000);
      var _0x3e7860 = _0x40f413.getInfo1();
      if (_0x3e7860.shipinCount == 0) {
        return false;
      }
      if (!_0x9b2164.isPrivateOrBan()) {
        return false;
      }
      if (_0x3e7860.sexSwitch && _0x8c3b6.requestScreenCapture()) {
        if (_0x9b2164.watchUserSex() != _0x3e7860.sex) {
          log("性别不符: ");
          return;
        }
      }
      log("信息同步中");
      var _0x4bf47b = _0x9b2164.watchUercenterInfo();
      _0x4bf47b.keyWord = _0x136e00;
      _0x4bf47b.tel = "";
      var _0x2348ff = _0x35e4eb.getLoginInfo();
      _0x39134b.jztk({
        category: "评论拓客",
        source: "DY",
        code: _0x2348ff.jihuoma,
        tiktok_id: _0x4bf47b.id,
        tiktok_nickname: _0x4bf47b.name,
        tiktok_comment: _0x4bf47b.keyWord,
        comment_time: _0x23991f,
        tel: _0x4bf47b.tel
      });
      return true;
    };
    _0x40f413.getCommentTime = function (_0x136b2e) {
      var _0x1ec6b4 = _0x136b2e.findOne(textMatches(/^((0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))$/));
      if (_0x1ec6b4 == null) {
        return "";
      }
      return _0x1ec6b4.text();
    };
    _0x40f413.isContain = function (_0x6da1d8, _0x1d20e9) {
      try {
        var _0x46c096 = _0x1d20e9.split("\n").filter(function (_0x1cc40c) {
          return _0x1cc40c !== "";
        });
        var _0x4625af = _0x6da1d8.findOne(id("com.ss.android.ugc.aweme:id/content"));
        var _0x34747b = "";
        _0x4625af != null && (_0x34747b = _0x40f413.filterContent(_0x4625af.text()));
        log("评论内容: " + _0x34747b);
        for (var _0x487929 in _0x46c096) {
          var _0x2da379 = _0x46c096[_0x487929];
          if (_0x34747b.includes(_0x2da379)) {
            log("触发关键词:" + _0x2da379);
            var _0x6b153c = "关键词: [ " + _0x2da379 + " ] --------- 评论内容: [ " + _0x34747b + " ] ";
            return _0x6b153c;
          }
        }
        return false;
      } catch (_0x4c716d) {
        log("isContain", _0x4c716d);
        return false;
      }
    };
    _0x40f413.isareaContain = function (_0x424cc0, _0x4aae37) {
      try {
        if (_0x4aae37 == "") {
          return true;
        }
        var _0x221c23 = _0x4aae37.split("\n");
        var _0x43de1d = _0x424cc0.findOne(textStartsWith(" · "));
        if (_0x43de1d == null) {
          return false;
        }
        var _0x172dd7 = _0x43de1d.text();
        for (var _0x1c27ee in _0x221c23) {
          var _0xd66a29 = _0x221c23[_0x1c27ee];
          if (_0x172dd7.includes(_0xd66a29)) {
            log("地区触发:" + _0xd66a29);
            var _0x122be0 = "关键词: [ " + _0xd66a29 + " ] --------- 地区: [ " + _0x172dd7 + " ] ";
            return _0x122be0;
          }
        }
        log("地区未触发 : " + _0x172dd7);
        return false;
      } catch (_0x19fba5) {
        log("isContain", _0x19fba5);
        return false;
      }
    };
    _0x40f413.filterContent = function (_0x4c93f1) {
      var _0x1a457d = "";
      var _0x3fab5c = 1;
      for (var _0x4c91fb = 0; _0x4c91fb < _0x4c93f1.length; _0x4c91fb++) {
        var _0x5510b5 = _0x4c93f1.charAt(_0x4c91fb);
        if (_0x5510b5 == "@") {
          _0x3fab5c = -1;
          continue;
        }
        if (_0x5510b5 == " ") {
          _0x3fab5c = 1;
          continue;
        }
        _0x3fab5c == 1 && (_0x1a457d += _0x5510b5);
      }
      return _0x1a457d;
    };
    _0x40f413.getNewUser = function (_0x5d104e) {
      try {
        log("获取用户");
        var _0x4a5871 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x56b05c) {
          return _0x56b05c.bounds().width() > 0 && _0x56b05c.bounds().height() > 0;
        });
        var _0x1c39be = _0x4a5871.findOne(3000);
        if (_0x1c39be == null) {
          return null;
        }
        for (var _0x2ee2dd = 0; _0x2ee2dd < _0x1c39be.childCount(); _0x2ee2dd++) {
          var _0x327e78 = _0x1c39be.child(_0x2ee2dd);
          var _0x65712a = _0x327e78.getContentDescription();
          if (_0x65712a != null && _0x5d104e.indexOf(_0x65712a) == -1) {
            var _0x4f447b = _0x327e78.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
            if (_0x4f447b.bounds().height() >= _0x4f447b.bounds().width() - 30) {
              _0x5d104e.push(_0x65712a);
              return _0x327e78;
            }
          }
        }
        return null;
      } catch (_0x28c6c5) {}
    };
  }
  _0x3c0a36.exports = _0x4d050e;
}, function (_0x13d8c9, _0x104637, _0x1092bc) {
  function _0xadea99(_0x2502ea) {
    var _0x279f4b = this;
    var _0x290ef1 = _0x1092bc(1);
    var _0x4a7637 = new (_0x1092bc(4))();
    var _0x4ef766 = new (_0x1092bc(5))();
    _0x279f4b.index = function () {
      var _0x473f95 = _0x4a7637.getLoginInfo();
      _0x279f4b.view();
    };
    _0x279f4b.view = function () {
      var _0x3c86cb = _0x290ef1.bgColor;
      var _0x4b82d7 = _0x502802.get_statusBarHeight();
      var _0x8ee594 = _0x502802.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"团购拓客\" bg=\"".concat(_0x3c86cb, "\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"设置评论区关键字，点击进入团购店铺->用户评价->查看全部页面启动，对评论区、含有设定关键字评论的用户进行团购拓客，可在管理后台查看运行数据\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x8ee594, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <vertical padding=\"2\" marginTop=\"10\" id=\"bg1\" bg=\"#ffffff\">\n\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" bg=\"#ffffff\"  >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"执行个数\" />\n                                        <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"评论关键词 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"keyWords\" bg=\"#ffffff\" />\n                                    </vertical>\n\n                                </vertical>\n\n                                <button id=\"start\" bg=\"").concat(_0x3c86cb, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      var _0x16e35d = _0x3c86cb;
      _0x502802.setBackgroundRoundedRectangle(ui.bg1);
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x3b05ba = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x3b05ba,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x3b05ba);
        }).show();
      });
      ui._backButton.click(function () {
        _0x2502ea.view(1);
      });
      var _0xbf5341 = _0x279f4b.getInfo1();
      ui.keyWords.setText(_0xbf5341.keyWords + "");
      ui.shipinCount.setText(_0xbf5341.shipinCount + "");
      ui.start.click(function () {
        var _0x5bf99b = {
          shipinCount: ui.shipinCount.text(),
          keyWords: ui.keyWords.text()
        };
        _0x279f4b.saveInfo1(_0x5bf99b);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x279f4b.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x1bed1b = storages.create("wzke:tgtk");
    _0x279f4b.getInfo1 = function () {
      var _0x22b864 = _0x1bed1b.get("info1");
      _0x22b864 == undefined && (_0x22b864 = {}, _0x22b864.keyWords = "互关\n粉丝\n抱团", _0x22b864.shipinCount = 100, _0x1bed1b.put("info1", _0x22b864));
      _0x22b864.shipinCount == undefined && (_0x22b864.shipinCount = 100);
      return _0x22b864;
    };
    _0x279f4b.saveInfo1 = function (_0x3bc5bf) {
      _0x1bed1b.put("info1", _0x3bc5bf);
    };
    var _0x4718e4 = new (_0x1092bc(3))();
    var _0x502802 = _0x1092bc(0);
    var _0x56d780 = new (_0x1092bc(2))();
    this.start = function () {
      if (!_0x502802.checkServer() || !_0x4718e4.launchApp()) {
        return false;
      }
      _0x502802.showConsole("团购拓客");
      _0x56d780.index();
      _0x56d780.ClickListener({
        clickStart: function _0x5d2825() {
          threads.start(function () {
            _0x279f4b.startAction();
          });
        },
        clickStop: function _0x433928() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x3f7577() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x56d780.close();
            _0x502802.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x279f4b.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x4718e4.closeTip();
      var _0x31ba16 = _0x279f4b.getInfo1();
      var _0x6a8d5 = _0x31ba16.shipinCount;
      var _0x32b945 = 1;
      var _0x54b7f4 = device.width * 0.7 + random(0, 20);
      var _0x48e543 = device.height * 0.7;
      var _0x559761 = device.width * 0.8 + random(20, 40);
      var _0x51b3ce = device.height * 0.2;
      var _0x1dda3c = function _0x3ea879() {
        var _0x242e5b = text("全部").desc("全部").className("com.lynx.tasm.behavior.ui.text.UIText").findOnce();
        var _0x4d0b40 = id("android:id/content").className("android.widget.FrameLayout").findOnce();
        if (_0x4d0b40) {
          var _0x125183 = _0x4d0b40.child(1).child(0).child(0).child(0);
          if (_0x125183) {
            var _0x30f492 = _0x125183.find(className("com.bytedance.ies.xelement.text.text.LynxTextUI").visibleToUser().filter(function (_0x3b4242) {
              return _0x242e5b ? _0x3b4242.bounds().centerY() > _0x242e5b.bounds().bottom && _0x3b4242.bounds().centerY() < device.height * 0.8 : true;
            }));
            _0x30f492.forEach(function (_0x9fb290, _0x249c23) {
              var _0x2c4ef2 = _0x279f4b.isContain(_0x9fb290.text(), _0x31ba16.keyWords);
              if (_0x2c4ef2 != false) {
                log("进入评价详情" + _0x249c23);
                click(_0x9fb290.bounds().centerX(), _0x9fb290.bounds().centerY());
                sleep(3000);
                var _0x5d07f3 = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").filter(function (_0x33d6d4) {
                  return _0x33d6d4.indexInParent() === 19;
                }).findOnce();
                if (_0x5d07f3) {
                  toast("点击头像，请保持左上方用户头像没有被遮挡");
                  click(_0x5d07f3.bounds().centerX(), _0x5d07f3.bounds().centerY());
                  sleep(3000);
                  var _0x5cb280 = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").filter(function (_0x160b97) {
                    return _0x160b97.indexInParent() === 26;
                  }).findOnce();
                  if (_0x5cb280) {
                    log("进入用户中心");
                    click(_0x5cb280.bounds().centerX(), _0x5cb280.bounds().centerY());
                    sleep(3000);
                    _0x279f4b.usercenterAction(_0x2c4ef2, "");
                    _0x32b945++;
                    if (desc("更多").findOne(3000)) {
                      back();
                    }
                    sleep(3000);
                  }
                  if (text("主页").desc("主页").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").findOne(3000)) {
                    back();
                  }
                  sleep(3000);
                }
                if (text("评价详情").desc("评价详情").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").findOne(3000)) {
                  back();
                }
                sleep(3000);
              }
            });
          }
        } else {
          log("未识别到用户评价页面，请检查当前界面或运行版本");
        }
        _0x52d5d0 = random(400, 600);
        _0x502802.swipeRandom(_0x54b7f4, _0x48e543, _0x559761, _0x51b3ce, _0x52d5d0);
        sleep(2000);
        if (_0x32b945 > _0x6a8d5) {
          return 0;
        }
        if (text("已折叠对你帮助不大的评价").desc("已折叠对你帮助不大的评价").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").findOnce()) {
          log("评论区结束");
          return 0;
        }
      };
      var _0x52d5d0;
      var _0xf91c5e;
      while (true) {
        _0xf91c5e = _0x1dda3c();
        if (_0xf91c5e === 0) {
          break;
        }
      }
      home();
      log("任务完成");
      threads.shutDownAll();
    };
    _0x279f4b.usercenterAction = function (_0x564f3e) {
      var _0x10543e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      log("信息同步中");
      var _0x25315b = _0x4718e4.watchUercenterInfo();
      _0x25315b.keyWord = _0x564f3e;
      _0x25315b.tel = "";
      var _0x22810a = _0x4a7637.getLoginInfo();
      _0x4ef766.jztk({
        category: "团购拓客",
        source: "DY",
        code: _0x22810a.jihuoma,
        tiktok_id: _0x25315b.id,
        tiktok_nickname: _0x25315b.name,
        tiktok_comment: _0x25315b.keyWord,
        comment_time: _0x10543e,
        tel: _0x25315b.tel
      });
      return true;
    };
    _0x279f4b.getCommentTime = function (_0x2120aa) {
      var _0x13ef3e = _0x2120aa.findOne(textMatches(/^((0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))$/));
      if (_0x13ef3e == null) {
        return "";
      }
      return _0x13ef3e.text();
    };
    _0x279f4b.isContain = function (_0x21e276, _0x3b7c36) {
      try {
        var _0x2532b9 = _0x3b7c36.split("\n").filter(function (_0x3f4514) {
          return _0x3f4514 !== "";
        });
        log("评论内容: " + _0x21e276);
        for (var _0x485333 in _0x2532b9) {
          var _0x3b610b = _0x2532b9[_0x485333];
          if (_0x21e276.includes(_0x3b610b)) {
            log("触发关键词:" + _0x3b610b);
            var _0x410075 = "关键词: [ " + _0x3b610b + " ] --------- 评论内容: [ " + _0x21e276 + " ] ";
            return _0x410075;
          }
        }
        return false;
      } catch (_0x290516) {
        log("isContain", _0x290516);
        return false;
      }
    };
  }
  _0x13d8c9.exports = _0xadea99;
}, function (_0x1c2e81, _0x1e569f, _0x57fb6e) {
  var _0x4281c3 = _0x57fb6e(0);
  var _0x2697b3 = _0x57fb6e(7);
  function _0x363750(_0x536506) {
    var _0x48f779 = this;
    var _0x350de0 = _0x57fb6e(1);
    var _0x43ea58 = new (_0x57fb6e(6))();
    var _0x131bab = new (_0x57fb6e(5))();
    var _0x1e7558 = "智能引流";
    this.index = function () {
      var _0x24fc7b = new (_0x57fb6e(4))();
      _0x48f779.view();
    };
    this.view = function () {
      var _0x43f01a = _0x350de0.bgColor;
      var _0x23bc76 = _0x48f497.getVersionName("com.ss.android.ugc.aweme");
      var _0x5c392d = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"".concat(_0x1e7558, "\" bg=\"").concat(_0x43f01a, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在推荐页启动，自动进入粉丝列表浏览作品，筛选精准群体互动引流\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x23bc76, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"点赞数量\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"like\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"关注数量\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"follow\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"评论数量\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"comment\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical id=\"defultWords_show\">\n                                            <SwitchWidget-Se7en id=\"defultWords\" marginTop=\"5\" padding='8 8' checked='true' text='使用默认话术' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"观看时长（秒）\" layout_gravity=\"left|center\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"watchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"watchTimeMax\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                    </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x43f01a, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical bg=\"#ffffff\">\n\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <vertical paddingLeft=\"20\" >\n                                            <text textColor=\"black\" text=\"评论内容（换行隔开,多条随机）:\" />\n                                            <input padding=\"0 2 30 2\" hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"pinglunWords\" bg=\"#ffffff\" />\n                                        </vertical>\n                                    </vertical>\n                                </card>\n                                <button id=\"saveShipin\" bg=\"").concat(_0x43f01a, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0x4281c3.setBackgroundRoundedRectangle(ui.mainbg);
      _0x4281c3.setBackgroundRoundedRectangle(ui.mainbg2);
      ui.viewpager.setTitles(["基础设置", "话术设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x350de0.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x350de0.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x536506.view(1);
      });
      ui.start.click(function () {
        var _0x4a3166 = {
          like: ui.like.text(),
          follow: ui.follow.text(),
          comment: ui.comment.text()
        };
        _0x48f779.saveBaseInfo(_0x4a3166);
        _0x48f779.saveShipinClick(ui);
        dialogs.build({
          title: "确认开始吗？",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x48f779.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x48f779.initBaseInfo(ui);
      _0x48f779.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x48f779.saveShipinClick(ui);
      });
    };
    this.end = function () {
      _0x5e616f.stopAnimation();
      threads.shutDownAll();
    };
    var _0x3eb282 = new (_0x57fb6e(3))();
    var _0x48f497 = _0x57fb6e(0);
    var _0xb47714 = _0x57fb6e(25);
    var _0x3f4467 = _0xb47714.getAIcomment;
    var _0x5e616f = new (_0x57fb6e(2))();
    this.start = function () {
      if (!_0x48f497.checkServer()) {
        return false;
      }
      if (!_0x3eb282.launchApp()) {
        return false;
      }
      _0x48f497.showConsole(_0x1e7558 + ":", device.width * 0.5, device.height * 0.15);
      log("注意 - 粉丝列表开始运行 -");
      _0x5e616f.index();
      _0x5e616f.ClickListener({
        clickStart: function _0x4154dc() {
          threads.start(function () {
            sleep(1000);
            _0x48f779.zidongAction();
            sleep(1000);
            _0x48f779.action();
          });
        },
        clickStop: function _0x3e8aa9() {
          _0x48f779.end();
        },
        clickExit: function _0x1090ba() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x48f779.end();
            _0x5e616f.close();
            _0x48f497.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.zidongAction = function () {
      for (var _0x31b293 = 0; _0x31b293 < 10; _0x31b293++) {
        var _0x16d4ad = _0x3eb282.jumpMainToFensi("J2.zidong");
        if (_0x16d4ad) {
          break;
        }
      }
    };
    this.action = function () {
      _0x3eb282.closeTip();
      threads.start(function () {
        var _0x3100c5 = 1;
        var _0x4dcf5f = 1;
        var _0x560d3d = 1;
        var _0x29c06f = _0x48f779.getBaseInfo();
        var _0x2bb9c8 = 0;
        _0x3eb282.watchStart("主任务开始", 1);
        while (_0x3100c5 < _0x29c06f.like || _0x4dcf5f < _0x29c06f.follow || _0x560d3d < _0x29c06f.comment) {
          var _0x3ff18a = function _0x1e1190() {
            _0x1f7abc = _0x48f779.getNewObj();
            sleep(1000);
            if (_0x1f7abc == null) {
              _0x2bb9c8++;
              return 1;
            } else {
              _0x2bb9c8 = 0;
            }
            sleep(1000);
            log("页面跳转：进入用户中心");
            _0x1f7abc.click();
            sleep(3000);
            _0x29c06f = _0x48f779.getBaseInfo();
            _0x2e76d2 = _0x48f779.getShipinData();
            if (_0x3eb282.isPrivateOrBan()) {
              _0x1c8095 = _0x3eb282.getUsercenter_data("关注");
              _0x3bc337 = _0x3eb282.getUsercenter_data("粉丝");
              if (_0x1c8095 > _0x3bc337) {
                _0x4d4d38 = _0x3eb282.getUsercenter_zuopin();
                if (_0x4d4d38 > 50) {
                  var _0x75745b = _0x3eb282.JumpUsercenterToFirstzuopin(true);
                  if (_0x75745b[0]) {
                    if (_0x75745b[1]) {
                      _0x3eb282.watchSleep("观看时长", parseInt(random(_0x2e76d2.watchTimeMin, _0x2e76d2.watchTimeMax)));
                      _0x3eb282.clickDianzan();
                      _0x3100c5++;
                      _0x2697b3.addRunData("like");
                      sleep(3000);
                    } else {
                      var _0x4b6136 = _0x3eb282.getDianZanShu();
                      var _0x56cc8f = _0x3eb282.getZuopinPubdate();
                      if (_0x4b6136 > 200 || !_0x48f779.checkDiffInDays(_0x56cc8f)) {
                        log("此视频不满足条件");
                        _0x3eb282.watchSleep("观看时长", parseInt(random(3, 6)));
                      } else {
                        var _0x14f70d = function _0x291174() {
                          var _0x2e8755 = Object.keys(_0x4059ea).map(function (_0x8b4e27) {
                            return _0x4059ea[_0x8b4e27];
                          }).filter(function (_0x4b0a59) {
                            return _0x4b0a59.check();
                          });
                          if (_0x2e8755.length === 0) {
                            return null;
                          }
                          return _0x2e8755[Math.floor(Math.random() * _0x2e8755.length)];
                        };
                        _0x3eb282.watchSleep("观看时长", parseInt(random(_0x2e76d2.watchTimeMin, _0x2e76d2.watchTimeMax)));
                        var _0x4059ea = {
                          LIKE: {
                            check: function _0x17b2cf() {
                              return _0x3100c5 < _0x29c06f.like;
                            },
                            execute: function _0x8f9913() {
                              _0x3eb282.clickDianzan();
                              _0x3100c5++;
                              _0x2697b3.addRunData("like");
                              sleep(3000);
                            }
                          },
                          FOLLOW: {
                            check: function _0x91c1a5() {
                              return _0x4dcf5f < _0x29c06f.follow;
                            },
                            execute: function _0x266cea() {
                              _0x3eb282.clickGuanzhu();
                              _0x4dcf5f++;
                              _0x2697b3.addRunData("follow");
                              sleep(3000);
                            }
                          },
                          COMMENT: {
                            check: function _0x395700() {
                              return _0x560d3d < _0x29c06f.comment;
                            },
                            execute: function _0x3a619c() {
                              try {
                                var _0x2c75e0 = _0x3eb282.getTitleDesc();
                                if (!_0x2e76d2.pinglunWords || !_0x3eb282.clickPinlunqu()) {
                                  return;
                                }
                                var _0x5251ec = _0x2c75e0 ? _0x3f4467(_0x2c75e0) : "";
                                var _0x5920e5 = _0x5251ec || _0x2e76d2.pinglunWords;
                                _0x3eb282.pinglun(_0x5920e5, _0x5251ec ? false : _0x2e76d2.defultWords);
                                log("关闭评论区");
                                back();
                                _0x560d3d++;
                              } finally {
                                sleep(2000);
                              }
                            }
                          }
                        };
                        var _0x50f524 = _0x14f70d();
                        _0x50f524 ? _0x50f524.execute() : log("所有动作已达上限");
                      }
                    }
                    log("页面跳转：返回用户中心");
                    back();
                    sleep(2000);
                  }
                } else {
                  log("此用户不满足条件");
                  sleep(2000);
                }
              } else {
                log("此用户不满足条件");
                sleep(2000);
              }
            }
            sleep(1000);
            log("页面跳转：返回粉丝列表");
            back();
            sleep(2000);
          };
          var _0x1f7abc;
          var _0x29c06f;
          var _0x2e76d2;
          var _0x1c8095;
          var _0x3bc337;
          var _0x4d4d38;
          while (1) {
            if (_0x3ff18a()) {
              break;
            }
          }
          if (_0x2bb9c8 > 8) {
            log("页面异常重新启动");
            _0x2bb9c8 = 0;
            _0x48f779.zidongAction();
            _0x48f779.action();
            break;
          }
          swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
          sleep(1000);
        }
        _0x3100c5 >= _0x29c06f.like && _0x4dcf5f >= _0x29c06f.follow && _0x560d3d >= _0x29c06f.comment && (log("本次任务结束"), _0x48f779.end());
      });
    };
    var _0x5bcd32 = [];
    this.getNewObj = function () {
      var _0x3b606d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _0x5bcd32.length > 50 && _0x5bcd32.shift();
      try {
        var _0x18a4d4 = null;
        var _0x257a06 = className("androidx.recyclerview.widget.RecyclerView").find();
        for (var _0x49097f = 0; _0x49097f < _0x257a06.length; _0x49097f++) {
          var _0x20c981 = _0x257a06[_0x49097f];
          if (_0x20c981.bounds().width() > 0 && _0x20c981.bounds().height() > 0) {
            _0x18a4d4 = _0x20c981;
            break;
          }
        }
        if (_0x18a4d4 == null) {
          log("获取用户：异常");
          return null;
        }
        for (var _0xc896a2 = 0; _0xc896a2 < _0x18a4d4.childCount(); _0xc896a2++) {
          var _0x4a670a = _0x18a4d4.child(_0xc896a2);
          if (_0x4a670a.childCount() >= 2) {
            if (_0x4a670a.child(2).childCount() == 0) {
              continue;
            }
          }
          var _0xcaf5de = _0x4a670a.findOne(className("android.widget.TextView"));
          var _0x35b511 = _0xcaf5de.text();
          if (_0x5bcd32.indexOf(_0x35b511) == -1 && _0xcaf5de.text() != "发现好友" && _0xcaf5de.text() != "暂时没有更多了") {
            if (_0x3b606d) {
              var _0x4d6af7 = _0x4a670a.child(1).child(0).childCount();
              if (_0x4d6af7 == 2) {
                log("蓝V用户 = " + _0x35b511);
                _0x5bcd32.push(_0x35b511);
                return _0x4a670a;
              }
            } else {
              log("用户 = " + _0x35b511);
              _0x5bcd32.push(_0x35b511);
              return _0x4a670a;
            }
          }
        }
        return null;
      } catch (_0x3ae52b) {
        log("获取用户：异常");
        return null;
      }
    };
    this.checkDiffInDays = function (_0x26e236) {
      if (_0x26e236) {
        var _0x4833f1 = new Date();
        var _0xe688f = new Date(_0x26e236);
        var _0x53e1ef = 86400000;
        var _0xf6ffda = Math.abs(_0x4833f1 - _0xe688f);
        var _0x5a4a14 = Math.floor(_0xf6ffda / _0x53e1ef);
        return _0x5a4a14 <= 7;
      }
      return false;
    };
    var _0x573259 = storages.create("wzke:znyl");
    this.getBaseInfo = function () {
      var _0x421b77 = _0x573259.get("baseinfo");
      if (_0x421b77 == undefined) {
        _0x421b77 = {};
        _0x421b77.like = 80;
        _0x421b77.follow = 20;
        _0x421b77.comment = 50;
        _0x573259.put("baseinfo", _0x421b77);
      } else {
        if (_0x421b77.like == undefined) {
          _0x421b77.like = 80;
        }
        if (_0x421b77.follow == undefined) {
          _0x421b77.follow = 20;
        }
        if (_0x421b77.comment == undefined) {
          _0x421b77.comment = 50;
        }
        _0x573259.put("baseinfo", _0x421b77);
      }
      return _0x573259.get("baseinfo");
    };
    this.initBaseInfo = function (_0x2a27ad) {
      var _0x7060dd = _0x48f779.getBaseInfo();
      _0x2a27ad.like.setText(_0x7060dd.like.toString());
      _0x2a27ad.follow.setText(_0x7060dd.follow.toString());
      _0x2a27ad.comment.setText(_0x7060dd.comment.toString());
    };
    this.saveBaseInfo = function (_0x4a0dbe) {
      _0x573259.put("baseinfo", _0x4a0dbe);
    };
    _0x48f779.initShipinView = function (_0x16af8) {
      try {
        var _0x2b9252 = _0x48f779.getShipinData();
        _0x16af8.watchTimeMin.setText(_0x2b9252.watchTimeMin + "");
        _0x16af8.watchTimeMax.setText(_0x2b9252.watchTimeMax + "");
        _0x16af8.pinglunWords.setText(_0x2b9252.pinglunWords + "");
        _0x16af8.defultWords.checked = _0x2b9252.defultWords;
      } catch (_0x1b7fce) {
        log("initShipinView", _0x1b7fce);
      }
    };
    _0x48f779.getShipinData = function () {
      var _0xee1a29 = {
        watchTimeMin: _0x573259.get("watchTimeMin") != undefined ? _0x573259.get("watchTimeMin") : 3,
        watchTimeMax: _0x573259.get("watchTimeMax") != undefined ? _0x573259.get("watchTimeMax") : 18,
        pinglunWords: _0x573259.get("pinglunWords") != undefined ? _0x573259.get("pinglunWords") : _0x43ea58.pinglun,
        defultWords: _0x573259.get("defultWords") != undefined ? _0x573259.get("defultWords") : true
      };
      return _0xee1a29;
    };
    _0x48f779.saveShipinClick = function (_0x1d1712) {
      _0x573259.put("watchTimeMin", parseInt(_0x1d1712.watchTimeMin.text()));
      _0x573259.put("watchTimeMax", parseInt(_0x1d1712.watchTimeMax.text()));
      _0x573259.put("pinglunWords", _0x1d1712.pinglunWords.text());
      _0x573259.put("defultWords", _0x1d1712.defultWords.checked);
      toast("保存成功");
    };
  }
  _0x1c2e81.exports = _0x363750;
}, function (_0x4d5257, _0x3a46a9) {
  var _0x27130a = "https://ark.cn-beijing.volces.com/api/v3/bots/chat/completions";
  var _0x3c8d11 = "bot-20250211143941-hbbnr";
  var _0x28d14a = "Bearer baded5eb-545a-45b1-93bb-4444e4527377";
  _0x4d5257.exports = {
    getAIcomment: function _0x554b3e(_0x331ce4) {
      if (!_0x331ce4) {
        return "";
      }
      try {
        log("正在创作评论");
        var _0x5600ca = http.postJson(_0x27130a, {
          model: _0x3c8d11,
          stream: false,
          messages: [{
            role: "user",
            content: _0x331ce4
          }]
        }, {
          headers: {
            Authorization: _0x28d14a
          }
        });
        return _0x5600ca.body.json().choices[0].message.content;
      } catch (_0x54624f) {
        log("使用默认话术");
        return "";
      }
    }
  };
}, function (_0x358bcf, _0x1f9f42, _0x8c0618) {
  function _0x366d57(_0x148208) {
    var _0x436941 = this;
    var _0x111484 = _0x8c0618(1);
    var _0x3d2592 = new (_0x8c0618(6))();
    var _0x1b3481 = _0x111484.bgColor;
    var _0x501747 = new (_0x8c0618(4))();
    var _0x83cead = new (_0x8c0618(5))();
    var _0x5062d7 = _0x8c0618(7);
    _0x436941.index = function () {
      var _0x5a9aed = _0x501747.getLoginInfo();
      _0x436941.view();
    };
    _0x436941.view = function () {
      var _0x36c7a7 = _0x416637.get_statusBarHeight();
      var _0x40d9c2 = _0x416637.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"评论浏览\"  bg=\"".concat(_0x1b3481, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"提前设置好关键字，在视频播放页启动，自动观看视频，对评论区含有关键字用户进行互动，精准拓客\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x40d9c2, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <vertical padding=\"2\" marginTop=\"10\" id=\"bg1\" bg=\"#ffffff\">\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" bg=\"#ffffff\" >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"浏览视频个数\" bg=\"#ffffff\" />\n                                        <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"count\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <horizontal weightSum=\"10\" padding=\"10 0 0 0\" bg=\"#ffffff\" >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"最大评论楼层\" />\n                                        <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"deepMax\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <SwitchWidget-Se7en id=\"plDianzanSwitch\" marginRight=\"10\" marginTop=\"5\" padding='10 8' checked='true' text='评论楼层喜欢' trackColor='#003366' background='#ffffff' />\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"关键词 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"keyWords\" bg=\"#ffffff\" />\n                                    </vertical>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <vertical padding=\"10 5 20 0\" w=\"*\" bg=\"#ffffff\" >\n                                        <horizontal h=\"25\" gravity=\"left|center\" bg=\"#ffffff\" >\n                                            <text w=\"auto\" textColor=\"black\" text=\"地区筛选 换行隔开 多条随机\" />\n                                            <button w=\"40\" id=\"areaWordsCopy\" margin=\"5 2\" gravity=\"center\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                            <button w=\"40\" id=\"areaWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\" />\n                                        </horizontal>\n                                        <input gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"2\" id=\"areaWords\" bg=\"#ffffff\" />\n                                    </vertical>\n                                    <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                    <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" bg=\"#ffffff\" >\n                                        <text layout_weight=\"3\" textColor=\"black\" text=\"楼层执行间隔\" />\n                                        <horizontal layout_weight=\"7\" gravity=\"right\" bg=\"#ffffff\">\n                                            <input paddingRight=\"20\" minWidth=\"40\" gravity=\"center\" id=\"timeMin\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                            <text paddingRight=\"20\" textColor=\"black\" text=\"秒\" />\n                                        </horizontal>\n                                    </horizontal>\n\n                                </vertical>\n\n                                <button id=\"start\" bg=\"").concat(_0x1b3481, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                                <SwitchWidget-Se7en alpha=\"0\" id=\"caijiSwitch\" marginRight=\"10\" marginTop=\"5\" padding='10 8' checked='true' text='观察模式' trackColor='#003366' background='#ffffff' />\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical bg=\"#ffffff\">\n                                <text text=\"浏览作品设置\" margin=\"10\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\"    >\n                                    <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"浏览作品个数\" />\n                                    <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\"    >\n                                    <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"喜欢作品概率（%）\" />\n                                    <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinDianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\"    >\n                                    <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"评论作品概率（%）\" />\n                                    <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinPinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n\n                                <vertical padding=\"20 0 0 0\">\n                                    <text marginTop=\"5\" textColor=\"black\" text=\"评论内容（换行隔开,多条随机）\" />\n                                    <input hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"pinglunWords\" bg=\"#ffffff\" />\n                                </vertical>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <button id=\"saveShipin\" bg=\"").concat(_0x1b3481, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\" >\n                                <text text=\"私信设置\" margin=\"10\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <SwitchWidget-Se7en id=\"sixinSwitch\" marginTop=\"5\" padding='8 8' checked='true' text='开启私信' trackColor='#003366' background='#ffffff' />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <horizontal weightSum=\"10\" padding=\"7 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率\" />\n                                    <input paddingRight=\"10\" layout_weight=\"7\" gravity=\"right\" id=\"guanzhuRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                    <text textColor=\"black\" text=\"（%）\" />\n                                </horizontal>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <SwitchWidget-Se7en id=\"sexSwitch\" marginTop=\"5\" padding='8 8' checked='false' text='性别筛选' trackColor='#2196f3' background='#ffffff' />\n\n                                <frame h=\"0dp\" id=\"sexView\" padding=\"10 10\">\n                                    <text w=\"auto\" h=\"30dp\" layout_gravity=\"left\"  >性别 : </text>\n                                    <spinner w=\"auto\" h=\"30dp\" layout_gravity=\"right\" id=\"sex\" entries=\"女|男\" />\n                                </frame>\n\n                                <text text=\"  *筛选性别男女\" />\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <vertical weightSum=\"10\" padding=\"10\" >\n                                    <text textColor=\"black\" text=\"私信内容（换行隔开,多条随机）\" />\n                                    <input hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"sixinWords\" bg=\"#ffffff\" />\n                                </vertical>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <button id=\"save3\" bg=\"").concat(_0x1b3481, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n                            </vertical>\n\n                        </ScrollView>\n\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "观看设置", "浏览作品", "私信设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x111484.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x111484.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x26c020 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x26c020,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x26c020);
        }).show();
      });
      ui.areaWordsCopy.click(function () {
        setClip(ui.areaWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.areaWords.text(),
          positive: "好的"
        }).show();
      });
      ui.areaWordsPaste.click(function () {
        var _0x30cc6b = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x30cc6b,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.areaWords.setText(_0x30cc6b);
        }).show();
      });
      ui.caijiSwitch.on("check", function (_0x68bfec) {
        var _0xf866a7 = _0x501747.getLoginInfo();
        _0x68bfec && _0xf866a7.oemOn == 1 && (ui.caijiSwitch.checked = true);
        _0x68bfec && _0xf866a7.oemOn != 1 && (ui.caijiSwitch.checked = false, toast("非Oem用户,无法开启"));
      });
      ui._backButton.click(function () {
        _0x148208.view(1);
      });
      ui.sexSwitch.on("check", function (_0x5b1f19) {
        _0x5b1f19 ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      var _0x300636 = _0x436941.getInfo1();
      ui.count.setText(_0x300636.count + "");
      ui.deepMax.setText(_0x300636.deepMax + "");
      ui.plDianzanSwitch.checked = _0x300636.plDianzanSwitch;
      ui.caijiSwitch.checked = _0x300636.caijiSwitch;
      ui.keyWords.setText(_0x300636.keyWords + "");
      ui.areaWords.setText(_0x300636.areaWords + "");
      ui.timeMin.setText(_0x300636.timeMin + "");
      ui.start.click(function () {
        var _0x5e18e1 = {
          count: parseInt(ui.count.text()),
          deepMax: parseInt(ui.deepMax.text()),
          plDianzanSwitch: ui.plDianzanSwitch.checked,
          caijiSwitch: false,
          keyWords: ui.keyWords.text(),
          areaWords: ui.areaWords.text(),
          timeMin: parseInt(ui.timeMin.text())
        };
        _0x436941.saveInfo1(_0x5e18e1);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x436941.start();
        }).on("negative", function () {}).show();
      });
      _0x436941.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x436941.saveShipinClick(ui);
      });
      var _0x523ac6 = _0x436941.getInfo3();
      ui.sixinSwitch.checked = _0x523ac6.sixinSwitch;
      ui.guanzhuRate.setText(_0x523ac6.guanzhuRate + "");
      ui.sixinWords.setText(_0x523ac6.sixinWords);
      ui.sexSwitch.checked = _0x523ac6.sexSwitch;
      ui.sex.setSelection(_0x523ac6.sex);
      ui.save3.on("click", function () {
        var _0x2494ce = {
          sixinSwitch: ui.sixinSwitch.checked,
          guanzhuRate: ui.guanzhuRate.text(),
          sixinWords: ui.sixinWords.text(),
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition()
        };
        _0x436941.saveInfo3(_0x2494ce);
        alert("保存成功");
      });
    };
    var _0x3c621f = storages.create("wzke:J1");
    _0x436941.getInfo1 = function () {
      var _0x4e6f05 = _0x3c621f.get("info1");
      _0x4e6f05 == undefined && (_0x4e6f05 = {}, _0x4e6f05.deepMax = 10, _0x4e6f05.plDianzanSwitch = true, _0x4e6f05.caijiSwitch = false, _0x4e6f05.keyWords = "互关\n粉丝\n抱团", _0x4e6f05.timeMin = 2, _0x3c621f.put("info1", _0x4e6f05));
      if (_0x4e6f05.count == undefined) {
        _0x4e6f05.count = 100;
      }
      if (_0x4e6f05.plDianzanSwitch == undefined) {
        _0x4e6f05.plDianzanSwitch = true;
      }
      if (_0x4e6f05.caijiSwitch == undefined) {
        _0x4e6f05.caijiSwitch = false;
      }
      if (_0x4e6f05.timeMin == undefined) {
        _0x4e6f05.timeMin = 2;
      }
      if (_0x4e6f05.deepMax == undefined) {
        _0x4e6f05.deepMax = 10;
      }
      if (_0x4e6f05.areaWords == undefined) {
        _0x4e6f05.areaWords = "";
      }
      return _0x4e6f05;
    };
    _0x436941.saveInfo1 = function (_0x1e17e9) {
      _0x3c621f.put("info1", _0x1e17e9);
    };
    _0x436941.getInfo3 = function () {
      var _0x2d30c6 = _0x3c621f.get("info3");
      if (_0x2d30c6 == undefined) {
        var _0x2d30c6 = {
          sixinSwitch: false,
          guanzhuRate: 100,
          sixinWords: "你好\n好啊\n1",
          sexSwitch: false,
          sex: 0
        };
        _0x3c621f.put("info3", _0x2d30c6);
      }
      _0x2d30c6.guanzhuRate == undefined && (_0x2d30c6.guanzhuRate = 100);
      _0x2d30c6.sexSwitch == undefined && (_0x2d30c6.sexSwitch = false);
      _0x2d30c6.sex == undefined && (_0x2d30c6.sex = 0);
      _0x3c621f.put("info3", _0x2d30c6);
      return _0x3c621f.get("info3");
    };
    _0x436941.saveInfo3 = function (_0x1f32ac) {
      _0x3c621f.put("info3", _0x1f32ac);
    };
    var _0x28eddc = new (_0x8c0618(3))();
    var _0x416637 = _0x8c0618(0);
    var _0x37f210 = new (_0x8c0618(2))();
    this.start = function () {
      if (!_0x416637.checkServer() || !_0x28eddc.launchApp()) {
        return false;
      }
      _0x416637.showConsole("评论浏览");
      _0x37f210.index();
      _0x37f210.ClickListener({
        clickStart: function _0x2fae42() {
          threads.start(function () {
            _0x436941.startAction();
          });
        },
        clickStop: function _0x48f8ea() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x9d87fe() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x37f210.close();
            _0x416637.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x436941.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x28eddc.closeTip();
      var _0x24cce6 = _0x436941.getInfo1();
      var _0x5f3ce0 = _0x24cce6.count;
      for (var _0x4e730e = 1; _0x4e730e <= _0x5f3ce0; _0x4e730e++) {
        log("当前执行: ", _0x4e730e);
        _0x28eddc.getViewType() == "视频" && _0x28eddc.getPinglunShu() > 0 && _0x28eddc.clickPinlunqu() && (_0x436941.pinglunquAction(), _0x28eddc.closePinlunquOnce());
        _0x416637.actionSwipUp();
        sleep(1000);
      }
      log("任务结束");
    };
    _0x436941.pinglunquAction = function () {
      var _0x54f4a3 = [];
      var _0x481cf4 = _0x436941.getInfo1();
      var _0x518729 = _0x481cf4.deepMax;
      while (_0x518729 > 0) {
        while (_0x518729 > 0) {
          var _0x2039fe = _0x436941.getNewUser(_0x54f4a3);
          if (_0x2039fe == null) {
            break;
          }
          log("评论个数:", _0x518729);
          _0x518729--;
          var _0x1614f8 = _0x436941.isContain(_0x2039fe, _0x481cf4.keyWords);
          var _0x215fd4 = _0x436941.isareaContain(_0x2039fe, _0x481cf4.areaWords);
          if (_0x1614f8 != false && _0x215fd4 != false) {
            _0x28eddc.watchSleep("观看评论:", _0x481cf4.timeMin);
            if (_0x481cf4.plDianzanSwitch) {
              var _0x21e417 = _0x2039fe.findOne(clickable(true).className("android.view.ViewGroup"));
              _0x21e417 != null && (_0x21e417.click(), log("评论区赞：成功"), sleep(2000));
            }
            var _0x1e7438 = _0x2039fe.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
            var _0xa1e5f7 = _0x1e7438.bounds().centerX();
            var _0x44b97e = _0x1e7438.bounds().centerY();
            log("跳转页面: 用户中心");
            click(_0xa1e5f7, _0x44b97e);
            sleep(4000);
            _0x5062d7.addRunData("visit");
            _0x436941.usercenterAction(_0x1614f8);
            log("跳转页面: 评论区");
            sleep(1000);
            back();
            sleep(2000);
          }
          if (_0x518729 <= 0) {
            break;
          }
          sleep(1000);
        }
        if (text("暂时没有更多了").findOnce()) {
          break;
        }
        if (text("部分评论来自其他子版本，因评论者未选择同步抖音，暂不支持查看").findOnce()) {
          break;
        }
        if (text("已折叠部分评论").findOnce()) {
          break;
        }
        if (textEndsWith("点击评论").findOnce()) {
          break;
        }
        if (_0x518729 <= 0) {
          break;
        }
        var _0x54200e = textEndsWith(" 条评论").findOnce();
        var _0x2382f1 = device.width * 0.4 + random(-50, 50);
        var _0x417664 = device.height * 0.8 + random(-50, 50);
        var _0x4855e4 = device.width * 0.6 + random(-50, 50);
        var _0x44bbeb = _0x54200e != null ? _0x54200e.bounds().centerY() + 50 : device.height * 0.4;
        log("滑动页面:评论区");
        _0x416637.swipeRandom(_0x2382f1, _0x417664, _0x4855e4, _0x44bbeb, 2000);
        sleep(1000);
      }
      log("评论操作: 此评论区结束");
    };
    _0x436941.usercenterAction = function (_0x10d34b) {
      sleep(3000);
      var _0x304913 = _0x436941.getInfo1();
      var _0x65d92b = _0x436941.getShipinData();
      var _0x21eada = _0x436941.getInfo3();
      if (_0x65d92b.shipinCount == 0 && _0x21eada.sixinSwitch == false && _0x304913.caijiSwitch == false && _0x21eada.guanzhuRate <= 0) {
        return false;
      }
      if (!_0x28eddc.isPrivateOrBan()) {
        return false;
      }
      if (_0x304913.caijiSwitch) {
        var _0x7196ac = _0x28eddc.watchUercenterInfo();
        _0x7196ac.keyWord = _0x10d34b;
        _0x7196ac.tel = "";
        var _0x27c347 = _0x501747.getLoginInfo();
        _0x83cead.msg10003({
          loginInfo: _0x27c347,
          userinfo: _0x7196ac,
          type: "评论观看"
        });
        return true;
      }
      if (_0x21eada.sexSwitch && _0x416637.requestScreenCapture() && _0x28eddc.watchUserSex() != _0x21eada.sex) {
        log("性别不符: ");
        return;
      }
      if (random(1, 100) < _0x21eada.guanzhuRate) {
        _0x28eddc.clickUsercenterGuanzhu();
      }
      if (_0x21eada.sixinSwitch) {
        _0x28eddc.actionUesrCenterSixin(_0x21eada.sixinWords);
      }
      var _0x547415 = _0x28eddc.watchUserCenterZuopinShu();
      if (_0x547415 < _0x65d92b.shipinCount) {
        _0x65d92b.shipinCount = _0x547415;
      }
      if (_0x65d92b.shipinCount > 0 && _0x28eddc.JumpUsercenterToFirstzuopin()) {
        for (var _0x7b9d16 = 1; _0x7b9d16 <= _0x65d92b.shipinCount; _0x7b9d16++) {
          log("视频观看: 第" + _0x7b9d16 + "个:", _0x65d92b.shipinCount);
          _0x28eddc.watchSleep("观看间隔", 2);
          random(1, 100) <= _0x65d92b.shipinDianzanRate ? (log("触发喜欢"), _0x28eddc.clickDianzan()) : log("未触发喜欢");
          random(1, 100) <= _0x65d92b.shipinPinglunRate && _0x28eddc.clickPinlunqu() ? (_0x28eddc.pinglun(_0x65d92b.pinglunWords), log("跳转页面: 关闭评论区"), sleep(1000), back(), sleep(2000)) : log("未触发评论");
          if (_0x7b9d16 > _0x65d92b.shipinCount) {
            break;
          }
          _0x28eddc.closePinlunquOnce();
          _0x416637.actionSwipUp();
        }
        log("跳转页面: 返回用户中心");
        sleep(1000);
        back();
        sleep(2000);
      }
    };
    _0x436941.isContain = function (_0x11a3ae, _0x5e6006) {
      try {
        var _0x18bb84 = _0x5e6006.split("\n");
        var _0x29d159 = _0x11a3ae.findOne(id("com.ss.android.ugc.aweme:id/content"));
        var _0x3f9775 = "";
        _0x29d159 != null && (_0x3f9775 = _0x436941.filterContent(_0x29d159.text()));
        log("评论内容: " + _0x3f9775);
        for (var _0x5226e5 in _0x18bb84) {
          var _0xb29e46 = _0x18bb84[_0x5226e5];
          if (_0x3f9775.includes(_0xb29e46)) {
            log("触发关键词:" + _0xb29e46);
            var _0x5836fa = "关键词: [ " + _0xb29e46 + " ] --------- 评论内容: [ " + _0x3f9775 + " ] ";
            return _0x5836fa;
          }
        }
        return false;
      } catch (_0x494a7a) {
        log("isContain", _0x494a7a);
        return false;
      }
    };
    _0x436941.isareaContain = function (_0x49df5f, _0x5f9d7a) {
      try {
        if (_0x5f9d7a == "") {
          return true;
        }
        var _0x1e603f = _0x5f9d7a.split("\n");
        var _0x3827f9 = _0x49df5f.findOne(textStartsWith(" · "));
        if (_0x3827f9 == null) {
          return false;
        }
        var _0x3e90b4 = _0x3827f9.text();
        for (var _0x13d944 in _0x1e603f) {
          var _0x4050c9 = _0x1e603f[_0x13d944];
          if (_0x3e90b4.includes(_0x4050c9)) {
            log("地区触发:" + _0x4050c9);
            var _0x45cff8 = "关键词: [ " + _0x4050c9 + " ] --------- 地区: [ " + _0x3e90b4 + " ] ";
            return _0x45cff8;
          }
        }
        log("地区未触发 : " + _0x3e90b4);
        return false;
      } catch (_0x5b2960) {
        log("isContain", _0x5b2960);
        return false;
      }
    };
    _0x436941.filterContent = function (_0x4ab67b) {
      var _0x2dd09e = "";
      var _0x745a19 = 1;
      for (var _0x4e922e = 0; _0x4e922e < _0x4ab67b.length; _0x4e922e++) {
        var _0x5b989e = _0x4ab67b.charAt(_0x4e922e);
        if (_0x5b989e == "@") {
          _0x745a19 = -1;
          continue;
        }
        if (_0x5b989e == " ") {
          _0x745a19 = 1;
          continue;
        }
        _0x745a19 == 1 && (_0x2dd09e += _0x5b989e);
      }
      return _0x2dd09e;
    };
    _0x436941.getNewUser = function (_0x47963c) {
      log("获取用户:");
      var _0x491e24 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x327ca6) {
        return _0x327ca6.bounds().width() > 0 && _0x327ca6.bounds().height() > 0;
      });
      var _0x5a30aa = _0x491e24.findOne(3000);
      if (_0x5a30aa == null) {
        return null;
      }
      for (var _0x174937 = 0; _0x174937 < _0x5a30aa.childCount(); _0x174937++) {
        var _0xc19d7d = _0x5a30aa.child(_0x174937);
        var _0x36fa8f = _0xc19d7d.getContentDescription();
        if (_0x36fa8f != null && _0x47963c.indexOf(_0x36fa8f) == -1) {
          var _0x510c71 = _0xc19d7d.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
          if (_0x510c71.bounds().height() >= _0x510c71.bounds().width() - 30) {
            _0x47963c.push(_0x36fa8f);
            return _0xc19d7d;
          }
        }
      }
      return null;
    };
    _0x436941.initShipinView = function (_0xc315ac) {
      try {
        var _0x2ba148 = _0x436941.getShipinData();
        _0xc315ac.shipinCount.setText(_0x2ba148.shipinCount + "");
        _0xc315ac.shipinDianzanRate.setText(_0x2ba148.shipinDianzanRate + "");
        _0xc315ac.shipinPinglunRate.setText(_0x2ba148.shipinPinglunRate + "");
        _0xc315ac.pinglunWords.setText(_0x2ba148.pinglunWords + "");
      } catch (_0x361565) {
        log("initShipinView", _0x361565);
      }
    };
    _0x436941.getShipinData = function () {
      var _0x109240 = {
        shipinCount: _0x3c621f.get("shipinCount") != undefined ? _0x3c621f.get("shipinCount") : 1,
        shipinDianzanRate: _0x3c621f.get("shipinDianzanRate") != undefined ? _0x3c621f.get("shipinDianzanRate") : 100,
        shipinPinglunRate: _0x3c621f.get("shipinPinglunRate") != undefined ? _0x3c621f.get("shipinPinglunRate") : 100,
        pinglunWords: _0x3c621f.get("pinglunWords") != undefined ? _0x3c621f.get("pinglunWords") : _0x3d2592.pinglun
      };
      return _0x109240;
    };
    _0x436941.saveShipinClick = function (_0x3fe22f) {
      var _0x7bc951 = {
        shipinCount: _0x3fe22f.shipinCount.text(),
        shipinDianzanRate: _0x3fe22f.shipinDianzanRate.text(),
        shipinPinglunRate: _0x3fe22f.shipinPinglunRate.text(),
        pinglunWords: _0x3fe22f.pinglunWords.text()
      };
      _0x436941.saveShipinData(_0x7bc951);
      dialogs.build({
        title: "保存成功",
        content: "",
        negative: "确定"
      }).on("negative", function () {}).show();
    };
    _0x436941.saveShipinData = function (_0x50db2b) {
      _0x3c621f.put("shipinCount", parseInt(_0x50db2b.shipinCount));
      _0x3c621f.put("shipinDianzanRate", parseInt(_0x50db2b.shipinDianzanRate));
      _0x3c621f.put("shipinPinglunRate", parseInt(_0x50db2b.shipinPinglunRate));
      _0x3c621f.put("pinglunWords", _0x50db2b.pinglunWords);
    };
  }
  _0x358bcf.exports = _0x366d57;
}, function (_0x52a55a, _0x102d45, _0x14d1e1) {
  var _0x154428 = _0x14d1e1(0);
  var _0x3a21b1 = _0x14d1e1(7);
  function _0x29ed42(_0x446c34) {
    var _0x9a180b = this;
    var _0x222e4b = _0x14d1e1(1);
    var _0x5c8389 = new (_0x14d1e1(6))();
    var _0x14f2a7 = new (_0x14d1e1(5))();
    var _0x1868fd = "粉丝浏览";
    _0x9a180b.loginInfo = "";
    _0x9a180b.opt = "";
    this.index = function (_0x152283) {
      _0x9a180b.opt = _0x152283;
      var _0x17817a = new (_0x14d1e1(4))();
      _0x9a180b.loginInfo = _0x17817a.getLoginInfo();
      _0x9a180b.view();
    };
    this.view = function () {
      var _0x3fb785 = _0x222e4b.bgColor;
      var _0x6596 = "在指定账号粉丝列表启动，对指定账号粉丝概率互动，精准增f";
      (_0x9a180b.opt == "J2_2" || _0x9a180b.opt == "HS1_2" || _0x9a180b.opt == "JS1_2") && (_0x6596 = "在推荐页启动，对指定账号粉丝概率互动，曝光增f");
      var _0x2acf24 = _0x4dd601.getVersionName("com.ss.android.ugc.aweme");
      switch (_0x9a180b.opt) {
        case "J2":
          _0x1868fd = "粉丝浏览";
          _0x2acf24 = _0x4dd601.getVersionName("com.ss.android.ugc.aweme");
          break;
        case "J2_2":
          _0x1868fd = "智能浏览";
          break;
        case "HS1":
          _0x1868fd = "粉丝观看";
          _0x2acf24 = _0x4dd601.getVersionName("com.ss.android.ugc.live");
          break;
        case "HS1_2":
          _0x1868fd = "智能浏览";
          _0x2acf24 = _0x4dd601.getVersionName("com.ss.android.ugc.live");
          break;
        case "JS1_2":
          _0x1868fd = "智能浏览";
          break;
      }
      var _0x3daeb7 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"".concat(_0x1868fd, "\" bg=\"").concat(_0x3fb785, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在指定账号粉丝列表启动，对指定账号粉丝概率互动\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x2acf24, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"执行个数\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"count\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"主页浏览（秒）\" layout_gravity=\"left|center\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"timeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"timeMax\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"观看时长（秒）\" layout_gravity=\"left|center\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"watchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"watchTimeMax\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <vertical id=\"telSwitch2_show\">\n                                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                            <SwitchWidget-Se7en id=\"telSwitch2\" marginTop=\"5\" padding='8 8' checked='true' text='自动进入粉丝列表' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical id=\"defultWords_show\">\n                                            <SwitchWidget-Se7en id=\"defultWords\" marginTop=\"5\" padding='8 8' checked='true' text='使用默认话术' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <SwitchWidget-Se7en id=\"switch3\" marginTop=\"5\" padding='8 8' checked='true' text='自由观看' trackColor='#e91e63' background='#ffffff' />\n                                        <vertical id=\"switch3content\" weightSum=\"10\" paddingLeft=\"8\"   >\n                                            <text margin='0 8 0 0' text=\"参数（概率触发一种，合计100%）：\" />\n                                            <horizontal marginLeft=\"16\"   >\n                                                <text textSize=\"10\" text=\"头像\" />      <input id=\"hr1\" inputType=\"number\" text=\"5\" /> <text textSize=\"8\" text=\"%\" />\n                                                <text textSize=\"10\" text=\"，关注\" />    <input id=\"hr2\" inputType=\"number\" text=\"0\" /> <text textSize=\"8\" text=\"%\" />\n                                                <text textSize=\"10\" text=\"，视频赞\" />  <input id=\"hr3\" inputType=\"number\" text=\"25\" /> <text textSize=\"8\" text=\"%\" />\n                                                <text textSize=\"10\" text=\"，评论赞\" />    <input id=\"hr4\" inputType=\"number\" text=\"0\" /> <text textSize=\"8\" text=\"%\" />\n                                            </horizontal>\n                                            <horizontal marginLeft=\"16\"  >\n\n                                                <text textSize=\"10\" text=\"评论\" />    <input id=\"hr5\" inputType=\"number\" text=\"0\" /> <text textSize=\"8\" text=\"%\" />\n                                                <text textSize=\"10\" text=\"，收藏\" />    <input id=\"hr6\" inputType=\"number\" text=\"5\" /> <text textSize=\"8\" text=\"%\" />\n                                                <text textSize=\"10\" text=\"，留痕\" />    <input id=\"hr7\" inputType=\"number\" text=\"60\" /> <text textSize=\"8\" text=\"%\" />\n                                            </horizontal>\n\n                                            <text margin='0 8 0 0' text=\"筛选：\" />\n                                            <horizontal marginLeft=\"16\" >\n                                                <text textSize=\"10\" text=\"粉丝数\" />   <input id=\"hr21\" inputType=\"number\" text=\"1\" /> <text textSize=\"10\" text=\"到\" /><input id=\"hr22\" inputType=\"number\" text=\"20000\" />\n                                            </horizontal>\n\n                                        </vertical>\n                                    </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x3fb785, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical bg=\"#ffffff\">\n\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"看作品数\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"作品喜欢概率（%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinDianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"作品评论概率（%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinPinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical paddingLeft=\"20\" >\n                                            <text textColor=\"black\" text=\"评论内容（换行隔开,多条随机）:\" />\n                                            <input padding=\"0 2 30 2\" hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"pinglunWords\" bg=\"#ffffff\" />\n                                        </vertical>\n\n                                    </vertical>\n                                </card>\n                                <button id=\"saveShipin\" bg=\"").concat(_0x3fb785, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>\n                            <vertical padding=\"10\" bg=\"#ffffff\">\n\n                                <card id=\"mainbg3\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n\n                                        <SwitchWidget-Se7en id=\"lanvSwitch\" marginTop=\"5\" padding='8 8' checked='false' text='蓝V筛选' trackColor='#2196f3' background='#ffffff' />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <SwitchWidget-Se7en id=\"iconSwitch\" marginTop=\"5\" padding='8 8' checked='false' text='头像喜欢' trackColor='#2196f3' background='#ffffff' />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <SwitchWidget-Se7en id=\"guanzhuSwitch\" marginTop=\"5\" padding='8 8' checked='true' text='开启关注' trackColor='#e91e63' background='#ffffff' />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <SwitchWidget-Se7en id=\"sixinSwitch\" marginTop=\"5\" padding='8 8' checked='true' text='开启私信' trackColor='#003366' background='#ffffff' />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical weightSum=\"10\" padding=\"10\" >\n                                            <text textColor=\"black\" text=\"私信内容（换行隔开,多条随机）\" />\n                                            <input hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"sixinWords\" bg=\"#ffffff\" />\n                                        </vertical>\n\n                                    </vertical>\n                                </card>\n                                <button id=\"save3\" bg=\"").concat(_0x3fb785, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView>\n\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0x154428.setBackgroundRoundedRectangle(ui.mainbg);
      _0x154428.setBackgroundRoundedRectangle(ui.mainbg2);
      _0x154428.setBackgroundRoundedRectangle(ui.mainbg3);
      ui.viewpager.setTitles(["基础设置", "浏览设置", "私信设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x222e4b.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x222e4b.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x446c34.view(1);
      });
      ui.switch3.on("check", function (_0x15d351) {
        _0x15d351 ? ui.switch3content.attr("h", "wrap_content") : ui.switch3content.attr("h", "0");
      });
      ui.start.click(function () {
        var _0xa3996 = {
          count: ui.count.text(),
          timeMin: ui.timeMin.text(),
          timeMax: ui.timeMax.text(),
          telSwitch2: ui.telSwitch2.checked,
          switch3: ui.switch3.checked
        };
        _0x9a180b.saveBaseInfo(_0xa3996);
        _0x9a180b.saveAutodata(ui);
        _0x9a180b.saveShipinClick(ui);
        dialogs.build({
          title: "确认开始吗？",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x9a180b.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      var _0x4d23a9 = _0x9a180b.getBaseInfo();
      ui.count.setText(_0x4d23a9.count + "");
      ui.timeMin.setText(_0x4d23a9.timeMin + "");
      ui.timeMax.setText(_0x4d23a9.timeMax + "");
      ui.telSwitch2.checked = _0x4d23a9.telSwitch2;
      _0x9a180b.opt == "J2" && (ui.telSwitch2.checked = false, ui.telSwitch2_show.attr("h", "0"));
      _0x9a180b.opt == "J2_2" && (ui.telSwitch2.checked = true);
      _0x9a180b.opt == "HS1" && (ui.telSwitch2.checked = false, ui.telSwitch2_show.attr("h", "0"));
      _0x9a180b.opt == "HS1_2" && (ui.telSwitch2.checked = true);
      _0x9a180b.opt == "JS1" && (ui.telSwitch2.checked = false, ui.telSwitch2_show.attr("h", "0"));
      _0x9a180b.opt == "JS1_2" && (ui.telSwitch2.checked = true);
      ui.switch3.checked = _0x4d23a9.switch3;
      _0x4d23a9.switch3 ? ui.switch3content.attr("h", "wrap_content") : ui.switch3content.attr("h", "0");
      _0x9a180b.initAutodata(ui);
      _0x9a180b.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x9a180b.saveShipinClick(ui);
      });
      try {
        var _0x3b0017 = _0x9a180b.getInfo3();
        ui.iconSwitch.checked = _0x3b0017.iconSwitch;
        ui.sixinSwitch.checked = _0x3b0017.sixinSwitch;
        ui.guanzhuSwitch.checked = _0x3b0017.guanzhuSwitch;
        ui.sixinWords.setText(_0x3b0017.sixinWords);
        ui.lanvSwitch.checked = _0x3b0017.lanvSwitch;
      } catch (_0x3c7e74) {
        log("info3Init", _0x3c7e74);
      }
      ui.save3.on("click", function () {
        var _0x521c82 = {
          iconSwitch: ui.iconSwitch.checked,
          sixinSwitch: ui.sixinSwitch.checked,
          guanzhuSwitch: ui.guanzhuSwitch.checked,
          sixinWords: ui.sixinWords.text(),
          lanvSwitch: ui.lanvSwitch.checked
        };
        var _0x27287e = "";
        _0x9a180b.saveInfo3(_0x521c82);
        alert("保存成功", _0x27287e);
      });
    };
    this.end = function () {
      _0x57ef24.stopAnimation();
      threads.shutDownAll();
    };
    var _0x58f1ea = new (_0x14d1e1(3))();
    var _0x4dd601 = _0x14d1e1(0);
    var _0x57ef24 = new (_0x14d1e1(2))();
    this.start = function () {
      if (!_0x4dd601.checkServer()) {
        return false;
      }
      if (_0x9a180b.opt == "HS1" || _0x9a180b.opt == "HS1_2") {
        if (!_0x58f1ea.launchAppHs()) {
          return false;
        }
      } else {
        if (_0x9a180b.opt == "JS1" || _0x9a180b.opt == "JS1_2") {
          if (!_0x58f1ea.launchAppJS()) {
            return false;
          }
        } else {
          if (!_0x58f1ea.launchApp()) {
            return false;
          }
        }
      }
      var _0x647603 = _0x9a180b.getBaseInfo();
      var _0x52f365 = _0x9a180b.getInfo3();
      _0x4dd601.showConsole(_0x1868fd + ":", device.width * 0.5, device.height * 0.15);
      log("注意 - 粉丝列表开始运行 -", _0x9a180b.loginInfo.level);
      _0x647603.count == 1024 && _0x9a180b.loginInfo.level == 3 && log("高级权限");
      _0x4faf00 = [];
      _0x287574 = _0x647603.count;
      _0x57ef24.index();
      _0x57ef24.ClickListener({
        clickStart: function _0x5f45f1() {
          threads.start(function () {
            _0x647603.telSwitch2 && (sleep(1000), _0x9a180b.zidongAction(), sleep(1000));
            _0x9a180b.action();
          });
        },
        clickStop: function _0x25ecfc() {
          _0x9a180b.end();
        },
        clickExit: function _0x25d4c1() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x9a180b.end();
            _0x57ef24.close();
            _0x4dd601.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.zidongAction = function () {
      for (var _0x2cba2e = 0; _0x2cba2e < 10; _0x2cba2e++) {
        var _0x533fc6 = _0x58f1ea.jumpMainToFensi("J2.zidong");
        if (_0x533fc6) {
          break;
        }
      }
    };
    var _0x287574 = 0;
    this.action = function () {
      var _0x3ca678 = _0x9a180b.getInfo3();
      _0x58f1ea.closeTip();
      var _0x4fdc57 = _0x9a180b.getBaseInfo();
      log("baseInfo.count =", _0x4fdc57.count);
      threads.start(function () {
        _0x58f1ea.watchStart("主任务开始", 1);
        _0x446c34.isRequestScreenCapture == false && _0x4fdc57.count == 1024 && _0x9a180b.loginInfo.level == 3 && (_0x4dd601.requestScreenCapture(), _0x446c34.isRequestScreenCapture = true);
        var _0x11f72f = 0;
        while (1) {
          while (_0x287574 > 0) {
            log("执行数量:" + _0x287574);
            var _0x4d3774 = _0x9a180b.getNewObj(_0x3ca678.lanvSwitch);
            sleep(1000);
            if (_0x4d3774 == null) {
              _0x11f72f++;
              break;
            } else {
              _0x11f72f = 0;
            }
            sleep(1000);
            log("页面跳转：进入用户中心");
            _0x4d3774.click();
            sleep(3000);
            _0x4fdc57.count == 1024 && _0x9a180b.loginInfo.level == 3 ? _0x9a180b.memberAction() : _0x9a180b.action2();
            sleep(1000);
            log("页面跳转：返回粉丝列表");
            back();
            sleep(2000);
            _0x287574--;
          }
          if (_0x287574 <= 0) {
            log("count<=0");
            break;
          }
          if (text("暂时没有更多了").findOne(500) || textContains("暂不支持查看").findOne(500) || text("发现更多你可能认识的人").findOne(500) || textEndsWith("点击评论").findOne(500)) {
            if (_0x4fdc57.telSwitch2) {
              _0x9a180b.zidongAction();
              _0x9a180b.action();
              return;
            }
            log("暂时没有更多了 | 暂不支持查看 | 发现更多你可能认识的人");
            break;
          }
          if (_0x11f72f > 10) {
            _0x11f72f = 0;
            if (_0x4fdc57.telSwitch2) {
              _0x9a180b.zidongAction();
              _0x9a180b.action();
              return;
            }
            log("界面异常，请重新启动");
            break;
          }
          swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
          sleep(1000);
        }
        log("本次任务结束");
        _0x9a180b.end();
      });
    };
    _0x9a180b.action2 = function () {
      if (!_0x58f1ea.isPrivateOrBan()) {
        return false;
      }
      var _0x5e3c53 = _0x9a180b.getBaseInfo();
      var _0x15425c = _0x9a180b.getShipinData();
      var _0x5b7dd6 = _0x9a180b.getInfo3();
      var _0x1a74b4 = _0x5b7dd6.sixinWords;
      var _0x27309f = _0x1a74b4.split("\n");
      if (_0x5e3c53.switch3) {
        var _0x48e160 = _0x9a180b.getAutodata();
        var _0x4eefa8 = _0x58f1ea.getUsercenter_data("粉丝");
        if (_0x4eefa8 < _0x48e160.hr21 || _0x4eefa8 > _0x48e160.hr22) {
          log(_0x4eefa8, _0x48e160.hr21, _0x48e160.hr22);
          log("粉丝数不符合");
          return;
        }
        _0x58f1ea.watchSleep("主页浏览:", random(parseInt(_0x5e3c53.timeMin), parseInt(_0x5e3c53.timeMax)));
        _0x3a21b1.addRunData("visit");
        _0x58f1ea.action_usercenter_1(_0x15425c.pinglunWords, _0x48e160.hr1, _0x48e160.hr2, _0x48e160.hr3, _0x48e160.hr4, _0x48e160.hr5, _0x48e160.hr6, _0x48e160.hr7, random(parseInt(_0x15425c.watchTimeMin), parseInt(_0x15425c.watchTimeMax)));
        return;
      }
      if (_0x15425c.shipinCount == 0 && !_0x5b7dd6.sixinSwitch && !_0x5b7dd6.iconSwitch && !_0x5b7dd6.guanzhuSwitch) {
        return false;
      }
      _0x58f1ea.watchSleep("主页浏览:", random(parseInt(_0x5e3c53.timeMin), parseInt(_0x5e3c53.timeMax)));
      _0x3a21b1.addRunData("visit");
      if (_0x5b7dd6.lanvSwitch) {
        if (!_0x58f1ea.isUserCenterLanV()) {
          return false;
        }
      }
      _0x5b7dd6.iconSwitch && _0x58f1ea.jumpUsercenterTouxiang();
      _0x5b7dd6.guanzhuSwitch && (_0x58f1ea.clickUsercenterGuanzhu(), _0x3a21b1.addRunData("follow"));
      if (_0x5b7dd6.sixinSwitch && _0x58f1ea.JumpUsercenterToMore() && _0x58f1ea.JumpMoreToFasixin()) {
        var _0x12af17 = _0x27309f[random(0, _0x27309f.length - 1)];
        _0x12af17 != "" && _0x58f1ea.textSend(_0x12af17);
        back();
        sleep(2000);
      }
      var _0x423e87 = _0x15425c.shipinCount;
      if (_0x423e87 > 0 && _0x58f1ea.JumpUsercenterToFirstzuopin()) {
        var _0x5909fc = 1;
        while (_0x5909fc <= _0x423e87) {
          log("视频观看: 第" + _0x5909fc + "个");
          _0x5909fc++;
          _0x58f1ea.watchSleep("观看时长", parseInt(random(_0x15425c.watchTimeMin, _0x15425c.watchTimeMax)));
          random(1, 100) <= _0x15425c.shipinDianzanRate ? (log("喜欢：触发"), _0x58f1ea.clickDianzan(), _0x3a21b1.addRunData("like")) : (log("喜欢：未触发"), sleep(1000));
          random(1, 100) <= _0x15425c.shipinPinglunRate ? _0x15425c.pinglunWords != "" && _0x58f1ea.clickPinlunqu() && (_0x58f1ea.pinglun(_0x15425c.pinglunWords, _0x15425c.defultWords), log("页面跳转：关闭评论区"), back(), sleep(2000)) : (log("评论：未触发"), sleep(1000));
          if (_0x5909fc > _0x423e87) {
            break;
          }
          _0x4dd601.actionSwipUp();
        }
        log("页面跳转：返回用户中心");
        back();
        sleep(2000);
      }
      sleep(2000);
    };
    _0x9a180b.memberAction = function () {
      var _0x221e18 = _0x9a180b.getInfo3();
      var _0x228cd5 = false;
      if (!_0x58f1ea.isPrivateOrBan()) {
        return false;
      }
      var _0x2b8f02 = _0x58f1ea.getUsercenter_data("粉丝");
      if (_0x2b8f02 > 20000) {
        log("粉丝数不符合");
        return;
      }
      if (_0x58f1ea.jumpUsercenterToPhone()) {
        _0x228cd5 = true;
        _0x58f1ea.backShipinToPostionPhone();
        return;
      }
      var _0x1d6c13 = 6;
      if (_0x58f1ea.JumpUsercenterToFirstzuopin() == false) {
        return false;
      }
      var _0x2d9a0a = 0;
      while (_0x2d9a0a < _0x1d6c13) {
        if (_0x58f1ea.jumpShipinToPostionPhone()) {
          _0x228cd5 = true;
          _0x58f1ea.backShipinToPostionPhone();
          break;
        }
        _0x58f1ea.clickPinlunqu() && (_0x58f1ea.isPinglunquPhone() && (_0x228cd5 = true), log("页面跳转：关闭评论区"), back(), sleep(2000));
        _0x2d9a0a++;
        if (_0x2d9a0a >= _0x1d6c13 || _0x228cd5 == true) {
          break;
        }
        _0x4dd601.actionSwipUp();
      }
      log("页面跳转：返回用户中心");
      back();
      sleep(2000);
      _0x228cd5 && (_0x58f1ea.actioSwiperDown(), _0x4dd601.captureScreen_and_save());
    };
    var _0x4faf00 = [];
    this.getNewObj = function () {
      var _0x14b74d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _0x4faf00.length > 50 && _0x4faf00.shift();
      try {
        var _0x415b8a = null;
        var _0x41aaef = className("androidx.recyclerview.widget.RecyclerView").find();
        for (var _0x3c6aec = 0; _0x3c6aec < _0x41aaef.length; _0x3c6aec++) {
          var _0x14f9d4 = _0x41aaef[_0x3c6aec];
          if (_0x14f9d4.bounds().width() > 0 && _0x14f9d4.bounds().height() > 0) {
            _0x415b8a = _0x14f9d4;
            break;
          }
        }
        if (_0x415b8a == null) {
          return null;
        }
        for (var _0x50519a = 0; _0x50519a < _0x415b8a.childCount(); _0x50519a++) {
          var _0xa61f6c = _0x415b8a.child(_0x50519a);
          if (_0xa61f6c.childCount() >= 2) {
            if (_0xa61f6c.child(2).childCount() == 0) {
              continue;
            }
          }
          var _0x5e7aae = _0xa61f6c.findOne(className("android.widget.TextView"));
          var _0x3afa6f = _0x5e7aae.text();
          if (_0x4faf00.indexOf(_0x3afa6f) == -1 && _0x5e7aae.text() != "发现好友" && _0x5e7aae.text() != "暂时没有更多了") {
            if (_0x14b74d) {
              var _0x3d4b6a = _0xa61f6c.child(1).child(0).childCount();
              if (_0x3d4b6a == 2) {
                log("蓝V用户 = " + _0x3afa6f);
                _0x4faf00.push(_0x3afa6f);
                return _0xa61f6c;
              }
            } else {
              log("用户 = " + _0x3afa6f);
              _0x4faf00.push(_0x3afa6f);
              return _0xa61f6c;
            }
          }
        }
        return null;
      } catch (_0x1ea29c) {
        log("获取用户：异常");
        return null;
      }
    };
    this.checkInfo3Conditionn = function (_0x5b829c, _0x2e9beb) {
      if (_0x2e9beb.totalguanzhu >= _0x5b829c.totalguanzhuMin && _0x2e9beb.totalguanzhu <= _0x5b829c.totalguanzhuMax && _0x2e9beb.fensi >= _0x5b829c.fensiMin && _0x2e9beb.fensi <= _0x5b829c.fensiMax && _0x2e9beb.zuopin >= _0x5b829c.zuopinMin && _0x2e9beb.zuopin <= _0x5b829c.zuopinMax) {
        log("符合");
        sleep(1000);
        return true;
      }
      log("不符合条件");
      sleep(1000);
      return false;
    };
    var _0x2490c3 = storages.create("wzke:J2");
    this.getBaseInfo = function () {
      var _0x35d20c = _0x2490c3.get("baseinfo");
      if (_0x35d20c == undefined) {
        _0x35d20c = {};
        _0x35d20c.count = 600;
        _0x35d20c.timeMin = 2;
        _0x35d20c.timeMax = 8;
        _0x35d20c.telSwitch2 = false;
        _0x35d20c.switch3 = true;
        _0x2490c3.put("baseinfo", _0x35d20c);
      } else {
        if (_0x35d20c.count == undefined) {
          _0x35d20c.count = 600;
        }
        if (_0x35d20c.timeMin == undefined) {
          _0x35d20c.timeMin = 2;
        }
        if (_0x35d20c.timeMax == undefined) {
          _0x35d20c.timeMax = 8;
        }
        if (_0x35d20c.telSwitch2 == undefined) {
          _0x35d20c.telSwitch2 = false;
        }
        if (_0x35d20c.switch3 == undefined) {
          _0x35d20c.switch3 = true;
        }
        _0x2490c3.put("baseinfo", _0x35d20c);
      }
      return _0x2490c3.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x2509ea) {
      _0x2490c3.put("baseinfo", _0x2509ea);
    };
    _0x9a180b.initAutodata = function (_0x3de716) {
      try {
        var _0x18208a = _0x9a180b.getAutodata();
        _0x3de716.hr1.setText(_0x18208a.hr1 + "");
        _0x3de716.hr2.setText(_0x18208a.hr2 + "");
        _0x3de716.hr3.setText(_0x18208a.hr3 + "");
        _0x3de716.hr4.setText(_0x18208a.hr4 + "");
        _0x3de716.hr5.setText(_0x18208a.hr5 + "");
        _0x3de716.hr6.setText(_0x18208a.hr6 + "");
        _0x3de716.hr7.setText(_0x18208a.hr7 + "");
        _0x3de716.hr21.setText(_0x18208a.hr21 + "");
        _0x3de716.hr22.setText(_0x18208a.hr22 + "");
      } catch (_0x4408c4) {
        log("initAutodata", _0x4408c4);
      }
    };
    this.getAutodata = function () {
      var _0x731187 = {
        hr1: _0x2490c3.get("hr1") != undefined ? _0x2490c3.get("hr1") : 0,
        hr2: _0x2490c3.get("hr2") != undefined ? _0x2490c3.get("hr2") : 5,
        hr3: _0x2490c3.get("hr3") != undefined ? _0x2490c3.get("hr3") : 10,
        hr4: _0x2490c3.get("hr4") != undefined ? _0x2490c3.get("hr4") : 15,
        hr5: _0x2490c3.get("hr5") != undefined ? _0x2490c3.get("hr5") : 10,
        hr6: _0x2490c3.get("hr6") != undefined ? _0x2490c3.get("hr6") : 5,
        hr7: _0x2490c3.get("hr7") != undefined ? _0x2490c3.get("hr7") : 55,
        hr21: _0x2490c3.get("hr21") != undefined ? _0x2490c3.get("hr21") : 1,
        hr22: _0x2490c3.get("hr22") != undefined ? _0x2490c3.get("hr22") : 5000
      };
      return _0x731187;
    };
    _0x9a180b.saveAutodata = function (_0x350123) {
      _0x2490c3.put("hr1", parseInt(_0x350123.hr1.text()));
      _0x2490c3.put("hr2", parseInt(_0x350123.hr2.text()));
      _0x2490c3.put("hr3", parseInt(_0x350123.hr3.text()));
      _0x2490c3.put("hr4", parseInt(_0x350123.hr4.text()));
      _0x2490c3.put("hr5", parseInt(_0x350123.hr5.text()));
      _0x2490c3.put("hr6", parseInt(_0x350123.hr6.text()));
      _0x2490c3.put("hr7", parseInt(_0x350123.hr7.text()));
      _0x2490c3.put("hr21", parseInt(_0x350123.hr21.text()));
      _0x2490c3.put("hr22", parseInt(_0x350123.hr22.text()));
      toast("保存成功");
    };
    _0x9a180b.initShipinView = function (_0x2b4d68) {
      try {
        var _0x4af0d1 = _0x9a180b.getShipinData();
        _0x2b4d68.shipinCount.setText(_0x4af0d1.shipinCount + "");
        _0x2b4d68.shipinDianzanRate.setText(_0x4af0d1.shipinDianzanRate + "");
        _0x2b4d68.shipinPinglunRate.setText(_0x4af0d1.shipinPinglunRate + "");
        _0x2b4d68.watchTimeMin.setText(_0x4af0d1.watchTimeMin + "");
        _0x2b4d68.watchTimeMax.setText(_0x4af0d1.watchTimeMax + "");
        _0x2b4d68.pinglunWords.setText(_0x4af0d1.pinglunWords + "");
        _0x2b4d68.defultWords.checked = _0x4af0d1.defultWords;
      } catch (_0x499c19) {
        log("initShipinView", _0x499c19);
      }
    };
    _0x9a180b.getShipinData = function () {
      var _0x2a2934 = {
        shipinCount: _0x2490c3.get("shipinCount") != undefined ? _0x2490c3.get("shipinCount") : 1,
        shipinDianzanRate: _0x2490c3.get("shipinDianzanRate") != undefined ? _0x2490c3.get("shipinDianzanRate") : 100,
        shipinPinglunRate: _0x2490c3.get("shipinPinglunRate") != undefined ? _0x2490c3.get("shipinPinglunRate") : 0,
        watchTimeMin: _0x2490c3.get("watchTimeMin") != undefined ? _0x2490c3.get("watchTimeMin") : 3,
        watchTimeMax: _0x2490c3.get("watchTimeMax") != undefined ? _0x2490c3.get("watchTimeMax") : 18,
        pinglunWords: _0x2490c3.get("pinglunWords") != undefined ? _0x2490c3.get("pinglunWords") : _0x5c8389.pinglun,
        defultWords: _0x2490c3.get("defultWords") != undefined ? _0x2490c3.get("defultWords") : true
      };
      return _0x2a2934;
    };
    _0x9a180b.saveShipinClick = function (_0x2caca4) {
      _0x2490c3.put("shipinCount", parseInt(_0x2caca4.shipinCount.text()));
      _0x2490c3.put("shipinDianzanRate", parseInt(_0x2caca4.shipinDianzanRate.text()));
      _0x2490c3.put("shipinPinglunRate", parseInt(_0x2caca4.shipinPinglunRate.text()));
      _0x2490c3.put("watchTimeMin", parseInt(_0x2caca4.watchTimeMin.text()));
      _0x2490c3.put("watchTimeMax", parseInt(_0x2caca4.watchTimeMax.text()));
      _0x2490c3.put("pinglunWords", _0x2caca4.pinglunWords.text());
      _0x2490c3.put("defultWords", _0x2caca4.defultWords.checked);
      toast("保存成功");
    };
    this.getInfo3 = function () {
      var _0x4d7c6a = {
        iconSwitch: false,
        guanzhuSwitch: false,
        sixinSwitch: false,
        sixinWords: "你好\n你好\n你好",
        lanvSwitch: false
      };
      var _0x4cc7e5 = _0x2490c3.get("info3");
      if (_0x4cc7e5 == undefined) {
        _0x2490c3.put("info3", _0x4d7c6a);
      } else {
        _0x4cc7e5.iconSwitch == undefined && (_0x4cc7e5.iconSwitch = _0x4d7c6a.iconSwitch);
        _0x4cc7e5.guanzhuSwitch == undefined && (_0x4cc7e5.guanzhuSwitch = _0x4d7c6a.guanzhuSwitch);
        _0x4cc7e5.lanvSwitch == undefined && (_0x4cc7e5.lanvSwitch = _0x4d7c6a.lanvSwitch);
        _0x2490c3.put("info3", _0x4cc7e5);
      }
      return _0x2490c3.get("info3");
    };
    this.saveInfo3 = function (_0xb47ef3) {
      _0x2490c3.put("info3", _0xb47ef3);
    };
  }
  _0x52a55a.exports = _0x29ed42;
}, function (_0x40528c, _0x1110fb, _0x22d664) {
  function _0x3c8b0e(_0x286d5d) {
    var _0x259d44 = this;
    var _0x39fe80 = _0x22d664(1);
    var _0x933dff = new (_0x22d664(6))();
    this.index = function () {
      _0x259d44.view();
    };
    this.view = function () {
      var _0x513f6d = _0x39fe80.bgColor;
      var _0x5396b7 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x5e4735 = _0x25510.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"直播浏览\"  bg=\"".concat(_0x513f6d, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" >\n\n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"直播[在线观众] - 进入在线观众列表\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x5e4735, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"执行个数\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"count\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"私信间隔\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input minWidth=\"40\" gravity=\"center\" id=\"timeMin\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\", 上限:\" />\n                                                <input paddingRight=\"30\" id=\"timeMax\" gravity=\"right\" minWidth=\"60\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                    </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x513f6d, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>\n                            <vertical bg=\"#ffffff\">\n                                <text text=\"浏览设置\" margin=\"10\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\"    >\n                                    <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"看作品数\" />\n                                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                                    <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"浏览间隔\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"watchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"watchTimeMax\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n\n                                <vertical padding=\"20 10 0 0\"  >\n                                    <text textColor=\"black\" text=\"评论内容（换行隔开,多条随机）\" />\n                                    <input hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"pinglunWords\" bg=\"#ffffff\" />\n                                </vertical>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <button id=\"saveShipin\" bg=\"").concat(_0x513f6d, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n                                <text text=\"私信设置\" margin=\"5\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <SwitchWidget-Se7en id=\"guanzhuSwitch\" marginTop=\"10\" padding='8 8' checked='true' text='开启关注' trackColor='#e91e63' background='#ffffff' />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <SwitchWidget-Se7en id=\"sixinSwitch\" marginTop=\"10\" padding='8 8' checked='true' text='开启私信' trackColor='#003366' background='#ffffff' />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <SwitchWidget-Se7en id=\"sexSwitch\" marginTop=\"10\" padding='8 8' checked='false' text='性别筛选' trackColor='#2196f3' background='#ffffff' />\n                                <frame h=\"0dp\" id=\"sexView\" padding=\"10 10\">\n                                    <text w=\"auto\" h=\"30dp\" layout_gravity=\"left\"  >性别 : </text>\n                                    <spinner w=\"auto\" h=\"30dp\" layout_gravity=\"right\" id=\"sex\" entries=\"女|男\" />\n                                </frame>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总获赞数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input minWidth=\"60\" gravity=\"center\" id=\"totalzanMin\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"totalzanMax\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总关注数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"totalguanzhuMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"totalguanzhuMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总粉丝数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"fensiMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"fensiMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总作品数\" />\n                                    <horizontal layout_weight=\"7\" gravity=\"right\">\n                                        <text textColor=\"black\" text=\"下限:\" />\n                                        <input id=\"zuopinMin\" minWidth=\"60\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"上限:\" />\n                                        <input paddingRight=\"30\" id=\"zuopinMax\" minWidth=\"80\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <horizontal weightSum=\"10\" gravity=\"center_vertical\" padding=\"10 0 0 0\" >\n                                    <text layout_weight=\"3\" textColor=\"black\" text=\"总喜欢数\" layout_gravity=\"left|center\"/>\n                                    <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                        <text textColor=\"black\" text=\"最低:\" />\n                                        <input id=\"xihuanMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                        <text textColor=\"black\" text=\"最高:\" />\n                                        <input  id=\"xihuanMax\" minWidth=\"50\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                    </horizontal>\n                                </horizontal>\n                                <text text=\"*用户屏蔽喜欢,则默认其数字为0\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <vertical weightSum=\"10\" padding=\"10\" >\n                                    <text textColor=\"black\" text=\"私信内容（换行隔开,多条随机）\" />\n                                    <input layout_weight=\"7\" hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"sixinWords\" bg=\"#ffffff\" />\n                                </vertical>\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <button id=\"save3\" bg=\"").concat(_0x513f6d, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView>\n\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "浏览作品", "私信"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x39fe80.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x39fe80.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x286d5d.view(1);
      });
      ui.sexSwitch.on("check", function (_0x35577d) {
        _0x35577d ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      ui.start.click(function () {
        var _0x18563c = {
          count: ui.count.text(),
          timeMin: parseInt(ui.timeMin.text()),
          timeMax: parseInt(ui.timeMax.text())
        };
        _0x259d44.saveBaseInfo(_0x18563c);
        dialogs.build({
          title: "确定开始任务吗?",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x259d44.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      var _0x337633 = function () {
        var _0x17d26f = _0x259d44.getBaseInfo();
        ui.count.setText(_0x17d26f.count.toString());
        ui.timeMin.setText(_0x17d26f.timeMin + "");
        ui.timeMax.setText(_0x17d26f.timeMax + "");
      }();
      _0x259d44.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x259d44.saveShipinClick(ui);
      });
      var _0x39741e = function () {
        try {
          var _0xc30ae4 = _0x259d44.getInfo3();
          ui.sixinSwitch.checked = _0xc30ae4.sixinSwitch;
          ui.guanzhuSwitch.checked = _0xc30ae4.guanzhuSwitch;
          ui.totalzanMin.setText(_0xc30ae4.totalzanMin.toString());
          ui.totalzanMax.setText(_0xc30ae4.totalzanMax.toString());
          ui.totalguanzhuMin.setText(_0xc30ae4.totalguanzhuMin.toString());
          ui.totalguanzhuMax.setText(_0xc30ae4.totalguanzhuMax.toString());
          ui.fensiMin.setText(_0xc30ae4.fensiMin.toString());
          ui.fensiMax.setText(_0xc30ae4.fensiMax.toString());
          ui.zuopinMin.setText(_0xc30ae4.zuopinMin.toString());
          ui.zuopinMax.setText(_0xc30ae4.zuopinMax.toString());
          ui.xihuanMin.setText(_0xc30ae4.xihuanMin.toString());
          ui.xihuanMax.setText(_0xc30ae4.xihuanMax.toString());
          ui.sixinWords.setText(_0xc30ae4.sixinWords);
          ui.sexSwitch.checked = _0xc30ae4.sexSwitch;
          ui.sex.setSelection(_0xc30ae4.sex);
        } catch (_0x1749e1) {
          log("info3Init", _0x1749e1);
        }
      }();
      ui.save3.on("click", function () {
        var _0x11c7c8 = {
          sixinSwitch: ui.sixinSwitch.checked,
          guanzhuSwitch: ui.guanzhuSwitch.checked,
          totalzanMin: ui.totalzanMin.text(),
          totalzanMax: ui.totalzanMax.text(),
          totalguanzhuMin: ui.totalguanzhuMin.text(),
          totalguanzhuMax: ui.totalguanzhuMax.text(),
          fensiMin: ui.fensiMin.text(),
          fensiMax: ui.fensiMax.text(),
          zuopinMin: ui.zuopinMin.text(),
          zuopinMax: ui.zuopinMax.text(),
          xihuanMin: ui.xihuanMin.text(),
          xihuanMax: ui.xihuanMax.text(),
          sixinWords: ui.sixinWords.text(),
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition()
        };
        var _0x2d25bf = "";
        _0x2d25bf += "总获赞:[" + _0x11c7c8.totalzanMin + "-" + _0x11c7c8.totalzanMax + "]\n";
        _0x2d25bf += "总关注:[" + _0x11c7c8.totalguanzhuMin + "-" + _0x11c7c8.totalguanzhuMax + "]\n";
        _0x2d25bf += "粉丝:[" + _0x11c7c8.fensiMin + "-" + _0x11c7c8.fensiMax + "]\n";
        _0x2d25bf += "作品:[" + _0x11c7c8.zuopinMin + "-" + _0x11c7c8.zuopinMax + "]\n";
        _0x2d25bf += "喜欢:[" + _0x11c7c8.xihuanMin + "-" + _0x11c7c8.xihuanMax + "]\n";
        _0x2d25bf += "话术:[" + _0x11c7c8.sixinWords + "]\n";
        _0x259d44.saveInfo3(_0x11c7c8);
        alert("保存成功", _0x2d25bf);
      });
    };
    this.end = function () {
      toastLog("本次任务结束");
      threads.shutDownAll();
    };
    var _0x24dbe9 = new (_0x22d664(3))();
    var _0x25510 = _0x22d664(0);
    var _0x530eb7 = new (_0x22d664(2))();
    this.start = function () {
      if (!_0x25510.checkServer() || !_0x24dbe9.launchApp()) {
        return false;
      }
      _0x25510.showConsole("直播观看");
      log("运行页面 :");
      log("直播 [在线观众] - 点击在线观众");
      log("备注: 主播没有粉丝不可见");
      _0x530eb7.index();
      _0x530eb7.ClickListener({
        clickStart: function _0x55b37a() {
          _0x259d44.action();
        },
        clickStop: function _0x77db3e() {
          _0x259d44.end();
        },
        clickExit: function _0x2f0f7b() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x259d44.end();
            _0x530eb7.close();
            _0x25510.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x3348ff = _0x259d44.getInfo3();
      _0x24dbe9.closeTip();
      _0x25510.chenckMonitorEnd(function () {
        _0x259d44.end();
      });
      var _0x22df4a = _0x259d44.getBaseInfo();
      var _0x3d04ef = _0x22df4a.count;
      threads.start(function () {
        _0x286d5d.count1 == 0 && _0x3348ff.sexSwitch && (_0x25510.requestScreenCapture(), _0x286d5d.count1 = 1);
        var _0x472f26 = 0;
        while (1) {
          _0x24dbe9.watchStart("观看列表:", 3);
          while (_0x3d04ef > 0) {
            var _0xf79cb1 = className("androidx.recyclerview.widget.RecyclerView").findOnce();
            if (_0xf79cb1 && _0xf79cb1.childCount() > 0) {
              _0x472f26 = 0;
              var _0x4e83d6 = _0xf79cb1.children().filter(function (_0x64b7f4) {
                return _0x64b7f4.bounds().bottom < device.height * 0.9;
              });
              _0x4e83d6.forEach(function (_0x5519a4, _0x24ec82) {
                if (_0x24ec82 == 0 || _0x24ec82 == _0x4e83d6.length - 1) {
                  return;
                }
                _0x24dbe9.watchSleep("观看间隔:直播用户", random(_0x22df4a.timeMin, _0x22df4a.timeMax));
                click(_0x5519a4.bounds().centerX(), _0x5519a4.bounds().centerY());
                log("页面点击: 列表用户");
                sleep(2000);
                var _0x42bac9 = descEndsWith("的头像").className("android.widget.Button").clickable(true).findOne(2000);
                var _0x12ee94 = _0x42bac9 && _0x42bac9.click();
                log("页面跳转: 用户中心." + _0x12ee94);
                sleep(3000);
                _0x259d44.action2();
                sleep(2000);
                back();
                sleep(2000);
                _0x3d04ef--;
              });
              break;
            } else {
              _0x472f26++;
              log("在线观众:null");
              break;
            }
          }
          if (_0x3d04ef <= 0) {
            break;
          }
          if (text("暂时没有更多了").findOne(500) || text("发现更多你可能认识的人").findOne(500) || textEndsWith("点击评论").findOne(500)) {
            log("达到结尾");
            break;
          }
          log("滑动列表");
          var _0x1449b2 = device.width * 0.5;
          var _0x44d259 = device.height * 0.8;
          var _0xd5325f = device.width * 0.5;
          var _0x36aa57 = device.height * 0.5;
          if (_0x472f26 >= 3) {
            break;
          }
          _0x25510.swipeRandom(_0x1449b2, _0x44d259, _0xd5325f, _0x36aa57, 1000);
          sleep(1000);
        }
        _0x259d44.end();
      });
    };
    _0x259d44.action2 = function () {
      var _0x192181 = _0x259d44.getInfo3();
      var _0x388fbd = _0x192181.sixinWords;
      var _0xaf2af0 = _0x388fbd.split("\n");
      var _0x5445e3 = _0x259d44.getShipinData();
      if (_0x5445e3.shipinCount <= 0 && _0x192181.guanzhuSwitch == false && _0x192181.sixinSwitch == false) {
        log("无操作任务");
        return;
      }
      if (text("帐号已被封禁").findOne(1000)) {
        toastLog("已被封禁");
        return false;
      }
      if (!_0x24dbe9.isPrivateOrBan()) {
        return false;
      }
      if (_0x192181.sexSwitch) {
        var _0x58fa9a = _0x24dbe9.watchUserSex();
        if (_0x58fa9a != _0x192181.sex) {
          toastLog("性别不符");
          return;
        } else {
          toastLog("性别符合");
        }
      }
      var _0x262b83 = desc("更多").findOne(1000);
      if (_0x262b83 == null) {
        toastLog("自己");
        return false;
      }
      var _0x184a91 = _0x24dbe9.watchUercenterInfo(false);
      if (_0x259d44.checkInfo3Conditionn(_0x192181, _0x184a91)) {
        _0x192181.guanzhuSwitch && _0x24dbe9.clickUsercenterGuanzhu();
        if (_0x192181.sixinSwitch && _0x24dbe9.JumpUsercenterToMore() && _0x24dbe9.JumpMoreToFasixin()) {
          var _0x3764a7 = _0xaf2af0[random(0, _0xaf2af0.length - 1)];
          _0x3764a7 != "" && _0x24dbe9.textSend(_0x3764a7);
          back();
          sleep(2000);
        }
      }
      if (_0x184a91.zuopin < _0x5445e3.shipinCount) {
        _0x5445e3.shipinCount = _0x184a91.zuopin;
      }
      if (_0x5445e3.shipinCount > 0 && _0x24dbe9.JumpUsercenterToFirstzuopin()) {
        for (var _0x58b326 = 1; _0x58b326 <= _0x5445e3.shipinCount; _0x58b326++) {
          log("视频观看: 第" + _0x58b326 + "个");
          _0x24dbe9.watchSleep("观看间隔", random(_0x5445e3.watchTimeMin, _0x5445e3.watchTimeMax));
          _0x24dbe9.clickDianzan();
          _0x24dbe9.clickPinlunqu() && (_0x24dbe9.actionPinglunqu(0, "", ""), _0x24dbe9.pinglun(_0x5445e3.pinglunWords), back(), sleep(2000));
          _0x24dbe9.closePinlunquOnce();
          _0x24dbe9.actioSwiperUp();
        }
        back();
        sleep(2000);
      }
      sleep(2000);
    };
    this.checkInfo3Conditionn = function (_0x39b18d, _0x23ee6d) {
      if (_0x23ee6d.totalzan >= _0x39b18d.totalzanMin && _0x23ee6d.totalzan <= _0x39b18d.totalzanMax && _0x23ee6d.totalguanzhu >= _0x39b18d.totalguanzhuMin && _0x23ee6d.totalguanzhu <= _0x39b18d.totalguanzhuMax && _0x23ee6d.fensi >= _0x39b18d.fensiMin && _0x23ee6d.fensi <= _0x39b18d.fensiMax && _0x23ee6d.zuopin >= _0x39b18d.zuopinMin && _0x23ee6d.zuopin <= _0x39b18d.zuopinMax && _0x23ee6d.xihuan >= _0x39b18d.xihuanMin && _0x23ee6d.xihuan <= _0x39b18d.xihuanMax) {
        log("符合");
        sleep(1000);
        return true;
      }
      log("不符合条件");
      sleep(1000);
      return false;
    };
    var _0x403114 = storages.create("wzke:J3");
    this.getBaseInfo = function () {
      var _0x511c95 = _0x403114.get("baseinfo");
      _0x511c95 == undefined ? (_0x511c95 = {}, _0x511c95.count = 3, _0x511c95.timeMin = 3, _0x511c95.timeMax = 10, _0x403114.put("baseinfo", _0x511c95)) : (_0x511c95.timeMin == undefined && (_0x511c95.timeMin = 3), _0x511c95.timeMax == undefined && (_0x511c95.timeMax = 10), _0x403114.put("baseinfo", _0x511c95));
      return _0x403114.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x46dc6b) {
      _0x403114.put("baseinfo", _0x46dc6b);
    };
    _0x259d44.initShipinView = function (_0x188b8d) {
      try {
        var _0x58fd44 = _0x259d44.getShipinData();
        _0x188b8d.shipinCount.setText(_0x58fd44.shipinCount.toString());
        _0x188b8d.watchTimeMin.setText(_0x58fd44.watchTimeMin.toString());
        _0x188b8d.watchTimeMax.setText(_0x58fd44.watchTimeMax.toString());
        _0x188b8d.pinglunWords.setText(_0x58fd44.pinglunWords.toString());
      } catch (_0xab7cd) {
        log("initShipinView", _0xab7cd);
      }
    };
    _0x259d44.getShipinData = function () {
      var _0x1e0490 = {
        shipinCount: _0x403114.get("shipinCount") != undefined ? _0x403114.get("shipinCount") : 1,
        watchTimeMin: _0x403114.get("watchTimeMin") != undefined ? _0x403114.get("watchTimeMin") : 1,
        watchTimeMax: _0x403114.get("watchTimeMax") != undefined ? _0x403114.get("watchTimeMax") : 3,
        pinglunWords: _0x403114.get("pinglunWords") != undefined ? _0x403114.get("pinglunWords") : _0x933dff.pinglun
      };
      return _0x1e0490;
    };
    _0x259d44.saveShipinClick = function (_0x4b2046) {
      var _0x112716 = {
        shipinCount: _0x4b2046.shipinCount.text(),
        watchTimeMin: _0x4b2046.watchTimeMin.text(),
        watchTimeMax: _0x4b2046.watchTimeMax.text(),
        pinglunWords: _0x4b2046.pinglunWords.text()
      };
      var _0x3516d5 = "";
      _0x3516d5 += "浏览个数: " + _0x112716.shipinCount;
      _0x3516d5 += "\n浏览间隔: " + _0x112716.watchTimeMin + " - " + _0x112716.watchTimeMax;
      _0x3516d5 += "\n评论内容: " + _0x112716.pinglunWords;
      dialogs.build({
        title: "提示",
        content: _0x3516d5,
        negative: "确定"
      }).on("negative", function () {
        toast("保存成功");
        _0x259d44.saveShipinData(_0x112716);
      }).show();
    };
    _0x259d44.saveShipinData = function (_0x5c2cd0) {
      _0x403114.put("shipinCount", parseInt(_0x5c2cd0.shipinCount));
      _0x403114.put("watchTimeMin", parseInt(_0x5c2cd0.watchTimeMin));
      _0x403114.put("watchTimeMax", parseInt(_0x5c2cd0.watchTimeMax));
      _0x403114.put("pinglunWords", _0x5c2cd0.pinglunWords);
    };
    this.getInfo3 = function () {
      var _0x2fae19 = _0x403114.get("info3");
      if (_0x2fae19 == undefined) {
        _0x2fae19 = {};
        _0x2fae19.guanzhuSwitch = true;
        _0x2fae19.sixinSwitch = true;
        _0x2fae19.totalzanMin = 0;
        _0x2fae19.totalzanMax = 10000000;
        _0x2fae19.totalguanzhuMin = 0;
        _0x2fae19.totalguanzhuMax = 10000000;
        _0x2fae19.fensiMin = 0;
        _0x2fae19.fensiMax = 10000000;
        _0x2fae19.zuopinMin = 0;
        _0x2fae19.zuopinMax = 10000;
        _0x2fae19.xihuanMin = 0;
        _0x2fae19.xihuanMax = 10000;
        _0x2fae19.sixinWords = "你好\n你好\n你好";
        _0x2fae19.sexSwitch = false;
        _0x2fae19.sex = 0;
        _0x403114.put("info3", _0x2fae19);
      } else {
        _0x2fae19.sexSwitch == undefined && (_0x2fae19.sexSwitch = false);
        _0x2fae19.sex == undefined && (_0x2fae19.sex = 0);
        _0x403114.put("info3", _0x2fae19);
      }
      return _0x403114.get("info3");
    };
    this.saveInfo3 = function (_0x28408f) {
      _0x403114.put("info3", _0x28408f);
    };
  }
  _0x40528c.exports = _0x3c8b0e;
}, function (_0x564bd0, _0x2f7221, _0x3628cf) {
  function _0x39efed(_0x5401b4) {
    var _0x3bd939 = this;
    var _0x29efc8 = _0x3628cf(0);
    var _0x3b6445 = _0x3628cf(1);
    var _0x2f255f = _0x3b6445.bgColor;
    var _0x5ce36c = null;
    this.index = function () {
      _0x5ce36c == null && (_0x5ce36c = _0x29efc8.createPopWin(), _0x3bd939.view());
      _0x5ce36c.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    this.view = function () {
      var _0x39bbac = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x3e7909 = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"清理关注\"  bg=\"".concat(_0x2f255f, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" >\n       \n                         \n                       \n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n                                <text text=\"一键取关\" gravity=\"center\" marginTop=\"10\" textColor=\"black\" textSize=\"20\" />\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <horizontal weightSum=\"10\"   padding=\"10 0 0 0\" >\n                                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"取消个数\" />\n                                    <input  paddingRight=\"30\" layout_weight=\"7\"  gravity=\"right\" id=\"count\"  inputType=\"number\"  bg=\"#ffffff\" />               \n                           \n                                </horizontal>\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <SwitchWidget-Se7en id=\"guanzhu\"  text=\"取消关注:\" margin=\"10 5\" trackColor='").concat(_0x2f255f, "' textColor=\"black\" checked=\"\" />\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <SwitchWidget-Se7en id=\"huguan\"  text=\"取消互关:\" margin=\"10 5\" trackColor='").concat(_0x2f255f, "' textColor=\"black\" checked=\"\" />\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <button id=\"start\" bg=\"").concat(_0x2f255f, "\" layout_margin='30'  textSize=\"20\" layout_gravity=\"center\" text=\"开始\"  w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                             \n                            </vertical>\n                        </ScrollView>\n                    \n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text text=\"功能说明\" gravity=\"center\" marginTop=\"10\" textColor=\"black\" textSize=\"24\" /> \n                             \n                                <text marginTop=\"10\"  textSize=\"18\"  text=\"〓操作界面\" />\n\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <text textSize=\"16\" >1: 我-关注-进入关注列表</text>\n                                \n                                <text marginTop=\"20\" textSize=\"18\" text=\"〓功能\" />\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <text textSize=\"16\" >1: 取消关注或互关</text>\n                                \n                            </vertical>\n                         \n                        </ScrollView>\n                    </viewpager>\n                \n                </vertical>\n            </drawer>\n        "));
      _0x3e7909.viewpager.setTitles(["基础设置", "功能说明"]);
      _0x3e7909.tabs.setupWithViewPager(_0x3e7909.viewpager);
      _0x3e7909.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x3b6445.selectedTabIndicatorColor);
      _0x3e7909.tabs.selectedTabIndicatorHeight = _0x3b6445.selectedTabIndicatorHeight;
      _0x3e7909.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x3e7909._backButton.click(function () {
        _0x5ce36c.dismiss();
      });
      var _0x1e4496 = function () {
        var _0x772396 = _0x3bd939.getBaseInfo();
        _0x3e7909.count.setText(_0x772396.count + "");
        _0x3e7909.guanzhu.checked = _0x772396.guanzhu;
        _0x3e7909.huguan.checked = _0x772396.huguan;
      }();
      _0x3e7909.start.click(function () {
        var _0x3feb40 = {
          count: _0x3e7909.count.text(),
          guanzhu: _0x3e7909.guanzhu.checked,
          huguan: _0x3e7909.huguan.checked
        };
        if (_0x3feb40.guanzhu == false && _0x3feb40.huguan == false) {
          alert("请开启其中一个");
          return false;
        }
        _0x3bd939.saveBaseInfo(_0x3feb40);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x3bd939.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x5ce36c.setContentView(_0x3e7909);
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x38c1e5 = new (_0x3628cf(3))();
    var _0x29efc8 = _0x3628cf(0);
    var _0x284990 = new (_0x3628cf(2))();
    this.start = function () {
      if (!_0x29efc8.checkServer() || !_0x38c1e5.launchApp()) {
        return false;
      }
      _0x29efc8.showConsole("一键取关");
      log("特别注意: 下列界面运行");
      log("我-关注-进入关注列表");
      _0x284990.index();
      _0x284990.ClickListener({
        clickStart: function _0x23bd27() {
          _0x3bd939.action();
        },
        clickStop: function _0x2bcf49() {
          _0x3bd939.end();
        },
        clickExit: function _0x4bba8c() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x3bd939.end();
            _0x284990.close();
            _0x29efc8.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x38c1e5.closeTip();
      var _0x177788 = _0x3bd939.getBaseInfo();
      var _0x3bce7f = _0x177788.count;
      log("执行个数:" + _0x177788.count);
      threads.start(function () {
        _0x38c1e5.watchStart("主任务开始", 3);
        while (_0x3bce7f > 0) {
          while (_0x3bce7f > 0) {
            log(_0x3bce7f);
            var _0x2ee6f2 = _0x3bd939.getNewUser(_0x177788.guanzhu, _0x177788.huguan);
            if (_0x2ee6f2 == null) {
              break;
            }
            var _0x16d700 = _0x2ee6f2.findOne(className("android.widget.TextView"));
            if (_0x16d700 != null && (_0x16d700.text() == "朋友推荐" || _0x16d700.text() == "暂时没有更多了")) {
              break;
            }
            _0x3bd939.cancel_guanzhu(_0x2ee6f2);
            var _0x638303 = _0x2ee6f2.findOne(text("互相关注"));
            if (_0x638303 != null) {
              _0x638303.parent().click();
              if (text("取消关注").findOne(2000)) {
                var _0x3284e2 = click("取消关注");
                log("取消关注:", "互相关注");
                !_0x3284e2 && back();
              }
              log("取消关注:", "互相关注");
            }
            _0x3bce7f--;
            if (_0x3bce7f <= 0) {
              break;
            }
            sleep(1000);
          }
          if (_0x3bce7f <= 0) {
            log("数量小于0");
            break;
          }
          if (text("发现更多你可能认识的人").findOne(1000) || text("暂时没有更多了").findOne(1000)) {
            log("发现更多你可能认识的人,暂时没有更多了");
            break;
          } else {
            _0x3bd939.swipeDown();
          }
        }
        _0x3bd939.end();
      });
    };
    _0x3bd939.cancel_guanzhu = function (_0xa7dda8) {
      if (_0xa7dda8 == null) {
        return;
      }
      var _0x57bea5 = _0xa7dda8.findOne(text("已关注"));
      if (_0x57bea5 != null) {
        _0x57bea5.parent().click();
      } else {
        var _0x290214 = _0xa7dda8.findOne(desc("更多"));
        if (_0x290214 != null) {
          _0x290214.click();
          if (text("取消关注").findOne(2000)) {
            var _0x279c66 = click("取消关注");
            log("取消关注:", "取消关注");
            !_0x279c66 && back();
          }
        }
      }
    };
    var _0x580b5e = [];
    _0x3bd939.getNewUser = function (_0x592193, _0xd560c9) {
      try {
        _0x580b5e.length > 100 && _0x580b5e.shift();
        var _0x162264 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x4d5c62) {
          if (_0x4d5c62.bounds().width() > 0 && _0x4d5c62.bounds().height() > 0 && _0x4d5c62.childCount() > 3) {
            return true;
          }
          return false;
        });
        var _0x1eb817 = _0x162264.findOne(2000);
        if (_0x1eb817 == null) {
          return null;
        }
        for (var _0x4b8347 = 0; _0x4b8347 < _0x1eb817.childCount(); _0x4b8347++) {
          var _0x4bf463 = _0x1eb817.child(_0x4b8347);
          if (_0x4bf463.findOne(text("回关"))) {
            continue;
          }
          if (_0x4bf463.findOne(text("关注"))) {
            continue;
          }
          var _0x36bc98 = _0x4bf463.findOne(className("android.widget.TextView"));
          if (_0x592193 && !_0xd560c9) {
            if (_0x4bf463.findOne(text("互相关注"))) {
              continue;
            }
          } else {
            if (!_0x592193 && _0xd560c9) {
              if (!_0x4bf463.findOne(text("互相关注"))) {
                continue;
              }
            }
          }
          var _0x4c620e = _0x36bc98.text();
          if (_0x580b5e.indexOf(_0x4c620e) == -1) {
            _0x580b5e.push(_0x4c620e);
            log(_0x4c620e);
            return _0x4bf463;
          }
        }
        return null;
      } catch (_0x357bc6) {
        log("getNewUser", _0x357bc6);
        return false;
      }
    };
    this.clickQuguan = function () {
      toastLog("开始取消关注");
      sleep(1000);
      var _0x5023a2 = text("已关注").findOne(1000);
      if (_0x5023a2 != null) {
        _0x5023a2.parent().click();
        return true;
      }
      return false;
    };
    this.clickQuhuguan = function () {
      toastLog("互相关注");
      sleep(1000);
      var _0x43489b = text("互相关注").findOne(1000);
      if (_0x43489b != null) {
        _0x43489b.parent().click();
        sleep(1000);
        var _0x45f977 = text("取消关注").findOne(1000);
        if (_0x45f977 != null) {
          _0x45f977.click();
          return true;
        }
      }
      return false;
    };
    this.clickQuguanAndQuhuguan = function () {
      toastLog("互相关注/互关");
      sleep(1000);
      var _0x495077 = text("已关注").findOne(1000);
      var _0x54cc16 = text("互相关注").findOne(1000);
      if (_0x495077 != null && _0x54cc16 != null) {
        if (_0x495077.bounds().top < _0x54cc16.bounds().top) {
          _0x495077.parent().click();
          return true;
        } else {
          _0x54cc16.parent().click();
          sleep(1000);
          var _0x1c222a = text("取消关注").findOne(3000);
          if (_0x1c222a != null) {
            _0x1c222a.click();
            return true;
          }
        }
      } else {
        if (_0x495077 != null && _0x54cc16 == null) {
          _0x495077.parent().click();
          return true;
        } else {
          if (_0x495077 == null && _0x54cc16 != null) {
            _0x54cc16.parent().click();
            sleep(1000);
            var _0x1c222a = text("取消关注").findOne(3000);
            if (_0x1c222a != null) {
              _0x1c222a.click();
              return true;
            }
          }
        }
      }
      return false;
    };
    this.swipeDown = function () {
      var _0x13ae01 = device.width * 0.5;
      var _0x2190a8 = device.height * 0.8;
      var _0x13c9e5 = device.width * 0.5;
      var _0x257c0f = device.height * 0.5;
      var _0x4bda97 = text("我的关注").findOnce();
      _0x4bda97 != null && (_0x257c0f = _0x4bda97.bounds().top - 100);
      swipe(_0x13ae01, _0x2190a8, _0x13c9e5, _0x257c0f, 2000);
      sleep(2000);
    };
    var _0x4dd146 = storages.create("wzke:T1");
    this.getBaseInfo = function () {
      var _0x166796 = _0x4dd146.get("baseinfo");
      _0x166796 == undefined && (_0x166796 = {}, _0x166796.count = 10, _0x166796.guanzhu = true, _0x166796.huguan = false, _0x4dd146.put("baseinfo", _0x166796));
      return _0x4dd146.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x395eb2) {
      _0x4dd146.put("baseinfo", _0x395eb2);
    };
  }
  _0x564bd0.exports = _0x39efed;
}, function (_0x250f5d, _0x51e2c3, _0x5c9665) {
  function _0x30f647(_0x110691) {
    var _0xf8bf84 = this;
    var _0x37dc4a = _0x5c9665(1);
    var _0x24e4db = _0x37dc4a.bgColor;
    var _0x37c3b8 = null;
    this.index = function () {
      _0x37c3b8 == null && (_0xf8bf84.initPopWin(), _0xf8bf84.initContent());
      _0xf8bf84.show();
    };
    _0xf8bf84.show = function () {
      _0x37c3b8.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0xf8bf84.close = function () {
      _0x37c3b8.dismiss();
    };
    _0xf8bf84.initPopWin = function () {
      _0x37c3b8 = new android.widget.PopupWindow();
      var _0x148b88 = new android.transition.Fade();
      _0x148b88.setDuration(200);
      _0x37c3b8.setEnterTransition(_0x148b88);
      var _0x11b966 = new android.transition.Fade();
      _0x11b966.setDuration(200);
      _0x11b966.setMode(android.transition.Visibility.MODE_OUT);
      _0x37c3b8.setExitTransition(_0x11b966);
      _0x37c3b8.setWidth(device.width);
      _0x37c3b8.setHeight(device.height);
      _0x37c3b8.setClippingEnabled(false);
      _0x37c3b8.setFocusable(true);
      _0x37c3b8.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x37c3b8.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    };
    this.initContent = function () {
      var _0x4f7084 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x115f79 = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"取消喜欢\"  bg=\"".concat(_0x24e4db, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" >\n       \n                         \n                       \n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n                                <text text=\"取消喜欢\" gravity=\"center\" margin=\"10\" textColor=\"black\" textSize=\"20\" />\n        \n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <horizontal weightSum=\"10\"   padding=\"10 0 0 0\" >\n                                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"取消个数\" />\n                                    <input  paddingRight=\"30\" layout_weight=\"7\"  gravity=\"right\" id=\"count\"  inputType=\"number\"  bg=\"#ffffff\" />               \n                           \n                                </horizontal>\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n    \n                               \n\n                                <button id=\"start\" bg=\"").concat(_0x24e4db, "\" layout_margin='30'  textSize=\"20\" layout_gravity=\"center\" text=\"开始\"  w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                    \n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text text=\"功能说明\" gravity=\"center\" marginTop=\"10\" textColor=\"black\" textSize=\"24\" /> \n                             \n                                <text marginTop=\"10\"  textSize=\"18\"  text=\"〓操作界面\" />\n\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <text textSize=\"16\" >1: 我-喜欢-点击进入第一个视频</text>\n                                \n                                <text marginTop=\"20\" textSize=\"18\" text=\"〓功能\" />\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <text textSize=\"16\" >1: 取消喜欢</text>\n                                \n                            </vertical>\n                          \n                        </ScrollView>\n                    </viewpager>\n                \n                </vertical>\n            </drawer>\n        "));
      _0x115f79.viewpager.setTitles(["基础设置", "功能说明"]);
      _0x115f79.tabs.setupWithViewPager(_0x115f79.viewpager);
      _0x115f79.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x37dc4a.selectedTabIndicatorColor);
      _0x115f79.tabs.selectedTabIndicatorHeight = _0x37dc4a.selectedTabIndicatorHeight;
      _0x115f79.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x115f79._backButton.click(function () {
        _0xf8bf84.close();
      });
      var _0x192978 = _0xf8bf84.getBaseInfo();
      _0x115f79.count.setText(_0x192978.count + "");
      _0x115f79.start.click(function () {
        var _0x5a27ca = {
          count: _0x115f79.count.text()
        };
        _0xf8bf84.saveBaseInfo(_0x5a27ca);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0xf8bf84.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      _0x37c3b8.setContentView(_0x115f79);
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x54cb77 = new (_0x5c9665(3))();
    var _0x61eabf = _0x5c9665(0);
    var _0x1d173c = new (_0x5c9665(2))();
    this.start = function () {
      if (!_0x61eabf.checkServer() || !_0x54cb77.launchApp()) {
        return false;
      }
      _0x61eabf.showConsole("一键取赞");
      log("特别注意: 下列界面运行");
      log("我-喜欢-进入其中一个视频");
      _0x1d173c.index();
      _0x1d173c.ClickListener({
        clickStart: function _0x26434e() {
          _0xf8bf84.action();
        },
        clickStop: function _0x42e2ba() {
          _0xf8bf84.end();
        },
        clickExit: function _0x5c3130() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0xf8bf84.end();
            _0x1d173c.close();
            _0x61eabf.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      _0x54cb77.closeTip();
      _0x61eabf.chenckMonitorEnd(function () {
        _0xf8bf84.end();
      });
      var _0x443455 = _0xf8bf84.getBaseInfo();
      var _0x5c612d = _0x443455.count;
      log("执行个数:" + _0x5c612d);
      threads.start(function () {
        while (_0x5c612d > 0) {
          var _0x2d5e35 = _0x54cb77.clickDianzan();
          if (_0x2d5e35) {
            _0x5c612d--;
          }
          log(_0x5c612d);
          if (_0x5c612d == 0) {
            break;
          }
          _0x61eabf.actionSwipUp();
          sleep(500);
        }
        _0xf8bf84.end();
      });
    };
    var _0x359ae4 = storages.create("wzke:T2");
    this.getBaseInfo = function () {
      var _0x349dc6 = _0x359ae4.get("baseinfo");
      _0x349dc6 == undefined && (_0x349dc6 = {}, _0x349dc6.count = 3, _0x359ae4.put("baseinfo", _0x349dc6));
      return _0x359ae4.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x32e80d) {
      _0x359ae4.put("baseinfo", _0x32e80d);
    };
  }
  _0x250f5d.exports = _0x30f647;
}, function (_0x439194, _0x1dd9b9, _0x41297e) {
  function _0x440e21(_0x48a8da) {
    var _0x5a9f07 = this;
    var _0xb68d72 = _0x41297e(1);
    var _0x41a574 = _0xb68d72.bgColor;
    var _0x53f96a = null;
    this.index = function () {
      _0x53f96a == null && (_0x5a9f07.initPopWin(), _0x5a9f07.initContent());
      _0x5a9f07.show();
    };
    _0x5a9f07.show = function () {
      _0x53f96a.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x5a9f07.close = function () {
      _0x53f96a.dismiss();
    };
    _0x5a9f07.initPopWin = function () {
      _0x53f96a = new android.widget.PopupWindow();
      var _0x2d2f9f = new android.transition.Fade();
      _0x2d2f9f.setDuration(200);
      _0x53f96a.setEnterTransition(_0x2d2f9f);
      var _0x5a4764 = new android.transition.Fade();
      _0x5a4764.setDuration(200);
      _0x5a4764.setMode(android.transition.Visibility.MODE_OUT);
      _0x53f96a.setExitTransition(_0x5a4764);
      _0x53f96a.setWidth(device.width);
      _0x53f96a.setHeight(device.height);
      _0x53f96a.setClippingEnabled(false);
      _0x53f96a.setFocusable(true);
      _0x53f96a.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x53f96a.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    };
    this.initContent = function () {
      var _0x9542ca = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x36bda6 = ui.inflate("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"用户回关\"  bg=\"".concat(_0x41a574, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在粉丝界面启动，对关注自己粉丝取关\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\" >\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"执行个数：（个）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"count\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"间隔：（秒）\" />\n                                            <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"countTime\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <SwitchWidget-Se7en id=\"lanVSwitch\" marginTop=\"5\" padding='8 8' checked='true' text='开启蓝V' trackColor='#003366' background='#ffffff' />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <SwitchWidget-Se7en id=\"huiguanSwitch\" marginTop=\"5\" padding='8 8' checked='true' text='开启回关' trackColor='#003366' background='#ffffff' />\n                                    </vertical>\n                                </card>\n\n                                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"20\" cardBackgroundColor=\"").concat(_0x41a574, "\" cardUseCompatPadding=\"true\" >\n                                    <button id=\"start\" bg=\"").concat(_0x41a574, "\" margin=\"5\" textSize=\"22\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\" text=\"开 始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                                </card>\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <vertical >\n                                    <SwitchWidget-Se7en id=\"sixinSwitch\" marginTop=\"20\" padding='8 8' checked='true' text='开启私信' trackColor='#003366' background='#ffffff' />\n                                    <text marginTop=\"15\" textSize=\"16\" text=\"私信内容 : 换行隔开 多条随机 \" />\n                                    <input gravity=\"top\" minHeight=\"40\" id=\"sixinWords\" textSize=\"15\" lines=\"3\" hint=\"请输入\" />\n                                </vertical>\n\n                                <button marginBottom=\"200\" bg=\"").concat(_0x41a574, "\" id=\"save3\" layout_marginTop='10' layout_gravity=\"center\" text=\"保存\" w=\"auto\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView>\n\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      _0x36bda6.viewpager.setTitles(["用户回关", "基础设置", "私信"]);
      _0x36bda6.tabs.setupWithViewPager(_0x36bda6.viewpager);
      _0x36bda6.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0xb68d72.selectedTabIndicatorColor);
      _0x36bda6.tabs.selectedTabIndicatorHeight = _0xb68d72.selectedTabIndicatorHeight;
      _0x36bda6.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x36bda6._backButton.click(function () {
        _0x5a9f07.close();
      });
      _0x36bda6.start.click(function () {
        _0x39181f.put("count", parseInt(_0x36bda6.count.text()));
        _0x39181f.put("countTime", parseInt(_0x36bda6.countTime.text()));
        _0x39181f.put("huiguanSwitch", _0x36bda6.huiguanSwitch.checked);
        _0x39181f.put("lanVSwitch", _0x36bda6.lanVSwitch.checked);
        dialogs.build({
          title: "开始任务",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          _0x5a9f07.start();
        }).on("negative", function () {}).show();
      });
      var _0x4a81dc = _0x5a9f07.getBaseInfo();
      _0x36bda6.count.setText(_0x4a81dc.count + "");
      _0x36bda6.countTime.setText(_0x4a81dc.countTime + "");
      _0x36bda6.huiguanSwitch.checked = _0x4a81dc.huiguanSwitch;
      _0x36bda6.lanVSwitch.checked = _0x4a81dc.lanVSwitch;
      try {
        var _0x1b4e33 = _0x5a9f07.getInfo3();
        _0x36bda6.sixinSwitch.checked = _0x1b4e33.sixinSwitch;
        _0x36bda6.sixinWords.setText(_0x1b4e33.sixinWords);
      } catch (_0x4dba75) {
        log("info3Init", _0x4dba75);
      }
      _0x36bda6.save3.on("click", function () {
        var _0x586d6a = {
          sixinSwitch: _0x36bda6.sixinSwitch.checked,
          sixinWords: _0x36bda6.sixinWords.text()
        };
        var _0x523e42 = "";
        _0x523e42 += "话术:[" + _0x586d6a.sixinWords + "]\n";
        _0x5a9f07.saveInfo3(_0x586d6a);
        alert("保存成功", _0x523e42);
      });
      _0x53f96a.setContentView(_0x36bda6);
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x5b207c = new (_0x41297e(3))();
    var _0x304745 = _0x41297e(0);
    var _0x58254d = new (_0x41297e(2))();
    this.start = function () {
      if (!_0x304745.checkServer() || !_0x5b207c.launchApp()) {
        return false;
      }
      _0x304745.showConsole("粉丝转化", device.width * 0.5, device.height * 0.15);
      log("特别注意: 下列界面运行");
      log("我-粉丝-进入粉丝列表");
      _0x58254d.index();
      _0x58254d.ClickListener({
        clickStart: function _0x1c8136() {
          threads.start(function () {
            _0x5a9f07.action();
          });
        },
        clickStop: function _0x2cd08c() {
          _0x5a9f07.end();
        },
        clickExit: function _0x329a36() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x5a9f07.end();
            _0x58254d.close();
            _0x304745.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x594caa = [];
      _0x5b207c.closeTip();
      var _0x19fe50 = _0x5a9f07.getBaseInfo();
      var _0x5254c9 = _0x5a9f07.getInfo3();
      var _0x258dbf = _0x19fe50.count;
      var _0x12df17 = parseInt(_0x19fe50.countTime);
      _0x5b207c.watchSleep("主任务开始", 3);
      while (1) {
        while (_0x258dbf > 0) {
          var _0x35998f = _0x5a9f07.getNewObj();
          if (_0x35998f == null) {
            break;
          }
          if (_0x19fe50.huiguanSwitch) {
            var _0x7863bc = _0x35998f.findOne(text("回关"));
            if (_0x7863bc != null) {
              var _0x466250 = _0x7863bc.parent().click();
              !_0x466250 && _0x7863bc.click();
              sleep(1000);
            }
          }
          _0x5254c9.sixinSwitch && (_0x35998f.click(), sleep(3000), this.usercenterAction(), sleep(2000), back());
          _0x258dbf--;
          log("当前任务剩余数:", _0x258dbf);
          log("等待", _0x12df17, "s");
          sleep(1000 * _0x12df17);
        }
        if (_0x258dbf <= 0) {
          break;
        }
        if (text("暂时没有更多了").findOne(500) || text("发现更多你可能认识的人").findOne(500)) {
          break;
        }
        swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
        sleep(1000);
      }
      _0x5a9f07.end();
    };
    this.usercenterAction = function () {
      var _0x473574 = _0x5a9f07.getBaseInfo();
      var _0x4e1e7d = _0x5a9f07.getInfo3();
      var _0x146cd8 = _0x4e1e7d.sixinWords;
      var _0x59e0b8 = _0x146cd8.split("\n");
      if (_0x473574.lanVSwitch) {
        if (!_0x5b207c.isUserCenterLanV()) {
          return false;
        }
      }
      if (_0x4e1e7d.sixinSwitch) {
        if (_0x5b207c.JumpUsercenterToMore() && _0x5b207c.JumpMoreToFasixin()) {
          var _0x584fc7 = _0x59e0b8[random(0, _0x59e0b8.length - 1)];
          _0x584fc7 != "" && _0x5b207c.textSend(_0x584fc7);
          back();
          sleep(2000);
        }
      }
    };
    var _0x594caa = [];
    this.getNewObj = function () {
      var _0x83e1b8 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x36a8c0) {
        var _0x36c844 = _0x304745.getPercent(_0x36a8c0);
        return _0x36c844.w > 0 && _0x36c844.h > 0;
      });
      var _0x361f6a = _0x83e1b8.findOnce();
      if (_0x361f6a == null) {
        return null;
      }
      for (var _0x1a7f52 = 0; _0x1a7f52 < _0x361f6a.childCount(); _0x1a7f52++) {
        var _0xe6556c = _0x361f6a.child(_0x1a7f52);
        if (_0xe6556c.childCount() <= 2) {
          continue;
        }
        var _0x4e22d6 = _0xe6556c.findOne(className("android.widget.TextView"));
        var _0x3ecc2b = _0x4e22d6.text();
        if (_0xe6556c.bounds().centerY() > device.height) {
          break;
        }
        if (_0x594caa.indexOf(_0x3ecc2b) == -1 && _0xe6556c.text() != "发现好友" && _0xe6556c.text() != "暂时没有更多了") {
          _0x594caa.push(_0x3ecc2b);
          log(_0x3ecc2b);
          return _0xe6556c;
        }
      }
      return null;
    };
    var _0x39181f = storages.create("wzke:T3");
    this.getBaseInfo = function () {
      var _0x5ad9ba = {
        count: _0x39181f.get("count") != undefined ? _0x39181f.get("count") : 99,
        countTime: _0x39181f.get("countTime") != undefined ? _0x39181f.get("countTime") : 10,
        huiguanSwitch: _0x39181f.get("huiguanSwitch") != undefined ? _0x39181f.get("huiguanSwitch") : true,
        lanVSwitch: _0x39181f.get("lanVSwitch") != undefined ? _0x39181f.get("lanVSwitch") : false
      };
      return _0x5ad9ba;
    };
    this.getInfo3 = function () {
      if (_0x39181f.get("info3") == undefined) {
        var _0x1881ce = {
          sixinSwitch: false,
          sixinWords: "作品很不错,需要推广吗?\n你好推广更多流量\n互关"
        };
        _0x39181f.put("info3", _0x1881ce);
      }
      return _0x39181f.get("info3");
    };
    this.saveInfo3 = function (_0x5db3f8) {
      _0x39181f.put("info3", _0x5db3f8);
    };
  }
  _0x439194.exports = _0x440e21;
}, function (_0x40ca56, _0x3e6bac, _0x5332ad) {
  function _0x36b17c(_0x32a084) {
    var _0x31a8ab = this;
    var _0x293fe0 = _0x5332ad(1);
    var _0x14dbe5 = _0x293fe0.bgColor;
    this.index = function () {
      _0x31a8ab.view();
    };
    this.view = function () {
      var _0x5f540c = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"用户回访\"  bg=\"".concat(_0x14dbe5, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" >\n       \n                         \n                       \n                        <ScrollView>\n                            <vertical padding=\"16\" bg=\"#ffffff\">\n                                <text text=\"粉丝回访\" gravity=\"center\"  textColor=\"black\" textSize=\"20\" />                        \n                                \n                         \n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"用户数量（个）\" />\n                                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"count\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />                    \n                                </horizontal>   \n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"作品数量（个）\" />\n                                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"shipinCount\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />                    \n                                </horizontal> \n\n\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <horizontal weightSum=\"10\"   padding=\"10 0 0 0\" >\n                                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"喜欢概率：（%）\" />\n                                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"dianzanRate\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />               \n                                </horizontal>\n\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <horizontal weightSum=\"10\"   padding=\"10 0 0 0\" >\n                                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"评论概率：（%）\" />\n                                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"pinglunRate\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />               \n                                </horizontal>\n\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />                   \n                                <vertical  padding=\"15 10\" >\n                                    <horizontal h=\"25\"  gravity=\"left|center\" >\n                                        <text  textColor=\"black\" text=\"评论内容 换行隔开 多条随机 \" />\n                                        <button w=\"40\" id=\"sixinWordsCopy\" margin=\"5 2\"  bg=\"#ff9800\" text=\"复制\" gravity=\"center\"  padding=\"0\"   style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\"  />\n                                        <button w=\"40\" id=\"sixinWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" gravity=\"center\"  padding=\"0\"   style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\"  />\n                                    </horizontal>\n                                    \n                                    <input hint=\"请输入内容\" h=\"auto\"  minLines=\"3\" id=\"Words1\"   bg=\"#ffffff\" /> \n                                </vertical>\n                                    \n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                \n\n                                <button id=\"start\" layout_marginTop='10' layout_gravity=\"center\" text=\"提交\" w=\"auto\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n                      \n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text text=\"功能说明\" gravity=\"center\" marginTop=\"10\" textColor=\"black\" textSize=\"24\" /> \n                                <text marginTop=\"20\"  textSize=\"20\" textColor=\"#ff0000\" text=\"*操作界面 :\" />\n                                <text textSize=\"16\" >1: 我-粉丝-点击进入粉丝列表</text>\n\n                                <text marginTop=\"20\" textSize=\"20\" textColor=\"#ff0000\" text=\"*功能 :\" />\n                                <text textSize=\"16\" >1: 条件筛选</text>\n                                <text textSize=\"16\" >2: 浏览作品 - 喜欢 - 评论 </text>\n\n                               \n                                \n                            </vertical>\n                        </ScrollView>\n                    </viewpager>\n                \n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x293fe0.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x293fe0.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui._backButton.click(function () {
        _0x32a084.view(1);
      });
      ui.sixinWordsCopy.click(function () {
        setClip(view.sixinWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: view.sixinWords.text(),
          positive: "好的"
        }).show();
      });
      ui.sixinWordsPaste.click(function () {
        var _0x23fcc4 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x23fcc4,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          view.sixinWords.setText(_0x23fcc4);
          alert("粘贴成功");
        }).show();
      });
      var _0x27e971 = _0x31a8ab.getBaseInfo();
      ui.count.setText(_0x27e971.count + "");
      ui.shipinCount.setText(_0x27e971.shipinCount + "");
      ui.dianzanRate.setText(_0x27e971.dianzanRate + "");
      ui.pinglunRate.setText(_0x27e971.pinglunRate + "");
      ui.Words1.setText(_0x27e971.Words1);
      ui.start.click(function () {
        var _0x45b058 = {
          count: ui.count.text(),
          shipinCount: ui.shipinCount.text(),
          dianzanRate: ui.dianzanRate.text(),
          pinglunRate: ui.pinglunRate.text(),
          Words1: ui.Words1.text()
        };
        _0x31a8ab.saveBaseInfo(_0x45b058);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x31a8ab.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x5ab702 = new (_0x5332ad(3))();
    var _0x2fbad6 = _0x5332ad(0);
    var _0xa76683 = new (_0x5332ad(2))();
    this.start = function () {
      if (!_0x2fbad6.checkServer() || !_0x5ab702.launchApp()) {
        return false;
      }
      _0x2fbad6.showConsole("粉丝回访", device.width * 0.5, device.height * 0.15);
      log("特别注意: 下列界面运行");
      log("我-粉丝-进入粉丝列表");
      _0xa76683.index();
      _0xa76683.ClickListener({
        clickStart: function _0x50f2a4() {
          _0x31a8ab.action();
        },
        clickStop: function _0xd1fb1e() {
          _0x31a8ab.end();
        },
        clickExit: function _0x403049() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x31a8ab.end();
            _0xa76683.close();
            _0x2fbad6.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x62d59b = [];
      _0x5ab702.closeTip();
      _0x2fbad6.chenckMonitorEnd(function () {
        _0x31a8ab.end();
      });
      var _0x444444 = _0x31a8ab.getBaseInfo();
      var _0x5cbca9 = _0x444444.count;
      threads.start(function () {
        while (1) {
          while (_0x5cbca9 > 0) {
            var _0x27da28 = _0x31a8ab.getNewObj();
            if (_0x27da28 == null) {
              break;
            }
            _0x27da28.parent().parent().parent().click();
            sleep(1000);
            _0x31a8ab.action2();
            back();
            sleep(1000);
            _0x5cbca9--;
          }
          if (_0x5cbca9 <= 0) {
            break;
          }
          if (text("暂时没有更多了").findOne(500) || text("发现更多你可能认识的人").findOne(500)) {
            break;
          }
          swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
          sleep(1000);
        }
        _0x31a8ab.end();
      });
    };
    this.action2 = function () {
      var _0x54c8d7 = _0x31a8ab.getBaseInfo();
      var _0x4165ba = _0x54c8d7.Words1;
      var _0x102938 = _0x4165ba.split("\n");
      var _0x5bbcb5 = _0x5ab702.watchUercenterInfo(false);
      var _0x5bc268 = _0x54c8d7.shipinCount;
      _0x5bc268 >= _0x5bbcb5.zuopin && (_0x5bc268 = _0x5bbcb5.zuopin);
      if (_0x5bc268 == 0) {
        return false;
      }
      if (_0x5ab702.JumpUsercenterToFirstzuopin() == false) {
        return;
      }
      _0x5ab702.watchSleep("主任务开始", 3);
      while (_0x5bc268 > 0) {
        _0x5ab702.watchSleep("观看", 1);
        random(1, 100) < _0x54c8d7.dianzanRate && _0x5ab702.clickDianzan();
        if (random(1, 100) < _0x54c8d7.pinglunRate && _0x5ab702.clickPinlunqu()) {
          var _0x19d83f = _0x102938[random(0, _0x102938.length - 1)];
          _0x19d83f != "" && _0x5ab702.pinglun(_0x19d83f);
          back();
        }
        _0x5ab702.watchSleep("观看", random(3, 8));
        if (--_0x5bc268 <= 0 || --_0x54c8d7.count <= 0) {
          break;
        }
        _0x2fbad6.actionSwipUp();
      }
      back();
      sleep(1000);
    };
    var _0x62d59b = [];
    this.getNewObj = function () {
      var _0x3eef58 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x3be46f) {
        return _0x3be46f.bounds().width() > 0 && _0x3be46f.bounds().height() > 0;
      });
      var _0x2a147d = _0x3eef58.findOne(3000);
      if (_0x2a147d == null) {
        return null;
      }
      for (var _0x29523c = 0; _0x29523c < _0x2a147d.childCount(); _0x29523c++) {
        if (_0x2a147d.child(_0x29523c).childCount() <= 2) {
          continue;
        }
        var _0x17d894 = _0x2a147d.child(_0x29523c).findOne(className("android.widget.TextView"));
        var _0x8dac98 = _0x17d894.text();
        if (_0x62d59b.indexOf(_0x8dac98) == -1 && _0x17d894.text() != "发现好友" && _0x17d894.text() != "暂时没有更多了") {
          _0x62d59b.push(_0x8dac98);
          return _0x17d894;
        }
      }
      return null;
    };
    var _0x1ebd56 = storages.create("wzke:T4");
    this.getBaseInfo = function () {
      var _0x170045 = _0x1ebd56.get("baseinfo");
      if (_0x170045 == undefined) {
        _0x170045 = {};
        _0x170045.count = 3;
        _0x170045.shipinCount = 3;
        _0x170045.dianzanRate = 100;
        _0x170045.pinglunRate = 100;
        _0x170045.Words1 = "很好看\n期待更新";
        _0x1ebd56.put("baseinfo", _0x170045);
      }
      return _0x1ebd56.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x2ae437) {
      _0x1ebd56.put("baseinfo", _0x2ae437);
    };
  }
  _0x40ca56.exports = _0x36b17c;
}, function (_0x3e1695, _0x2c3963, _0x530445) {
  function _0x43d0c9(_0x1ffcc5) {
    var _0x29ee90 = this;
    var _0x205b1b = _0x530445(1);
    var _0x5b085e = new (_0x530445(6))();
    var _0x5dd2aa = _0x205b1b.bgColor;
    this.index = function () {
      _0x29ee90.view();
    };
    var _0x4c0fe7 = null;
    this.view = function () {
      var _0x29887d = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x4eb738 = _0x1ab6c5.getVersionName("com.ss.android.ugc.aweme");
      _0x4c0fe7 = ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                <MyAppBar title=\"点赞浏览\"  bg=\"".concat(_0x5dd2aa, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n\n                            <vertical padding=\"16\" >\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在喜欢作品观看页启动，自动观看视频，概率互动，提升账号活跃度\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0x4eb738, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\" >\n\n\n                                        <horizontal weightSum=\"10\" >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"访问人数\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"userCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"看作品数\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"shipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"关注概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"guanzhuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"喜欢概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"dianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"评论概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"30\" gravity=\"right\" id=\"pinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical padding=\"20 10 0 0\" >\n                                            <text textColor=\"black\" text=\"评论内容（换行隔开,多条随机）\" />\n                                            <input hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"pinglunWords\" bg=\"#ffffff\" />\n                                        </vertical>\n                                    </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x5dd2aa, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical bg=\"#ffffff\">\n                                <text text=\"私信\" margin=\"10\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <SwitchWidget-Se7en id=\"userSixinSwitch\" text=\"私信开关\" margin=\"20 10\" trackColor='").concat(_0x5dd2aa, "' textColor=\"black\" checked=\"\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <vertical padding=\"20 0 20 0\" >\n                                    <text textColor=\"black\" text=\"私信内容 （换行隔开,多条随机）\" />\n                                    <input hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"sixinWords\" bg=\"#ffffff\" />\n                                </vertical>\n\n\n\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n\n                                <button id=\"saveSixin\" bg=\"").concat(_0x5dd2aa, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text text=\"功能说明\" gravity=\"center\" textColor=\"black\" textSize=\"24\" />\n\n                                <text marginTop=\"10\" textSize=\"18\" text=\"〓操作界面\" />\n                                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text >1: 我-作品-视频-评论区-赞列表</text>\n                                <text >2: 朋友-动态-视频-评论区-赞列表</text>\n                                <text >3: 其他用户中心-作品-视频-评论区-赞列表</text>\n\n                            </vertical>\n\n                        </ScrollView>\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "私信设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x205b1b.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x205b1b.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x1ffcc5.view(1);
      });
      _0x29ee90.initStart(ui);
      _0x29ee90.initShipinView(ui);
      ui.start.click(function () {
        _0x29ee90.saveShipinClick(ui);
        _0x29ee90.startClick(ui);
      });
      _0x29ee90.initSixinView(ui);
      ui.saveSixin.click(function () {
        _0x29ee90.saveSixinClick(ui);
      });
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x19cc3d = new (_0x530445(3))();
    var _0x1ab6c5 = _0x530445(0);
    var _0xce0909 = new (_0x530445(2))();
    this.start = function () {
      if (!_0x1ab6c5.checkServer() || !_0x19cc3d.launchApp()) {
        return false;
      }
      _0x1ab6c5.showConsole("喜欢观看");
      log("运行页面: 评论区-喜欢页面");
      _0xce0909.index();
      _0xce0909.ClickListener({
        clickStart: function _0xc07722() {
          _0x29ee90.action();
        },
        clickStop: function _0x23a7d2() {
          _0x29ee90.end();
        },
        clickExit: function _0x593f2d() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x29ee90.end();
            _0xce0909.close();
            _0x1ab6c5.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x5565c1 = _0x29ee90.getStartData();
      var _0x4c32cb = 0;
      _0x19cc3d.closeTip();
      threads.start(function () {
        _0x19cc3d.watchSleep("开始任务: ", 1);
        var _0x1b78fb = [];
        while (1) {
          while (_0x4c32cb < _0x5565c1.userCount) {
            sleep(1000);
            var _0x4d7b56 = _0x29ee90.getUser(_0x1b78fb, _0x4c32cb);
            if (_0x4d7b56 == null) {
              break;
            }
            _0x4c32cb++;
            log("跳转页面: ", "进入用户中心");
            sleep(1000);
            _0x4d7b56.click();
            sleep(3000);
            _0x29ee90.usercenterAction();
            log("跳转页面: ", "返回喜欢列表");
            sleep(1000);
            back();
            sleep(3000);
          }
          if (_0x4c32cb >= _0x5565c1.userCount) {
            break;
          }
          var _0xa0119a = text("为尊重作者及喜欢者设置\n部分喜欢暂不支持查看").findOnce();
          var _0x3da072 = text("暂时没有更多了").findOnce();
          if (_0xa0119a != null || _0x3da072 != null) {
            break;
          }
          var _0x3edb86 = device.width * 0.4 + random(-10, 10);
          var _0x368d44 = device.height * 0.85 + random(-10, 10);
          var _0x51709d = device.width * 0.6 + random(-10, 10);
          var _0x1034c1 = device.height * 0.4 + random(-10, 10);
          _0x1ab6c5.swipeRandom(_0x3edb86, _0x368d44, _0x51709d, _0x1034c1, 2000);
          sleep(2000);
        }
        _0x29ee90.end();
      });
    };
    _0x29ee90.usercenterAction = function () {
      sleep(3000);
      var _0x55d494 = _0x29ee90.getShipinData();
      var _0x44957e = _0x29ee90.getSixinData();
      if (_0x55d494.shipinCount == 0 && _0x44957e.userSixinSwitch == false) {
        return false;
      }
      if (!_0x19cc3d.isPrivateOrBan()) {
        return false;
      }
      sleep(1000);
      if (_0x44957e.userSixinSwitch) {
        _0x19cc3d.actionUesrCenterSixin(_0x44957e.sixinWords);
      }
      var _0x4b7ebe = _0x19cc3d.getUsercenter_zuopin();
      if (_0x4b7ebe > 0 && _0x4b7ebe < _0x55d494.shipinCount) {
        _0x55d494.shipinCount = _0x4b7ebe;
      }
      if (_0x55d494.shipinCount > 0 && _0x19cc3d.JumpUsercenterToFirstzuopin()) {
        for (var _0x1f20ab = 1; _0x1f20ab <= _0x55d494.shipinCount; _0x1f20ab++) {
          _0x19cc3d.watchSleep("视频观看", 3);
          if (random(0, 100) <= _0x55d494.guanzhuRate) {
            _0x19cc3d.clickGuanzhu();
          }
          if (random(0, 100) <= _0x55d494.dianzanRate) {
            _0x19cc3d.clickDianzan();
          }
          random(0, 100) <= _0x55d494.pinglunRate && _0x19cc3d.clickPinlunqu() && (_0x19cc3d.pinglun(_0x55d494.pinglunWords), log("页面跳转: ", "关闭评论区"), back(), sleep(2000));
          _0x19cc3d.closePinlunquOnce();
          if (_0x1f20ab <= _0x55d494.shipinCount) {
            break;
          }
          _0x19cc3d.actioSwiperUp();
        }
        log("页面跳转: ", "返回用户列表");
        back();
        sleep(3000);
      }
    };
    _0x29ee90.getUser = function (_0x2b45b1, _0x574d61) {
      if (_0x2b45b1.length >= 20) {
        _0x2b45b1.shift();
      }
      var _0x1192c6 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x58e923) {
        return _0x58e923.bounds().width() > 0 && _0x58e923.bounds().height() > 0;
      });
      var _0x4ca124 = _0x1192c6.findOne(3000);
      if (_0x4ca124 == null) {
        return false;
      }
      for (var _0x40af9f = 0; _0x40af9f < _0x4ca124.childCount(); _0x40af9f++) {
        var _0x1f72b3 = _0x4ca124.child(_0x40af9f);
        if (_0x1f72b3.childCount() <= 1) {
          return null;
        }
        var _0x1a72fc = _0x1f72b3.findOne(className("TextView"));
        if (_0x1a72fc == null) {
          continue;
        }
        var _0x247b7d = _0x1a72fc.text();
        if (_0x247b7d == "暂时没有更多了") {
          return null;
        }
        if (_0x2b45b1.indexOf(_0x247b7d) == -1) {
          log("当前用户: " + _0x574d61 + " , ", _0x247b7d);
          _0x2b45b1.push(_0x247b7d);
          return _0x1f72b3;
        }
      }
      return null;
    };
    var _0x3d5a95 = storages.create("wzke:J4");
    _0x29ee90.initStart = function (_0x2d5fd8) {
      var _0x5be988 = _0x29ee90.getStartData();
      _0x2d5fd8.userCount.setText(_0x5be988.userCount + "");
    };
    _0x29ee90.getStartData = function () {
      var _0x1808e6 = {
        userCount: _0x3d5a95.get("userCount") != undefined ? _0x3d5a95.get("userCount") : "500"
      };
      return _0x1808e6;
    };
    _0x29ee90.startClick = function (_0x5a352b) {
      var _0xcafba2 = {
        userCount: _0x5a352b.userCount.text()
      };
      var _0x53b030 = "";
      _0x53b030 += "访问人数: " + _0xcafba2.userCount;
      _0x29ee90.saveStartData(_0xcafba2);
      dialogs.build({
        title: "保存成功",
        content: _0x53b030,
        positive: "开始任务",
        negative: "保存"
      }).on("positive", function () {
        _0x29ee90.start();
      }).on("negative", function () {
        toast("保存成功");
      }).show();
    };
    _0x29ee90.saveStartData = function (_0x451e75) {
      _0x3d5a95.put("userCount", _0x451e75.userCount);
    };
    _0x29ee90.initShipinView = function (_0x580d29) {
      try {
        var _0x680f1a = _0x29ee90.getShipinData();
        _0x580d29.shipinCount.setText(_0x680f1a.shipinCount + "");
        _0x580d29.guanzhuRate.setText(_0x680f1a.guanzhuRate + "");
        _0x580d29.dianzanRate.setText(_0x680f1a.dianzanRate + "");
        _0x580d29.pinglunRate.setText(_0x680f1a.pinglunRate + "");
        _0x580d29.pinglunWords.setText(_0x680f1a.pinglunWords + "");
      } catch (_0x278348) {
        log("initShipinView", _0x278348);
      }
    };
    _0x29ee90.getShipinData = function () {
      var _0xb47690 = {
        shipinCount: _0x3d5a95.get("shipinCount") != undefined ? _0x3d5a95.get("shipinCount") : 1,
        guanzhuRate: _0x3d5a95.get("guanzhuRate") != undefined ? _0x3d5a95.get("guanzhuRate") : 5,
        dianzanRate: _0x3d5a95.get("dianzanRate") != undefined ? _0x3d5a95.get("dianzanRate") : 20,
        pinglunRate: _0x3d5a95.get("pinglunRate") != undefined ? _0x3d5a95.get("pinglunRate") : 5,
        pinglunWords: _0x3d5a95.get("pinglunWords") != undefined ? _0x3d5a95.get("pinglunWords") : _0x5b085e.pinglun
      };
      return _0xb47690;
    };
    _0x29ee90.saveShipinClick = function (_0x5f0c2b) {
      var _0x1ff6a5 = {
        shipinCount: _0x5f0c2b.shipinCount.text(),
        guanzhuRate: _0x5f0c2b.guanzhuRate.text(),
        dianzanRate: _0x5f0c2b.dianzanRate.text(),
        pinglunRate: _0x5f0c2b.pinglunRate.text(),
        pinglunWords: _0x5f0c2b.pinglunWords.text()
      };
      var _0x437433 = "";
      _0x437433 += "浏览个数: " + _0x1ff6a5.shipinCount;
      _0x437433 += "\n关注概率: " + _0x1ff6a5.guanzhuRate;
      _0x437433 += "\n喜欢概率: " + _0x1ff6a5.dianzanRate;
      _0x437433 += "\n评论概率: " + _0x1ff6a5.pinglunRate;
      _0x437433 += "\n评论内容: " + _0x1ff6a5.pinglunWords;
      dialogs.build({
        title: "提示",
        content: _0x437433,
        negative: "确定"
      }).on("negative", function () {
        toast("保存成功");
        _0x29ee90.saveShipinData(_0x1ff6a5);
      }).show();
    };
    _0x29ee90.saveShipinData = function (_0x155d7e) {
      _0x3d5a95.put("shipinCount", parseInt(_0x155d7e.shipinCount));
      _0x3d5a95.put("guanzhuRate", parseInt(_0x155d7e.guanzhuRate));
      _0x3d5a95.put("dianzanRate", parseInt(_0x155d7e.dianzanRate));
      _0x3d5a95.put("pinglunRate", parseInt(_0x155d7e.pinglunRate));
      _0x3d5a95.put("pinglunWords", _0x155d7e.pinglunWords);
    };
    _0x29ee90.initSixinView = function (_0x19e45f) {
      var _0x56fb3e = _0x29ee90.getSixinData();
      _0x19e45f.userSixinSwitch.checked = _0x56fb3e.userSixinSwitch;
      _0x19e45f.sixinWords.setText(_0x56fb3e.sixinWords + "");
    };
    this.getSixinData = function () {
      var _0x43c014 = {
        userSixinSwitch: _0x3d5a95.get("userSixinSwitch") != undefined ? _0x3d5a95.get("userSixinSwitch") : false,
        sixinWords: _0x3d5a95.get("sixinWords") != undefined ? _0x3d5a95.get("sixinWords") : "你好\n好啊\n你好啊"
      };
      return _0x43c014;
    };
    _0x29ee90.saveSixinClick = function (_0xcfa08a) {
      var _0x13db77 = {
        userSixinSwitch: _0xcfa08a.userSixinSwitch.checked,
        sixinWords: _0xcfa08a.sixinWords.text()
      };
      var _0xaa5b7b = "";
      _0xaa5b7b += "私信开关: " + (_0x13db77.userSixinSwitch ? "开启" : "关闭");
      _0xaa5b7b += "\n私信话术: " + _0x13db77.sixinWords;
      _0xaa5b7b += "\n总作品数: " + _0x13db77.zuopinMin + " - " + _0x13db77.zuopinMax;
      dialogs.build({
        title: "提示",
        content: _0xaa5b7b,
        negative: "确定"
      }).on("negative", function () {
        toast("保存成功");
        _0x29ee90.saveSixinData(_0x13db77);
      }).show();
    };
    _0x29ee90.saveSixinData = function (_0x1cb702) {
      _0x3d5a95.put("userSixinSwitch", _0x1cb702.userSixinSwitch);
      _0x3d5a95.put("sixinWords", _0x1cb702.sixinWords);
    };
  }
  _0x3e1695.exports = _0x43d0c9;
}, function (_0x5b261b, _0x3e64a1, _0x139900) {
  function _0x4479c5(_0x26b60d) {
    var _0x1cfb54 = this;
    var _0xcb8843 = _0x139900(0);
    var _0x5727d9 = new (_0x139900(2))();
    var _0x332cce = new (_0x139900(3))();
    _0x1cfb54.index = function () {
      _0x1cfb54.start();
    };
    _0x1cfb54.view = function () {};
    var _0x15bd79 = {};
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    _0x1cfb54.start = function () {
      if (!_0xcb8843.checkServer()) {
        return false;
      }
      home();
      _0xcb8843.showConsole("wx抢红包");
      log("界面运行: 群页面");
      log("适用于人群: ");
      log("手脑不灵活");
      log("反应慢");
      log("手部受伤");
      _0x5727d9.index();
      _0x5727d9.ClickListener({
        clickStart: function _0x36e797() {
          _0x1cfb54.action();
        },
        clickStop: function _0x31334f() {
          _0x1cfb54.end();
        },
        clickExit: function _0x57641c() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x1cfb54.end();
            _0x5727d9.close();
            _0xcb8843.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x1cfb54.action = function () {
      var _0x1e895f = 1;
      _0x15bd79.s1 = threads.start(function () {
        while (1) {
          log("抢红包中: ", _0x1e895f++, "次");
          _0x1cfb54.clickHongbao();
          sleep(200);
        }
      });
      _0x15bd79.s2 = threads.start(function () {
        while (1) {
          _0x1cfb54.clickKai();
          sleep(200);
        }
      });
    };
    _0x1cfb54.clickKai = function () {
      try {
        var _0x4dc688 = desc("开").clickable(true).findOnce();
        _0x4dc688 != null && (sleep(200), log("开"), click(_0x4dc688.bounds().centerX(), _0x4dc688.bounds().centerY()), sleep(2000), back());
        var _0x4dc688 = textStartsWith("手慢了").textEndsWith("红包派完了").findOnce();
        _0x4dc688 != null && (sleep(200), log("手慢了，红包派完了"), back());
      } catch (_0x3ad045) {
        log("getNewObj", _0x3ad045);
        return null;
      }
    };
    _0x1cfb54.clickHongbao = function () {
      try {
        var _0x4447ad = text("微信红包").filter(function (_0x2fe136) {
          var _0x6e8f84 = _0x2fe136.parent().parent().parent();
          var _0x35d0ea = _0x6e8f84.findOne(text("已领取"));
          if (_0x35d0ea != null) {
            return false;
          }
          var _0x2e9e0d = _0x6e8f84.findOne(text("已被领完"));
          if (_0x2e9e0d != null) {
            return false;
          }
          return true;
        });
        var _0x567947 = _0x4447ad.findOnce();
        if (_0x567947 == null) {
          return null;
        }
        var _0x33aa32 = _0x567947.parent().parent().parent();
        _0x33aa32.click();
        return _0x33aa32;
      } catch (_0x428d9a) {
        log("getNewObj", _0x428d9a);
        return null;
      }
    };
  }
  _0x5b261b.exports = _0x4479c5;
}, function (_0x1e61ad, _0x111e2b, _0xa54135) {
  function _0x10d601(_0x16de2b) {
    var _0x5dd06d = "#00213e";
    var _0x53ad40 = _0xa54135(1);
    var _0x5dd06d = _0x53ad40.bgColor;
    var _0x487617 = null;
    var _0x13b14d = this;
    var _0x29788b = storages.create("wzke:Wx2");
    var _0x29851b = _0xa54135(0);
    var _0x33a076 = new (_0xa54135(2))();
    var _0x1144f0 = new (_0xa54135(3))();
    var _0x4bdee4 = new (_0xa54135(36))();
    _0x13b14d.index = function () {
      _0x487617 == null && (_0x13b14d.initPopWin(), _0x13b14d.initContent());
      _0x13b14d.show();
    };
    _0x13b14d.show = function () {
      _0x487617.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x13b14d.close = function () {
      _0x487617.dismiss();
    };
    _0x13b14d.initPopWin = function () {
      _0x487617 = new android.widget.PopupWindow();
      var _0x217ffe = new android.transition.Fade();
      _0x217ffe.setDuration(200);
      _0x487617.setEnterTransition(_0x217ffe);
      var _0x1061d9 = new android.transition.Fade();
      _0x1061d9.setDuration(200);
      _0x1061d9.setMode(android.transition.Visibility.MODE_OUT);
      _0x487617.setExitTransition(_0x1061d9);
      _0x487617.setWidth(device.width);
      _0x487617.setHeight(device.height);
      _0x487617.setClippingEnabled(false);
      _0x487617.setFocusable(true);
      _0x487617.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x487617.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    };
    this.initContent = function () {
      var _0x58d979 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x56af8a = _0x5dd06d;
      var _0x5e6c4e = "https://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/wx/shipinhao1.jpg";
      var _0xc46e67 = ui.inflate("\n            <drawer>\n                <vertical id=\"page1\" bg=\"".concat(_0x5dd06d, "\" alpha=\"1\">\n                    <appbar bg=\"").concat(_0x5dd06d, "\">\n                        <toolbar paddingTop=\"").concat(_0x58d979, "px\" paddingBottom=\"5\"  id=\"back\" title=\"返回\"  />\n                        <tabs   id=\"tabs\" />\n                    </appbar>\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" radius=\"24\">  \n                        <ScrollView>  \n                            <vertical padding=\"16\">\n                                <text text=\"评论观看\" gravity=\"center\"  textColor=\"black\" textSize=\"24\" />            \n                                <text marginTop=\"10\"  textSize=\"18\"  text=\"〓 运行界面\" />\n                                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                                <text  >视频 </text>\n                                <img   w=\"80\" h=\"160\" id=\"yunxingImg\" src=\"").concat(_0x5e6c4e, "\"    />    \n\n \n                                <card w=\"*\" h=\"auto\"  cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"20\" cardBackgroundColor=\"").concat(_0x56af8a, "\" cardUseCompatPadding=\"true\" >\n                                    <text text=\"开 始\" id=\"start\" bg=\"").concat(_0x56af8a, "\" textColor=\"#ffffff\" margin=\"12\"  textSize=\"22\" w=\"*\" gravity=\"center\"   />\n                                </card>                  \n                            </vertical>\n                        </ScrollView>   \n                        <ScrollView>  <vertical  id=\"video\"> </vertical>    </ScrollView>    \n                        <ScrollView>  <vertical  id=\"pinglunqu\"> </vertical>    </ScrollView>    \n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0xc46e67.yunxingImg.click(function () {
        _0x29851b.alertImg(_0x5e6c4e);
      });
      _0xc46e67.start.click(function () {
        dialogs.build({
          title: "确定开始吗？",
          content: "",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          _0x13b14d.start();
        }).show();
      });
      _0xc46e67.video.addView(_0x13b14d.CreateVideoView());
      _0xc46e67.pinglunqu.addView(_0x13b14d.CreatepinglunView());
      _0xc46e67.viewpager.setTitles(["功能介绍", "视频设置", "评论区设置"]);
      _0xc46e67.tabs.setupWithViewPager(_0xc46e67.viewpager);
      _0xc46e67.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x53ad40.selectedTabIndicatorColor);
      _0xc46e67.tabs.selectedTabIndicatorHeight = _0x53ad40.selectedTabIndicatorHeight;
      _0xc46e67.back.click(function () {
        _0x13b14d.close();
      });
      _0x487617.setContentView(_0xc46e67);
    };
    _0x13b14d.CreateVideoView = function () {
      var _0xa6e690 = _0x5dd06d;
      var _0x50f024 = ui.inflate("\n            <vertical  bg=\"#ffffff\" >\n                <text text=\"视频设置\" gravity=\"center\" margin=\"0 10\" textColor=\"black\" textSize=\"24\" />   \n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"浏览数量\" />\n                    <input  paddingRight=\"10\"  layout_weight=\"7\"  gravity=\"right\" id=\"shipinCount\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />    \n                    <text   paddingRight=\"10\" textColor=\"black\" text=\"（个）\" />                \n                </horizontal>   \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"视频间隔\" />\n                    <input  paddingRight=\"10\"  layout_weight=\"7\"  gravity=\"right\" id=\"shipinJiange\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />      \n                    <text   paddingRight=\"10\" textColor=\"black\" text=\"（秒）\" />                  \n                </horizontal>  \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"爱心概率\" />\n                    <input  paddingRight=\"10\"  layout_weight=\"7\"  gravity=\"right\" id=\"shipinLikeRate\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />      \n                    <text   paddingRight=\"10\" textColor=\"black\" text=\"（%）\" />                  \n                </horizontal>  \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"喜欢概率\" />\n                    <input  paddingRight=\"10\"  layout_weight=\"7\"  gravity=\"right\" id=\"xinhuanRate\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />      \n                    <text   paddingRight=\"10\" textColor=\"black\" text=\"（%）\" />                  \n                </horizontal>  \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                \n                <card w=\"*\" h=\"auto\"  cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"videoViewContent\"  text=\"保存视频设置\" bg=\"".concat(_0xa6e690, "\"   textSize=\"20\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\"  w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                    </card>\n                <vertical h=\"400\" w=\"auto\">\n                </vertical>\n            </vertical>        \n        "));
      var _0x553ee5 = _0x13b14d.getVideoData();
      _0x50f024.shipinCount.setText(_0x553ee5.shipinCount + "");
      _0x50f024.shipinJiange.setText(_0x553ee5.shipinJiange + "");
      _0x50f024.shipinLikeRate.setText(_0x553ee5.shipinLikeRate + "");
      _0x50f024.xinhuanRate.setText(_0x553ee5.xinhuanRate + "");
      _0x50f024.videoViewContent.click(function () {
        _0x29788b.put("shipinCount", parseInt(_0x50f024.shipinCount.text()));
        _0x29788b.put("shipinJiange", parseInt(_0x50f024.shipinJiange.text()));
        _0x29788b.put("shipinLikeRate", parseInt(_0x50f024.shipinLikeRate.text()));
        _0x29788b.put("xinhuanRate", parseInt(_0x50f024.xinhuanRate.text()));
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x50f024;
    };
    _0x13b14d.getVideoData = function () {
      var _0x19f6a0 = {
        shipinCount: _0x29788b.get("shipinCount") != undefined ? _0x29788b.get("shipinCount") : 1,
        shipinJiange: _0x29788b.get("shipinJiange") != undefined ? _0x29788b.get("shipinJiange") : 1,
        shipinLikeRate: _0x29788b.get("shipinLikeRate") != undefined ? _0x29788b.get("shipinLikeRate") : 100,
        xinhuanRate: _0x29788b.get("xinhuanRate") != undefined ? _0x29788b.get("xinhuanRate") : 100
      };
      return _0x19f6a0;
    };
    _0x13b14d.CreatepinglunView = function () {
      var _0x1141f4 = _0x5dd06d;
      var _0x4ba90f = ui.inflate("\n            <vertical  bg=\"#ffffff\" >\n                <text text=\"评论区-楼层设置\" gravity=\"center\" margin=\"0 10\" textColor=\"black\" textSize=\"24\" />   \n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"评论概率\" />\n                    <input  paddingRight=\"10\"  layout_weight=\"7\"  gravity=\"right\" id=\"shipinPinglunRate\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />  \n                    <text   paddingRight=\"10\"   textColor=\"black\" text=\"（%）\" />                  \n                </horizontal>  \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <vertical  padding=\"15 0 20 0\" w=\"*\" > \n                    <horizontal h=\"25\" gravity=\"left|center\" >\n                        <text  w=\"auto\"    textColor=\"black\" text=\"评论内容 换行隔开 多条随机\" /> \n                        <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" gravity=\"center\"  bg=\"#ff9800\" text=\"复制\" padding=\"0\"   style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\"  />\n                        <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\"  style=\"Widget.AppCompat.Button.Colored\" foreground=\"?selectableItemBackgroundBorderless\"  />\n                    </horizontal>                          \n                    <input    gravity=\"top\" hint=\"请输入内容\" h=\"auto\"  minLines=\"3\" id=\"videoCommentWords\"   bg=\"#ffffff\" />               \n                </vertical>  \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"楼层用户数量（个）\" />\n                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"pinglunquUserCount\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />                    \n                </horizontal>   \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"楼层喜欢概率（%）\" />\n                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"pinglunquLikeRate\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />                    \n                </horizontal>   \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <horizontal weightSum=\"10\"   padding=\"15 0 0 0\" >\n                    <text   layout_weight=\"3\"   textColor=\"black\" text=\"楼层执行间隔（秒）\" />\n                    <input  paddingRight=\"30\"  layout_weight=\"7\"  gravity=\"right\" id=\"pinglunquWatchInterval\"  inputType=\"number\" text=\"\" bg=\"#ffffff\" />                    \n                </horizontal>   \n                <img  h=\"2px\" w=\"*\" bg=\"#d8d8d8\"  />\n                <card w=\"*\" h=\"auto\"  cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"pinglunquViewContent\" padding=\"10 5\"  text=\"保存楼层设置\" bg=\"".concat(_0x1141f4, "\"   textSize=\"20\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\"  w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                    </card>\n                <vertical h=\"400\" w=\"auto\">\n                </vertical>\n            </vertical>        \n        "));
      _0x4ba90f.videoCommentWordsCopy.click(function () {
        setClip(_0x4ba90f.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x4ba90f.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x4ba90f.videoCommentWordsPaste.click(function () {
        var _0x4349c6 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4349c6,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x4ba90f.videoCommentWords.setText(_0x4349c6);
        }).show();
      });
      var _0x1308df = _0x13b14d.getPinglunquData();
      _0x4ba90f.pinglunquUserCount.setText(_0x1308df.pinglunquUserCount + "");
      _0x4ba90f.pinglunquLikeRate.setText(_0x1308df.pinglunquLikeRate + "");
      _0x4ba90f.pinglunquWatchInterval.setText(_0x1308df.pinglunquWatchInterval + "");
      _0x4ba90f.shipinPinglunRate.setText(_0x1308df.shipinPinglunRate + "");
      _0x4ba90f.videoCommentWords.setText(_0x1308df.videoCommentWords + "");
      _0x4ba90f.pinglunquViewContent.click(function () {
        _0x29788b.put("pinglunquUserCount", parseInt(_0x4ba90f.pinglunquUserCount.text()));
        _0x29788b.put("pinglunquLikeRate", parseInt(_0x4ba90f.pinglunquLikeRate.text()));
        _0x29788b.put("pinglunquWatchInterval", parseInt(_0x4ba90f.pinglunquWatchInterval.text()));
        _0x29788b.put("shipinPinglunRate", parseInt(_0x4ba90f.shipinPinglunRate.text()));
        _0x29788b.put("videoCommentWords", _0x4ba90f.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x4ba90f;
    };
    _0x13b14d.getPinglunquData = function () {
      var _0x21fb0b = {
        pinglunquUserCount: _0x29788b.get("pinglunquUserCount") != undefined ? _0x29788b.get("pinglunquUserCount") : 1,
        pinglunquLikeRate: _0x29788b.get("pinglunquLikeRate") != undefined ? _0x29788b.get("pinglunquLikeRate") : 100,
        pinglunquWatchInterval: _0x29788b.get("pinglunquWatchInterval") != undefined ? _0x29788b.get("pinglunquWatchInterval") : 3,
        shipinPinglunRate: _0x29788b.get("shipinPinglunRate") != undefined ? _0x29788b.get("shipinPinglunRate") : 100,
        videoCommentWords: _0x29788b.get("videoCommentWords") != undefined ? _0x29788b.get("videoCommentWords") : "好看\n期待更新\n你好"
      };
      return _0x21fb0b;
    };
    _0x13b14d.start = function () {
      if (!_0x29851b.checkServer()) {
        return false;
      }
      launchApp("微信");
      _0x29851b.showConsole("评论观看");
      _0x33a076.index();
      _0x33a076.ClickListener({
        clickStart: function _0x128042() {
          threads.start(function () {
            _0x13b14d.action1();
          });
        },
        clickStop: function _0x4e0bf4() {
          toastLog("停止任务");
          threads.shutDownAll();
        },
        clickExit: function _0x8d4114() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x33a076.close();
            _0x29851b.closeConsole();
            toast("关闭");
            threads.shutDownAll();
          }).show();
        }
      });
    };
    _0x13b14d.action1 = function () {
      var _0x1a4adb = _0x13b14d.getVideoData();
      var _0xe2980 = 1;
      _0x29851b.actionSleep("任务开始", 1);
      while (true) {
        if (_0x4bdee4.checkVidioType() == "视频") {
          var _0x2ac720 = random(1, 100) < _0x1a4adb.shipinLikeRate;
          var _0x105f70 = random(1, 100) < _0x1a4adb.xinhuanRate;
          _0x4bdee4.shipin_action(_0x2ac720, _0x105f70, true) && (_0x13b14d.action2(), log("页面跳转：关闭评论区"), back(), sleep(2000));
          _0xe2980++;
          if (_0xe2980 > _0x1a4adb.shipinCount) {
            break;
          }
          log("页面检验");
          var _0x574581 = text("暂无评论").findOnce();
          _0x574581 != null && (back(), sleep(2000));
        } else {
          log("跳过直播或其他");
        }
        _0x1144f0.watchSleep("浏览间隔:", _0x1a4adb.shipinJiange);
        _0x4bdee4.shipinSwiperUp();
        sleep(2000);
      }
      log("任务结束");
    };
    _0x13b14d.action2 = function () {
      var _0x29ced6 = _0x13b14d.getPinglunquData();
      var _0x5d16f5 = _0x29ced6.pinglunquUserCount;
      var _0x69d6c4 = _0x29ced6.pinglunquLikeRate;
      var _0x179da8 = _0x29ced6.pinglunquWatchInterval;
      random(1, 100) < _0x29ced6.shipinPinglunRate && (log("执行评论"), _0x4bdee4.pinglun(_0x29ced6.videoCommentWords));
      if (text("暂无评论").findOnce()) {
        log("暂无评论");
        sleep(1000);
        return false;
      }
      var _0x160493 = className("android.widget.TextView").textStartsWith("评论 ").findOne(2000);
      if (_0x160493 == null) {
        _0x5d16f5 = 0;
      } else {
        var _0x335409 = _0x160493.text().replace("评论 ", "");
        _0x335409 = _0x4bdee4.checkNum(_0x335409);
        _0x5d16f5 > _0x335409 && (_0x5d16f5 = _0x335409);
      }
      _0xb2de2b = [];
      var _0x3ebc9f = 0;
      while (_0x5d16f5 > 0) {
        log("观看用户: ", _0x5d16f5);
        while (true) {
          _0x1144f0.watchSleep("点击间隔:", _0x179da8);
          var _0x274bba = _0x13b14d.getUesr(_0x69d6c4);
          if (_0x274bba == null) {
            _0x3ebc9f++;
            break;
          }
          _0x3ebc9f = 0;
          _0x5d16f5--;
          if (_0x5d16f5 <= 0) {
            break;
          }
        }
        if (_0x5d16f5 <= 0) {
          break;
        }
        if (_0x3ebc9f >= 3) {
          break;
        }
        swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
        sleep(2000);
      }
      sleep(2000);
    };
    var _0xb2de2b = [];
    _0x13b14d.getUesr = function (_0x568c14) {
      try {
        if (_0xb2de2b.length >= 50) {
          _0xb2de2b.shift();
        }
        var _0x31b37d = filter(function (_0x349c98) {
          var _0x2c3fdf = _0x29851b.getPercent(_0x349c98);
          var _0x534ba0 = _0x2c3fdf.w == 100 && _0x2c3fdf.h < 80 && _0x2c3fdf.h > 40;
          var _0x59f6de = true;
          if (_0x349c98.findOne(className("android.view.ViewGroup")) == null) {
            _0x59f6de = false;
          }
          return _0x534ba0 && _0x59f6de;
        });
        var _0x142f61 = _0x31b37d.className("androidx.recyclerview.widget.RecyclerView").findOne(10000);
        if (_0x142f61 == null) {
          return null;
        }
        for (var _0x496471 = 0; _0x496471 < _0x142f61.childCount(); _0x496471++) {
          var _0x1b195b = _0x142f61.child(_0x496471);
          var _0x2dedc2 = _0x1b195b.findOne(className("android.view.ViewGroup"));
          if (_0x2dedc2 == null) {
            continue;
          }
          var _0x4fb9dc = _0x2dedc2.findOne(className("android.widget.TextView"));
          if (_0x4fb9dc == null) {
            continue;
          }
          var _0x5033d3 = _0x4fb9dc.text();
          if (_0xb2de2b.indexOf(_0x5033d3) == -1) {
            _0xb2de2b.push(_0x5033d3);
            log("运行用户: " + _0x5033d3);
            if (random(1, 100) < _0x568c14) {
              if (_0x2dedc2.childCount() < 4) {
                continue;
              }
              _0x2dedc2.child(3).click();
              log("评论赞");
              sleep(1000);
            }
            return _0x2dedc2;
          }
        }
        return null;
      } catch (_0x525ab8) {
        log("303", _0x525ab8);
        return null;
      }
    };
  }
  _0x1e61ad.exports = _0x10d601;
}, function (_0x28f570, _0x3ce2a9, _0x21bb15) {
  var _0x339df3 = _0x21bb15(4);
  function _0x108346() {
    var _0x14d9f6 = this;
    var _0x2e0c7e = _0x21bb15(0);
    _0x14d9f6.test = function () {
      log("WX.test");
    };
    _0x14d9f6.checkNum = function (_0x39e612) {
      _0x39e612 = _0x39e612 + "";
      if (_0x39e612.includes("万")) {
        _0x39e612 = _0x39e612.replace("w", "");
        _0x39e612 = _0x39e612 * 10000;
      } else {
        _0x39e612.includes("亿") && (_0x39e612 = _0x39e612.replace("亿", ""), _0x39e612 = _0x39e612 * 100000000);
      }
      return parseInt(_0x39e612);
    };
    _0x14d9f6.checkVidioType = function () {
      var _0x3c81a9 = className("android.widget.TextView").filter(function (_0x2cf092) {
        var _0x288ae0 = _0x2e0c7e.getPercent(_0x2cf092);
        return _0x288ae0.w > 0 && _0x288ae0.h > 0;
      });
      sleep(3500);
      if (_0x3c81a9.text("轻触进入直播间").findOnce() != null) {
        return "直播";
      }
      if (_0x3c81a9.text("付费直播试看中").findOnce() != null) {
        return "直播";
      }
      return "视频";
    };
    _0x14d9f6.shipin_action = function (_0x390c40, _0x2ed76d, _0x384377) {
      var _0x21037e = 0;
      var _0x334af0 = device.height * 0.7;
      var _0x111d30 = device.width;
      var _0x5b6d57 = device.height;
      var _0x1cfbae = className("android.view.ViewGroup").boundsInside(_0x21037e, _0x334af0, _0x111d30, _0x5b6d57).filter(function (_0x3475a5) {
        var _0x514425 = _0x2e0c7e.getPercent(_0x3475a5);
        return _0x514425.w == 100 && _0x514425.h > 0 && _0x514425.h < 10;
      });
      var _0x50c6ae = _0x1cfbae.clickable(true).findOne(3000);
      if (_0x50c6ae == null) {
        return false;
      }
      try {
        var _0xd68c52 = _0x50c6ae.find(className("android.widget.TextView"));
        if (_0xd68c52.length >= 5) {
          _0x390c40 && (log("执行点赞"), _0xd68c52[_0xd68c52.length - 4].parent().click(), sleep(2000));
          _0x2ed76d && (log("执行喜欢"), _0xd68c52[_0xd68c52.length - 2].parent().click(), sleep(2000));
          if (_0x384377) {
            log("进入评论区");
            _0xd68c52[_0xd68c52.length - 1].parent().click();
            sleep(2000);
            return true;
          }
          return false;
        } else {
          return false;
        }
      } catch (_0xe4f19d) {
        log(_0xe4f19d);
        return false;
      }
    };
    _0x14d9f6.shipin_click_dianzan = function () {
      try {
        var _0x785d40 = 0;
        var _0x475314 = device.height * 0.7;
        var _0x2452d3 = device.width;
        var _0x6f8263 = device.height;
        var _0x3d0df8 = className("android.view.ViewGroup").boundsInside(_0x785d40, _0x475314, _0x2452d3, _0x6f8263).filter(function (_0x1ab5f) {
          var _0x1da504 = _0x2e0c7e.getPercent(_0x1ab5f);
          return _0x1da504.w == 100 && _0x1da504.h > 0 && _0x1da504.h < 10;
        });
        var _0x2dd459 = _0x3d0df8.findOne(3000);
        if (_0x2dd459 == null) {
          return false;
        }
        var _0x2bae84 = _0x2dd459.find(className("android.widget.LinearLayout").clickable(true));
        return _0x2bae84.length == 4 || _0x2bae84.length == 5 ? (_0x2bae84[_0x2bae84.length - 4].click(), true) : false;
      } catch (_0x1f484b) {
        log(_0x1f484b);
        return false;
      }
    };
    _0x14d9f6.jumpShipinToPinglunqu = function () {
      try {
        log("页面跳转： 视频 到 评论区");
        var _0x362c48 = 0;
        var _0x1402c7 = device.height * 0.7;
        var _0x36f187 = device.width;
        var _0x161c6c = device.height;
        var _0x2ffd25 = className("android.view.ViewGroup").boundsInside(_0x362c48, _0x1402c7, _0x36f187, _0x161c6c).filter(function (_0x37cc48) {
          var _0x15a4da = _0x2e0c7e.getPercent(_0x37cc48);
          return _0x15a4da.w == 100 && _0x15a4da.h > 0 && _0x15a4da.h < 10;
        });
        var _0x571bc1 = _0x2ffd25.findOne(3000);
        if (_0x571bc1 == null) {
          return false;
        }
        var _0x53773e = _0x571bc1.find(className("android.widget.LinearLayout").clickable(true));
        return _0x53773e.length == 4 || _0x53773e.length == 5 ? (_0x53773e[_0x53773e.length - 1].click(), true) : false;
      } catch (_0x26bbf1) {
        log(_0x26bbf1);
        return false;
      }
    };
    _0x14d9f6.pinglun = function (_0x510966) {
      if (_0x510966 == "") {
        return false;
      }
      var _0x4f9cd3 = _0x510966.split("\n");
      var _0x1eb275 = _0x4f9cd3[random(0, _0x4f9cd3.length - 1)];
      log("发送评论: " + _0x1eb275);
      sleep(1000);
      if (!setText(_0x1eb275)) {
        input(_0x1eb275);
      }
      sleep(1000);
      var _0x40ae41 = text("回复").clickable(true).findOne(2000);
      _0x40ae41 != null && (_0x40ae41.click(), sleep(2000));
    };
    _0x14d9f6.shipinSwiperUp = function () {
      log("滑动视频: 下一个");
      var _0x120c0b = device.width * 0.7 + random(-20, 20);
      var _0x20e7e4 = device.height * 0.75;
      var _0x351394 = device.width * 0.75 + random(-20, 20);
      var _0x4deecf = device.height * 0.17;
      var _0x25f97e = random(500, 600);
      swipe(_0x120c0b, _0x20e7e4, _0x351394, _0x4deecf, _0x25f97e);
      sleep(2000);
    };
  }
  _0x28f570.exports = _0x108346;
}, function (_0x3f7cc2, _0x75f8cd, _0x44eed0) {
  function _0x46a1b9(_0x1079a4) {
    var _0x272799 = this;
    var _0x3995be = _0x44eed0(1);
    var _0x3148d1 = _0x3995be.bgColor;
    this.index = function () {
      _0x272799.view();
    };
    this.view = function () {
      ui.statusBarColor(_0x3148d1);
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"行业拓客\" bg=\"".concat(_0x3148d1, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" >\n\n                        <ScrollView>\n                            <vertical padding=\"15\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"1: 首页-精选-视频页 2: 首页-发现-进入视频页 3: 首页-朋友-进入视频页 4: 同城-进入视频页\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"运行次数\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page1ShipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"观看时长\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page1WatchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page1WatchTimeMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"关注概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page1GuanzhuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"点赞概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page1DianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"点赞数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page1DianzanMin\" paddingLeft=\"10\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page1DianzanMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"评论概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page1PinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <vertical id=\"defultWords_show\">\n                                            <SwitchWidget-Se7en id=\"defultWords\" marginTop=\"5\" padding='8 8' checked='true' text='使用默认话术' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"  >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"评论数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page1PinglunMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page1PinglunMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <frame padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                            <text marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"评论内容 （换行隔开,多条随机）\" />\n                                            <input marginTop=\"25\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"page1PinglunWords\" bg=\"#ffffff\" />\n                                        </frame>\n                                    </vertical>\n                                </card>\n                                <button id=\"page1Save\" bg=\"").concat(_0x3148d1, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical padding=\"15\">\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <SwitchWidget-Se7en id=\"page3SixinSwitch\" text=\"私信开关\" margin=\"20 10\" trackColor='").concat(_0x3148d1, "' textColor=\"black\" checked=\"\" />\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <vertical padding=\"20 0 20 0\" >\n                                            <text marginTop=\"8\" textColor=\"black\" text=\"私信内容 （换行隔开,多条随机）\" />\n                                            <input hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"page3SixinWords\" bg=\"#ffffff\" />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总获赞数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3HuozanMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3HuozanMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"120\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总关注数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3GuanzhuMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3GuanzhuMax\" paddingRight=\"20\" minWidth=\"120\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总粉丝数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3fensiMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3fensiMax\" paddingRight=\"20\" minWidth=\"120\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总作品数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3ZuopinMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3ZuopinMax\" paddingRight=\"20\" minWidth=\"120\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                    </vertical>\n                                </card>\n\n\n                                <button id=\"savePage3\" bg=\"").concat(_0x3148d1, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "私信设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x3995be.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x3995be.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x1079a4.view(1);
      });
      _0x272799.initPage1();
      ui.page1Save.click(function () {
        _0x272799.page1Save();
      });
      _0x272799.initPage3();
      ui.savePage3.click(function () {
        _0x272799.savePage3();
      });
    };
    var _0x1bdad8 = _0x44eed0(0);
    var _0x3a1661 = new (_0x44eed0(2))();
    var _0x30d5df = new (_0x44eed0(8))();
    this.start = function () {
      if (!_0x30d5df.launchApp()) {
        return false;
      }
      if (!_0x1bdad8.checkServer()) {
        return false;
      }
      _0x1bdad8.showConsole("行业拓客");
      log("运行页面: 视频播放界面");
      _0x3a1661.index();
      _0x3a1661.ClickListener({
        clickStart: function _0x2ad68a() {
          threads.start(function () {
            _0x272799.action();
          });
        },
        clickStop: function _0x107915() {
          threads.shutDownAll();
          log("停止");
        },
        clickExit: function _0x72c604() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x3a1661.close();
            _0x1bdad8.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x59f5da = _0x272799.getPage1Data();
      var _0x23693c = _0x272799.getPage3Data();
      _0x30d5df.watchSleep("开始任务: ", 3);
      _0x30d5df.closeTip();
      _0x30d5df.checkHuakuai();
      for (var _0xd3cbd9 = 0; _0xd3cbd9 < _0x59f5da.page1ShipinCount; _0xd3cbd9++) {
        if (_0x30d5df.isShipin() == "视频") {
          _0x30d5df.watchSleep("观看视频: ", random(_0x59f5da.page1WatchTimeMin, _0x59f5da.page1WatchTimeMax));
          if (random(0, 100) < _0x59f5da.page1GuanzhuRate) {
            _0x30d5df.clickGuanzhu();
          }
          var _0x1f0646 = _0x30d5df.getDianZanShu();
          log("点赞数值: " + _0x1f0646);
          var _0x1fabc6 = random(0, 100) < _0x59f5da.page1DianzanRate && _0x1f0646 >= _0x59f5da.page1DianzanMin && _0x1f0646 <= _0x59f5da.page1DianzanMax;
          if (_0x1fabc6) {
            _0x30d5df.clickDianzan();
          }
          var _0x462190 = _0x30d5df.getPinglunShu();
          log("评论数值: " + _0x462190);
          var _0x4373ab = random(0, 100) < _0x59f5da.page1PinglunRate && _0x462190 >= _0x59f5da.page1PinglunMin && _0x462190 <= _0x59f5da.page1PinglunMax;
          if (_0x4373ab && _0x30d5df.clickPinglunqu()) {
            _0x30d5df.pinglun(_0x59f5da.page1PinglunWords, _0x59f5da.defultWords);
            var _0x11d115 = id("com.smile.gifmaker:id/tabs_panel_close").clickable(true).findOnce();
            _0x11d115 != null ? (_0x11d115.click(), sleep(2000)) : (back(), sleep(2000));
          }
          _0x23693c.page3SixinSwitch && _0x30d5df.jumpShipinToUercenter() && (_0x272799.actionUercenter(), log("跳转界面: 返回视频"), sleep(1000), back(), sleep(2000));
        }
        sleep(1000);
        _0x30d5df.closePinglunquOnce();
        _0x30d5df.jumpNextShipin();
      }
      alert("任务结束,运行数: " + _0x59f5da.page1ShipinCount);
    };
    _0x272799.actionUercenter = function () {
      log("用户中心: 任务开始");
      var _0x1f7b02 = _0x272799.getPage3Data();
      var _0x505080 = _0x30d5df.getUsercenterInfo();
      if (!_0x30d5df.sixinInfoCondition(_0x505080, _0x1f7b02)) {
        return false;
      }
      _0x30d5df.actionUercenterSixin(_0x1f7b02.page3SixinWords);
    };
    var _0x83951d = storages.create("wzke:K1");
    _0x272799.getPage1Data = function () {
      var _0x4a64ce = {
        page1ShipinCount: _0x83951d.get("page1ShipinCount") != undefined ? _0x83951d.get("page1ShipinCount") : 300,
        page1WatchTimeMin: _0x83951d.get("page1WatchTimeMin") != undefined ? _0x83951d.get("page1WatchTimeMin") : 1,
        page1WatchTimeMax: _0x83951d.get("page1WatchTimeMax") != undefined ? _0x83951d.get("page1WatchTimeMax") : 8,
        page1GuanzhuRate: _0x83951d.get("page1GuanzhuRate") != undefined ? _0x83951d.get("page1GuanzhuRate") : 10,
        page1DianzanRate: _0x83951d.get("page1DianzanRate") != undefined ? _0x83951d.get("page1DianzanRate") : 20,
        page1DianzanMin: _0x83951d.get("page1DianzanMin") != undefined ? _0x83951d.get("page1DianzanMin") : 0,
        page1DianzanMax: _0x83951d.get("page1DianzanMax") != undefined ? _0x83951d.get("page1DianzanMax") : 1000,
        page1PinglunRate: _0x83951d.get("page1PinglunRate") != undefined ? _0x83951d.get("page1PinglunRate") : 10,
        defultWords: _0x83951d.get("defultWords") != undefined ? _0x83951d.get("defultWords") : true,
        page1PinglunMin: _0x83951d.get("page1PinglunMin") != undefined ? _0x83951d.get("page1PinglunMin") : 0,
        page1PinglunMax: _0x83951d.get("page1PinglunMax") != undefined ? _0x83951d.get("page1PinglunMax") : 1000,
        page1PinglunWords: _0x83951d.get("page1PinglunWords") != undefined ? _0x83951d.get("page1PinglunWords") : "你好\n你好啊\n很棒的作品"
      };
      return _0x4a64ce;
    };
    _0x272799.initPage1 = function () {
      var _0x23c694 = _0x272799.getPage1Data();
      ui.page1ShipinCount.setText(_0x23c694.page1ShipinCount + "");
      ui.page1WatchTimeMin.setText(_0x23c694.page1WatchTimeMin + "");
      ui.page1WatchTimeMax.setText(_0x23c694.page1WatchTimeMax + "");
      ui.page1GuanzhuRate.setText(_0x23c694.page1GuanzhuRate + "");
      ui.page1DianzanRate.setText(_0x23c694.page1DianzanRate + "");
      ui.page1DianzanMin.setText(_0x23c694.page1DianzanMin + "");
      ui.page1DianzanMax.setText(_0x23c694.page1DianzanMax + "");
      ui.page1PinglunRate.setText(_0x23c694.page1PinglunRate + "");
      ui.defultWords.checked = _0x23c694.defultWords;
      ui.page1PinglunMin.setText(_0x23c694.page1PinglunMin + "");
      ui.page1PinglunMax.setText(_0x23c694.page1PinglunMax + "");
      ui.page1PinglunWords.setText(_0x23c694.page1PinglunWords);
    };
    _0x272799.page1Save = function () {
      _0x83951d.put("page1ShipinCount", parseInt(ui.page1ShipinCount.text()));
      _0x83951d.put("page1WatchTimeMin", parseInt(ui.page1WatchTimeMin.text()));
      _0x83951d.put("page1WatchTimeMax", parseInt(ui.page1WatchTimeMax.text()));
      _0x83951d.put("page1GuanzhuRate", parseInt(ui.page1GuanzhuRate.text()));
      _0x83951d.put("page1DianzanRate", parseInt(ui.page1DianzanRate.text()));
      _0x83951d.put("page1DianzanMin", parseInt(ui.page1DianzanMin.text()));
      _0x83951d.put("page1DianzanMax", parseInt(ui.page1DianzanMax.text()));
      _0x83951d.put("page1PinglunRate", parseInt(ui.page1PinglunRate.text()));
      _0x83951d.put("defultWords", ui.defultWords.checked);
      _0x83951d.put("page1PinglunMin", parseInt(ui.page1PinglunMin.text()));
      _0x83951d.put("page1PinglunMax", parseInt(ui.page1PinglunMax.text()));
      _0x83951d.put("page1PinglunWords", ui.page1PinglunWords.text());
      dialogs.build({
        title: "保存成功",
        positive: "保存并开始",
        negative: "保存"
      }).on("positive", function () {
        _0x272799.start();
      }).on("negative", function () {
        toast("保存成功");
      }).show();
    };
    this.getPage3Data = function () {
      var _0x315e6c = {
        page3SixinSwitch: _0x83951d.get("page3SixinSwitch") != undefined ? _0x83951d.get("page3SixinSwitch") : false,
        page3SixinWords: _0x83951d.get("page3SixinWords") != undefined ? _0x83951d.get("page3SixinWords") : "你好\n好啊\n你好啊",
        page3HuozanMin: _0x83951d.get("page3HuozanMin") != undefined ? _0x83951d.get("page3HuozanMin") : 0,
        page3HuozanMax: _0x83951d.get("page3HuozanMax") != undefined ? _0x83951d.get("page3HuozanMax") : 1000,
        page3GuanzhuMin: _0x83951d.get("page3GuanzhuMin") != undefined ? _0x83951d.get("page3GuanzhuMin") : 0,
        page3GuanzhuMax: _0x83951d.get("page3GuanzhuMax") != undefined ? _0x83951d.get("page3GuanzhuMax") : 1000,
        page3fensiMin: _0x83951d.get("page3fensiMin") != undefined ? _0x83951d.get("page3fensiMin") : 0,
        page3fensiMax: _0x83951d.get("page3fensiMax") != undefined ? _0x83951d.get("page3fensiMax") : 1000,
        page3ZuopinMin: _0x83951d.get("page3ZuopinMin") != undefined ? _0x83951d.get("page3ZuopinMin") : 0,
        page3ZuopinMax: _0x83951d.get("page3ZuopinMax") != undefined ? _0x83951d.get("page3ZuopinMax") : 1000
      };
      return _0x315e6c;
    };
    _0x272799.initPage3 = function () {
      var _0x25af76 = _0x272799.getPage3Data();
      ui.page3SixinSwitch.checked = _0x25af76.page3SixinSwitch;
      ui.page3SixinWords.setText(_0x25af76.page3SixinWords + "");
      ui.page3HuozanMin.setText(_0x25af76.page3HuozanMin + "");
      ui.page3HuozanMax.setText(_0x25af76.page3HuozanMax + "");
      ui.page3GuanzhuMin.setText(_0x25af76.page3GuanzhuMin + "");
      ui.page3GuanzhuMax.setText(_0x25af76.page3GuanzhuMax + "");
      ui.page3fensiMin.setText(_0x25af76.page3fensiMin + "");
      ui.page3fensiMax.setText(_0x25af76.page3fensiMax + "");
      ui.page3ZuopinMin.setText(_0x25af76.page3ZuopinMin + "");
      ui.page3ZuopinMax.setText(_0x25af76.page3ZuopinMax + "");
    };
    _0x272799.savePage3 = function () {
      _0x83951d.put("page3SixinSwitch", ui.page3SixinSwitch.checked);
      _0x83951d.put("page3SixinWords", ui.page3SixinWords.text());
      _0x83951d.put("page3HuozanMin", parseInt(ui.page3HuozanMin.text()));
      _0x83951d.put("page3HuozanMax", parseInt(ui.page3HuozanMax.text()));
      _0x83951d.put("page3GuanzhuMin", parseInt(ui.page3GuanzhuMin.text()));
      _0x83951d.put("page3GuanzhuMax", parseInt(ui.page3GuanzhuMax.text()));
      _0x83951d.put("page3fensiMin", parseInt(ui.page3fensiMin.text()));
      _0x83951d.put("page3fensiMax", parseInt(ui.page3fensiMax.text()));
      _0x83951d.put("page3ZuopinMin", parseInt(ui.page3ZuopinMin.text()));
      _0x83951d.put("page3ZuopinMax", parseInt(ui.page3ZuopinMax.text()));
      toast("保存成功");
    };
  }
  _0x3f7cc2.exports = _0x46a1b9;
}, function (_0x22481b, _0x998754, _0x2a7509) {
  function _0x491486(_0x4ac7d7) {
    var _0x36d1c9 = this;
    var _0x468a9f = _0x2a7509(1);
    var _0x572509 = _0x468a9f.bgColor;
    this.index = function () {
      _0x36d1c9.view();
    };
    this.view = function () {
      ui.statusBarColor(_0x572509);
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"评论浏览\" bg=\"".concat(_0x572509, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"15\">\n                            <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"视频页面 - 打开评论区\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                    <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"运行次数\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page1UserCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                       \n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"看作品数\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page2ShipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"观看时长\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page2WatchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page2WatchTimeMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"关注概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page2GuanzhuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"点赞概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page2DianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"点赞数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page2DianzanMin\" paddingLeft=\"10\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page2DianzanMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"评论概率（0-100%）\" />\n                                            <input layout_weight=\"7\" paddingRight=\"20\" gravity=\"right\" id=\"page2PinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <vertical id=\"defultWords_show\">\n                                            <SwitchWidget-Se7en id=\"defultWords\" marginTop=\"5\" padding='8 8' checked='true' text='使用默认话术' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"  >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"评论数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page2PinglunMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page2PinglunMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <frame padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                            <text marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"评论内容 （换行隔开,多条随机）\" />\n                                            <input marginTop=\"25\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"page2PinglunWords\" bg=\"#ffffff\" />\n                                        </frame>\n                                    </vertical>\n                                </card>\n                                <button id=\"page2Save\" bg=\"").concat(_0x572509, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                        <ScrollView>\n                            <vertical padding=\"15\">\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <SwitchWidget-Se7en id=\"page3SixinSwitch\" text=\"私信开关\" margin=\"20 10\" trackColor='").concat(_0x572509, "' textColor=\"black\" checked=\"\" />\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <vertical padding=\"20 0 20 0\" >\n                                            <text marginTop=\"8\" textColor=\"black\" text=\"私信内容 （换行隔开,多条随机）\" />\n                                            <input hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"page3SixinWords\" bg=\"#ffffff\" />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总获赞数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3HuozanMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3HuozanMax\" paddingRight=\"20\" gravity=\"right\" minWidth=\"120\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总关注数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3GuanzhuMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3GuanzhuMax\" paddingRight=\"20\" minWidth=\"120\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"    >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总粉丝数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3fensiMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3fensiMax\" paddingRight=\"20\" minWidth=\"120\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                                            <text layout_weight=\"3\" paddingLeft=\"10\" textColor=\"black\" text=\"总作品数\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\">\n                                                <text textColor=\"black\" text=\"下限:\" />\n                                                <input id=\"page3ZuopinMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"上限:\" />\n                                                <input id=\"page3ZuopinMax\" paddingRight=\"20\" minWidth=\"120\" gravity=\"right\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n                                    </vertical>\n                                </card>\n                                <button id=\"savePage3\" bg=\"").concat(_0x572509, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                    </viewpager>\n\n                </vertical>\n            </drawer>\n        "));
      ui.viewpager.setTitles(["基础设置", "私信设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x468a9f.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x468a9f.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x4ac7d7.view(1);
      });
      _0x36d1c9.initpage1();
      _0x36d1c9.initpage2();
      ui.page2Save.click(function () {
        _0x36d1c9.page1Save();
        _0x36d1c9.page2Save();
      });
      _0x36d1c9.initPage3();
      ui.savePage3.click(function () {
        _0x36d1c9.savePage3();
      });
    };
    var _0x35abdc = _0x2a7509(0);
    var _0x2f3d0b = new (_0x2a7509(2))();
    var _0x3c3afa = new (_0x2a7509(8))();
    this.start = function () {
      if (!_0x3c3afa.launchApp()) {
        return false;
      }
      if (!_0x35abdc.checkServer()) {
        return false;
      }
      _0x35abdc.showConsole("评论浏览");
      log("运行页面: 视频-打开评论区");
      _0x2f3d0b.index();
      _0x2f3d0b.ClickListener({
        clickStart: function _0x284ed3() {
          threads.start(function () {
            _0x36d1c9.action();
          });
        },
        clickStop: function _0x19e639() {
          threads.shutDownAll();
          log("停止");
        },
        clickExit: function _0x49eea5() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x2f3d0b.close();
            _0x35abdc.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x3c3afa.watchSleep("开始任务: ", 3);
      _0x3c3afa.closeTip();
      _0x3c3afa.checkHuakuai();
      var _0x59790c = _0x36d1c9.getpage1Data();
      var _0x1145f0 = 1;
      var _0x5cf293 = [];
      while (_0x1145f0 <= _0x59790c.page1UserCount) {
        while (_0x1145f0 <= _0x59790c.page1UserCount) {
          sleep(1000);
          var _0x16df89 = _0x3c3afa.getPinglunUser(_0x5cf293, "");
          if (_0x16df89 == null) {
            log("本页看完");
            break;
          }
          var _0x142751 = _0x16df89.findOne(id("com.smile.gifmaker:id/name"));
          if (_0x142751 == null) {
            continue;
          }
          log("跳转: 用户主页" + _0x1145f0);
          sleep(1000);
          _0x142751.click();
          sleep(2000);
          this.actionUserAction();
          log("返回: 评论区");
          sleep(1000);
          back();
          sleep(2000);
          _0x1145f0++;
        }
        if (_0x1145f0 > _0x59790c.page1UserCount) {
          log("任务楼层结束");
          break;
        }
        if (text("没有更多评论").findOnce()) {
          log("没有更多评论");
          break;
        }
        if (id("com.smile.gifmaker.comment_detail:id/no_more_content").className("android.view.View").findOnce()) {
          log("没有更多评论");
          break;
        }
        log("滑动评论");
        sleep(1000);
        var _0x5a0713 = device.width * 0.7;
        var _0x57fd35 = device.height * 0.85;
        var _0x424e3f = device.width * 0.7;
        var _0x5bad46 = device.height * 0.4;
        swipe(_0x5a0713, _0x57fd35, _0x424e3f, _0x5bad46, 3000);
        sleep(1000);
      }
      alert("任务结束,运行数: " + _0x59790c.page1UserCount);
    };
    this.actionUserAction = function () {
      var _0x4c07b0 = _0x36d1c9.getpage2Data();
      var _0x1e41de = _0x36d1c9.getPage3Data();
      var _0x35cd37 = _0x3c3afa.getUsercenterInfo();
      var _0xc4bbe = _0x3c3afa.userCenterContidion(_0x35cd37, _0x1e41de);
      if (_0xc4bbe && _0x1e41de.page3SixinSwitch) {
        _0x3c3afa.actionUercenterSixin(_0x1e41de.page3SixinWords);
      }
      if (_0x35cd37.zuopin < _0x4c07b0.page2ShipinCount) {
        _0x4c07b0.page2ShipinCount = _0x35cd37.zuopin;
      }
      if (_0x4c07b0.page2ShipinCount > 0 && _0x3c3afa.jumpUercenterToFisetshipin()) {
        for (var _0x36c085 = 0; _0x36c085 < _0x4c07b0.page2ShipinCount; _0x36c085++) {
          _0x3c3afa.watchSleep("观看视频: ", random(_0x4c07b0.page2WatchTimeMin, _0x4c07b0.page2WatchTimeMax));
          if (_0x3c3afa.isShipin() == "视频") {
            if (random(0, 100) < _0x4c07b0.page2GuanzhuRate) {
              _0x3c3afa.clickGuanzhu();
            }
            var _0x161a8b = _0x3c3afa.getDianZanShu();
            log("点赞数值: " + _0x161a8b);
            var _0x5d91d8 = random(0, 100) < _0x4c07b0.page2DianzanRate && _0x161a8b >= _0x4c07b0.page2DianzanMin && _0x161a8b <= _0x4c07b0.page2DianzanMax;
            if (_0x5d91d8) {
              _0x3c3afa.clickDianzan();
            }
            var _0xc33e49 = _0x3c3afa.getPinglunShu();
            log("评论数值: " + _0xc33e49);
            var _0x1f642f = random(0, 100) <= _0x4c07b0.page2PinglunRate && _0xc33e49 >= _0x4c07b0.page2PinglunMin && _0xc33e49 <= _0x4c07b0.page2PinglunMax;
            if (_0x1f642f && _0x3c3afa.clickPinglunqu()) {
              _0x3c3afa.pinglun(_0x4c07b0.page2PinglunWords, _0x4c07b0.defultWords);
              var _0x9f4f4 = id("com.smile.gifmaker:id/tabs_panel_close").clickable(true).findOnce();
              _0x9f4f4 != null ? (_0x9f4f4.click(), sleep(2000)) : (back(), sleep(2000));
            }
          }
          sleep(1000);
          _0x3c3afa.closePinglunquOnce();
          _0x3c3afa.jumpNextShipin();
        }
        log("页面跳转: 返回用户中心");
        sleep(1000);
        back();
        sleep(2000);
      }
    };
    var _0x4198e6 = storages.create("wzke:K2");
    _0x36d1c9.getpage1Data = function () {
      var _0xcf3d82 = {
        page1UserCount: _0x4198e6.get("page1UserCount") != undefined ? _0x4198e6.get("page1UserCount") : 300
      };
      return _0xcf3d82;
    };
    _0x36d1c9.initpage1 = function () {
      var _0x2abb1f = _0x36d1c9.getpage1Data();
      ui.page1UserCount.setText(_0x2abb1f.page1UserCount + "");
    };
    _0x36d1c9.page1Save = function () {
      _0x4198e6.put("page1UserCount", parseInt(ui.page1UserCount.text()));
      dialogs.build({
        title: "保存成功",
        positive: "保存并开始",
        negative: "保存"
      }).on("positive", function () {
        _0x36d1c9.start();
      }).on("negative", function () {
        toast("保存成功");
      }).show();
    };
    _0x36d1c9.getpage2Data = function () {
      var _0x466704 = {
        page2ShipinCount: _0x4198e6.get("page2ShipinCount") != undefined ? _0x4198e6.get("page2ShipinCount") : 3,
        page2WatchTimeMin: _0x4198e6.get("page2WatchTimeMin") != undefined ? _0x4198e6.get("page2WatchTimeMin") : 1,
        page2WatchTimeMax: _0x4198e6.get("page2WatchTimeMax") != undefined ? _0x4198e6.get("page2WatchTimeMax") : 5,
        page2GuanzhuRate: _0x4198e6.get("page2GuanzhuRate") != undefined ? _0x4198e6.get("page2GuanzhuRate") : 10,
        page2DianzanRate: _0x4198e6.get("page2DianzanRate") != undefined ? _0x4198e6.get("page2DianzanRate") : 20,
        page2DianzanMin: _0x4198e6.get("page2DianzanMin") != undefined ? _0x4198e6.get("page2DianzanMin") : 0,
        page2DianzanMax: _0x4198e6.get("page2DianzanMax") != undefined ? _0x4198e6.get("page2DianzanMax") : 1000,
        page2PinglunRate: _0x4198e6.get("page2PinglunRate") != undefined ? _0x4198e6.get("page2PinglunRate") : 10,
        defultWords: _0x4198e6.get("defultWords") != undefined ? _0x4198e6.get("defultWords") : true,
        page2PinglunMin: _0x4198e6.get("page2PinglunMin") != undefined ? _0x4198e6.get("page2PinglunMin") : 0,
        page2PinglunMax: _0x4198e6.get("page2PinglunMax") != undefined ? _0x4198e6.get("page2PinglunMax") : 1000,
        page2PinglunWords: _0x4198e6.get("page2PinglunWords") != undefined ? _0x4198e6.get("page2PinglunWords") : "你好\n你好啊\n很棒的作品"
      };
      return _0x466704;
    };
    _0x36d1c9.initpage2 = function () {
      var _0x249a56 = _0x36d1c9.getpage2Data();
      ui.page2ShipinCount.setText(_0x249a56.page2ShipinCount + "");
      ui.page2WatchTimeMin.setText(_0x249a56.page2WatchTimeMin + "");
      ui.page2WatchTimeMax.setText(_0x249a56.page2WatchTimeMax + "");
      ui.page2GuanzhuRate.setText(_0x249a56.page2GuanzhuRate + "");
      ui.page2DianzanRate.setText(_0x249a56.page2DianzanRate + "");
      ui.page2DianzanMin.setText(_0x249a56.page2DianzanMin + "");
      ui.page2DianzanMax.setText(_0x249a56.page2DianzanMax + "");
      ui.page2PinglunRate.setText(_0x249a56.page2PinglunRate + "");
      ui.defultWords.checked = _0x249a56.defultWords;
      ui.page2PinglunMin.setText(_0x249a56.page2PinglunMin + "");
      ui.page2PinglunMax.setText(_0x249a56.page2PinglunMax + "");
      ui.page2PinglunWords.setText(_0x249a56.page2PinglunWords);
    };
    _0x36d1c9.page2Save = function () {
      _0x4198e6.put("page2ShipinCount", parseInt(ui.page2ShipinCount.text()));
      _0x4198e6.put("page2WatchTimeMin", parseInt(ui.page2WatchTimeMin.text()));
      _0x4198e6.put("page2WatchTimeMax", parseInt(ui.page2WatchTimeMax.text()));
      _0x4198e6.put("page2GuanzhuRate", parseInt(ui.page2GuanzhuRate.text()));
      _0x4198e6.put("page2DianzanRate", parseInt(ui.page2DianzanRate.text()));
      _0x4198e6.put("page2DianzanMin", parseInt(ui.page2DianzanMin.text()));
      _0x4198e6.put("page2DianzanMax", parseInt(ui.page2DianzanMax.text()));
      _0x4198e6.put("page2PinglunRate", parseInt(ui.page2PinglunRate.text()));
      _0x4198e6.put("defultWords", ui.defultWords.checked);
      _0x4198e6.put("page2PinglunMin", parseInt(ui.page2PinglunMin.text()));
      _0x4198e6.put("page2PinglunMax", parseInt(ui.page2PinglunMax.text()));
      _0x4198e6.put("page2PinglunWords", ui.page2PinglunWords.text());
      toast("保存成功");
    };
    this.getPage3Data = function () {
      var _0x371802 = {
        page3SixinSwitch: _0x4198e6.get("page3SixinSwitch") != undefined ? _0x4198e6.get("page3SixinSwitch") : false,
        page3SixinWords: _0x4198e6.get("page3SixinWords") != undefined ? _0x4198e6.get("page3SixinWords") : "你好\n好啊\n你好啊",
        page3HuozanMin: _0x4198e6.get("page3HuozanMin") != undefined ? _0x4198e6.get("page3HuozanMin") : 0,
        page3HuozanMax: _0x4198e6.get("page3HuozanMax") != undefined ? _0x4198e6.get("page3HuozanMax") : 1000,
        page3GuanzhuMin: _0x4198e6.get("page3GuanzhuMin") != undefined ? _0x4198e6.get("page3GuanzhuMin") : 0,
        page3GuanzhuMax: _0x4198e6.get("page3GuanzhuMax") != undefined ? _0x4198e6.get("page3GuanzhuMax") : 1000,
        page3fensiMin: _0x4198e6.get("page3fensiMin") != undefined ? _0x4198e6.get("page3fensiMin") : 0,
        page3fensiMax: _0x4198e6.get("page3fensiMax") != undefined ? _0x4198e6.get("page3fensiMax") : 1000,
        page3ZuopinMin: _0x4198e6.get("page3ZuopinMin") != undefined ? _0x4198e6.get("page3ZuopinMin") : 0,
        page3ZuopinMax: _0x4198e6.get("page3ZuopinMax") != undefined ? _0x4198e6.get("page3ZuopinMax") : 1000
      };
      return _0x371802;
    };
    _0x36d1c9.initPage3 = function () {
      var _0x40ba39 = _0x36d1c9.getPage3Data();
      ui.page3SixinSwitch.checked = _0x40ba39.page3SixinSwitch;
      ui.page3SixinWords.setText(_0x40ba39.page3SixinWords + "");
      ui.page3HuozanMin.setText(_0x40ba39.page3HuozanMin + "");
      ui.page3HuozanMax.setText(_0x40ba39.page3HuozanMax + "");
      ui.page3GuanzhuMin.setText(_0x40ba39.page3GuanzhuMin + "");
      ui.page3GuanzhuMax.setText(_0x40ba39.page3GuanzhuMax + "");
      ui.page3fensiMin.setText(_0x40ba39.page3fensiMin + "");
      ui.page3fensiMax.setText(_0x40ba39.page3fensiMax + "");
      ui.page3ZuopinMin.setText(_0x40ba39.page3ZuopinMin + "");
      ui.page3ZuopinMax.setText(_0x40ba39.page3ZuopinMax + "");
    };
    _0x36d1c9.savePage3 = function () {
      _0x4198e6.put("page3SixinSwitch", ui.page3SixinSwitch.checked);
      _0x4198e6.put("page3SixinWords", ui.page3SixinWords.text());
      _0x4198e6.put("page3HuozanMin", parseInt(ui.page3HuozanMin.text()));
      _0x4198e6.put("page3HuozanMax", parseInt(ui.page3HuozanMax.text()));
      _0x4198e6.put("page3GuanzhuMin", parseInt(ui.page3GuanzhuMin.text()));
      _0x4198e6.put("page3GuanzhuMax", parseInt(ui.page3GuanzhuMax.text()));
      _0x4198e6.put("page3fensiMin", parseInt(ui.page3fensiMin.text()));
      _0x4198e6.put("page3fensiMax", parseInt(ui.page3fensiMax.text()));
      _0x4198e6.put("page3ZuopinMin", parseInt(ui.page3ZuopinMin.text()));
      _0x4198e6.put("page3ZuopinMax", parseInt(ui.page3ZuopinMax.text()));
      toast("保存成功");
    };
  }
  _0x22481b.exports = _0x491486;
}, function (_0x57861f, _0x25415b, _0x19fcaa) {
  var _0x479eec = _0x19fcaa(0);
  function _0x49e6b3(_0x398edc) {
    var _0x4b66ee = this;
    var _0xdc41f3 = _0x19fcaa(1);
    var _0x45f92d = new (_0x19fcaa(6))();
    var _0x47b820 = new (_0x19fcaa(5))();
    var _0x562184 = "粉丝浏览";
    this.index = function () {
      var _0x41e664 = new (_0x19fcaa(4))();
      _0x4b66ee.view();
    };
    this.view = function () {
      var _0x2efb0d = _0xdc41f3.bgColor;
      var _0xfa4fb8 = _0x578db3.getVersionName("com.ss.android.ugc.aweme");
      var _0x34367e = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical bg=\"#ffffff\">\n                    <MyAppBar title=\"".concat(_0x562184, "\" bg=\"").concat(_0x2efb0d, "\" />\n                    <tabs bg=\"#ffffff\" id=\"tabs\" />\n                    <viewpager id=\"viewpager\" >\n                        <ScrollView>\n                            <vertical padding=\"16\">\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在推荐页启动，自动进入粉丝列表浏览作品，筛选精准群体互动引流\" />\n                                <text margin=\"10 0 10 10\" textColor=\"black\" textSize=\"14\" text=\"已安装版本：").concat(_0xfa4fb8, "\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"运行个数\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" gravity=\"right\" id=\"runCount\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"点赞概率\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" gravity=\"right\" id=\"like\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" gravity=\"right\" id=\"follow\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"评论概率\" />\n                                            <input paddingRight=\"20\" layout_weight=\"7\" gravity=\"right\" id=\"comment\" inputType=\"number\" bg=\"#ffffff\" />\n                                        </horizontal>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                        <vertical id=\"defultWords_show\">\n                                            <SwitchWidget-Se7en id=\"defultWords\" marginTop=\"5\" padding='8 8' checked='true' text='使用默认话术' trackColor='#e91e63' background='#ffffff' />\n                                        </vertical>\n                                        <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                        <horizontal weightSum=\"10\" padding=\"10 0 0 0\" >\n                                            <text layout_weight=\"3\" textColor=\"black\" text=\"观看时长（秒）\" layout_gravity=\"left|center\" />\n                                            <horizontal layout_weight=\"7\" gravity=\"right\" paddingRight=\"20\">\n                                                <text textColor=\"black\" text=\"最低:\" />\n                                                <input id=\"watchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                                <text textColor=\"black\" text=\"最高:\" />\n                                                <input id=\"watchTimeMax\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                            </horizontal>\n                                        </horizontal>\n\n                                    </vertical>\n                                </card>\n\n                                <button id=\"start\" bg=\"").concat(_0x2efb0d, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"开始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n\n                        </ScrollView> \n\n                        <ScrollView>\n                            <vertical padding=\"15\">\n\n                                <card id=\"mainbg2\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\">\n                                        <vertical paddingLeft=\"10\" >\n                                            <text textColor=\"black\" text=\"评论内容（换行隔开,多条随机）:\" />\n                                            <input padding=\"0 2 30 2\" hint=\"请输入内容\" h=\"auto\" gravity=\"top\" minLines=\"3\" id=\"pinglunWords\" bg=\"#ffffff\" />\n                                        </vertical>\n                                    </vertical>\n                                </card>\n                                <button id=\"saveShipin\" bg=\"").concat(_0x2efb0d, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"保存\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                            </vertical>\n                        </ScrollView>\n\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0x479eec.setBackgroundRoundedRectangle(ui.mainbg);
      _0x479eec.setBackgroundRoundedRectangle(ui.mainbg2);
      ui.viewpager.setTitles(["基础设置", "话术设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0xdc41f3.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0xdc41f3.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x398edc.view(1);
      });
      ui.start.click(function () {
        var _0x358127 = {
          runCount: ui.runCount.text(),
          like: ui.like.text(),
          follow: ui.follow.text(),
          comment: ui.comment.text(),
          defultWords: ui.defultWords.checked
        };
        _0x4b66ee.saveBaseInfo(_0x358127);
        _0x4b66ee.saveShipinClick(ui);
        dialogs.build({
          title: "确认开始吗？",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x4b66ee.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x4b66ee.initBaseInfo(ui);
      _0x4b66ee.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x4b66ee.saveShipinClick(ui);
      });
    };
    this.end = function () {
      _0x1d633a.stopAnimation();
      threads.shutDownAll();
    };
    var _0x3a5081 = new (_0x19fcaa(8))();
    var _0x578db3 = _0x19fcaa(0);
    var _0x1d633a = new (_0x19fcaa(2))();
    this.start = function () {
      if (!_0x578db3.checkServer()) {
        return false;
      }
      if (!_0x3a5081.launchApp()) {
        return false;
      }
      _0x578db3.showConsole(_0x562184 + ":", device.width * 0.5, device.height * 0.15);
      log("注意 - 粉丝列表开始运行 -");
      _0x1d633a.index();
      _0x1d633a.ClickListener({
        clickStart: function _0x5b11e9() {
          threads.start(function () {
            _0x4b66ee.action();
          });
        },
        clickStop: function _0x381397() {
          _0x4b66ee.end();
        },
        clickExit: function _0x9b5779() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x4b66ee.end();
            _0x1d633a.close();
            _0x578db3.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x136f3f = _0x5d21b2();
      var _0xe542e6 = _0x4b66ee.getBaseInfo();
      var _0x15d650 = _0x4b66ee.getShipinData();
      var _0x14d75d = 0;
      var _0x1d54b9 = 0;
      while (true) {
        var _0x2cb61d = 0;
        var _0x52b22a = id("com.smile.gifmaker:id/avatar_new").visibleToUser().find();
        if (_0x52b22a && _0x52b22a.length == 0) {
          _0x14d75d++;
          log("操作界面异常：" + _0x14d75d);
          sleep(2000);
          if (_0x14d75d > 10) {
            _0x14d75d = 0;
            break;
          }
          continue;
        }
        while (true) {
          var _0x55e813 = _0x136f3f(_0x52b22a);
          if (_0x55e813 == null) {
            _0x2cb61d++;
            if (_0x2cb61d > 5) {
              _0x2cb61d = 0;
              break;
            }
            continue;
          }
          if (_0x55e813.click()) {
            sleep(4000);
            log("跳转：用户主页");
            var _0x37f109 = id("com.smile.gifmaker:id/player_cover_container").visibleToUser().findOnce();
            if (_0x37f109 && _0x37f109.click()) {
              log("跳转：作品");
              sleep(3000);
              log("观看视频");
              sleep(random(_0x15d650.watchTimeMin, _0x15d650.watchTimeMax) * 1000);
              if (random(0, 100) < _0xe542e6.follow) {
                _0x3a5081.clickGuanzhu();
              }
              sleep(random(2000, 4000));
              if (random(0, 100) < _0xe542e6.like) {
                _0x3a5081.clickDianzan();
              }
              sleep(random(2000, 4000));
              if (random(0, 100) < _0xe542e6.comment && _0x3a5081.clickPinglunqu()) {
                _0x3a5081.pinglun(_0x15d650.pinglunWords, _0xe542e6.defultWords);
                var _0x568f14 = id("com.smile.gifmaker:id/tabs_panel_close").clickable(true).findOnce();
                _0x568f14 != null ? (_0x568f14.click(), sleep(3000)) : (back(), sleep(3000));
              }
              log("返回：用户主页");
              var _0x446163 = id("com.smile.gifmaker:id/left_btn").visibleToUser().findOnce();
              _0x446163 && _0x446163.click();
              sleep(4000);
              _0x1d54b9++;
            }
            log("返回：粉丝列表");
            var _0x5a6b82 = id("com.smile.gifmaker:id/left_btn").desc("返回").visibleToUser().findOnce();
            _0x5a6b82 && _0x5a6b82.click();
            sleep(4000);
          }
        }
        _0x3a5081.jumpNextPage();
        if (_0x1d54b9 > _0xe542e6.runCount) {
          break;
        }
      }
      log("结束任务");
    };
    function _0x5d21b2() {
      var _0x37369e = [];
      return function (_0x3ce882) {
        var _0x23094f = _0x3ce882.filter(function (_0xbdd152) {
          return _0x37369e.indexOf(_0x1846a7(_0xbdd152)) == -1;
        });
        if (_0x23094f.length === 0) {
          return null;
        }
        var _0x3a8b21 = _0x23094f[0];
        var _0x1cbd0d = _0x1846a7(_0x3a8b21);
        log("执行用户：" + _0x1cbd0d);
        _0x37369e.push(_0x1cbd0d);
        _0x37369e.length > 50 && _0x37369e.shift();
        try {
          return _0x3a8b21.parent().parent();
        } catch (_0x332713) {
          return null;
        }
      };
    }
    function _0x1846a7(_0x4bf010) {
      try {
        return _0x4bf010.parent().parent().child(1).text();
      } catch (_0x3add0c) {
        return null;
      }
    }
    var _0x5e1eb7 = storages.create("wzke:KS3");
    this.getBaseInfo = function () {
      var _0xd007aa = _0x5e1eb7.get("baseinfo");
      if (_0xd007aa == undefined) {
        _0xd007aa = {};
        _0xd007aa.runCount = 300;
        _0xd007aa.like = 80;
        _0xd007aa.follow = 20;
        _0xd007aa.comment = 50;
        _0xd007aa.defultWords = true;
        _0x5e1eb7.put("baseinfo", _0xd007aa);
      } else {
        if (_0xd007aa.runCount == undefined) {
          _0xd007aa.runCount = 300;
        }
        if (_0xd007aa.like == undefined) {
          _0xd007aa.like = 80;
        }
        if (_0xd007aa.follow == undefined) {
          _0xd007aa.follow = 20;
        }
        if (_0xd007aa.comment == undefined) {
          _0xd007aa.comment = 50;
        }
        if (_0xd007aa.defultWords == undefined) {
          _0xd007aa.defultWords = true;
        }
        _0x5e1eb7.put("baseinfo", _0xd007aa);
      }
      return _0x5e1eb7.get("baseinfo");
    };
    this.initBaseInfo = function (_0x4d6a0f) {
      var _0x295c16 = _0x4b66ee.getBaseInfo();
      _0x4d6a0f.runCount.setText(_0x295c16.runCount.toString());
      _0x4d6a0f.like.setText(_0x295c16.like.toString());
      _0x4d6a0f.follow.setText(_0x295c16.follow.toString());
      _0x4d6a0f.comment.setText(_0x295c16.comment.toString());
      _0x4d6a0f.defultWords.checked = _0x295c16.defultWords;
    };
    this.saveBaseInfo = function (_0x2aa4fa) {
      _0x5e1eb7.put("baseinfo", _0x2aa4fa);
    };
    _0x4b66ee.initShipinView = function (_0xdc5955) {
      try {
        var _0xc9df41 = _0x4b66ee.getShipinData();
        _0xdc5955.watchTimeMin.setText(_0xc9df41.watchTimeMin + "");
        _0xdc5955.watchTimeMax.setText(_0xc9df41.watchTimeMax + "");
        _0xdc5955.pinglunWords.setText(_0xc9df41.pinglunWords + "");
      } catch (_0x4c812d) {
        log("initShipinView", _0x4c812d);
      }
    };
    _0x4b66ee.getShipinData = function () {
      var _0x50925f = {
        watchTimeMin: _0x5e1eb7.get("watchTimeMin") != undefined ? _0x5e1eb7.get("watchTimeMin") : 3,
        watchTimeMax: _0x5e1eb7.get("watchTimeMax") != undefined ? _0x5e1eb7.get("watchTimeMax") : 18,
        pinglunWords: _0x5e1eb7.get("pinglunWords") != undefined ? _0x5e1eb7.get("pinglunWords") : _0x45f92d.pinglun
      };
      return _0x50925f;
    };
    _0x4b66ee.saveShipinClick = function (_0x5d98d3) {
      _0x5e1eb7.put("watchTimeMin", parseInt(_0x5d98d3.watchTimeMin.text()));
      _0x5e1eb7.put("watchTimeMax", parseInt(_0x5d98d3.watchTimeMax.text()));
      _0x5e1eb7.put("pinglunWords", _0x5d98d3.pinglunWords.text());
      toast("保存成功");
    };
  }
  _0x57861f.exports = _0x49e6b3;
}, function (_0x1be9f0, _0x20386c, _0x469f49) {
  function _0x502cb1(_0x327017) {
    var _0x38f62b = this;
    var _0xddd3b9 = _0x469f49(1);
    var _0x57e2d3 = _0xddd3b9.bgColor;
    var _0x3d652c = _0x469f49(6);
    this.index = function () {
      _0x38f62b.view();
    };
    this.view = function () {
      var _0x8d9fb = _0x327017.getLanguageType();
      var _0x2cae43 = new _0x3d652c(_0x8d9fb.languageType);
      var _0x4b757b = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical>\n\n                    <text bg=\"#ffffff\" paddingTop=\"".concat(_0x4b757b, "px\" id=\"back\" textColor=\"black\" padding=\"15 10\" textSize=\"18dp\" text=\" ").concat(_0x2cae43["返回"], "\" />\n\n                    <ScrollView>\n                        <vertical bg=\"#ffffff\">\n                            <text text=\"精准引流\" margin=\"10 10 10 20\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                            <horizontal padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                <text gravity=\"left|center\" minHeight=\"40\" textColor=\"black\" text=\"").concat(_0x2cae43["功能介绍"], ":  \" />\n                                <vertical >\n                                    <text marginTop=\"10\" gravity=\"left|top\" minHeight=\"40\" text=\"").concat(_0x2cae43["关注点赞评论"], "\" bg=\"#ffffff\" />\n                                </vertical>\n\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                <text gravity=\"left|center\" h=\"40\" textColor=\"black\" text=\"").concat(_0x2cae43["运行界面"], ":  \" />\n                                <vertical marginTop=\"5\">\n                                    <text gravity=\"left|center\" h=\"30\" text=\"Other's User Center - Follewers\" bg=\"#ffffff\" />\n                                    <text gravity=\"left|center\" h=\"30\" text=\"搜索用户粉丝列表运行\" bg=\"#ffffff\" />\n                                </vertical>\n\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"10\"    >\n                                <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"").concat(_0x2cae43["观看个数"], "\" />\n                                <input layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1ShipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"10\"    >\n                                <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"").concat(_0x2cae43["关注概率"], "（0-100%）\" />\n                                <input layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1GuanzhuRate\" inputType=\"number\" bg=\"#ffffff\" />\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"10\"   >\n                                <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"").concat(_0x2cae43["点赞概率"], "（0-100%）\" />\n                                <input layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1DianzanRate\" inputType=\"number\" bg=\"#ffffff\" />\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"10\"   >\n                                <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"").concat(_0x2cae43["评论概率"], "（0-100%）\" />\n                                <input layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1PinglunRate\" inputType=\"number\" bg=\"#ffffff\" />\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <frame padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                <text marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"").concat(_0x2cae43["评论内容"], " （").concat(_0x2cae43["换行多条"], "）\" />\n                                <input marginTop=\"25\" hint=\"Please enter\" h=\"auto\" gravity=\"left|top\" minLines=\"3\" id=\"page1PinglunWords\" bg=\"#ffffff\" />\n                            </frame>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n\n                            <horizontal weightSum=\"10\" gravity=\"center_vertical\"   >\n                                <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"").concat(_0x2cae43["观看间隔"], " \" />\n                                <horizontal layout_weight=\"7\" gravity=\"right\">\n                                    <text textColor=\"black\" text=\"min:\" />\n                                    <input id=\"page1WatchTimeMin\" minWidth=\"50\" gravity=\"center\" inputType=\"number\" bg=\"#ffffff\" />\n                                    <text textColor=\"black\" text=\"max:\" />\n                                    <input id=\"page1WatchTimeMax\" paddingRight=\"30\" gravity=\"right\" minWidth=\"80\" inputType=\"number\" bg=\"#ffffff\" />\n                                </horizontal>\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <button id=\"page1Save\" bg=\"").concat(_0x57e2d3, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"").concat(_0x2cae43["开始"], " \" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                        </vertical>\n                    </ScrollView>\n                </vertical>\n            </drawer>\n        "));
      ui.back.click(function () {
        _0x327017.view(1);
      });
      _0x38f62b.initPage1();
      ui.page1Save.click(function () {
        _0x38f62b.page1Save();
      });
    };
    var _0x50f85b = storages.create("wzke:Tkjzyl");
    _0x38f62b.getPage1Data = function () {
      var _0x181f41 = {
        page1ShipinCount: _0x50f85b.get("page1ShipinCount") != undefined ? _0x50f85b.get("page1ShipinCount") : 3,
        page1WatchTimeMin: _0x50f85b.get("page1WatchTimeMin") != undefined ? _0x50f85b.get("page1WatchTimeMin") : 1,
        page1WatchTimeMax: _0x50f85b.get("page1WatchTimeMax") != undefined ? _0x50f85b.get("page1WatchTimeMax") : 3,
        page1GuanzhuRate: _0x50f85b.get("page1GuanzhuRate") != undefined ? _0x50f85b.get("page1GuanzhuRate") : 100,
        page1DianzanRate: _0x50f85b.get("page1DianzanRate") != undefined ? _0x50f85b.get("page1DianzanRate") : 100,
        page1DianzanMin: _0x50f85b.get("page1DianzanMin") != undefined ? _0x50f85b.get("page1DianzanMin") : 0,
        page1DianzanMax: _0x50f85b.get("page1DianzanMax") != undefined ? _0x50f85b.get("page1DianzanMax") : 100000,
        page1PinglunRate: _0x50f85b.get("page1PinglunRate") != undefined ? _0x50f85b.get("page1PinglunRate") : 100,
        page1PinglunMin: _0x50f85b.get("page1PinglunMin") != undefined ? _0x50f85b.get("page1PinglunMin") : 0,
        page1PinglunMax: _0x50f85b.get("page1PinglunMax") != undefined ? _0x50f85b.get("page1PinglunMax") : 100000,
        page1PinglunWords: _0x50f85b.get("page1PinglunWords") != undefined ? _0x50f85b.get("page1PinglunWords") : "1\n2\n3"
      };
      return _0x181f41;
    };
    _0x38f62b.initPage1 = function () {
      var _0x229788 = _0x38f62b.getPage1Data();
      ui.page1ShipinCount.setText(_0x229788.page1ShipinCount + "");
      ui.page1WatchTimeMin.setText(_0x229788.page1WatchTimeMin + "");
      ui.page1WatchTimeMax.setText(_0x229788.page1WatchTimeMax + "");
      ui.page1GuanzhuRate.setText(_0x229788.page1GuanzhuRate + "");
      ui.page1DianzanRate.setText(_0x229788.page1DianzanRate + "");
      ui.page1PinglunRate.setText(_0x229788.page1PinglunRate + "");
      ui.page1PinglunWords.setText(_0x229788.page1PinglunWords);
    };
    _0x38f62b.page1Save = function () {
      _0x50f85b.put("page1ShipinCount", parseInt(ui.page1ShipinCount.text()));
      _0x50f85b.put("page1WatchTimeMin", parseInt(ui.page1WatchTimeMin.text()));
      _0x50f85b.put("page1WatchTimeMax", parseInt(ui.page1WatchTimeMax.text()));
      _0x50f85b.put("page1GuanzhuRate", parseInt(ui.page1GuanzhuRate.text()));
      _0x50f85b.put("page1DianzanRate", parseInt(ui.page1DianzanRate.text()));
      _0x50f85b.put("page1PinglunRate", parseInt(ui.page1PinglunRate.text()));
      _0x50f85b.put("page1PinglunWords", ui.page1PinglunWords.text());
      dialogs.build({
        title: "success",
        positive: "save and start",
        negative: "save"
      }).on("positive", function () {
        _0x38f62b.start();
      }).on("negative", function () {
        toast("success");
      }).show();
    };
    var _0x333e0e = _0x469f49(0);
    var _0x1bfb8f = _0x469f49(9);
    var _0x37ca83 = new (_0x469f49(2))();
    this.start = function () {
      if (!_0x333e0e.checkServer()) {
        return false;
      }
      _0x333e0e.showConsole("journal");
      log("Please enter the required video page of TTK");
      home();
      _0x37ca83.index();
      _0x37ca83.ClickListener({
        clickStart: function _0x47e603() {
          threads.start(function () {
            _0x38f62b.action();
          });
        },
        clickStop: function _0x38dc81() {
          threads.shutDownAll();
          log("stop");
        },
        clickExit: function _0x39b2d0() {
          dialogs.build({
            title: "Are you sure you want to close",
            positive: "ok",
            negative: "cancel"
          }).on("positive", function () {
            _0x37ca83.close();
            _0x333e0e.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x112655 = _0x38f62b.getPage1Data();
      var _0x3c329a = 0;
      while (true) {
        var _0x21d600 = id("com.zhiliaoapp.musically:id/app").visibleToUser().find();
        _0x21d600.forEach(function (_0x433221) {
          if (_0x51ecee(_0x433221)) {
            sleep(4000);
            var _0xd156f3 = id("com.zhiliaoapp.musically:id/lts").className("android.widget.TextView").findOnce();
            if (_0xd156f3 && parseInt(_0xd156f3.text()) > 50 && _0x189c3f(text("Followers").className("android.widget.TextView").findOnce())) {
              sleep(4000);
              while (true) {
                var _0x124a36 = id("com.zhiliaoapp.musically:id/app").visibleToUser().find();
                _0x124a36.forEach(function (_0x30909f) {
                  if (_0x51ecee(_0x30909f)) {
                    sleep(4000);
                    if (_0x1bfb8f.jumpUserCenterToZuopin()) {
                      log("watch video");
                      sleep(random(3000, 6000));
                      if (random(1, 100) < _0x112655.page1GuanzhuRate) {
                        _0x1bfb8f.actionGuanzhu();
                      }
                      if (random(1, 100) < _0x112655.page1DianzanRate) {
                        _0x1bfb8f.actionDianzan();
                      }
                      random(1, 100) < _0x112655.page1PinglunRate && _0x1bfb8f.jumpClickPinglunqu() && (_0x1bfb8f.actionPinglun(_0x112655.page1PinglunWords), _0x1bfb8f.jumpCloseinglunqu());
                      _0x3c329a++;
                      var _0x23f989 = desc("Back").className("android.widget.ImageView").visibleToUser().findOnce();
                      _0x23f989 && _0x23f989.click();
                      sleep(4000);
                    }
                    back();
                    sleep(4000);
                  }
                });
                if (textStartsWith("Showing 50 of").visibleToUser().findOnce() || _0x3c329a > _0x112655.page1ShipinCount) {
                  break;
                }
                _0x1bfb8f.pageSwiperUp();
              }
              var _0x3418db = id("android:id/text1").textStartsWith("Followers").findOnce();
              _0x3418db && back();
              sleep(3000);
            }
            back();
            sleep(3000);
          }
        });
        var _0x3ff3b9 = text("Followers").className("android.widget.TextView").visibleToUser().findOnce();
        _0x3ff3b9 && back();
        if (textStartsWith("Showing 50 of").visibleToUser().findOnce() || _0x3c329a > _0x112655.page1ShipinCount) {
          break;
        }
        _0x1bfb8f.pageSwiperUp();
      }
      alert("END");
    };
    function _0x51ecee(_0x36c6d0) {
      try {
        if (_0x36c6d0.parent().parent().click()) {
          return true;
        }
        return false;
      } catch (_0x4a0a4c) {
        return false;
      }
    }
    function _0x189c3f(_0x4d7944) {
      try {
        if (_0x4d7944.parent().click()) {
          return true;
        }
        return false;
      } catch (_0x18f6ea) {
        return false;
      }
    }
  }
  _0x1be9f0.exports = _0x502cb1;
}, function (_0x56519c, _0x305db1, _0x3f4afd) {
  function _0x5c2ac6(_0x9842b2) {
    var _0x2d26d3 = this;
    var _0x5bb8d0 = _0x3f4afd(1);
    var _0x2464ba = _0x5bb8d0.bgColor;
    var _0x4d988e = _0x3f4afd(6);
    this.index = function () {
      _0x2d26d3.view();
    };
    this.view = function () {
      var _0x469b1d = _0x9842b2.getLanguageType();
      var _0x883634 = new _0x4d988e(_0x469b1d.languageType);
      var _0x1e11c8 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n            <drawer>\n                <vertical>\n\n                    <text bg=\"#ffffff\" paddingTop=\"".concat(_0x1e11c8, "px\" id=\"back\" textColor=\"black\" padding=\"15 10\" textSize=\"18dp\" text=\" ").concat(_0x883634["返回"], "\" />\n\n                    <ScrollView>\n                        <vertical bg=\"#ffffff\">\n                            <text text=\"榜单私信\" margin=\"10 10 10 20\" gravity=\"center\" w=\"*\" textColor=\"black\" textSize=\"20\" />\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                            <horizontal padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                <text gravity=\"left|center\" h=\"40\" textColor=\"black\" text=\"").concat(_0x883634["运行界面"], ":  \" />\n                                <vertical marginTop=\"5\">\n                                    <text gravity=\"left|center\" h=\"30\" text=\"打开直播间榜单运行\" bg=\"#ffffff\" />\n                                </vertical>\n\n                            </horizontal>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <horizontal weightSum=\"10\"    >\n                                <text layout_weight=\"3\" paddingLeft=\"20\" textColor=\"black\" text=\"运行个数\" />\n                                <input layout_weight=\"7\" paddingRight=\"30\" hint=\"Please enter\" gravity=\"right\" id=\"page1ShipinCount\" inputType=\"number\" bg=\"#ffffff\" />\n                            </horizontal>\n\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <frame padding=\"20 0 20 0\" w=\"*\" h=\"auto\">\n                                <text marginTop=\"8\" h=\"20\" textColor=\"black\" text=\"发送内容 （").concat(_0x883634["换行多条"], "）\" />\n                                <input marginTop=\"25\" hint=\"Please enter\" h=\"auto\" gravity=\"left|top\" minLines=\"3\" id=\"page1PinglunWords\" bg=\"#ffffff\" />\n                            </frame>\n                            <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                            <button id=\"page1Save\" bg=\"").concat(_0x2464ba, "\" layout_margin='30' textSize=\"20\" layout_gravity=\"center\" text=\"").concat(_0x883634["开始"], " \" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                        </vertical>\n                    </ScrollView>\n                </vertical>\n            </drawer>\n        "));
      ui.back.click(function () {
        _0x9842b2.view(1);
      });
      _0x2d26d3.initPage1();
      ui.page1Save.click(function () {
        _0x2d26d3.page1Save();
      });
    };
    var _0x4da2e6 = storages.create("wzke:Tkbdsx");
    _0x2d26d3.getPage1Data = function () {
      var _0x34ae28 = {
        page1ShipinCount: _0x4da2e6.get("page1ShipinCount") != undefined ? _0x4da2e6.get("page1ShipinCount") : 50,
        page1PinglunWords: _0x4da2e6.get("page1PinglunWords") != undefined ? _0x4da2e6.get("page1PinglunWords") : "Hello\nHi\nNice to see you"
      };
      return _0x34ae28;
    };
    _0x2d26d3.initPage1 = function () {
      var _0x37e002 = _0x2d26d3.getPage1Data();
      ui.page1ShipinCount.setText(_0x37e002.page1ShipinCount + "");
      ui.page1PinglunWords.setText(_0x37e002.page1PinglunWords);
    };
    _0x2d26d3.page1Save = function () {
      _0x4da2e6.put("page1ShipinCount", parseInt(ui.page1ShipinCount.text()));
      _0x4da2e6.put("page1PinglunWords", ui.page1PinglunWords.text());
      dialogs.build({
        title: "success",
        positive: "save and start",
        negative: "save"
      }).on("positive", function () {
        _0x2d26d3.start();
      }).on("negative", function () {
        toast("success");
      }).show();
    };
    var _0x17f9f9 = _0x3f4afd(0);
    var _0x157aad = _0x3f4afd(9);
    var _0x1847a6 = new (_0x3f4afd(2))();
    this.start = function () {
      if (!_0x17f9f9.checkServer()) {
        return false;
      }
      _0x17f9f9.showConsole("journal");
      log("Please enter the required video page of TTK");
      home();
      _0x1847a6.index();
      _0x1847a6.ClickListener({
        clickStart: function _0x13e777() {
          threads.start(function () {
            _0x2d26d3.action();
          });
        },
        clickStop: function _0x4f4a59() {
          threads.shutDownAll();
          log("stop");
        },
        clickExit: function _0x4bbaa3() {
          dialogs.build({
            title: "Are you sure you want to close",
            positive: "ok",
            negative: "cancel"
          }).on("positive", function () {
            _0x1847a6.close();
            _0x17f9f9.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0xb45e88 = _0x2d26d3.getPage1Data();
      while (true) {
        if (textStartsWith("Showing the").findOnce()) {
          break;
        }
        var _0x219c83 = filter(function (_0x36ce93) {
          var _0xa45cf9 = _0x36ce93.text();
          if (_0xa45cf9.length > 4 && _0xa45cf9.indexOf("Send ") == -1 && _0xa45cf9 != "-" && _0xa45cf9.indexOf("No.") == -1 && _0x36ce93.bounds().bottom > device.height * 0.1) {
            return true;
          }
          return false;
        });
        var _0x514072 = _0x219c83.className("com.lynx.tasm.behavior.ui.LynxFlattenUI").textMatches(/^(?!\s*$)(?![0-9]+$)([^+])+$/).clickable(true).find();
        try {
          _0x514072.forEach(function (_0x3abdd1) {
            if (click(_0x3abdd1.bounds().centerX(), _0x3abdd1.bounds().centerY())) {
              sleep(4000);
              log(_0x3abdd1.text());
              var _0xb5c6c9 = id("com.zhiliaoapp.musically:id/aob").visibleToUser().findOnce();
              if (_0xb5c6c9 && _0xb5c6c9.click()) {
                sleep(4000);
                var _0x4db74e = id("com.zhiliaoapp.musically:id/d7j").text("Message").findOnce();
                if (_0x4db74e && _0x4db74e.parent().parent().parent().parent().click()) {
                  sleep(4000);
                  var _0x27cfff = _0xb45e88.page1PinglunWords.split("\n");
                  var _0x1930c5 = _0x27cfff[random(0, _0x27cfff.length - 1)];
                  if (setText(_0x1930c5)) {
                    sleep(1500);
                    var _0x1723ff = id("com.zhiliaoapp.musically:id/h1b").findOnce();
                    try {
                      _0x1723ff.child(1).child(0).click();
                      sleep(3000);
                    } catch (_0xd6988c) {}
                    log("action:" + _0x1930c5);
                  }
                  var _0xf30430 = desc("Back").className("android.widget.ImageView").findOnce();
                  _0xf30430 && _0xf30430.parent().parent().click();
                  sleep(3000);
                }
                var _0x1e48b6 = id("com.zhiliaoapp.musically:id/jwp").findOnce();
                _0x1e48b6 && back();
                sleep(3000);
              }
            }
          });
        } catch (_0x279d55) {
          log(_0x279d55);
        }
        _0x157aad.shipinSwiperUp();
      }
    };
  }
  _0x56519c.exports = _0x5c2ac6;
}, function (_0x1bda41, _0x34fc57, _0x22d4c0) {
  function _0x57dcf2(_0x3df7e0) {
    var _0x397a28 = this;
    var _0x3df7e0 = _0x3df7e0;
    var _0x4b7661 = _0x22d4c0(1);
    var _0x427565 = _0x22d4c0(43);
    var _0x4bb389 = new (_0x22d4c0(4))();
    var _0x5efdb9 = _0x4b7661.bgColor;
    var _0x4f48aa = null;
    var _0x12808e = null;
    var _0x5ebe1e = storages.create("wzke:BZ1");
    _0x397a28.index = function () {
      _0x4f48aa = _0x51a2d3.createPopWin();
      var _0x32ada6 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x20137e = _0x5efdb9;
      var _0x5c1b81 = "http://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/BZ.jpg";
      _0x12808e = ui.inflate("\n            <drawer>\n                <vertical id=\"BZ1\" bg=\"".concat(_0x5efdb9, "\" alpha=\"1\">\n                    <appbar bg=\"").concat(_0x5efdb9, "\">\n                        <toolbar paddingTop=\"").concat(_0x32ada6, "px\" paddingBottom=\"5\" id=\"back\" title=\"返回\" />\n                        <tabs id=\"tabs\" />\n                    </appbar>\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" radius=\"24\">\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text marginTop=\"5\" textSize=\"18\" text=\"〓 运行界面\" />\n                                <text  >视频界面</text>\n                                <img w=\"80\" h=\"160\" id=\"yunxingImg\" src=\"").concat(_0x5c1b81, "\" />\n                                <img marginTop=\"15\" marginBottom=\"15\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text textSize=\"18\" text=\"〓 功能\" />\n                                <text  >概率关注 - 概率点赞 - 概率评论</text>\n                                <img marginTop=\"10\" marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <card layout_gravity=\"center\" w=\"auto\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" cardBackgroundColor=\"").concat(_0x20137e, "\" cardUseCompatPadding=\"true\" >\n                                    <text text=\"开 始\" padding=\"30 10\" id=\"start\" bg=\"").concat(_0x20137e, "\" textColor=\"#ffffff\" textSize=\"22\" gravity=\"center\" />\n                                </card>\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>  <vertical id=\"video\"> </vertical>    </ScrollView>\n\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0x12808e.yunxingImg.click(function () {
        _0x51a2d3.alertImg(_0x5c1b81);
      });
      _0x12808e.start.click(function () {
        _0x397a28.start();
      });
      _0x12808e.viewpager.setTitles(["万能引流", "视频设置"]);
      _0x12808e.tabs.setupWithViewPager(_0x12808e.viewpager);
      _0x12808e.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x4b7661.selectedTabIndicatorColor);
      _0x12808e.tabs.selectedTabIndicatorHeight = _0x4b7661.selectedTabIndicatorHeight;
      _0x12808e.back.click(function () {
        _0x4f48aa.dismiss();
      });
      _0x4f48aa.setContentView(_0x12808e);
      _0x12808e.video.addView(_0x397a28.CreateVideoView());
      ui.run(function () {
        _0x4f48aa.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
        _0x4f48aa.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      });
      _0x4f48aa.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x397a28.getVideoData = function () {
      var _0x51c2b7 = {
        videoCount: _0x5ebe1e.get("videoCount") != undefined ? _0x5ebe1e.get("videoCount") : 999,
        videoFollowRate: _0x5ebe1e.get("videoFollowRate") != undefined ? _0x5ebe1e.get("videoFollowRate") : 100,
        videoLikeRate: _0x5ebe1e.get("videoLikeRate") != undefined ? _0x5ebe1e.get("videoLikeRate") : 100,
        videoCommentRate: _0x5ebe1e.get("videoCommentRate") != undefined ? _0x5ebe1e.get("videoCommentRate") : 100,
        videoCommentWords: _0x5ebe1e.get("videoCommentWords") != undefined ? _0x5ebe1e.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行"
      };
      return _0x51c2b7;
    };
    _0x397a28.CreateVideoView = function () {
      var _0x240d68 = _0x5efdb9;
      var _0x336975 = ui.inflate("\n            <vertical bg=\"#ffffff\" padding=\"0 16\">\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"执行数量（个）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCount\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoFollowRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"点赞概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoLikeRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"评论概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCommentRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <vertical padding=\"15 5 10 0\" w=\"*\" >\n                    <horizontal h=\"25\" gravity=\"left|center\" >\n                        <text w=\"auto\" textColor=\"black\" text=\"评论内容（换行隔开）\" />\n                        <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" color=\"white\" />\n                        <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" color=\"white\" />\n                    </horizontal>\n                    <input textSize=\"14\" gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"videoCommentWords\" bg=\"#ffffff\" />\n                </vertical>\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"videoViewContent\" bg=\"".concat(_0x240d68, "\" color=\"#ffffff\" textSize=\"20\" layout_gravity=\"center\" text=\"保存视频设置\" w=\"*\" />\n                </card>\n                <vertical h=\"400\" w=\"auto\">\n                </vertical>\n            </vertical>\n        "));
      _0x51a2d3.setBtnRadius(_0x336975.videoCommentWordsCopy, _0x240d68);
      _0x51a2d3.setBtnRadius(_0x336975.videoCommentWordsPaste, _0x240d68);
      _0x336975.videoCommentWordsCopy.click(function () {
        setClip(_0x336975.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x336975.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x336975.videoCommentWordsPaste.click(function () {
        var _0x4b7990 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4b7990,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x336975.videoCommentWords.setText(_0x4b7990);
        }).show();
      });
      var _0x337204 = _0x397a28.getVideoData();
      _0x336975.videoCount.setText(_0x337204.videoCount + "");
      _0x336975.videoFollowRate.setText(_0x337204.videoFollowRate + "");
      _0x336975.videoLikeRate.setText(_0x337204.videoLikeRate + "");
      _0x336975.videoCommentRate.setText(_0x337204.videoCommentRate + "");
      _0x336975.videoCommentWords.setText(_0x337204.videoCommentWords);
      _0x336975.videoViewContent.click(function () {
        _0x5ebe1e.put("videoCount", parseInt(_0x336975.videoCount.text()));
        _0x5ebe1e.put("videoFollowRate", parseInt(_0x336975.videoFollowRate.text()));
        _0x5ebe1e.put("videoLikeRate", parseInt(_0x336975.videoLikeRate.text()));
        _0x5ebe1e.put("videoCommentRate", parseInt(_0x336975.videoCommentRate.text()));
        _0x5ebe1e.put("videoCommentWords", _0x336975.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x336975;
    };
    var _0x51a2d3 = _0x22d4c0(0);
    var _0x1e97b7 = new (_0x22d4c0(2))();
    _0x397a28.start = function () {
      dialogs.build({
        title: "开始任务",
        content: "确定要开始吗?",
        positive: "确定",
        negative: "取消"
      }).on("positive", function () {
        if (!_0x51a2d3.checkServer()) {
          return false;
        }
        app.launchApp("哔哩哔哩");
        _0x51a2d3.showConsole("精准引流: ");
        var _0x53581e = _0x397a28.getVideoData();
        _0x1e97b7.index();
        _0x1e97b7.ClickListener({
          clickStart: function _0x18e15d() {
            threads.start(function () {
              _0x397a28.action();
            });
          },
          clickStop: function _0x2740da() {
            toastLog("停止");
            threads.shutDownAll();
          },
          clickExit: function _0x369b63() {
            dialogs.build({
              title: "确认要关闭吗",
              positive: "确认",
              negative: "取消"
            }).on("positive", function () {
              threads.shutDownAll();
              _0x1e97b7.close();
              _0x51a2d3.closeConsole();
            }).show();
          }
        });
      }).show();
    };
    this.action = function () {
      var _0x329220 = _0x397a28.getVideoData();
      var _0x2e7105 = 1;
      while (_0x2e7105 <= _0x329220.videoCount) {
        log("当前数量:", _0x2e7105);
        random(0, 100) < _0x329220.videoFollowRate && _0x427565.clickGuanzhu();
        random(0, 100) < _0x329220.videoLikeRate && _0x427565.clickDianzan();
        if (random(0, 100) < _0x329220.videoCommentRate) {
          if (_0x427565.jumpShipinToPinglun() && _0x427565.clickPinglunquInput()) {
            var _0xcf10d1 = _0x329220.videoCommentWords.split("\n");
            var _0x22bff9 = _0xcf10d1[random(0, _0xcf10d1.length - 1)];
            _0x427565.pinglunqu_sendContent(_0x22bff9);
            back();
            sleep(2000);
          }
        }
        _0x2e7105++;
        _0x427565.actionSwipUp();
        sleep(2000);
      }
      threads.shutDownAll();
      log("本次任务结束");
    };
  }
  _0x1bda41.exports = _0x57dcf2;
}, function (_0x297a83, _0x5b8a1c, _0x31f696) {
  var _0x106893 = _0x31f696(0);
  var _0x15a9e9 = {
    test: function () {
      log("test");
    },
    clickGuanzhu: function () {
      log("关注");
      var _0x5129d5 = 0;
      var _0x20a798 = 0;
      var _0x4fbcc1 = device.width;
      var _0x2f011f = device.height;
      var _0x3d1687 = boundsInside(_0x5129d5, _0x20a798, _0x4fbcc1, _0x2f011f).filter(function (_0x260759) {
        return _0x260759.bounds().width() > 0 && _0x260759.bounds().height() > 0;
      });
      var _0x2dbbd6 = _0x3d1687.id("tv.danmaku.bili:id/follow").clickable(true).findOne(2000);
      if (_0x2dbbd6 == null) {
        return;
      }
      _0x2dbbd6.click();
      sleep(2000);
      var _0x1ee46e = boundsInside(_0x5129d5, _0x20a798, _0x4fbcc1, _0x2f011f).filter(function (_0x2d7522) {
        return _0x2d7522.bounds().width() > 0 && _0x2d7522.bounds().height() > 0;
      });
      var _0x4bb135 = _0x1ee46e.text("取消").findOne(2000);
      if (_0x4bb135 != null) {
        _0x4bb135.click();
        sleep(2000);
        return;
      }
    },
    clickDianzan: function () {
      log("点赞");
      var _0x2e0de0 = 0;
      var _0x6e53b9 = 0;
      var _0x197bc5 = device.width;
      var _0x2a8e96 = device.height;
      var _0x294b83 = boundsInside(_0x2e0de0, _0x6e53b9, _0x197bc5, _0x2a8e96).filter(function (_0x3c404c) {
        return _0x3c404c.bounds().width() > 0 && _0x3c404c.bounds().height() > 0;
      });
      var _0x3b9b78 = _0x294b83.id("tv.danmaku.bili:id/like_icon").findOnce();
      if (_0x3b9b78 != null) {
        _0x3b9b78.parent().click();
        sleep(2000);
        return true;
      }
    },
    getVideoTpye: function () {
      var _0x279853 = 0;
      var _0x52e662 = 0;
      var _0x294931 = device.width;
      var _0x4f259f = device.height;
      var _0x61fc53 = boundsInside(_0x279853, _0x52e662, _0x294931, _0x4f259f).textContains("广告").filter(function (_0x43e8ca) {
        return _0x43e8ca.bounds().width() > 0 && _0x43e8ca.bounds().height() > 0;
      });
      var _0x2af7a8 = _0x61fc53.findOnce();
      if (_0x2af7a8 != null) {
        return "广告";
      }
      return "视频";
    },
    jumpShipinToPinglun: function () {
      var _0x1aba10 = 0;
      var _0xf71c5b = 0;
      var _0x29054d = device.width;
      var _0x53e9d9 = device.height;
      var _0x3b7dd8 = boundsInside(_0x1aba10, _0xf71c5b, _0x29054d, _0x53e9d9).filter(function (_0x46e207) {
        return _0x46e207.bounds().width() > 0 && _0x46e207.bounds().height() > 0;
      });
      var _0x4e369c = _0x3b7dd8.id("tv.danmaku.bili:id/comment_icon").findOne(2000);
      return _0x4e369c != null ? (_0x4e369c.parent().click(), sleep(2000), true) : false;
    },
    clickPinglunquInput: function () {
      var _0x588a22 = 0;
      var _0x4fa55b = 0;
      var _0x591edc = device.width;
      var _0x5be251 = device.height;
      var _0x8d4a3d = boundsInside(_0x588a22, _0x4fa55b, _0x591edc, _0x5be251).filter(function (_0xfec09c) {
        return _0xfec09c.bounds().width() > 0 && _0xfec09c.bounds().height() > 0;
      });
      var _0x549a11 = _0x8d4a3d.className("android.widget.EditText").findOne(2000);
      return _0x549a11 != null ? (_0x549a11.click(), sleep(2000), true) : false;
    },
    pinglunqu_sendContent: function (_0x49bef9) {
      log("评论", _0x49bef9);
      if (!setText(_0x49bef9)) {
        input(_0x49bef9);
      }
      sleep(2000);
      var _0x1373a7 = text("发布").findOne(3000);
      if (_0x1373a7 != null) {
        _0x1373a7.parent().click();
        sleep(2000);
        for (var _0x5ef68c = 0; _0x5ef68c < 2; _0x5ef68c++) {
          _0x1373a7 = text("发布").findOnce();
          _0x1373a7 != null && (back(), sleep(1000));
          sleep(1000);
        }
      }
    },
    actionSwipUp: function () {
      for (var _0x369a48 = 0; _0x369a48 < 1; _0x369a48++) {
        var _0x58f328 = device.width * 0.7 + random(0, 20);
        var _0x4f01bc = device.height * 0.7;
        var _0xeb091b = device.width * 0.6 + random(20, 40);
        var _0x59cd91 = device.height * 0.1;
        swipe(_0x58f328, _0x4f01bc, _0xeb091b, _0x59cd91, 120);
        sleep(1000);
      }
    }
  };
  _0x297a83.exports = _0x15a9e9;
}, function (_0x4c90d8, _0x4af2ab) {
  function _0x391283(_0x2d902e) {}
  _0x4c90d8.exports = _0x391283;
}, function (_0x414c59, _0x373793, _0x190ffe) {
  function _0x41d7bc(_0x4ab326) {
    var _0x12a5f5 = this;
    var _0x4ab326 = _0x4ab326;
    var _0x2d2f60 = _0x190ffe(1);
    var _0x3df4f3 = _0x190ffe(46);
    var _0x2dfd32 = new (_0x190ffe(4))();
    var _0x196f89 = _0x2d2f60.bgColor;
    var _0x1a9f91 = null;
    var _0xa7cec0 = null;
    var _0x34fc18 = storages.create("wzke:XHS1");
    _0x12a5f5.index = function () {
      _0x1a9f91 = _0x1027e3.createPopWin();
      var _0x14c155 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x16d6b3 = _0x196f89;
      var _0x1ef9bb = "http://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/XHS.jpg";
      _0xa7cec0 = ui.inflate("\n            <drawer>\n                <vertical id=\"XHS1\" bg=\"".concat(_0x196f89, "\" alpha=\"1\">\n                    <appbar bg=\"").concat(_0x196f89, "\">\n                        <toolbar paddingTop=\"").concat(_0x14c155, "px\" paddingBottom=\"5\" id=\"back\" title=\"返回\" />\n                        <tabs id=\"tabs\" />\n                    </appbar>\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" radius=\"24\">\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text marginTop=\"5\" textSize=\"18\" text=\"〓 运行界面\" />\n                                <text  >视频界面</text>\n                                <img w=\"80\" h=\"160\" id=\"yunxingImg\" src=\"").concat(_0x1ef9bb, "\" />\n                                <img marginTop=\"15\" marginBottom=\"15\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <text textSize=\"18\" text=\"〓 参数设置\" />\n                                <text  >概率关注 - 概率点赞 - 概率评论</text>\n                                <img marginTop=\"10\" marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                                <card layout_gravity=\"center\" w=\"auto\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" cardBackgroundColor=\"").concat(_0x16d6b3, "\" cardUseCompatPadding=\"true\" >\n                                    <text text=\"开 始\" padding=\"30 10\" id=\"start\" bg=\"").concat(_0x16d6b3, "\" textColor=\"#ffffff\" textSize=\"22\" gravity=\"center\" />\n                                </card>\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>  <vertical id=\"video\"> </vertical>    </ScrollView>\n\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      _0xa7cec0.yunxingImg.click(function () {
        _0x1027e3.alertImg(_0x1ef9bb);
      });
      _0xa7cec0.start.click(function () {
        _0x12a5f5.start();
      });
      _0xa7cec0.viewpager.setTitles(["万能引流", "视频设置"]);
      _0xa7cec0.tabs.setupWithViewPager(_0xa7cec0.viewpager);
      _0xa7cec0.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x2d2f60.selectedTabIndicatorColor);
      _0xa7cec0.tabs.selectedTabIndicatorHeight = _0x2d2f60.selectedTabIndicatorHeight;
      _0xa7cec0.back.click(function () {
        _0x1a9f91.dismiss();
      });
      _0x1a9f91.setContentView(_0xa7cec0);
      _0xa7cec0.video.addView(_0x12a5f5.CreateVideoView());
      ui.run(function () {
        _0x1a9f91.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
        _0x1a9f91.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      });
      _0x1a9f91.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x12a5f5.getVideoData = function () {
      var _0x5d522b = {
        videoCount: _0x34fc18.get("videoCount") != undefined ? _0x34fc18.get("videoCount") : 999,
        videoFollowRate: _0x34fc18.get("videoFollowRate") != undefined ? _0x34fc18.get("videoFollowRate") : 100,
        videoLikeRate: _0x34fc18.get("videoLikeRate") != undefined ? _0x34fc18.get("videoLikeRate") : 100,
        videoCommentRate: _0x34fc18.get("videoCommentRate") != undefined ? _0x34fc18.get("videoCommentRate") : 100,
        videoCommentWords: _0x34fc18.get("videoCommentWords") != undefined ? _0x34fc18.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行"
      };
      return _0x5d522b;
    };
    _0x12a5f5.CreateVideoView = function () {
      var _0x5ef1f0 = _0x196f89;
      var _0x3a1660 = ui.inflate("\n            <vertical bg=\"#ffffff\" padding=\"0 16\">\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"执行数量（个）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCount\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoFollowRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"点赞概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoLikeRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"评论概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCommentRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <vertical padding=\"15 5 10 0\" w=\"*\" >\n                    <horizontal h=\"25\" gravity=\"left|center\" >\n                        <text w=\"auto\" textColor=\"black\" text=\"评论内容（换行隔开）\" />\n                        <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" color=\"white\" />\n                        <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" color=\"white\" />\n                    </horizontal>\n                    <input textSize=\"14\" gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"videoCommentWords\" bg=\"#ffffff\" />\n                </vertical>\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"videoViewContent\" bg=\"".concat(_0x5ef1f0, "\" color=\"#ffffff\" textSize=\"20\" layout_gravity=\"center\" text=\"保存视频设置\" w=\"*\" />\n                </card>\n                <vertical h=\"400\" w=\"auto\">\n                </vertical>\n            </vertical>\n        "));
      _0x1027e3.setBtnRadius(_0x3a1660.videoCommentWordsCopy, _0x5ef1f0);
      _0x1027e3.setBtnRadius(_0x3a1660.videoCommentWordsPaste, _0x5ef1f0);
      _0x3a1660.videoCommentWordsCopy.click(function () {
        setClip(_0x3a1660.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x3a1660.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x3a1660.videoCommentWordsPaste.click(function () {
        var _0x4ed814 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4ed814,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x3a1660.videoCommentWords.setText(_0x4ed814);
        }).show();
      });
      var _0x4c398f = _0x12a5f5.getVideoData();
      _0x3a1660.videoCount.setText(_0x4c398f.videoCount + "");
      _0x3a1660.videoFollowRate.setText(_0x4c398f.videoFollowRate + "");
      _0x3a1660.videoLikeRate.setText(_0x4c398f.videoLikeRate + "");
      _0x3a1660.videoCommentRate.setText(_0x4c398f.videoCommentRate + "");
      _0x3a1660.videoCommentWords.setText(_0x4c398f.videoCommentWords);
      _0x3a1660.videoViewContent.click(function () {
        _0x34fc18.put("videoCount", parseInt(_0x3a1660.videoCount.text()));
        _0x34fc18.put("videoFollowRate", parseInt(_0x3a1660.videoFollowRate.text()));
        _0x34fc18.put("videoLikeRate", parseInt(_0x3a1660.videoLikeRate.text()));
        _0x34fc18.put("videoCommentRate", parseInt(_0x3a1660.videoCommentRate.text()));
        _0x34fc18.put("videoCommentWords", _0x3a1660.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x3a1660;
    };
    var _0x1027e3 = _0x190ffe(0);
    var _0x535e08 = new (_0x190ffe(2))();
    _0x12a5f5.start = function () {
      dialogs.build({
        title: "开始任务",
        content: "确定要开始吗?",
        positive: "确定",
        negative: "取消"
      }).on("positive", function () {
        if (!_0x1027e3.checkServer()) {
          return false;
        }
        if (!_0x1027e3.checkAppVersionAndLaunch("小红书", "8.47.0")) {
          return false;
        }
        _0x1027e3.showConsole("小红薯 : 万能拓客 ");
        var _0x596e1 = _0x12a5f5.getVideoData();
        _0x535e08.index();
        _0x535e08.ClickListener({
          clickStart: function _0x194414() {
            threads.start(function () {
              _0x12a5f5.action();
            });
          },
          clickStop: function _0x187705() {
            toastLog("停止");
            threads.shutDownAll();
          },
          clickExit: function _0x4c2dac() {
            dialogs.build({
              title: "确认要关闭吗",
              positive: "确认",
              negative: "取消"
            }).on("positive", function () {
              threads.shutDownAll();
              _0x535e08.close();
              _0x1027e3.closeConsole();
            }).show();
          }
        });
      }).show();
    };
    this.action = function () {
      var _0x28df3f = _0x12a5f5.getVideoData();
      var _0x55e072 = 1;
      while (_0x55e072 <= _0x28df3f.videoCount) {
        log("当前数量:", _0x55e072);
        sleep(random(3, 12));
        random(0, 100) < _0x28df3f.videoFollowRate && (_0x3df4f3.clickGuanzhu(), sleep(random(3, 5)));
        random(0, 100) < _0x28df3f.videoLikeRate && (_0x3df4f3.clickDianzan(), sleep(random(3, 5)));
        if (random(0, 100) < _0x28df3f.videoCommentRate) {
          if (_0x3df4f3.jumpShipinToPinglun() && _0x3df4f3.clickPinglunquInput()) {
            var _0x63023d = _0x28df3f.videoCommentWords.split("\n");
            var _0x5a8621 = _0x63023d[random(0, _0x63023d.length - 1)];
            _0x3df4f3.pinglunqu_sendContent(_0x5a8621);
            var _0x6a28ec = id("com.xingin.xhs:id/b5n").findOne(5000);
            _0x6a28ec != null && (_0x6a28ec.click(), sleep(random(3, 5)));
          }
        }
        _0x55e072++;
        _0x3df4f3.actionSwipUp();
        sleep(2000);
      }
      threads.shutDownAll();
      log("本次任务结束");
    };
  }
  _0x414c59.exports = _0x41d7bc;
}, function (_0x1ab1d1, _0x1ddece, _0x51bc63) {
  var _0x4b4281 = _0x51bc63(0);
  var _0x4ec05c = {
    test: function () {
      log("test");
    },
    clickGuanzhu: function () {
      log("关注");
      var _0x5bae4d = 0;
      var _0x37b182 = 0;
      var _0x4867dd = device.width;
      var _0x5c8c6c = device.height;
      var _0x17ce36 = boundsInside(_0x5bae4d, _0x37b182, _0x4867dd, _0x5c8c6c).filter(function (_0x4c371e) {
        return _0x4c371e.bounds().width() > 0 && _0x4c371e.bounds().height() > 0;
      });
      var _0x565bc3 = _0x17ce36.id("com.xingin.xhs:id/matrixFollowView").clickable(true).findOne(2000);
      if (_0x565bc3 == null) {
        return;
      }
      _0x565bc3.click();
      sleep(2000);
      var _0x2c40cd = boundsInside(_0x5bae4d, _0x37b182, _0x4867dd, _0x5c8c6c).filter(function (_0x302498) {
        return _0x302498.bounds().width() > 0 && _0x302498.bounds().height() > 0;
      });
      var _0x1fbaf6 = _0x2c40cd.text("取消").findOne(2000);
      if (_0x1fbaf6 != null) {
        _0x1fbaf6.click();
        sleep(2000);
        return;
      }
    },
    clickDianzan: function () {
      log("点赞");
      var _0x3a2643 = 0;
      var _0x5022c4 = 0;
      var _0x3c2ce2 = device.width;
      var _0xca410b = device.height;
      var _0x496418 = boundsInside(_0x3a2643, _0x5022c4, _0x3c2ce2, _0xca410b).filter(function (_0x5c7bdc) {
        return _0x5c7bdc.bounds().width() > 0 && _0x5c7bdc.bounds().height() > 0;
      });
      var _0x331ef4 = _0x496418.id("com.xingin.xhs:id/likeLayout").findOnce();
      if (_0x331ef4 != null) {
        _0x331ef4.click();
        sleep(2000);
        return true;
      }
    },
    getVideoTpye: function () {
      var _0x53dc6f = 0;
      var _0x4ce669 = 0;
      var _0x2878ed = device.width;
      var _0x5bbcca = device.height;
      var _0x53d971 = boundsInside(_0x53dc6f, _0x4ce669, _0x2878ed, _0x5bbcca).textContains("广告").filter(function (_0x306dba) {
        return _0x306dba.bounds().width() > 0 && _0x306dba.bounds().height() > 0;
      });
      var _0x4fb233 = _0x53d971.findOnce();
      if (_0x4fb233 != null) {
        return "广告";
      }
      return "视频";
    },
    jumpShipinToPinglun: function () {
      var _0x3719fd = 0;
      var _0xe2db06 = 0;
      var _0x3eccb6 = device.width;
      var _0x1f0045 = device.height;
      var _0x8fbc66 = boundsInside(_0x3719fd, _0xe2db06, _0x3eccb6, _0x1f0045).filter(function (_0x537cfb) {
        return _0x537cfb.bounds().width() > 0 && _0x537cfb.bounds().height() > 0;
      });
      var _0x164479 = _0x8fbc66.id("com.xingin.xhs:id/commentLayout").findOne(2000);
      return _0x164479 != null ? (_0x164479.click(), sleep(2000), true) : false;
    },
    clickPinglunquInput: function () {
      var _0xee5829 = 0;
      var _0x504095 = 0;
      var _0x1955b4 = device.width;
      var _0x351a3f = device.height;
      var _0x488330 = boundsInside(_0xee5829, _0x504095, _0x1955b4, _0x351a3f).filter(function (_0x1b70a2) {
        return _0x1b70a2.bounds().width() > 0 && _0x1b70a2.bounds().height() > 0;
      });
      var _0x3423f7 = _0x488330.className("android.widget.EditText").findOne(2000);
      return _0x3423f7 != null ? (_0x3423f7.click(), sleep(2000), true) : false;
    },
    pinglunqu_sendContent: function (_0x526823) {
      log("评论", _0x526823);
      if (!setText(_0x526823)) {
        input(_0x526823);
      }
      sleep(2000);
      var _0x9588bf = text("发送").findOne(3000);
      _0x9588bf != null && (_0x9588bf.click(), sleep(3000));
    },
    actionSwipUp: function () {
      for (var _0xf906e5 = 0; _0xf906e5 < 1; _0xf906e5++) {
        var _0x2464fc = device.width * 0.7 + random(0, 20);
        var _0x4bce1b = device.height * 0.7;
        var _0x203d47 = device.width * 0.6 + random(20, 40);
        var _0x175c45 = device.height * 0.1;
        swipe(_0x2464fc, _0x4bce1b, _0x203d47, _0x175c45, 120);
        sleep(1000);
      }
    }
  };
  _0x1ab1d1.exports = _0x4ec05c;
}, function (_0x5037e6, _0x49eb06, _0x118562) {
  function _0x68108e(_0xf58953) {
    var _0x5e7c94 = this;
    var _0xf58953 = _0xf58953;
    var _0x1f4f85 = _0x118562(1);
    var _0x44c999 = new (_0x118562(4))();
    var _0xea111b = _0x1f4f85.bgColor;
    var _0xa30a9e = null;
    var _0x59e821 = null;
    var _0x301890 = storages.create("wzke:page1");
    _0x5e7c94.loginInfo = "";
    _0x5e7c94.index = function () {
      _0x5e7c94.loginInfo = _0x44c999.getLoginInfo();
      _0xa30a9e = _0x477de4.createPopWin();
      var _0xb1dc8 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      var _0x2a1fc8 = _0xea111b;
      _0x59e821 = ui.inflate("\n            <drawer>\n                <vertical id=\"page1\" bg=\"".concat(_0xea111b, "\" alpha=\"1\">\n                <MyAppBar title=\"喜欢浏览\"  bg=\"").concat(_0xea111b, "\" />\n                <tabs  bg=\"#ffffff\" id=\"tabs\"  />\n                    <viewpager id=\"viewpager\" bg=\"#ffffff\" radius=\"24\">\n                        <ScrollView>\n                            <vertical padding=\"16\">\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 场景说明\" />\n                                <text margin=\"10\" textColor=\"black\" textSize=\"14\" text=\"在喜欢界面运行，自动观看视频，概率互动\" />\n                                <img marginBottom=\"10\" h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n\n                                <text margin=\"10 0\" textSize=\"18\" textColor=\"black\" text=\"〓 参数设置\" />\n                                <card id=\"mainbg\" margin=\"10\" w=\"*\" h=\"auto\" >\n                                    <vertical margin=\"2\" >\n                                        <SwitchWidget-Se7en id=\"switch3\" marginTop=\"5\" padding='0 8' checked='true' text='混合拓客（随机触发一种）' trackColor='#e91e63' background='#ffffff' />\n                                        <vertical weightSum=\"10\" paddingLeft=\"0\" >\n                                            <ScrollView>\n                                                <horizontal>\n                                                    <text textSize=\"10\" text=\"关注\" />   <input id=\"hr1\" inputType=\"number\" text=\"15\" /> <text textSize=\"8\" text=\"%\" />\n                                                    <text textSize=\"10\" text=\"，喜欢\" /> <input id=\"hr2\" inputType=\"number\" text=\"60\" /> <text textSize=\"8\" text=\"%\" />\n                                                    <text textSize=\"10\" text=\"，评论\" /> <input id=\"hr3\" inputType=\"number\" text=\"25\" /> <text textSize=\"8\" text=\"%\" />\n                                                </horizontal>\n                                            </ScrollView>\n                                        </vertical>\n                                    </vertical>\n                                </card>\n\n                                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"20\" cardBackgroundColor=\"").concat(_0xea111b, "\" cardUseCompatPadding=\"true\" >\n                                    <button id=\"start\" bg=\"").concat(_0xea111b, "\" margin=\"5\" textSize=\"22\" layout_gravity=\"center\" foreground=\"?selectableItemBackgroundBorderless\" text=\"开 始\" w=\"*\" style=\"Widget.AppCompat.Button.Colored\" />\n                                </card>\n                            </vertical>\n                        </ScrollView>\n                        <ScrollView>  <vertical id=\"video\"> </vertical>    </ScrollView>\n\n                    </viewpager>\n                </vertical>\n            </drawer>\n        "));
      var _0x415de7 = _0x5e7c94.getVideoData();
      _0x59e821.hr1.setText(_0x415de7.hr1 + "");
      _0x59e821.hr2.setText(_0x415de7.hr2 + "");
      _0x59e821.hr3.setText(_0x415de7.hr3 + "");
      _0x59e821.start.click(function () {
        _0x301890.put("hr1", parseInt(_0x59e821.hr1.text()));
        _0x301890.put("hr2", parseInt(_0x59e821.hr2.text()));
        _0x301890.put("hr3", parseInt(_0x59e821.hr3.text()));
        _0x5e7c94.start();
      });
      _0x59e821.viewpager.setTitles(["基础设置", "视频设置"]);
      _0x59e821.tabs.setupWithViewPager(_0x59e821.viewpager);
      _0x59e821.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x1f4f85.selectedTabIndicatorColor);
      _0x59e821.tabs.selectedTabIndicatorHeight = _0x1f4f85.selectedTabIndicatorHeight;
      _0x59e821.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x59e821._backButton.click(function () {
        _0xa30a9e.dismiss();
      });
      _0xa30a9e.setContentView(_0x59e821);
      var _0x4a1a8b = ui.inflate("\n            <vertical bg=\"#ffffff\" padding=\"0 16\">\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"执行数量（个）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCount\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"关注概率（0-100%）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoFollowRate\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"区间喜欢（上限）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoLikeMax\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <horizontal weightSum=\"10\" padding=\"15 0 0 0\" >\n                    <text layout_weight=\"3\" textColor=\"black\" text=\"区间评论（上限）\" />\n                    <input paddingRight=\"30\" layout_weight=\"7\" gravity=\"right\" id=\"videoCommentMax\" inputType=\"number\" text=\"\" bg=\"#ffffff\" />\n                </horizontal>\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <vertical padding=\"15 5 10 0\" w=\"*\" >\n                    <horizontal h=\"25\" gravity=\"left|center\" >\n                        <text w=\"auto\" textColor=\"black\" text=\"评论内容（换行隔开）\" />\n                        <button w=\"40\" id=\"videoCommentWordsCopy\" margin=\"5 2\" bg=\"#ff9800\" text=\"复制\" padding=\"0\" color=\"white\" />\n                        <button w=\"40\" id=\"videoCommentWordsPaste\" margin=\"5 2\" bg=\"#ff9800\" text=\"粘贴\" padding=\"0\" color=\"white\" />\n                    </horizontal>\n                    <input textSize=\"14\" gravity=\"top\" hint=\"请输入内容\" h=\"auto\" minLines=\"3\" id=\"videoCommentWords\" bg=\"#ffffff\" />\n                </vertical>\n\n                <img h=\"2px\" w=\"*\" bg=\"#d8d8d8\" />\n                <card w=\"*\" h=\"auto\" cardCornerRadius=\"10\" cardElevation=\"5\" margin=\"100 20\" cardBackgroundColor=\"#19b38d\" cardUseCompatPadding=\"true\" >\n                    <button id=\"videoViewContent\" bg=\"".concat(_0x2a1fc8, "\" color=\"#ffffff\" textSize=\"20\" layout_gravity=\"center\" text=\"保存视频设置\" w=\"*\" />\n                </card>\n                <vertical h=\"400\" w=\"auto\">\n                </vertical>\n            </vertical>\n        "));
      _0x477de4.setBtnRadius(_0x4a1a8b.videoCommentWordsCopy, _0x2a1fc8);
      _0x477de4.setBtnRadius(_0x4a1a8b.videoCommentWordsPaste, _0x2a1fc8);
      _0x4a1a8b.videoCommentWordsCopy.click(function () {
        setClip(_0x4a1a8b.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x4a1a8b.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x4a1a8b.videoCommentWordsPaste.click(function () {
        var _0x21db19 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x21db19,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x4a1a8b.videoCommentWords.setText(_0x21db19);
        }).show();
      });
      _0x4a1a8b.videoCount.setText(_0x415de7.videoCount + "");
      _0x4a1a8b.videoFollowRate.setText(_0x415de7.videoFollowRate + "");
      _0x4a1a8b.videoLikeMax.setText(_0x415de7.videoLikeMax + "");
      _0x4a1a8b.videoCommentMax.setText(_0x415de7.videoCommentMax + "");
      _0x4a1a8b.videoCommentWords.setText(_0x415de7.videoCommentWords);
      _0x4a1a8b.videoViewContent.click(function () {
        _0x301890.put("videoCount", parseInt(_0x4a1a8b.videoCount.text()));
        _0x301890.put("videoFollowRate", parseInt(_0x4a1a8b.videoFollowRate.text()));
        _0x301890.put("videoLikeMax", parseInt(_0x4a1a8b.videoLikeMax.text()));
        _0x301890.put("videoCommentMax", parseInt(_0x4a1a8b.videoCommentMax.text()));
        _0x301890.put("videoCommentWords", _0x4a1a8b.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      _0x59e821.video.addView(_0x4a1a8b);
      ui.run(function () {
        _0xa30a9e.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
        _0xa30a9e.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      });
      _0xa30a9e.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x5e7c94.getVideoData = function () {
      var _0x385dfc = {
        hr1: _0x301890.get("hr1") != undefined ? _0x301890.get("hr1") : 10,
        hr2: _0x301890.get("hr2") != undefined ? _0x301890.get("hr2") : 50,
        hr3: _0x301890.get("hr3") != undefined ? _0x301890.get("hr3") : 5,
        videoCount: _0x301890.get("videoCount") != undefined ? _0x301890.get("videoCount") : 999,
        videoFollowRate: _0x301890.get("videoFollowRate") != undefined ? _0x301890.get("videoFollowRate") : 100,
        videoLikeMax: _0x301890.get("videoLikeMax") != undefined ? _0x301890.get("videoLikeMax") : 200,
        videoCommentMax: _0x301890.get("videoCommentMax") != undefined ? _0x301890.get("videoCommentMax") : 100,
        videoCommentWords: _0x301890.get("videoCommentWords") != undefined ? _0x301890.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行"
      };
      return _0x385dfc;
    };
    var _0x539cc9 = new (_0x118562(3))();
    var _0x477de4 = _0x118562(0);
    var _0x251fef = new (_0x118562(2))();
    _0x5e7c94.start = function () {
      dialogs.build({
        title: "开始任务",
        content: "确定要开始吗?",
        positive: "确定",
        negative: "取消"
      }).on("positive", function () {
        if (!_0x477de4.checkServer() || !_0x539cc9.launchApp()) {
          return false;
        }
        var _0x25bcfa = _0x539cc9.getDyVersion();
        _0x477de4.showConsole("精准观看: " + _0x25bcfa);
        var _0x29fe19 = _0x5e7c94.getVideoData();
        _0x29fe19.videoCount == 1024 && _0x5e7c94.loginInfo.level == 3 && log("高级权限");
        _0x251fef.index();
        _0x251fef.ClickListener({
          clickStart: function _0x31cd31() {
            threads.start(function () {
              _0x29fe19.videoCount == 1024 && _0x5e7c94.loginInfo.level == 3 ? _0x5e7c94.action2() : _0x5e7c94.action();
            });
          },
          clickStop: function _0x4e960f() {
            toastLog("停止");
            threads.shutDownAll();
          },
          clickExit: function _0x495254() {
            dialogs.build({
              title: "确认要关闭吗",
              positive: "确认",
              negative: "取消"
            }).on("positive", function () {
              threads.shutDownAll();
              _0x251fef.close();
              _0x477de4.closeConsole();
            }).show();
          }
        });
      }).show();
    };
    this.action2 = function () {
      _0x5e7c94.loginInfo.level == 3 && _0x477de4.requestScreenCapture();
      while (true) {
        var _0x1dbd99 = _0x539cc9.isHavePosionPhone();
        var _0x42e82a = false;
        if (_0x1dbd99 && _0x539cc9.JumpShipinToUsercenter()) {
          !_0x539cc9.isPrivateOrBan() && (_0x42e82a = false);
          var _0x59ee08 = _0x539cc9.getUsercenter_data("粉丝");
          if (_0x59ee08 <= 20000) {
            _0x42e82a = true;
          }
          back();
          sleep(1000);
        }
        log(_0x42e82a);
        _0x42e82a && _0x539cc9.jumpShipinToPostionPhone() && (_0x477de4.captureScreen_and_save(), _0x539cc9.backShipinToPostionPhone());
        _0x477de4.actionSwipUp();
        sleep(2000);
      }
    };
    this.action = function () {
      var _0x42a8a0 = _0x5e7c94.getVideoData();
      _0x539cc9.closeTip();
      _0x539cc9.watchSleep("任务开始:", 1);
      var _0x37594a = 0;
      while (_0x37594a < _0x42a8a0.videoCount) {
        var _0xde0e8a = _0x539cc9.getDianZanShu();
        var _0x21637d = _0x539cc9.getPinglunShu();
        if (_0x539cc9.getViewType() == "视频") {
          if (_0x59e821.switch3) {
            var _0x4709b2 = random(0, 100);
            var _0x38044f = parseInt(_0x42a8a0.hr1);
            var _0x571612 = parseInt(_0x42a8a0.hr2);
            var _0x3939d8 = parseInt(_0x42a8a0.hr3);
            log(_0x4709b2, _0x38044f, _0x571612, _0x3939d8);
            _0x4709b2 < _0x38044f && _0x539cc9.clickGuanzhu();
            _0x4709b2 >= _0x38044f && _0x4709b2 < _0x38044f + _0x571612 && _0x539cc9.clickDianzan();
            _0x4709b2 >= _0x38044f + _0x571612 && _0x4709b2 < _0x38044f + _0x571612 + _0x3939d8 && _0x539cc9.clickPinlunqu() && (_0x539cc9.pinglun(_0x42a8a0.videoCommentWords), log("关闭页面: 退出评论区"), sleep(1000), back(), sleep(1000), _0x539cc9.closePinlunquOnce());
            log("当前操作数：", ++_0x37594a);
            _0x477de4.actionSwipUp();
            sleep(2000);
            continue;
          }
          if (_0xde0e8a <= _0x42a8a0.videoLikeMax && _0x21637d <= _0x42a8a0.videoCommentMax) {
            if (random(0, 100) < _0x42a8a0.videoFollowRate) {
              _0x539cc9.clickGuanzhu();
            }
            _0x539cc9.clickDianzan();
            _0x539cc9.clickPinlunqu() && (_0x539cc9.actionPinglunqu(0, "", ""), _0x539cc9.pinglun(_0x42a8a0.videoCommentWords), log("关闭页面: 退出评论区"), sleep(1000), back(), sleep(1000));
            _0x37594a++;
            _0x539cc9.closePinlunquOnce();
          }
        }
        _0x477de4.actionSwipUp();
        sleep(2000);
      }
      threads.shutDownAll();
      log("本次任务结束");
    };
  }
  _0x5037e6.exports = _0x68108e;
}]);