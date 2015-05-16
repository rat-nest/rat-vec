'use strict'

module.exports = float2rat

var BN = require('bn.js')
var db = require('double-bits')
var num2bn = require('./lib/num-to-bn')
var shiftFloat = require('./lib/shift-float')
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
  console.log(lcm)

  var r = new Array(n+1)
  var denom = (new BN(1)).shln(lcm)
  for(var i=0; i<n; ++i) {
    var x = v[i]
    if(typeof x === 'string') {
      r[i] = (new BN(x)).shln(lcm)
    } else if(Array.isArray(x)) {
      r[i] = x[0]
      denom = denom.mul(x[1])
    } else if(x === Math.floor(x)) {
      r[i] = num2bn(x).shln(lcm)
    } else {
      r[i] = num2bn(shiftFloat(x, lcm))
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
