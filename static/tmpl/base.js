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
        __out.push('<!DOCTYPE HTML>\n<html lang="ru">\n<head>\n  <meta charset="utf-8">\n  <!-- Mimic Internet Explorer edge -->\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <title>Diagem</title>\n  <meta name="description" content="">\n  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">\n  <meta name="format-detection" content="telephone=no">\n  <link rel="stylesheet" type="text/css" href="/static/css/style.min.css" media="all">\n  <!--[if lt IE 9]>\n  <link rel="stylesheet" type="text/css" media="all" href="/static/css/style_ie.min.css"/>\n  <![endif]-->\n  ');
      
        if (!!this.conf.debug) {
          __out.push('\n  <script type="text/javascript" charset="utf-8">\n    window.DEBUG = ');
          __out.push(__sanitize(this.conf.debug));
          __out.push(';\n  </script>\n  ');
        }
      
        __out.push('\n  <script data-main="/static/app/init" src="/static/libs/requirejs/require.js" type="text/javascript"></script>\n\n  <title>Диагем</title>\n  \n</head>\n<body>\n  ');
      
        __out.push(this.header);
      
        __out.push('\n  <span id="-view">');
      
        __out.push(this.page);
      
        __out.push('</span>\n  <div class="footer">\n    <div class="footer__inner">\n      <div class="footer-logo">\n        <img src="/static/i/logo_small.png" height="25" width="22" alt="" class="footer-logo__pic">\n        <span class="footer-logo__text">Диагем — независимая экспертиза, оценка драгоценных, ювелирных и других камней, бриллиантов и изделий из драгоценных металлов.</span>\n      </div><div class="footer-contact">\n        <a href="tel:+7 (343) 257-35-68" class="footer-contact__phone">+7 (343) 257-35-68</a>\n        <div class="footer-contact__address">Росссия, Екатеринбург, Хохрякова, 74</div>\n      </div><div class="footer-link">\n        <a href="#" class="footer-copy">&copy; ООО «Диагем»</a><br>\n        <a href="#" class="footer-made-in">made in <img src="/static/i/doit_logo.png" height="15" width="13" alt=""></a>\n      </div>\n    </div>\n  </div>\n\n</body>\n</html>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
