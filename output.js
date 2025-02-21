//Fri Feb 21 2025 02:10:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let res = http.get("http://dav.jianguoyun.com/dav/" + ddy.ddyp + ddy.ddyn, {
  "headers": {
    "Authorization": "Basic " + java.lang.String(android.util.Base64.encode(java.lang.String(ddy.ddyu + ":" + ddy.ddyk).getBytes(), 2)),
    "Content-Type": "text/plain;charset=UTF-8",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "ddyu-Agent": "okhttp/3.12.1"
  }
}).body.string();
_0xodh = "jsjiami.com.v6";