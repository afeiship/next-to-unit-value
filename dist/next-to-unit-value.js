(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var VALUE_UNIT = /([0-9.]+)([a-z]+)/;
  var DEFAULT_VALUE = [null, 0, 'px'];

  nx.toUnitValue = function (inString) {
    var str = String(inString);
    var value = str.match(VALUE_UNIT) || DEFAULT_VALUE;
    value[0] === null && (value[1] = str);
    return value;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toUnitValue;
  }

}());
