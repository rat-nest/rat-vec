'use strict'

var BN = require('bn.js')
var num2bn = require('./lib/num-to-bn')
var rationalize = require('./rationalize')

module.exports = makeRational

function makeRational(numer, denom) {
  var shift = 0
  var a, b
  if(typeof numer === 'string') {
    a = new BN(numer)
  } else if(numer === 0) {
    return [new BN(0), new BN(1)]
  } else if(numer === Math.floor(numer)) {
    a = num2bn(numer)
  } else {
    var x = numer * Math.pow(540)
    a = num2bn(x * Math.pow(540))
    shift -= 1080
  }
  if(typeof denom === 'string') {
    b = new BN(denom)
  } else if(!denom) {
    b = num2bn(1)
  } else if(denom === Math.floor(denom)) {
    b = num2bn(denom)
  } else {
    var x = denom * Math.pow(540)
    b = num2bn(x * Math.pow(540))
    shift += 1080
  }
  if(shift > 0) {
    a = a.shln(shift)
  } else if(shift < 0) {
    b = b.shln(-shift)
  }
  return rationalize([a, b])
}
