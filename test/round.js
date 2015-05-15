'use strict'

var tape = require('tape')
var roundRat = require('../lib/round-rat')
var BN = require('bn.js')

tape('round-rational', function(t) {

  t.equals(roundRat(new BN(1), new BN(3)), 1.0/3.0)
  t.equals(roundRat(new BN(1), new BN(10)), 0.1)
  t.equals(roundRat(new BN(1), new BN(1)), 1)
  t.equals(roundRat(new BN(1), new BN(2)), 0.5)
  t.equals(roundRat(new BN(0), new BN(1)), 0)
  t.equals(roundRat(new BN(-1), new BN(1)), -1)
  t.equals(roundRat(new BN(1), new BN(-1)), -1)
  t.equals(roundRat(new BN(-1), new BN(-1)), 1)
  t.equals(roundRat(new BN(1), new BN(-4)), -0.25)
  t.equals(roundRat(new BN(-25), new BN(10)), -2.5)
  t.equals(roundRat(new BN(25), new BN(10)), 2.5)

  var pattern = (new BN(1)).add((new BN(1)).shln(32)).add((new BN(1)).shln(52))

  for(var i=0; i<1075+52; ++i) {
    var numer = new BN(1)
    var denom = (new BN(1)).shln(i)
    t.equals(roundRat(numer, denom), Math.pow(2,-i), 'n=2^-' + i)

    var xnumer = numer.add((new BN(1)).shln(52))
    t.equals(roundRat(xnumer, denom), Math.pow(2,-i) + Math.pow(2,52-i), 'n=2^-' + i + '+2^'+(52-i))

    var ynumer = numer.add((new BN(1)).shln(26))
    t.equals(roundRat(ynumer, denom), Math.pow(2, -i) + Math.pow(2, 26-i), 'n=2^-' + i + '+2^'+(26-i))
    t.equals(roundRat(pattern, denom), Math.pow(2, -i) + Math.pow(2, 32-i) + Math.pow(2,52-i))
  }

  for(var i=0; i<1024; ++i) {
    var numer = (new BN(1)).shln(i)
    var denom = (new BN(1))
    t.equals(roundRat(numer, denom), Math.pow(2, i))
  }

  t.end()
})
