var this$ = this, toString$ = {}.toString;
define(function(require, exports, module){
  var jquery, async, backbone, utils, marked, isNumber, API, Base, Meta, Main, Training, Sell;
  jquery = require('jquery');
  async = require('async');
  backbone = require('backbone');
  utils = require('app/utils');
  marked = require('marked');
  isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  API = "/api/1";
  Base = (function(superclass){
    var prototype = extend$((import$(Base, superclass).displayName = 'Base', Base), superclass).prototype, constructor = Base;
    function Base(opts){
      opts == null && (opts = {});
      if (opts.el == null) {
        opts.el = $("#-view");
      }
      if (opts.prevView != null) {
        opts.prevView.undelegateEvents();
        opts.prevView = void 8;
      }
      this.query = utils.qs.parse();
      Base.superclass.apply(this, arguments);
    }
    prototype.lock = function(show){
      var action, e;
      try {
        action = show != null ? "show" : "hide";
        return $(".shadow")[action]();
      } catch (e$) {
        e = e$;
        return console.error(e.toString());
      }
    };
    prototype.initialize = function(){
      var this$ = this;
      this.lock(1);
      return async.waterfall([function(cbk){
        if (this$.fetchAll != null) {
          return this$.fetchAll(cbk);
        } else {
          return cbk();
        }
      }], function(err){
        return this$.render(function(){
          return this$.lock();
        });
      });
    };
    prototype.render = function(next){
      var this$ = this;
      return async.waterfall([function(cbk){
        if (toString$.call(this$.tmpl).slice(8, -1) === "Function") {
          return cbk();
        }
        return require([this$.tmpl], function(tmpl){
          this$.tmpl = tmpl;
          return cbk();
        });
      }], function(err){
        this$.$el.html(this$.tmpl(this$));
        this$.trigger("rendered");
        if (next != null) {
          return next(err);
        }
      });
    };
    return Base;
  }(Backbone.View));
  exports.Meta = Meta = (function(superclass){
    var prototype = extend$((import$(Meta, superclass).displayName = 'Meta', Meta), superclass).prototype, constructor = Meta;
    prototype.events = {
      "click .-menu li a": "setActive"
    };
    prototype.setActive = function(e){
      var this$ = this;
      e == null && (e = "inspection");
      require(["tmpl/header"], function(header){
        var newHtml;
        newHtml = $(header({
          section: e
        })).find("ul.nav").html();
        return $(".header__inner > ul.nav").html(newHtml);
      });
    };
    prototype.initialize = function(){};
    function Meta(){
      Meta.superclass.apply(this, arguments);
    }
    return Meta;
  }(Base));
  exports.Main = Main = (function(superclass){
    var prototype = extend$((import$(Main, superclass).displayName = 'Main', Main), superclass).prototype, constructor = Main;
    prototype.tmpl = "tmpl/main";
    function Main(){
      Main.superclass.apply(this, arguments);
    }
    return Main;
  }(Base));
  exports.Training = Training = (function(superclass){
    var prototype = extend$((import$(Training, superclass).displayName = 'Training', Training), superclass).prototype, constructor = Training;
    prototype.tmpl = "tmpl/training";
    function Training(){
      Training.superclass.apply(this, arguments);
    }
    return Training;
  }(Base));
  exports.Sell = Sell = (function(superclass){
    var prototype = extend$((import$(Sell, superclass).displayName = 'Sell', Sell), superclass).prototype, constructor = Sell;
    prototype.tmpl = "tmpl/sell";
    function Sell(){
      Sell.superclass.apply(this, arguments);
    }
    return Sell;
  }(Base));
  return exports;
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
