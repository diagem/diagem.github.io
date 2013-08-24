var this$ = this;
define(function(require, exports, module){
  var backbone, models, API, Base, Goods, Articles, Photos;
  backbone = require('backbone');
  models = require('models');
  API = "/api/1";
  Base = (function(superclass){
    var prototype = extend$((import$(Base, superclass).displayName = 'Base', Base), superclass).prototype, constructor = Base;
    prototype.model = models.Base;
    function Base(){
      Base.superclass.apply(this, arguments);
    }
    return Base;
  }(Backbone.Collection));
  exports.Goods = Goods = (function(superclass){
    var prototype = extend$((import$(Goods, superclass).displayName = 'Goods', Goods), superclass).prototype, constructor = Goods;
    function Goods(){
      Goods.superclass.apply(this, arguments);
    }
    return Goods;
  }(Base));
  exports.Articles = Articles = (function(superclass){
    var prototype = extend$((import$(Articles, superclass).displayName = 'Articles', Articles), superclass).prototype, constructor = Articles;
    function Articles(){
      Articles.superclass.apply(this, arguments);
    }
    return Articles;
  }(Base));
  exports.Photos = Photos = (function(superclass){
    var prototype = extend$((import$(Photos, superclass).displayName = 'Photos', Photos), superclass).prototype, constructor = Photos;
    function Photos(){
      Photos.superclass.apply(this, arguments);
    }
    return Photos;
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
