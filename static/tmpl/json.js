({define:typeof define!='undefined'?define:function(deps, factory){module.exports = factory();}}).define([], function(){
  var exports = function(__obj) {
    if (!__obj) __obj = {};
    var __out = [], __capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return __safe(result);
    }, __sanitize = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else if (typeof value !== 'undefined' && value != null) {
        return __escape(value);
      } else {
        return '';
      }
    }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
    __safe = __obj.safe = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else {
        if (!(typeof value !== 'undefined' && value != null)) value = '';
        var result = new String(value);
        result.ecoSafe = true;
        return result;
      }
    };
    if (!__escape) {
      __escape = __obj.escape = function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      };
    }
    (function() {
      (function() {
        var i, _i, _len, _ref;
      
        __out.push('<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title></title>\n  ');
      
        _ref = this.scripts;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          __out.push('\n    <script src="');
          __out.push(__sanitize(i));
          __out.push('" type="text/json"></script>\n  ');
        }
      
        __out.push('\n</head>\n<body>\n  \n</body>\n</html>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
