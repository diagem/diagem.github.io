var this$ = this;
define(function(require, exports, module){
  var backbone, API, Base, User;
  backbone = require('backbone');
  API = "/api/1";
  Base = (function(superclass){
    var prototype = extend$((import$(Base, superclass).displayName = 'Base', Base), superclass).prototype, constructor = Base;
    prototype.idAttribute = "Id";
    function Base(){
      Base.superclass.apply(this, arguments);
    }
    return Base;
  }(Backbone.Model));
  exports.Base = Base;
  exports.User = User = (function(superclass){
    var prototype = extend$((import$(User, superclass).displayName = 'User', User), superclass).prototype, constructor = User;
    prototype.url = API + "/users/me";
    prototype.parse = function(r){
      return r.data || r.error || r;
    };
    function User(){
      User.superclass.apply(this, arguments);
    }
    return User;
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
