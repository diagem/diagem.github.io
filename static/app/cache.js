var this$ = this;
define(function(require){
  var c, Cache;
  c = {};
  Cache = (function(){
    Cache.displayName = 'Cache';
    var prototype = Cache.prototype, constructor = Cache;
    prototype.getPagesTree = function(next){
      var this$ = this;
      if (c.tree != null) {
        return next(null, c.tree);
      }
      return require(['jquery', 'app/utils'], function($, utils){
        return $.getJSON("/api/pages.json", function(resp){
          c.tree = utils.tree(resp.data);
          return next(resp.error, c.tree);
        });
      });
    };
    function Cache(){}
    return Cache;
  }());
  return new Cache;
});
