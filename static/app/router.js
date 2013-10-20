var this$ = this;
define(function(require, exports, module){
  var API, backbone, views, collections, App;
  API = "/api/1";
  backbone = require('backbone');
  views = require('views');
  collections = require('collections');
  return App = (function(superclass){
    var prototype = extend$((import$(App, superclass).displayName = 'App', App), superclass).prototype, constructor = App;
    prototype.routes = {
      "": "inspection",
      "(#/)": "inspection",
      "(#/)training(/)": "training",
      "(#/)sell(/)": "sell",
      "(#/)map(/)": "map"
    };
    prototype.renderMap = function(route){
      console.log("render map", route);
      if (route === 'main' || route === 'inspection') {
        $(".contact__address").attr("href", "/map/");
      } else {
        $(".contact__address").attr("href", "/map/?next=/" + route);
      }
    };
    prototype.showWindow = function(){
      return $(".window, .window-bg").show();
    };
    prototype.hideWindow = function(destroy){
      var ref$;
      destroy == null && (destroy = false);
      $(".window, .window-bg").hide();
      if (destroy) {
        if ((ref$ = this.subView) != null) {
          if (typeof ref$.undelegateEvents === 'function') {
            ref$.undelegateEvents();
          }
        }
        return this.subView = void 8;
      }
    };
    prototype.inspection = function(){
      var ref$, ref1$;
      this.hideWindow(1);
      if (!(((ref$ = app.view) != null ? (ref1$ = ref$.constructor) != null ? ref1$.displayName : void 8 : void 8) === "Main")) {
        return this.view = new views.Main({
          prevView: this.view
        });
      }
    };
    prototype.training = function(){
      this.hideWindow(1);
      return this.view = new views.Training({
        prevView: this.view
      });
    };
    prototype.sell = function(){
      this.hideWindow(1);
      return this.view = new views.Sell({
        prevView: this.view
      });
    };
    prototype.map = function(){
      this.showWindow();
      return this.subView = new views.Map({
        prevView: this.subView
      });
    };
    prototype.cache = {};
    prototype.initialize = function(){
      var handler, this$ = this;
      this.meta = new views.Meta({
        el: $("body")
      });
      this.on("route", function(){
        this$.renderMap.apply(this$, arguments);
        return this$.meta.setActive.apply(this$, arguments);
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
    function App(){
      App.superclass.apply(this, arguments);
    }
    return App;
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
