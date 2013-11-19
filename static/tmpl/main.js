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
        __out.push('\n  <div class="present">\n    <div class="present-slider-block">\n      <a href="/sell/" class="present-slider_arrow present-slider_arrow-prev"></a>\n      <a href="/training/" class="present-slider_arrow present-slider_arrow-next"></a>\n      <div class="present-slider">\n        <img src="/static/i/director.png" height="646" width="480" alt="" class="present-slider__pic">\n        <h1 class="present__title">\n          Экспертиза и оценка драгоценных камней<br>\n          <b>Будьте уверены <br>при покупке <br>ювелирных украшений</b></h1>\n        <div class="person">\n          <div class="person__text">\n            <div class="person__name">Лариса Евгеньевна Серкова</div>\n            <div class="person__positon">эксперт-геммолог<br> GIA DD, CSG</div>\n            <div class="person__caption">Кандидат геолого-минералогических наук. Член Российского геммологического общества.</div>\n          </div>\n          <a href="/articles/" class="person__link">\n            <div class="person__link-body">\n              <img src="/static/i/angle_lil_left.png" height="40" width="9" alt="" class="person__link-angle-left">\n              <span class="person__link-text">\n                <i class="person__link-icon"></i>\n                Авторские статьи\n              </span>\n              <img src="/static/i/angle_lil_right.png" height="40" width="9" alt="" class="person__link-angle-right">\n            </div>\n            <img src="/static/i/btn_shadow.png" height="9" width="191" alt="" class="person__link-shadow">\n          </a>\n        </div>\n        <div class="form-twitter">\n          <a href="#" class="form-twitter__icon"></a>\n          <div class="form-twitter__context">\n            Загружается последний твит...\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="present-section-block">\n      <div class="present-section">\n        <div class="present-section-1">\n          <img src="/static/i/img_1.png" height="585" width="585" alt="" class="present-section__pic-circle">\n        </div>\n        <div class="present-section-2">\n          <h1 class="present-section__title">Полная достоверная информация о подлинности, качестве и цене</h1>\n          <img src="/static/i/line_shdw_1.png" height="11" width="585" alt="" class="present-section__sep">\n          <p class="present-section__text">\n            Наша задача предоставить вам исчерпывающую информацию о происхождении и качестве драгоценных камней, особенностях изготовления ювелирных изделий.\n          </p>\n          <p class="present-section__text">\n            Экспертное заключение нашей лаборатории позволяет не сомневаться при покупке драгоценностей и дает честным продавцам преимущество перед недобросовестными конкурентами.\n          </p>\n        </div>\n      </div>\n      <div class="present-section">\n        <div class="present-section-1">\n          <h1 class="present-section__title present-section__title_light_blue">Экспертное заключение. Оценка по GIA, ГОСТ, ТУ</h1>\n          <img src="/static/i/line_shdw_2.png" height="11" width="585" alt="" class="present-section__sep">\n          <ul class="present-section__list">\n            <li class="present-section__item">диагностика обработанных (ограненных) драгоценных и других ювелирных камней, отличие от синтетических аналогов и имитаций;</li>\n            <li class="present-section__item">оценка качественных характеристик ювелирных камней проводится на основании действующих в РФ нормативных документов (ГОСТ, ТУ).По желанию заказчика оценка может быть выполнена по системе GIA (Геммологического института Америки);</li>\n            <li class="present-section__item">определение драгоценных металлов и их сплавов в ювелирных изделия, установление соответствия пробы сплавов стандартам;</li>\n            <li class="present-section__item">информационное консультирование.</li>\n          </ul>\n        </div>\n        <div class="present-section-2">\n          <img src="/static/i/for_site.jpg" height="495" width="350" alt="" class="present-section__pic">\n        </div>\n      </div>\n      <div class="present-section">\n        <div class="present-section-1">\n          <img src="/static/i/img_2.png" height="585" width="585" alt="" class="present-section__pic-circle">\n        </div>\n        <div class="present-section-2">\n          <h1 class="present-section__title present-section__title_blue">Геммологическое оборудование мировых стандартов</h1>\n          <img src="/static/i/line_shdw_1.png" height="11" width="585" alt="" class="present-section__sep">\n          <p class="present-section__text">Диагностику бриллиантов, цветных камней мы проводим на геммологическом оборудовании фирмы System Eiсkhorst (Германия). В сложных случаях прибегаем к специальным минералогическим и петрографическим методам исследования. Применение эталонов цвета драгоценных камней сводит к минимуму субъективность оценки.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
  return exports;
});
