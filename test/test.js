var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-to-unit-value');

describe('next/toUnitValue', function () {

  it('nx.toUnitValue 1.23rem/1.23px/1.23', function () {
    var str1 = '1.23rem';
    var str2 = '1.23px';
    var str3 = '1.23';
    var str4 = 1.23;

    var rt1 = nx.toUnitValue(str1);
    var rt2 = nx.toUnitValue(str2);
    var rt3 = nx.toUnitValue(str3);
    var rt4 = nx.toUnitValue(str4);

    // value - unit:
    assert.equal(rt1[1], '1.23');
    assert.equal(rt1[2], 'rem');

    // value - unit:
    assert.equal(rt2[1], '1.23');
    assert.equal(rt2[2], 'px');


    // value - unit:
    assert.equal(rt3[1], '1.23');
    assert.equal(rt3[2], 'px');

    // value - unit:
    assert.equal(rt4[1], '1.23');
    assert.equal(rt4[2], 'px');
  });

});
