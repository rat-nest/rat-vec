'use strict'

var BN = require('bn.js')
var tape = require('tape')
var equal = require('../equal')

tape('equality test', function(t) {


  function makeVec(v) {
    return v.map(function(x) {
      return new BN(x)
    })
  }


  function eq(a, b) {
    return equal(makeVec(a), makeVec(b))
  }

  t.ok(eq([1,3], [2,6]))
  t.ok(eq([1,1], [1,1]))
  t.ok(!eq([0,1], [1,1]))

  t.end()
})
