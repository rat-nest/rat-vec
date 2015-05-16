'use strict'

var tape = require('tape')
var rv = require('../index')
var equal = require('../equal')
var frac = require('../scalar')
var round = require('../lib/round-rat')
var bn = require('../lib/num-to-bn');

tape('simple constructor', function(t) {
  var x = frac(1)
  t.equal(x[0].toString(), '1')
  t.equal(x[1].toString(), '1')

  var y = frac(0)
  t.equal(y[0].toString(), '0')
  t.equal(y[1].toString(), '1')

  y = frac(0, 1000)
  t.equal(y[0].toString(), '0')
  t.equal(y[1].toString(), '1')

  t.end()
})

tape('scalar(1, 2)', function(t) {
  var a = frac(1, 2)
  var e = [bn(1), bn(2)]

  t.ok(equal(a, e), '1/2')
  t.end()
})

tape('scalar(10, 1)', function(t) {
  var a = frac(10, 1);

  t.equal(round(a[0], a[1]), 10, '10')
  t.end()
})


tape('scalar with strings', function(t) {
  var lotsOfZeros = '0'
  for(var i=0; i<12; ++i) {
    lotsOfZeros += lotsOfZeros
  }

  var a = frac(
    '1' + lotsOfZeros,
    '5' + lotsOfZeros)

  t.equal(a[0].toString(), '1')
  t.equal(a[1].toString(), '5')

  t.end()
})

tape('scalar identity constructor', function(t) {
  var a = [ bn(2), bn(3) ]
  var b = frac(a)

  t.equal(b[0].toString(), a[0].toString())
  t.equal(b[1].toString(), a[1].toString())

  t.end()
})


tape('denormals', function(t) {

  var a = frac(Math.pow(2, -1073), Math.pow(2, -1074))

  t.equal(a[0].toString(), '2')
  t.equal(a[1].toString(), '1')

  t.end()
})
