'use strict'

module.exports = float2rat

var BN = require('bn.js')
var db = require('double-bits')
var isBN = require('./lib/is-bn')
var num2bn = require('./lib/num-to-bn')
var rationalize = require('./lib/rationalize')

function float2rat(v) {
  var n = v.length
  var lcm = 0
  for(var i=0; i<n; ++i) {
    if(v[i] && typeof v[i] === 'number') {
      lcm = Math.min(lcm, db.exponent(v[i])-53)
    }
  }
  lcm = -lcm

  var r = new Array(n+1)
  var denom = (new BN(1)).shln(lcm)
  for(var i=0; i<n; ++i) {
    var x = v[i]
    if(isBN(x)) {
      r[i] = x
    } else if(typeof x === 'string') {
      r[i] = (new BN(x)).shln(lcm)
    } else if(Array.isArray(x)) {
      r[i] = x[0]
      denom = denom.mul(x[1])
    } else if(x === Math.floor(x)) {
      r[i] = num2bn(x).shln(lcm)
    } else {
      var y = x
      var shift = lcm
      while(y !== Math.floor(y)) {
        if(shift > 512) {
          y *= Math.pow(2, 512)
          shift -= 512
        } else {
          y *= Math.pow(2, shift)
          shift = 0
        }
      }
      r[i] = num2bn(y).shln(shift)
    }
  }
  r[n] = denom

  for(var i=0; i<n; ++i) {
    if(Array.isArray(v[i])) {
      var y = v[i][1]
      for(var j=0; j<n; ++j) {
        if(j !== i) {
          r[i] = r[i].mul(y)
        }
      }
    }
  }

  return rationalize(r)
}
