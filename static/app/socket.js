var this$ = this;
define(function(require, exports, module){
  var sockjs, backbone, Sock;
  sockjs = require('sockjs');
  backbone = require('backbone');
  Sock = (function(){
    Sock.displayName = 'Sock';
    var prototype = Sock.prototype, constructor = Sock;
    prototype.open = function(url, _reserved, options){
      var this$ = this;
      this.trigger("connecting");
      this._sock = new SockJS(url, _reserved, options);
      this._sock.onopen = function(){
        this$.trigger.apply(this$, ["open"].concat(Array.prototype.slice.apply(arguments)));
        console.log("[__socket__] opened");
        return this$._sock.send("{\"cookie\":\"" + document.cookie + "\"}");
      };
      this._sock.onmessage = function(it){
        var msg;
        this$.trigger.apply(this$, ["message"].concat(Array.prototype.slice.apply(arguments)));
        msg = JSON.parse(it.data);
        return this$.trigger(msg.type + ":" + msg.action, msg.data);
      };
      this._sock.onclose = function(){
        return this$.trigger.apply(this$, ["close"].concat(Array.prototype.slice.apply(arguments)));
      };
      return this._sock.onerror = function(){
        return this$.trigger.apply(this$, ["error"].concat(Array.prototype.slice.apply(arguments)));
      };
    };
    prototype.send = function(){
      return this._sock.send.apply(this._sock, arguments);
    };
    prototype.close = function(){
      return this._sock.close.apply(this._sock, arguments);
    };
    prototype.destroySock = function(){
      return clearTimeout(this.connectionTimeout);
    };
    prototype.connectionTimeout = null;
    function Sock(url, _reserved, options){
      var this$ = this;
      this.url = url;
      this._reserved = _reserved;
      this.options = options;
      import$(this, backbone.Events);
      this.open(this.url, this._reserved, this.options);
      this.on("close", function(){
        return this$.connectionTimeout = setTimeout(function(){
          if (!!window.DEBUG) {
            return location.reload();
          } else {
            return this$.open(this$.url, this$._reserved, this$.options);
          }
        }, 1000);
      });
      this.on("error", function(){
        return this$.destroySock();
      });
    }
    return Sock;
  }());
  return Sock;
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
