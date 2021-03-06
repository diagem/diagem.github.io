var ie, this$ = this;
require.onError = function(err){
  console.log("[__require__] error:", err.message, err);
  if (err.requireType === "timeout") {
    return console.log("[__require__] timeout for: " + err.requireModules);
  }
};
ie = function(){
  var rv, ua, re;
  rv = -1;
  if (navigator.appName === "Microsoft Internet Explorer") {
    ua = navigator.userAgent;
    re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    if (re.exec(ua) != null) {
      rv = parseFloat(RegExp.$1);
    }
  }
  if (rv > -1) {
    return rv;
  } else {}
}();
require.config({
  paths: {
    "backbone": "/static/libs/backbone/backbone-min",
    "underscore": "/static/libs/underscore/underscore-min",
    "jquery": ie == null ? "/static/libs/zepto/zepto.min" : "/static/libs/jquery/jquery.min",
    "query": "/static/libs/backbone-query-parameters/backbone.queryparams",
    "async": "/static/libs/async/lib/async",
    "prelude": "/static/libs/prelude-ls/browser/prelude-browser-min",
    "app": "/static/app",
    "views": "/static/app/views",
    "models": "/static/app/models",
    "collections": "/static/app/collections",
    "tmpl": "/static/tmpl",
    "sockjs": "/static/libs/sockjs/sockjs.min",
    "marked": "/static/libs/marked/lib/marked",
    "ymaps": "http://api-maps.yandex.ru/2.0/?load=package.standard,package.geoObjects&lang=ru-RU",
    "tweets": "http://tw-proxy.herokuapp.com/1.1/statuses/user_timeline.json?screen_name=olebedev&count=1&callback=define"
  },
  shim: {
    moment: {
      exports: "moment"
    },
    ymaps: {
      exports: "ymaps"
    },
    marked: {
      exports: "marked"
    },
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    query: ["backbone"],
    prelude: {
      deps: ["query"],
      exports: "prelude"
    },
    sockjs: {
      exports: "SockJS"
    },
    popover: ["tooltip"]
  }
});
require(['app/router', 'models', 'app/socket', 'jquery', 'prelude', 'marked'], function(Router, models, Sock, $, pre, marked){
  if (!!window.DEBUG) {
    window.sock = new Sock("/socket", null, {
      protocols_whitelist: ['websocket'],
      debug: false
    });
  }
  return window.app = new Router;
});
