var this$ = this;
define(function(require, exports, module){
  var API, backbone, views, collections;
  API = "/api/1";
  backbone = require('backbone');
  views = require('views');
  collections = require('collections');
  return (function(superclass){
    var prototype = extend$(import$(constructor, superclass), superclass).prototype;
    prototype.routes = {
      "": "main",
      "(#/)": "main",
      "(#/)training(/)": "training",
      "(#/)sell(/)": "sell"
    };
    prototype.goToProfile = function(){
      var this$ = this;
      this.navigate("#/");
      return setTimeout(function(){
        return this$.meta.setActive();
      }, 0);
    };
    prototype.main = function(){
      if (this.view != null) {
        this.meta.setActive("inspection");
      }
      return this.view = new views.Main({
        prevView: this.view
      });
    };
    prototype.training = function(){
      if (this.view != null) {
        this.meta.setActive("training");
      }
      return this.view = new views.Training({
        prevView: this.view
      });
    };
    prototype.sell = function(){
      if (this.view != null) {
        this.meta.setActive("sell");
      }
      return this.view = new views.Sell({
        prevView: this.view
      });
    };
    prototype.cache = {};
    prototype.initialize = function(){
      var handler;
      this.meta = new views.Meta({
        el: $("body")
      });
      setTimeout(function(){
        return Backbone.history.start({
          pushState: true
        });
      }, 0);
      handler = function(e){
        var ref$, uri;
        if ((ref$ = e.currentTarget.getAttribute('href')[0]) === '/' || ref$ === '?') {
          uri = '/';
          switch (e.currentTarget.getAttribute('href')[0]) {
          case '/':
            uri = Backbone.history._hasPushState
              ? e.currentTarget.getAttribute('href').slice(1)
              : "!/" + e.currentTarget.getAttribute('href').slice(1);
            break;
          case '?':
            uri = Backbone.history._hasPushState
              ? location.pathname + e.currentTarget.getAttribute('href')
              : "!/" + location.pathname + e.currentTarget.getAttribute('href');
          }
          app.navigate(uri, {
            trigger: true
          });
          e.preventDefault();
          return false;
        }
      };
      return $(document).on("click touchend", "a", handler);
    };
    function constructor(){
      constructor.superclass.apply(this, arguments);
    }
    return constructor;
  }(Backbone.Router));
});
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
