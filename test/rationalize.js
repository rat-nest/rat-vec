'use strict'

var tape = require('tape')
var rv = require('../index')
var equal = require('../equal')
var rationalize = require('../rationalize')

tape('reduces', function(t) {
  var a = rv([8/16, 16/128])
  var r = rationalize(a)
  var e = rv([1/2, 1/8])

  t.ok(equal(e, r), 'reduces to (4/8, 1/8)')
  t.end()
})

tape('reduces (-, +)', function(t) {
  var a = rv([-8/16, 16/128])
  var r = rationalize(a)
  var e = rv([-1/2, 1/8])

  t.ok(equal(e, r), 'reduces to (-4/8, 1/8)')
  t.end()
})

tape('reduces (+, -)', function(t) {
  var a = rv([8/16, -16/128])
  var r = rationalize(a)
  var e = rv([1/2, -1/8])

  t.ok(equal(e, r), 'reduces to (4/8, -1/8)')
  t.end()
})

tape('reduces (-, -)', function(t) {
  var a = rv([-8/16, -16/128])
  var r = rationalize(a)
  var e = rv([-1/2, -1/8])

  t.ok(equal(e, r), 'reduces to (-4/8, -1/8)')
  t.end()
})

tape('reduces (0, +)', function(t) {
  var a = rv([0, 16/128])
  var r = rationalize(a)
  var e = rv([0, 1/8])

  t.ok(equal(e, r), 'reduces to (0, 1/8)')
  t.end()
})
