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
        var k, v, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      
        __out.push('<div class="content__menu">\n\n  <h1 class="window-menu__title">\n    ');
      
        __out.push(__sanitize((_ref = this.menu.childs) != null ? (_ref1 = _ref.articles) != null ? _ref1.title : void 0 : void 0));
      
        __out.push('\n  </h1>\n  \n  <ul class="window-article-menu">\n    ');
      
        _ref4 = ((_ref2 = this.menu.childs) != null ? (_ref3 = _ref2.articles) != null ? _ref3.childs : void 0 : void 0) || {};
        for (k in _ref4) {
          v = _ref4[k];
          __out.push('\n      <li class="window-article-menu__list">\n        <a href="/articles/');
          __out.push(__sanitize(v._id));
          __out.push('/');
          if (((_ref5 = this.query) != null ? _ref5.next : void 0) != null) {
            __out.push(__sanitize("?next=" + this.query.next));
          }
          __out.push('" class="window-article-menu__link ');
          if (((_ref6 = this.article) != null ? _ref6._id : void 0) === v._id) {
            __out.push('window-article-menu__link_active');
          }
          __out.push('"> <!--  -->\n          ');
          __out.push(__sanitize(v.title));
          __out.push('\n        </a>\n      </li>\n    ');
        }
      
        __out.push('\n  </ul>\n\n  <hr class="window-article-menu__sep">\n\n  <h2 class="window-menu__title-sub">\n    <!-- Справочная информация -->\n    ');
      
        __out.push(__sanitize((_ref7 = this.menu.childs) != null ? (_ref8 = _ref7.references) != null ? _ref8.title : void 0 : void 0));
      
        __out.push('\n  </h2>\n <!--  <ul class="window-article-menu window-article-menu_sub">\n    <li class="window-article-menu__list">\n      <a href="#" class="window-article-menu__link">Аквамарин</a>\n    </li>\n    <li class="window-article-menu__list">\n      <a href="#" class="window-article-menu__link">Аметрин</a>\n    </li>\n    <li class="window-article-menu__list">\n      <a href="#" class="window-article-menu__link">Алмаз</a>\n    </li>\n    <li class="window-article-menu__list">\n      <a href="#" class="window-article-menu__link">Бирюза</a>\n    </li>\n    <li class="window-article-menu__list">\n      <a href="#" class="window-article-menu__link">Визувиан</a>\n    </li>\n  </ul> -->\n\n</div>\n<div class="content__body">\n  <div class="main-content window-article-content">\n    <div class="main-content__inner">\n      ');
      
        __out.push((_ref9 = this.article) != null ? _ref9.text : void 0);
      
        __out.push('\n    </div>\n  </div>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
