'use strict'

var tape = require('tape')
var rv = require('../index')
var equal = require('../equal')
var mul = require('../mul')
var bn = require('../lib/num-to-bn');

tape('multiply wholes', function(t) {
  var a = rv([5]);
  var b = rv([3]);
  var e = rv([15]);

  var r = mul(a, b);

  t.ok(equal(r, e), '3 * 5 is 15')
  t.end()
})

tape('multiply fraction (positive)', function(t) {
  var a = [bn(1), bn(2)];
  var b = rv([3]);
  var e = [bn(15), bn(10)];

  var r = mul(a, b);

  t.ok(equal(r, e), '3 * 1/2 is 15/10')
  t.end()
})

tape('multiply fraction (negative)', function(t) {
  var a = [bn(1), bn(2)];
  var b = rv([-3]);
  var e = [bn(-15), bn(10)];

  var r = mul(a, b);

  t.ok(equal(r, e), '-3 * 1/2 is -15/10')
  t.end()
})

