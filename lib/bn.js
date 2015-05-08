'use strict'

var BN = require('bn.js')
var db = require('double-bits')

module.exports = makeBN

function makeBN(x) {
  var e = db.exponent(x)
  x *= Math.pow(2, 52-e)
  return (new BN(x)).shln(e-52)
}
