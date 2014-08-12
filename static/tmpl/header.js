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
        var _ref, _ref1;
      
        __out.push('<div class="header">\n  <div class="header__inner">\n    <a href="/" class="logo">\n      <img src="/static/i/logo.png" height="50" width="44" alt="" class="logo__pic">\n      <img src="/static/i/logo_text.png" height="28" width="132" alt="" class="logo-text">\n    </a>\n    <ul class="nav">\n      <li class="nav__list">\n        <a href="/" class="nav__link ');
      
        if (this.section === "inspection") {
          __out.push('nav__link_active');
        }
      
        __out.push('"> <!-- nav__link_active -->\n          <img src="/static/i/nav_angle_left.png" height="40" width="9" alt="" class="nav__angle-left">\n          <img src="/static/i/nav_angle_left_active.png" height="40" width="9" alt="" class="nav__angle-left_active">\n          <div class="nav__content">\n            <i class="nav__icon nav__icon-1"></i>\n            <span class="nav__text">Экспертиза и оценка</span>\n          </div>\n          <img src="/static/i/nav_angle_right.png" height="40" width="9" alt="" class="nav__angle-right">\n          <img src="/static/i/nav_angle_right_active.png" height="40" width="9" alt="" class="nav__angle-right_active">\n        </a>\n      </li><li class="nav__list">\n        <a href="/training/" class="nav__link ');
      
        if (this.section === "training") {
          __out.push('nav__link_active');
        }
      
        __out.push('"> <!-- nav__link_active -->\n          <img src="/static/i/nav_angle_left.png" height="40" width="9" alt="" class="nav__angle-left">\n          <img src="/static/i/nav_angle_left_active.png" height="40" width="9" alt="" class="nav__angle-left_active">\n          <div class="nav__content">\n            <i class="nav__icon nav__icon-2"></i>\n            <span class="nav__text">Обучение</span>\n          </div>\n          <img src="/static/i/nav_angle_right.png" height="40" width="9" alt="" class="nav__angle-right">\n          <img src="/static/i/nav_angle_right_active.png" height="40" width="9" alt="" class="nav__angle-right_active">\n        </a>\n      </li><li class="nav__list">\n        <a href="/sell/" class="nav__link ');
      
        if (this.section === "sell") {
          __out.push('nav__link_active');
        }
      
        __out.push('"> <!-- nav__link_active -->\n          <img src="/static/i/nav_angle_left.png" height="40" width="9" alt="" class="nav__angle-left">\n          <img src="/static/i/nav_angle_left_active.png" height="40" width="9" alt="" class="nav__angle-left_active">\n          <div class="nav__content">\n            <i class="nav__icon nav__icon-3"></i>\n            <span class="nav__text">Продажа камней</span>\n          </div>\n          <img src="/static/i/nav_angle_right.png" height="40" width="9" alt="" class="nav__angle-right">\n          <img src="/static/i/nav_angle_right_active.png" height="40" width="9" alt="" class="nav__angle-right_active">\n        </a>\n        ');
      
        if ((_ref = this.section + "1") === "catalog" || _ref === "sell") {
          __out.push(' remove "+1"\n          <a href="/sell/catalog/" class="nav__link nav__link_inner ');
          if ((_ref1 = this.section) === "catalog") {
            __out.push('nav__link_inner_active');
          }
          __out.push('">\n            <img src="/static/i/nav_angle_left_inverse_active.png" height="40" width="9" alt="" class="nav__angle-left_active">\n            <div class="nav__content">\n              <span class="nav__text">Каталог</span>\n            </div>\n            <img src="/static/i/nav_angle_right.png" height="40" width="9" alt="" class="nav__angle-right">\n            <img src="/static/i/nav_angle_right_active.png" height="40" width="9" alt="" class="nav__angle-right_active">\n          </a>\n        ');
        }
      
        __out.push(' \n      </li>\n    </ul>\n    <a target="_blank" href="https://www.facebook.com/profile.php?id=100005572535169" class="nav-more-link">\n      <span class="nav-more-link__text">&nbsp;</span>\n    </a>\n    <div class="contact">\n      <a href="tel:+7 (343) 257-35-68" class="contact__phone">+7 (343) 257-35-68</a>\n      <a href="/map/" class="contact__address"></a>\n    </div>\n  </div>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
