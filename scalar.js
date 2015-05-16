'use strict'

var BN = require('bn.js')
var num2bn = require('./lib/num-to-bn')
var rationalize = require('./lib/rationalize')

module.exports = makeRational

function makeRational(numer, denom) {
  if(Array.isArray(numer)) {
    if(Array.isArray(denom)) {
      return rationalize([numer[0].mul(denom[1]), numer[1].mul(denom[0])])
    }
    return numer
  }
  var shift = 0
  var a, b
  if(typeof numer === 'string') {
    a = new BN(numer)
  } else if(numer === 0) {
    return [new BN(0), new BN(1)]
  } else if(numer === Math.floor(numer)) {
    a = num2bn(numer)
  } else {
    while(numer !== Math.floor(numer)) {
      numer = numer * Math.pow(2, 256)
      shift -= 256
    }
    a = num2bn(numer)
  }
  if(typeof denom === 'string') {
    b = new BN(denom)
  } else if(!denom) {
    b = num2bn(1)
  } else if(denom === Math.floor(denom)) {
    b = num2bn(denom)
  } else {
    while(denom !== Math.floor(denom)) {
      denom = denom * Math.pow(2, 256)
      shift += 256
    }
    b = num2bn(denom)
  }
  if(shift > 0) {
    a = a.shln(shift)
  } else if(shift < 0) {
    b = b.shln(-shift)
  }
  return rationalize([a, b])
}
