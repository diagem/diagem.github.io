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
        __out.push('  <div class="content">\n    <span class="present-slider_arrow present-slider_arrow-prev"></span>\n    <span class="present-slider_arrow present-slider_arrow-next"></span>\n    <div class="content__inner">\n      <div class="content__menu-bg"></div>\n      <img src="/static/i/menu_shadow.png" height="765" width="10" alt="" class="content__menu-shadow">\n      <div class="content__menu">\n        <ul class="menu">\n          <li class="menu__list">\n            <a href="#" class="btn-uni__link btn-uni__link_light-blue btn-uni__menu_light-blue">\n              <div class="btn-uni__link-body">\n                <img src="/static/i/btn-uni__blue-light_angle_left_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-left">\n                <img src="/static/i/btn-uni__blue-light_angle_left_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-left btn-uni__link-angle-left_active">\n                <span class="btn-uni__link-text btn-uni__link-text_light-blue">Индивидуальное</span>\n                <img src="/static/i/btn-uni__blue-light_angle_right_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-right">\n                <img src="/static/i/btn-uni__blue-light_angle_right_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-right btn-uni__link-angle-right_active">\n              </div>\n            </a>\n          </li>\n          <li class="menu__list">\n            <a href="#" class="btn-uni__link btn-uni__link_light-blue btn-uni__menu_light-blue">\n              <div class="btn-uni__link-body">\n                <img src="/static/i/btn-uni__blue-light_angle_left_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-left">\n                <img src="/static/i/btn-uni__blue-light_angle_left_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-left btn-uni__link-angle-left_active">\n                <span class="btn-uni__link-text btn-uni__link-text_light-blue">Корпоративное</span>\n                <img src="/static/i/btn-uni__blue-light_angle_right_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-right">\n                <img src="/static/i/btn-uni__blue-light_angle_right_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-right btn-uni__link-angle-right_active">\n              </div>\n            </a>\n          </li>\n          <li class="menu__list">\n            <a href="#" class="btn-uni__link btn-uni__link_light-blue btn-uni__menu_light-blue btn-uni__link_active">\n              <div class="btn-uni__link-body">\n                <img src="/static/i/btn-uni__blue-light_angle_left_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-left">\n                <img src="/static/i/btn-uni__blue-light_angle_left_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-left btn-uni__link-angle-left_active">\n                <span class="btn-uni__link-text btn-uni__link-text_light-blue">Тренинг-семинары</span>\n                <img src="/static/i/btn-uni__blue-light_angle_right_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-right">\n                <img src="/static/i/btn-uni__blue-light_angle_right_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-right btn-uni__link-angle-right_active">\n              </div>\n            </a>\n          </li>\n          <li class="menu__list">\n            <a href="#" class="btn-uni__link btn-uni__link_light-blue btn-uni__menu_light-blue">\n              <div class="btn-uni__link-body">\n                <img src="/static/i/btn-uni__blue-light_angle_left_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-left">\n                <img src="/static/i/btn-uni__blue-light_angle_left_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-left btn-uni__link-angle-left_active">\n                <span class="btn-uni__link-text btn-uni__link-text_light-blue">Информационное<br> консультирование</span>\n                <img src="/static/i/btn-uni__blue-light_angle_right_transp.png" height="40" width="9" alt="" class="btn-uni__link-angle-right">\n                <img src="/static/i/btn-uni__blue-light_angle_right_active.png" height="40" width="9" alt="" class="btn-uni__link-angle-right btn-uni__link-angle-right_active">\n              </div>\n            </a>\n          </li>\n        </ul>\n        <p class="menu-desc">Для менеджеров по закупке ювелирных камней, сортировщи- ков, оценщиков, при- емщиков ювелирных изделий в комиссион- ных магазинах и лом- бардах.</p>\n      </div>\n      <div class="content__body">\n        <div class="main-content">\n          <div class="main-content__inner">\n            <h1>Тренинг-семинары по программе «Драгоценные металлы <br> и драгоценные камни»:</h1>\n            <ul>\n              <li>драгоценные металлы и сплавы драгоценных металлов: состав, свойства, особенности применения; понятие «ювелирные изделия»; законодательная и нормативная документация в области ювелирных изделий из ДМ и ДК;</li>\n              <li>правила торговли ювелирными изделиями из ДМ и ДК, клеймение ювелирных изделий: понятия «пробирное клеймо», «именник», состав клейма и состав именника, правила клеймения, установленные в РФ пробы сплавов драгоценных металлов;</li>\n              <li>драгоценные, ювелирные, поделочные камни, классификация, номенклатура, законодательные и нормативные документы по ДК;</li>\n              <li>бриллианты, свойства, обработка, синтетические алмазы и другие имитации; методы облагораживания; сортировка по ТУ 117-4.2099-2002;</li>\n              <li>оценка бриллиантов по системе GIA; соотношение российской и зарубежных систем оценки бриллиантов;</li>\n              <li>изумруды; состав, другие разновидности минералов группы берилла; свойства; синтетические аналоги; облагораживание; регионы добычи и переработки изумрудов; сортировка изумрудов по ТУ 95 335 – 88;</li>\n              <li>рубины и сапфиры; цветные сапфиры; свойства; регионы добычи и переработки; синтетические аналоги; облагораживание; принятая в РФ система сортировки рубинов и сапфиров;</li>\n              <li>популярные ювелирные камни: топаз, хризолит, гранаты, аметист, цитрин, аметрин; свойства; облагораживание; регионы добычи; способы обработки; особенности продаж;</li>\n              <li>жемчуг; условия образования; классификация; свойства; регионы добычи; качественные характеристики.</li>\n            </ul>\n            <ul class="content-more-info">\n              <li class="content-more-info__list">\n                <i class="content-more-info__icon content-more-info__icon_book"></i>\n                Выдается <br> методическое <br> пособие\n              </li>\n              <li class="content-more-info__list">\n                <i class="content-more-info__icon content-more-info__icon_time"></i>\n                Продолжительность: <b>30ч</b>\n              </li>\n              <li class="content-more-info__list">\n                <i class="content-more-info__icon content-more-info__icon_count"></i>\n                Слушатели: <b>2</b>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
