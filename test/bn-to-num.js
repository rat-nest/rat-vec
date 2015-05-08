var test = require('tape');
var bn = require('bn.js')
var toFloat = require('../lib/bn-to-num');

test('single word', function(t) {
  t.equal(toFloat(new bn(-1234567)), -1234567, 'negative');
  t.equal(toFloat(new bn(1234567)), 1234567, 'positive');
  t.end();
})
