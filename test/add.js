'use strict'

var tape = require('tape')
var rv = require('../index')
var equal = require('../equal')
var add = require('../add')

tape('check addition', function(t) {

  t.ok(equal(
    add(
      rv([1,2]),
      rv([1,3])),
    rv([2,5])))

  t.end()
})
