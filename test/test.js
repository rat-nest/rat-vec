'use strict'

var tape = require('tape')
var rv = require('../index')
var round = require('../to-float')

tape('exact rational', function(t) {

  function verify(v) {
    t.same(round(rv(v)), v)
  }
  verify([1])
  verify([0.5])
  verify([2])
  verify([2, 4])

  t.end()
})
