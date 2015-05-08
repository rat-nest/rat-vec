'use strict'

var tape = require('tape')
var roundRat = require('../lib/round-rat')
var BN = require('bn.js')

tape('round-rational', function(t) {

  t.equals(roundRat(new BN(1), new BN(1)), 1)
  t.equals(roundRat(new BN(1), new BN(2)), 0.5)
  t.equals(roundRat(new BN(0), new BN(1)), 0)
  t.equals(roundRat(new BN(-1), new BN(1)), -1)
  t.equals(roundRat(new BN(1), new BN(-1)), -1)
  t.equals(roundRat(new BN(-1), new BN(-1)), 1)
  t.equals(roundRat(new BN(1), new BN(-4)), -0.25)


  t.end()
})
