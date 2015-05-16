'use strict'

var tape = require('tape')
var rv = require('../index')
var equal = require('../equal')
var frac = require('../scalar')
var round = require('../lib/round-rat')
var bn = require('../lib/num-to-bn');

tape('frac(1, 2)', function(t) {
  var a = frac(1, 2);
  var e = [bn(1), bn(2)];

  t.ok(equal(a, e), '1/2')
  t.end()
})

tape('frac(10, 1)', function(t) {
  var a = frac(10, 1);

  t.equal(round(a[0], a[1]), 10, '10')
  t.end()
})
