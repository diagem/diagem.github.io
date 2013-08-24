var toString$ = {}.toString;
define(function(require, exports, module){
  exports.isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  exports.enumRu = function(n, one, two, three){
    one == null && (one = 0);
    two == null && (two = 1);
    three == null && (three = 2);
    if (n % 10 === 1 && n % 100 !== 11) {
      return one;
    } else {
      if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        return two;
      } else {
        return three;
      }
    }
  };
  exports.format = function(int, symbol){
    var str, nulls, i$, ref$, len$, i;
    symbol == null && (symbol = ' ');
    str = int + "";
    nulls = 0;
    for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
      i = ref$[i$];
      if (i % 3 === 0) {
        str = str.substr(0, str.length - (i + nulls)) + symbol + str.substr(str.length - (i + nulls++));
      }
    }
    return str.trim();
    function fn$(){
      var i$, to$, results$ = [];
      for (i$ = 1, to$ = str.length; i$ <= to$; ++i$) {
        results$.push(i$);
      }
      return results$;
    }
  };
  exports.qs = {
    stringify: function(obj){
      var string, key, value, i$, len$, v;
      string = [];
      for (key in obj) {
        value = obj[key];
        if (value != null) {
          if (toString$.call(value).slice(8, -1) === "Array") {
            for (i$ = 0, len$ = value.length; i$ < len$; ++i$) {
              v = value[i$];
              if (v != null) {
                string.push(key + "=" + v);
              }
            }
          } else if (toString$.call(value).slice(8, -1) === "Object") {
            continue;
          } else {
            string.push(key + "=" + value);
          }
        }
      }
      return string.join('&');
    },
    parse: function(string){
      var s, result, i$, ref$, len$, chunk, key, value, i;
      if (string == null) {
        if (location.href.toString().match(/\?/) != null) {
          string = location.href.toString();
        } else {
          string = "?";
        }
      }
      s = string.split(/\?/, 2).pop();
      if (s.length <= 1) {
        return {};
      }
      result = {};
      for (i$ = 0, len$ = (ref$ = s.split('&')).length; i$ < len$; ++i$) {
        chunk = ref$[i$];
        key = chunk.split('=', 2)[0];
        value = decodeURI(chunk.split('=', 2)[1]);
        if (!!~(fn$()).indexOf(key)) {
          if (toString$.call(result[key]).slice(8, -1) === "Array") {
            result[key].push(value);
          } else {
            result[key] = [result[key], value];
          }
        } else {
          result[key] = value;
        }
      }
      return result;
      function fn$(){
        var results$ = [];
        for (i in result) {
          results$.push(i);
        }
        return results$;
      }
    }
  };
  window.utils = exports;
  return exports;
});
