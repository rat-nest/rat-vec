'use strict'

var tape = require('tape')
var shiftFloat = require('../lib/shift-float')

tape('shift float easy cases', function(t) {
  t.equals(shiftFloat(1, -1), 0.5)
  t.equals(shiftFloat(1, 1), 2)
  t.equals(shiftFloat(0, 1), 0)
  t.equals(shiftFloat(1, 0), 1)
  t.equals(shiftFloat(1, 1023), Math.pow(2, 1023))

  t.end()
})

tape('shift denormal', function(t) {
  t.equals(shiftFloat(Math.pow(2,-1070), 2000), Math.pow(2, 930))
  t.end()
})
