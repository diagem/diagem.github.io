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
        __out.push('\n<div class="content__menu">\n  <h2 class="window-menu__title-sub">Контакты:</h2>\n  <p class="menu-desc -contacts">\n    620014, Екатеринбург<br>\n    ул. Хохрякова, 74<br>\n    <br>\n    5 этаж бизнес-центра «Кристалл»<br>\n    Работаем: по будням <br>\n    с 10:00 до 18:00<br>\n    <br>\n    Тел.: +7 (343) 257-35-68<br>\n    Почта: <a href="mailto:diagem@mail.ru?subject=Письмо с сайта">diagem@mail.ru</a><br>\n    \n  </p>\n</div>\n<div class="content__body">\n  <div class="-map-wrapper" id="map"></div>\n  <!-- map -->\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
