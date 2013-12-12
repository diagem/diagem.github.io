var toString$ = {}.toString;
({
  define: typeof define !== "undefined"
    ? define
    : function(deps, factory){
      return module.exports = factory();
    }
}).define([], function(){
  var exports, tree, escapeHTML;
  exports = {};
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
  exports.tree = tree = function(list){
    var result, loop$;
    result = {
      _id: void 8,
      childs: {},
      level: 1
    };
    loop$ = function(top){
      var i$, ref$, len$, m, results$ = [];
      for (i$ = 0, len$ = (ref$ = list).length; i$ < len$; ++i$) {
        m = ref$[i$];
        if (m.parentId === top._id) {
          top.childs[m._id] = (m.childs = {}, m.level = top.level + 1, m);
          results$.push(loop$(m));
        }
      }
      return results$;
    };
    loop$(result);
    return result;
  };
  escapeHTML = function(text){
    return $("<div/>").text(text).html();
  };
  exports.linkify_entities = function(tweet){
    var index_map, result, last_i, i, ind, end, func;
    if (!tweet.entities) {
      return escapeHTML(tweet.text);
    }
    index_map = {};
    $.each(tweet.entities.hashtags, function(i, entry){
      return index_map[entry.indices[0]] = [
        entry.indices[1], function(text){
          return "<a target='_blank' href='http://twitter.com/search?q=" + escape("#" + entry.text) + "'>" + escapeHTML(text) + "</a>";
        }
      ];
    });
    $.each(tweet.entities.media, function(i, entry){
      return index_map[entry.indices[0]] = [
        entry.indices[1], function(text){
          return "<a target='_blank' href='" + escapeHTML(entry.url) + "'>" + escapeHTML(text) + "</a>";
        }
      ];
    });
    $.each(tweet.entities.urls, function(i, entry){
      return index_map[entry.indices[0]] = [
        entry.indices[1], function(text){
          return "<a target='_blank' href='" + escapeHTML(entry.url) + "'>" + escapeHTML(text) + "</a>";
        }
      ];
    });
    $.each(tweet.entities.user_mentions, function(i, entry){
      return index_map[entry.indices[0]] = [
        entry.indices[1], function(text){
          return "<a target='_blank' title='" + escapeHTML(entry.name) + "' href='http://twitter.com/" + escapeHTML(entry.screen_name) + "'>" + escapeHTML(text) + "</a>";
        }
      ];
    });
    result = "";
    last_i = 0;
    i = 0;
    i = 0;
    while (i < tweet.text.length) {
      ind = index_map[i];
      if (ind) {
        end = ind[0];
        func = ind[1];
        if (i > last_i) {
          result += escapeHTML(tweet.text.substring(last_i, i));
        }
        result += func(tweet.text.substring(i, end));
        i = end - 1;
        last_i = end;
      }
      ++i;
    }
    if (i > last_i) {
      result += escapeHTML(tweet.text.substring(last_i, i));
    }
    return result;
  };
  try {
    window.utils = exports;
  } catch (e$) {}
  return exports;
});
