var this$ = this, toString$ = {}.toString;
define(function(require, exports, module){
  var jquery, async, backbone, utils, cache, isNumber, API, Base, ModalBase, Meta, Main, Training, Sell, Map, Articles, References;
  jquery = require('jquery');
  async = require('async');
  backbone = require('backbone');
  utils = require('app/utils');
  cache = require('app/cache');
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
  ModalBase = (function(superclass){
    var prototype = extend$((import$(ModalBase, superclass).displayName = 'ModalBase', ModalBase), superclass).prototype, constructor = ModalBase;
    function ModalBase(opts){
      opts == null && (opts = {});
      if (opts.el == null) {
        opts.el = $(".-modal-wrapper");
      }
      if (opts.prevView != null) {
        opts.prevView.undelegateEvents();
        opts.prevView = void 8;
      }
      this.query = utils.qs.parse();
      ModalBase.superclass.apply(this, arguments);
    }
    prototype.initialize = function(){
      this.on("rendered", function(){
        return window.top.scrollTo(0, 1);
      });
      return superclass.prototype.initialize.apply(this, arguments);
    };
    prototype.render = function(){
      $(".window-bg, .window").show();
      if (this.query.next != null) {
        $(".window-close").attr("href", this.query.next);
      } else {
        $(".window-close").attr("href", "/");
      }
      return superclass.prototype.render.apply(this, arguments);
    };
    return ModalBase;
  }(Base));
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
    prototype.initialize = function(){
      var this$ = this;
      return this.fetchAll(function(){
        if (this$.options.id == null) {
          return app.navigate("/training/individual/", {
            trigger: true
          });
        } else {
          if (this$.options.id === "individual" && this$.options.idTwo == null) {
            return app.navigate("/training/individual/jewellery-stone-diagnostics/", {
              trigger: true
            });
          } else {
            return superclass.prototype.initialize.apply(this$, arguments);
          }
        }
      });
    };
    prototype.fetchAll = function(next){
      var this$ = this;
      return cache.getPagesTree(function(err, tree){
        var ref$;
        this$.menu = tree;
        this$.article = ((ref$ = this$.menu.childs.training.childs[this$.options.id]) != null ? ref$.childs[this$.options.idTwo] : void 8) || this$.menu.childs.training.childs[this$.options.id];
        return next();
      });
    };
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
  exports.Map = Map = (function(superclass){
    var prototype = extend$((import$(Map, superclass).displayName = 'Map', Map), superclass).prototype, constructor = Map;
    prototype.tmpl = "tmpl/modalMap";
    prototype.undelegateEvents = function(){
      var ref$;
      if ((ref$ = this.map) != null) {
        if (typeof ref$.destroy === 'function') {
          ref$.destroy();
        }
      }
      return superclass.prototype.undelegateEvents.apply(this, arguments);
    };
    prototype.renderMap = function(next){
      var this$ = this;
      next == null && (next = function(){});
      return require(["ymaps"], function(ymaps){
        return ymaps.ready(function(){
          return this$.map = new ymaps.Map("map", {
            center: [56.826558, 60.594562],
            zoom: 17
          });
        });
      });
    };
    prototype.initialize = function(){
      var this$ = this;
      superclass.prototype.initialize.apply(this, arguments);
      return this.once("rendered", function(){
        return this$.renderMap(function(){});
      });
    };
    function Map(){
      Map.superclass.apply(this, arguments);
    }
    return Map;
  }(ModalBase));
  exports.Articles = Articles = (function(superclass){
    var prototype = extend$((import$(Articles, superclass).displayName = 'Articles', Articles), superclass).prototype, constructor = Articles;
    prototype.tmpl = "tmpl/articles";
    prototype.initialize = function(){
      var this$ = this;
      if (this.options.id == null) {
        return this.fetchAll(function(){
          return app.navigate("/articles/" + Object.keys(this$.menu.childs.articles.childs)[0] + "/", {
            trigger: true
          });
        });
      } else {
        return superclass.prototype.initialize.apply(this, arguments);
      }
    };
    prototype.fetchAll = function(next){
      var this$ = this;
      return cache.getPagesTree(function(err, tree){
        this$.menu = tree;
        this$.article = this$.menu.childs.articles.childs[this$.options.id];
        return next();
      });
    };
    function Articles(){
      Articles.superclass.apply(this, arguments);
    }
    return Articles;
  }(ModalBase));
  exports.References = References = (function(superclass){
    var prototype = extend$((import$(References, superclass).displayName = 'References', References), superclass).prototype, constructor = References;
    prototype.tmpl = "tmpl/articles";
    prototype.initialize = function(){
      var this$ = this;
      if (this.options.id == null) {
        return this.fetchAll(function(){
          return app.navigate("/references/" + Object.keys(this$.menu.childs.references.childs)[0] + "/", {
            trigger: true
          });
        });
      } else {
        return superclass.prototype.initialize.apply(this, arguments);
      }
    };
    prototype.fetchAll = function(next){
      var this$ = this;
      return cache.getPagesTree(function(err, tree){
        this$.menu = tree;
        this$.article = this$.menu.childs.references.childs[this$.options.id];
        return next();
      });
    };
    function References(){
      References.superclass.apply(this, arguments);
    }
    return References;
  }(ModalBase));
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
