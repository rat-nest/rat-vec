'use strict'

module.exports = float2rat

var BN = require('bn.js')
var db = require('double-bits')

function float2rat(v) {
  var n = v.length
  var lcm = Infinity
  for(var i=0; i<n; ++i) {
    if(v[i]) {
      lcm = Math.min(lcm, db.exponent(v[i]))
    }
  }
  if(lcm >= Infinity) {
    lcm = 1
  }
  var r = new Array(n+1)
  for(var i=0; i<n; ++i) {
    r[i] = new BN(v[i]/lcm)
  }
  r[n] = new BN(lcm)
  return r
}
