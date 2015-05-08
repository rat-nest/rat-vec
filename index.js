'use strict'

module.exports = float2rat

var BN = require('bn.js')
var db = require('double-bits')

function float2rat(v) {
  var n = v.length
  var lcm = 0
  for(var i=0; i<n; ++i) {
    if(v[i]) {
      lcm = Math.min(lcm, db.exponent(v[i]))
    }
  }
  var r = new Array(n+1)
  var f = Math.pow(2, -lcm)
  for(var i=0; i<n; ++i) {
    r[i] = new BN(v[i]*f)
  }
  r[n] = new BN(f)
  return r
}
