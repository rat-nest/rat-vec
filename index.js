'use strict'

module.exports = float2rat

var bn = require('./lib/bn')
var db = require('double-bits')

function float2rat(v) {
  var n = v.length
  var lcm = -53
  for(var i=0; i<n; ++i) {
    if(v[i]) {
      lcm = Math.min(lcm, db.exponent(v[i]) - 53)
    }
  }
  var r = new Array(n+1)
  var f = Math.pow(2, -lcm)
  for(var i=0; i<n; ++i) {
    r[i] = bn(v[i]*f)
  }
  r[n] = bn(f)
  return r
}
