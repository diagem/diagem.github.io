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
        var article, k, renderItem, v, value, _i, _len, _ref;
      
        __out.push('  <div class="content">\n    <a href="/" class="present-slider_arrow present-slider_arrow-prev"></a>\n    <a href="/sell/" class="present-slider_arrow present-slider_arrow-next"></a>\n    <div class="content__inner">\n      <div class="content__menu-bg"></div>\n      <img src="/static/i/menu_shadow.png" height="765" width="10" alt="" class="content__menu-shadow">\n      <div class="content__menu">\n        <ul class="menu">\n          ');
      
        article = this.article;
      
        __out.push('\n          ');
      
        renderItem = function(item, prevLink, indention) {
          return __capture(function() {
            var k, v, value, _i, _len, _ref;
            __out.push('\n            <li class="menu__list ');
            __out.push(indention);
            __out.push('">\n              <a href="');
            __out.push(__sanitize(prevLink + "/" + item._id));
            __out.push('/" class="btn-uni__link btn-uni__link_light-blue btn-uni__menu_light-blue ');
            if (item._id === article._id) {
              __out.push('btn-uni__link_active');
            }
            __out.push('">\n                <div class="btn-uni__link-body">\n                  <img src="/static/i/btn-uni__blue-light_angle_left_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-left">\n                  <img src="/static/i/btn-uni__blue-light_angle_left_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-left btn-uni__link-angle-left_active">\n                  <span class="btn-uni__link-text btn-uni__link-text_light-blue">');
            __out.push(item.title);
            __out.push('</span>\n                  <img src="/static/i/btn-uni__blue-light_angle_right_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-right">\n                  <img src="/static/i/btn-uni__blue-light_angle_right_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-right btn-uni__link-angle-right_active">\n                </div>\n              </a>\n            </li>\n            ');
            _ref = ((function() {
              var _ref, _results;
              _ref = item.childs;
              _results = [];
              for (k in _ref) {
                v = _ref[k];
                _results.push(v);
              }
              return _results;
            })()).sort(function(a, b) {
              return a.index - b.index;
            });
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              value = _ref[_i];
              __out.push('\n              ');
              __out.push(renderItem(value, prevLink + "/" + item._id, indention || "menu__list_indent"));
              __out.push('\n            ');
            }
            return __out.push('\n          ');
          });
        };
      
        __out.push('\n\n          ');
      
        _ref = ((function() {
          var _ref, _results;
          _ref = this.menu.childs.training.childs;
          _results = [];
          for (k in _ref) {
            v = _ref[k];
            _results.push(v);
          }
          return _results;
        }).call(this)).sort(function(a, b) {
          return a.index - b.index;
        });
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          value = _ref[_i];
          __out.push('\n            ');
          __out.push(renderItem(value, "/training"));
          __out.push('\n          ');
        }
      
        __out.push('\n          \n        </ul>\n        <p class="menu-desc">');
      
        __out.push(this.article.teaser);
      
        __out.push('</p>\n      </div>\n      <div class="content__body">\n        <div class="main-content">\n          <div class="main-content__inner">\n            ');
      
        __out.push(this.article.text);
      
        __out.push('\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
