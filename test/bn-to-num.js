var test = require('tape');
var bn = require('bn.js')
var toFloat = require('../lib/bn-to-num');

test('single word', function(t) {
  t.equal(toFloat(new bn(-1234567)), -1234567, 'negative');
  t.equal(toFloat(new bn(1234567)), 1234567, 'positive');
  t.end();
});

test('two words', function(t) {
  var v = 12345671234567;
  t.equal(toFloat(new bn(v)), v, 'positive');
  t.equal(toFloat(new bn(-v)), -v, 'negative');
  t.end();
});

test('more words (base 10)', function(t) {
  var n = new bn('1234567123456712345671234567', 10);
  var v = toFloat(n);
  t.equal(v, +n.toString(), 'positive')
  t.end();
});

test('more words (base 16)', function(t) {
  var n = new bn('1234567123456712345671234567', 16);
  var v = toFloat(n);
  t.equal(v, +n.toString(), 'positive')
  t.end();
});
